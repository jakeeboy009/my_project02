// Web Audio API Acoustic Piano Synthesizer

const NOTE_FREQUENCIES: Record<string, number> = {
  'C3': 130.81, 'C#3': 138.59, 'Db3': 138.59, 'D3': 146.83, 'D#3': 155.56, 'Eb3': 155.56,
  'E3': 164.81, 'F3': 174.61, 'F#3': 185.00, 'Gb3': 185.00, 'G3': 196.00, 'G#3': 207.65,
  'Ab3': 207.65, 'A3': 220.00, 'A#3': 233.08, 'Bb3': 233.08, 'B3': 246.94,
  'C4': 261.63, 'C#4': 277.18, 'Db4': 277.18, 'D4': 293.66, 'D#4': 311.13, 'Eb4': 311.13,
  'E4': 329.63, 'F4': 349.23, 'F#4': 369.99, 'Gb4': 369.99, 'G4': 392.00, 'G#4': 415.30,
  'Ab4': 415.30, 'A4': 440.00, 'A#4': 466.16, 'Bb4': 466.16, 'B4': 493.88,
  'C5': 523.25, 'C#5': 554.37, 'Db5': 554.37, 'D5': 587.33, 'D#5': 622.25, 'Eb5': 622.25,
  'E5': 659.25, 'F5': 698.46, 'F#5': 739.99, 'Gb5': 739.99, 'G5': 783.99, 'G#5': 830.61,
  'Ab5': 830.61, 'A5': 880.00, 'A#5': 932.33, 'Bb5': 932.33, 'B5': 987.77,
  'C6': 1046.50, 'C#6': 1108.73, 'Db6': 1108.73, 'D6': 1174.66, 'D#6': 1244.51, 'Eb6': 1244.51,
  'E6': 1318.51, 'F6': 1396.91, 'F#6': 1479.98, 'Gb6': 1479.98, 'G6': 1567.98, 'A6': 1760.00,
  'B6': 1975.53, 'REST': 0
};

class PianoAudioEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private melodyTimeouts: number[] = [];
  private isPlayingMelody: boolean = false;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.7, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setVolume(vol: number) {
    if (this.masterGain && this.ctx) {
      const clamped = Math.max(0, Math.min(1, vol));
      this.masterGain.gain.setValueAtTime(clamped, this.ctx.currentTime);
    }
  }

  public playNote(noteName: string, durationSec = 1.2, velocity = 0.8) {
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;
      if (noteName === 'REST' || !NOTE_FREQUENCIES[noteName]) return;

      const freq = NOTE_FREQUENCIES[noteName];
      const now = this.ctx.currentTime;

      // Realistic Piano Model: 3 harmonic layers + filter envelope
      // Fundamental layer (warm body)
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(freq, now);

      // Second harmonic (acoustic chime)
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(freq * 2, now);

      // Third harmonic (felt hammer brightness)
      const osc3 = this.ctx.createOscillator();
      const gain3 = this.ctx.createGain();
      osc3.type = 'sine';
      osc3.frequency.setValueAtTime(freq * 3, now);

      // Low pass filter to simulate piano hammer attack brightness quickly mellowing
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(Math.min(freq * 8, 8000), now);
      filter.frequency.exponentialRampToValueAtTime(Math.max(freq * 1.5, 300), now + durationSec * 0.7);

      const noteMasterGain = this.ctx.createGain();
      const peakAmp = velocity * 0.45;

      // Attack (instant piano hammer strike)
      noteMasterGain.gain.setValueAtTime(0.0001, now);
      noteMasterGain.gain.linearRampToValueAtTime(peakAmp, now + 0.005);
      // Natural exponential piano decay
      noteMasterGain.gain.exponentialRampToValueAtTime(peakAmp * 0.4, now + 0.15);
      noteMasterGain.gain.exponentialRampToValueAtTime(0.0001, now + durationSec);

      // Blend harmonics
      gain1.gain.setValueAtTime(0.65, now);
      gain2.gain.setValueAtTime(0.25, now);
      gain3.gain.setValueAtTime(0.1, now);

      osc1.connect(gain1);
      osc2.connect(gain2);
      osc3.connect(gain3);

      gain1.connect(filter);
      gain2.connect(filter);
      gain3.connect(filter);

      filter.connect(noteMasterGain);
      noteMasterGain.connect(this.masterGain);

      osc1.start(now);
      osc2.start(now);
      osc3.start(now);

      const stopTime = now + durationSec + 0.05;
      osc1.stop(stopTime);
      osc2.stop(stopTime);
      osc3.stop(stopTime);
    } catch (e) {
      console.warn('Audio playback not ready:', e);
    }
  }

  public playMelody(
    notes: Array<{ note: string; duration: number }>,
    bpm = 90,
    onNoteTrigger?: (note: string) => void,
    onComplete?: () => void
  ) {
    this.stopMelody();
    this.initContext();
    this.isPlayingMelody = true;

    // 1 beat in seconds = 60 / bpm
    const beatDuration = 60 / bpm;
    let accumulatedTime = 0;

    notes.forEach((item, index) => {
      const delayMs = accumulatedTime * 1000;
      const notePlayDuration = item.duration * beatDuration * 1.1;

      const timeoutId = window.setTimeout(() => {
        if (!this.isPlayingMelody) return;
        if (item.note !== 'REST') {
          this.playNote(item.note, notePlayDuration, 0.85);
          if (onNoteTrigger) onNoteTrigger(item.note);
        }
      }, delayMs);

      this.melodyTimeouts.push(timeoutId);
      accumulatedTime += item.duration * beatDuration;

      // When last note completes
      if (index === notes.length - 1) {
        const endTimeoutId = window.setTimeout(() => {
          this.isPlayingMelody = false;
          if (onComplete) onComplete();
        }, (accumulatedTime + notePlayDuration) * 1000);
        this.melodyTimeouts.push(endTimeoutId);
      }
    });
  }

  public stopMelody() {
    this.isPlayingMelody = false;
    this.melodyTimeouts.forEach((id) => clearTimeout(id));
    this.melodyTimeouts = [];
  }

  public getIsPlaying(): boolean {
    return this.isPlayingMelody;
  }
}

export const pianoSynth = new PianoAudioEngine();
