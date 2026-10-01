import { useState, useEffect } from 'react';
import { PianoPiece, UserProfile } from '../types/piano';
import { pianoSynth } from '../utils/audioSynthesizer';
import { InteractivePianoKeyboard } from './InteractivePianoKeyboard';
import {
  Play,
  Square,
  Share2,
  Printer,
  RotateCcw,
  Sparkles,
  Award,
  Disc,
  Clock,
  KeyRound,
  Check
} from 'lucide-react';

interface RecommendationResultProps {
  userProfile: UserProfile;
  piece: PianoPiece;
  onReset: () => void;
  onExploreMore: () => void;
}

export function RecommendationResult({
  userProfile,
  piece,
  onReset,
  onExploreMore
}: RecommendationResultProps) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentPlayingNote, setCurrentPlayingNote] = useState<string | null>(null);
  const [tempoBpm, setTempoBpm] = useState<number>(piece.tempoBpm || 80);
  const [copiedToast, setCopiedToast] = useState<boolean>(false);

  // Stop playback when component unmounts or piece changes
  useEffect(() => {
    return () => {
      pianoSynth.stopMelody();
    };
  }, [piece.id]);

  const handleTogglePlay = () => {
    if (isPlaying) {
      pianoSynth.stopMelody();
      setIsPlaying(false);
      setCurrentPlayingNote(null);
    } else {
      setIsPlaying(true);
      pianoSynth.playMelody(
        piece.previewMelody,
        tempoBpm,
        (note) => {
          setCurrentPlayingNote(note);
        },
        () => {
          setIsPlaying(false);
          setCurrentPlayingNote(null);
        }
      );
    }
  };

  const handleShare = async () => {
    const textToShare = `[페르소나 피아노] ${userProfile.name} 님의 MBTI (${userProfile.mbti}) 맞춤 피아노 추천곡:\n${piece.composerKorean} - ${piece.koreanTitle}\n\n"${piece.personalityKeyword}"`;
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(textToShare);
        setCopiedToast(true);
        setTimeout(() => setCopiedToast(false), 2500);
      }
    } catch {
      // fallback
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Mask phone number for elegant privacy display
  const maskedPhone = userProfile.phone.replace(/(\d{3})-(\d{2})\d{2}-(\d{4})/, '$1-$2**-$3');

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 animate-fadeIn">
      {/* Curation Dedication Slip (Museum / Editorial Certificate style) */}
      <div className="bg-[#FAF7F0] border-2 border-[#D8CEBA] rounded-sm p-6 md:p-10 shadow-lg relative print:border-none print:shadow-none print:p-0">
        {/* Archival Stamp Header */}
        <div className="flex flex-wrap items-center justify-between pb-6 border-b border-[#E2D8C3] gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center text-stone-900 bg-[#F4EFE6]">
              <Award className="w-5 h-5 text-amber-800" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-widest text-stone-500 font-sans block">
                Certificate of Musical Resonance
              </span>
              <h1 className="font-serif-kr text-xl md:text-2xl font-bold text-stone-900 tracking-tight">
                {userProfile.name} 님을 위한 피아노 헌정 리포트
              </h1>
            </div>
          </div>

          <div className="text-right text-xs text-stone-500 space-y-0.5">
            <div className="font-mono text-stone-800 font-semibold">
              MBTI: <span className="text-amber-900 font-bold">{userProfile.mbti}</span>
            </div>
            <div>{userProfile.email}</div>
            <div>{maskedPhone}</div>
            <div className="text-[10px] text-stone-400">발행일: {userProfile.submittedAt}</div>
          </div>
        </div>

        {/* Piece Showcase Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Cover Art (Generated High-Fidelity Photograph) */}
          <div className="md:col-span-5 relative group">
            <div className="aspect-[4/3] rounded-sm overflow-hidden bg-stone-200 border border-stone-300 shadow-md relative">
              <img
                src={piece.coverImage}
                alt={piece.koreanTitle}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] uppercase tracking-widest text-amber-200/90 font-mono">
                  {piece.era}
                </span>
                <span className="font-serif-kr text-lg font-medium tracking-tight">
                  {piece.composerKorean}
                </span>
              </div>
            </div>

            {/* Quick Metadata Spec */}
            <div className="mt-3 p-3 bg-white/70 border border-[#E8DFC9] rounded-sm text-xs text-stone-600 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-stone-500">
                  <KeyRound className="w-3.5 h-3.5 text-amber-700" />
                  조성(Key)
                </span>
                <span className="font-medium text-stone-800 font-mono">{piece.keySignature}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-stone-500">
                  <Clock className="w-3.5 h-3.5 text-amber-700" />
                  템포(Tempo)
                </span>
                <span className="font-medium text-stone-800 font-mono">♩ = {tempoBpm} BPM</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-stone-500">
                  <Disc className="w-3.5 h-3.5 text-amber-700" />
                  사조
                </span>
                <span className="font-medium text-stone-800">{piece.era}</span>
              </div>
            </div>
          </div>

          {/* Piece Content & Narrative */}
          <div className="md:col-span-7 space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2 py-0.5 text-[11px] font-semibold bg-stone-900 text-amber-300 rounded-xs uppercase tracking-wider">
                  {userProfile.mbti} 추천작
                </span>
                <span className="text-xs text-stone-500 font-serif-kr italic">
                  {piece.temperamentGroup}
                </span>
              </div>
              <h2 className="font-serif-kr text-2xl md:text-3xl font-bold text-stone-950 leading-tight">
                {piece.koreanTitle}
              </h2>
              <p className="font-display text-sm text-stone-600 italic mt-1">
                {piece.title} — {piece.composer}
              </p>
            </div>

            {/* Personality Keyword Badge */}
            <div className="p-3 bg-amber-50/80 border-l-4 border-amber-800 text-amber-950 text-xs md:text-sm font-serif-kr leading-relaxed">
              <span className="font-semibold block text-amber-900 mb-0.5">
                {userProfile.name} 님의 기질 키워드
              </span>
              "{piece.personalityKeyword}"
            </div>

            {/* Audio Synthesis Player Box */}
            <div className="p-4 bg-white border border-[#E8DFC9] rounded-sm shadow-xs space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleTogglePlay}
                    className={`w-11 h-11 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-sm ${
                      isPlaying
                        ? 'bg-amber-600 text-white hover:bg-amber-700 animate-pulse'
                        : 'bg-stone-900 text-amber-300 hover:bg-stone-800'
                    }`}
                    aria-label={isPlaying ? '정지' : '재생'}
                  >
                    {isPlaying ? <Square className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                  </button>

                  <div>
                    <span className="text-xs font-semibold text-stone-900 block">
                      주제 테마 선율 미리듣기
                    </span>
                    <span className="text-[11px] text-stone-500">
                      {isPlaying
                        ? currentPlayingNote
                          ? `연주 중: ${currentPlayingNote}`
                          : '피아노 연주 진행 중...'
                        : 'Web Audio 어쿠스틱 피아노 실시간 합성'}
                    </span>
                  </div>
                </div>

                {/* Tempo Speed Slider */}
                <div className="flex items-center gap-2 text-xs text-stone-600">
                  <span className="text-[11px] text-stone-500">속도:</span>
                  <input
                    type="range"
                    min="50"
                    max="150"
                    step="5"
                    value={tempoBpm}
                    onChange={(e) => setTempoBpm(parseInt(e.target.value, 10))}
                    className="w-20 h-1 bg-stone-300 rounded appearance-none accent-stone-800 cursor-pointer"
                  />
                  <span className="font-mono text-[11px] w-12 text-right">{tempoBpm} BPM</span>
                </div>
              </div>

              {/* Note Track visualization */}
              <div className="flex gap-1 overflow-hidden py-1 border-t border-stone-100">
                {piece.previewMelody.map((n, idx) => {
                  const isCurrent = isPlaying && currentPlayingNote === n.note;
                  return (
                    <div
                      key={idx}
                      className={`h-2 flex-1 rounded-xs transition-colors ${
                        isCurrent
                          ? 'bg-amber-500 ring-2 ring-amber-300'
                          : 'bg-stone-200'
                      }`}
                      title={`${n.note} (${n.duration}拍)`}
                    />
                  );
                })}
              </div>
            </div>

            {/* Why It Matches Narrative */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-700">
                왜 {userProfile.name} 님의 {userProfile.mbti} 성향과 공명할까요?
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed font-serif-kr text-justify">
                {piece.whyItMatches}
              </p>
            </div>
          </div>
        </div>

        {/* Live Synchronized Virtual Keyboard */}
        <div className="mt-8 pt-6 border-t border-[#E8DFC9]">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-semibold text-stone-800 uppercase tracking-wider">
              실시간 건반 반응 및 인터랙티브 연주
            </span>
            <span className="text-[11px] text-stone-500">
              상단의 선율을 재생하면 건반이 실시간으로 점등되며, 직접 클릭하여 연주할 수도 있습니다.
            </span>
          </div>
          <InteractivePianoKeyboard activeNote={currentPlayingNote} />
        </div>

        {/* Deep Curatorial Sections: Listening Points & Performers */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#E8DFC9]">
          {/* Listening Points */}
          <div className="bg-white/80 p-5 rounded-sm border border-[#E8DFC9] space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-800" />
              <h4 className="font-serif-kr text-sm font-bold text-stone-900">
                큐레이터가 권하는 3가지 감상 포인트
              </h4>
            </div>
            <ul className="space-y-2 text-xs md:text-sm text-stone-700">
              {piece.listeningPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="font-mono text-amber-800 font-bold text-xs mt-0.5">
                    0{i + 1}.
                  </span>
                  <span className="leading-snug">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Legendary Performers & Curatorial Note */}
          <div className="bg-white/80 p-5 rounded-sm border border-[#E8DFC9] space-y-3 flex flex-col justify-between">
            <div>
              <h4 className="font-serif-kr text-sm font-bold text-stone-900 mb-2">
                추천 마에스트로 & 명음반
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {piece.recommendedPerformers.map((performer, idx) => (
                  <span
                    key={idx}
                    className="inline-block px-2.5 py-1 text-xs bg-[#F2EDE1] text-stone-800 rounded-xs border border-[#E2D8C3]"
                  >
                    {performer}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-stone-200 text-xs text-stone-600 italic font-serif-kr">
              "{piece.curatorNote}"
            </div>
          </div>
        </div>

        {/* Action Toolbar */}
        <div className="mt-8 pt-6 border-t border-[#E8DFC9] flex flex-wrap items-center justify-between gap-4 print:hidden">
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="px-4 py-2 text-xs font-medium text-stone-800 bg-white border border-[#E0D7C5] hover:bg-[#FAF7F0] rounded-sm transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              {copiedToast ? <Check className="w-3.5 h-3.5 text-green-700" /> : <Share2 className="w-3.5 h-3.5" />}
              {copiedToast ? '클립보드에 복사 완료!' : '결과 공유하기'}
            </button>

            <button
              onClick={handlePrint}
              className="px-4 py-2 text-xs font-medium text-stone-800 bg-white border border-[#E0D7C5] hover:bg-[#FAF7F0] rounded-sm transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              헌정 증서 인쇄 / PDF 저장
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onExploreMore}
              className="px-4 py-2 text-xs font-medium text-stone-800 bg-[#EFE8DA] hover:bg-[#E5DDCB] rounded-sm transition-colors cursor-pointer"
            >
              16개 전곡 카탈로그 둘러보기
            </button>
            <button
              onClick={onReset}
              className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              새로 진단하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
