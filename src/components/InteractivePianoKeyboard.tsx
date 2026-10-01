import { useState, useEffect } from 'react';
import { pianoSynth } from '../utils/audioSynthesizer';
import { Volume2, Music, Sparkles } from 'lucide-react';

interface KeyConfig {
  note: string;
  isBlack: boolean;
  labelKo: string;
  keyboardShortcuts?: string;
}

const PIANO_KEYS: KeyConfig[] = [
  { note: 'C4', isBlack: false, labelKo: '도', keyboardShortcuts: 'A' },
  { note: 'C#4', isBlack: true, labelKo: '도#', keyboardShortcuts: 'W' },
  { note: 'D4', isBlack: false, labelKo: '레', keyboardShortcuts: 'S' },
  { note: 'D#4', isBlack: true, labelKo: '레#', keyboardShortcuts: 'E' },
  { note: 'E4', isBlack: false, labelKo: '미', keyboardShortcuts: 'D' },
  { note: 'F4', isBlack: false, labelKo: '파', keyboardShortcuts: 'F' },
  { note: 'F#4', isBlack: true, labelKo: '파#', keyboardShortcuts: 'T' },
  { note: 'G4', isBlack: false, labelKo: '솔', keyboardShortcuts: 'G' },
  { note: 'G#4', isBlack: true, labelKo: '솔#', keyboardShortcuts: 'Y' },
  { note: 'A4', isBlack: false, labelKo: '라', keyboardShortcuts: 'H' },
  { note: 'A#4', isBlack: true, labelKo: '라#', keyboardShortcuts: 'U' },
  { note: 'B4', isBlack: false, labelKo: '시', keyboardShortcuts: 'J' },
  { note: 'C5', isBlack: false, labelKo: '도', keyboardShortcuts: 'K' },
  { note: 'C#5', isBlack: true, labelKo: '도#', keyboardShortcuts: 'O' },
  { note: 'D5', isBlack: false, labelKo: '레', keyboardShortcuts: 'L' },
  { note: 'D#5', isBlack: true, labelKo: '레#', keyboardShortcuts: 'P' },
  { note: 'E5', isBlack: false, labelKo: '미', keyboardShortcuts: ';' },
  { note: 'F5', isBlack: false, labelKo: '파' },
  { note: 'F#5', isBlack: true, labelKo: '파#' },
  { note: 'G5', isBlack: false, labelKo: '솔' },
  { note: 'G#5', isBlack: true, labelKo: '솔#' },
  { note: 'A5', isBlack: false, labelKo: '라' },
  { note: 'A#5', isBlack: true, labelKo: '라#' },
  { note: 'B5', isBlack: false, labelKo: '시' },
  { note: 'C6', isBlack: false, labelKo: '높은도' }
];

interface InteractivePianoKeyboardProps {
  activeNote?: string | null;
  onKeyPlay?: (note: string) => void;
  compact?: boolean;
}

export function InteractivePianoKeyboard({
  activeNote,
  onKeyPlay,
  compact = false
}: InteractivePianoKeyboardProps) {
  const [internalActiveNote, setInternalActiveNote] = useState<string | null>(null);
  const [showLabels, setShowLabels] = useState<boolean>(true);
  const [volume, setVolume] = useState<number>(0.8);

  const currentLitNote = activeNote || internalActiveNote;

  const handleNoteTrigger = (note: string) => {
    pianoSynth.playNote(note, 1.2, 0.85);
    setInternalActiveNote(note);
    if (onKeyPlay) onKeyPlay(note);
    setTimeout(() => {
      setInternalActiveNote((prev) => (prev === note ? null : prev));
    }, 300);
  };

  const handleVolumeChange = (newVol: number) => {
    setVolume(newVol);
    pianoSynth.setVolume(newVol);
  };

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['input', 'textarea', 'select'].includes((e.target as HTMLElement).tagName.toLowerCase())) {
        return;
      }
      const match = PIANO_KEYS.find(
        (k) => k.keyboardShortcuts && k.keyboardShortcuts.toLowerCase() === e.key.toLowerCase()
      );
      if (match) {
        handleNoteTrigger(match.note);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`w-full bg-[#1C1917] rounded-sm p-4 text-stone-300 shadow-xl border border-stone-800 ${compact ? 'max-w-2xl' : ''}`}>
      {/* Keyboard Controls Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-3 border-b border-stone-800 text-xs">
        <div className="flex items-center gap-2">
          <Music className="w-4 h-4 text-amber-400" />
          <span className="font-serif-kr text-stone-200 tracking-wide font-medium">
            어쿠스틱 피아노 신디사이저 (Acoustic Grand Engine)
          </span>
          {currentLitNote && (
            <span className="text-amber-300 font-mono font-medium ml-2">
              · {currentLitNote} 연주 중
            </span>
          )}
        </div>

        <div className="flex items-center gap-5">
          {/* Label toggle */}
          <button
            onClick={() => setShowLabels(!showLabels)}
            className="text-stone-400 hover:text-stone-200 transition-colors cursor-pointer text-xs"
          >
            {showLabels ? '음이름 숨기기' : '음이름 표시'}
          </button>

          {/* Volume slider */}
          <div className="flex items-center gap-2">
            <Volume2 className="w-3.5 h-3.5 text-stone-400" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
              aria-label="볼륨 조절"
              className="w-16 h-1 bg-stone-700 rounded-sm appearance-none accent-amber-500 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Piano Keys Board */}
      <div className="relative overflow-x-auto pb-2 scrollbar-thin">
        <div className="relative flex justify-center min-w-[620px] select-none py-1">
          {PIANO_KEYS.map((k) => {
            const isLit = currentLitNote === k.note;

            if (!k.isBlack) {
              return (
                <button
                  key={k.note}
                  onClick={() => handleNoteTrigger(k.note)}
                  className={`relative w-9 md:w-11 h-44 md:h-52 bg-gradient-to-b from-[#FAF8F5] via-[#F4EFE6] to-[#E8E1D3] rounded-b-[4px] border-r border-b border-l border-stone-400/80 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_4px_6px_rgba(0,0,0,0.3)] transition-all cursor-pointer flex flex-col justify-end items-center pb-2 group active:translate-y-1 ${
                    isLit
                      ? '!bg-amber-100 !from-amber-200 !to-amber-300 ring-2 ring-amber-400 ring-offset-1 translate-y-1'
                      : 'hover:brightness-95'
                  }`}
                  aria-label={`건반 ${k.note}`}
                >
                  {showLabels && (
                    <div className="text-center pointer-events-none">
                      <span className="block text-[10px] font-mono text-stone-500 font-semibold leading-none">
                        {k.note}
                      </span>
                      <span className="block text-[9px] text-stone-700 font-serif-kr mt-0.5 leading-none">
                        {k.labelKo}
                      </span>
                      {k.keyboardShortcuts && (
                        <span className="block text-[8px] text-stone-400 mt-0.5 font-mono">
                          [{k.keyboardShortcuts}]
                        </span>
                      )}
                    </div>
                  )}
                </button>
              );
            }

            // Black Keys positioned with negative margin overlap
            return (
              <button
                key={k.note}
                onClick={() => handleNoteTrigger(k.note)}
                className={`absolute z-20 w-6 md:w-7 h-28 md:h-32 bg-gradient-to-b from-[#2A2725] via-[#1A1817] to-[#0D0C0B] rounded-b-[3px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_8px_rgba(0,0,0,0.7)] transition-all cursor-pointer flex flex-col justify-end items-center pb-2 group active:translate-y-0.5 ${
                  isLit
                    ? '!bg-amber-800 !from-amber-700 !to-amber-900 ring-2 ring-amber-300 translate-y-0.5'
                    : 'hover:brightness-125'
                }`}
                style={{
                  left: getBlackKeyLeftOffset(k.note)
                }}
                aria-label={`반음 건반 ${k.note}`}
              >
                {showLabels && (
                  <div className="text-center pointer-events-none">
                    <span className="block text-[9px] font-mono text-amber-200/90 font-medium leading-none">
                      {k.note.replace('4', '').replace('5', '')}
                    </span>
                    {k.keyboardShortcuts && (
                      <span className="block text-[7px] text-stone-400 mt-1 font-mono">
                        {k.keyboardShortcuts}
                      </span>
                    )}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-2 text-center text-xs text-stone-500 flex items-center justify-center gap-2">
        <Sparkles className="w-3 h-3 text-amber-400/80" />
        <span>마우스로 건반을 직접 누르거나 키보드(A, W, S, E...)로 실시간 연주가 가능합니다.</span>
      </div>
    </div>
  );
}

// Calculate precise pixel offset for natural acoustic keyboard layout
function getBlackKeyLeftOffset(note: string): string {
  // Mapping relative to the sequence of 15 white keys (0 through 14)
  // White keys: C4(0), D4(1), E4(2), F4(3), G4(4), A4(5), B4(6), C5(7), D5(8), E5(9), F5(10), G5(11), A5(12), B5(13), C6(14)
  // Each white key is approx 44px on md screen, let's calculate based on flex container percentage or index:
  const positions: Record<string, string> = {
    'C#4': 'calc(50% - 310px + 32px)',
    'D#4': 'calc(50% - 310px + 76px)',
    'F#4': 'calc(50% - 310px + 164px)',
    'G#4': 'calc(50% - 310px + 208px)',
    'A#4': 'calc(50% - 310px + 252px)',
    'C#5': 'calc(50% - 310px + 340px)',
    'D#5': 'calc(50% - 310px + 384px)',
    'F#5': 'calc(50% - 310px + 472px)',
    'G#5': 'calc(50% - 310px + 516px)',
    'A#5': 'calc(50% - 310px + 560px)'
  };
  return positions[note] || '0px';
}
