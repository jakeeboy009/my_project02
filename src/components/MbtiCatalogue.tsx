import { useState } from 'react';
import { PIANO_PIECES, MBTI_OPTIONS } from '../data/pianoPieces';
import { MBTIType, PianoPiece } from '../types/piano';
import { pianoSynth } from '../utils/audioSynthesizer';
import { Play, Square, Music, Compass } from 'lucide-react';

interface MbtiCatalogueProps {
  onSelectPiece: (piece: PianoPiece) => void;
}

type TemperamentFilter = 'ALL' | 'NT' | 'NF' | 'SJ' | 'SP';

export function MbtiCatalogue({ onSelectPiece }: MbtiCatalogueProps) {
  const [filter, setFilter] = useState<TemperamentFilter>('ALL');
  const [playingPieceId, setPlayingPieceId] = useState<string | null>(null);

  const handleTogglePlay = (piece: PianoPiece) => {
    if (playingPieceId === piece.id) {
      pianoSynth.stopMelody();
      setPlayingPieceId(null);
    } else {
      setPlayingPieceId(piece.id);
      pianoSynth.playMelody(
        piece.previewMelody,
        piece.tempoBpm,
        undefined,
        () => {
          setPlayingPieceId(null);
        }
      );
    }
  };

  const allPieces = Object.values(PIANO_PIECES);

  const filteredPieces = allPieces.filter((piece) => {
    if (filter === 'ALL') return true;
    if (filter === 'NT') return piece.temperamentGroup.includes('NT');
    if (filter === 'NF') return piece.temperamentGroup.includes('NF');
    if (filter === 'SJ') return piece.temperamentGroup.includes('SJ');
    if (filter === 'SP') return piece.temperamentGroup.includes('SP');
    return true;
  });

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#E8DFC9]">
        <div>
          <span className="text-xs uppercase tracking-widest text-stone-500 font-sans block mb-1">
            Complete Archival Collection
          </span>
          <h2 className="font-serif-kr text-2xl md:text-3xl font-bold text-stone-900">
            16가지 성격 유형과 불멸의 피아노 명곡 아카이브
          </h2>
          <p className="text-xs md:text-sm text-stone-600 mt-1">
            성격 심리학의 16가지 페르소나와 매칭된 클래식 거장들의 걸작 선율을 감상해보세요.
          </p>
        </div>

        {/* Filter Bar (functional button tabs) */}
        <div className="flex items-center gap-1 p-1 bg-[#F2EDE1] rounded-sm text-xs font-medium shrink-0">
          <button
            onClick={() => setFilter('ALL')}
            className={`px-3 py-1.5 rounded-sm transition-colors cursor-pointer ${
              filter === 'ALL' ? 'bg-white text-stone-900 shadow-xs font-semibold' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            전체 보기 (16)
          </button>
          <button
            onClick={() => setFilter('NT')}
            className={`px-3 py-1.5 rounded-sm transition-colors cursor-pointer ${
              filter === 'NT' ? 'bg-white text-stone-900 shadow-xs font-semibold' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            분석가형 NT (4)
          </button>
          <button
            onClick={() => setFilter('NF')}
            className={`px-3 py-1.5 rounded-sm transition-colors cursor-pointer ${
              filter === 'NF' ? 'bg-white text-stone-900 shadow-xs font-semibold' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            외교관형 NF (4)
          </button>
          <button
            onClick={() => setFilter('SJ')}
            className={`px-3 py-1.5 rounded-sm transition-colors cursor-pointer ${
              filter === 'SJ' ? 'bg-white text-stone-900 shadow-xs font-semibold' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            관리자형 SJ (4)
          </button>
          <button
            onClick={() => setFilter('SP')}
            className={`px-3 py-1.5 rounded-sm transition-colors cursor-pointer ${
              filter === 'SP' ? 'bg-white text-stone-900 shadow-xs font-semibold' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            탐험가형 SP (4)
          </button>
        </div>
      </div>

      {/* Grid of 16 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredPieces.map((piece) => {
          const isThisPlaying = playingPieceId === piece.id;
          const mbtiDetail = MBTI_OPTIONS.find((o) => o.code === piece.mbti);

          return (
            <div
              key={piece.id}
              className="bg-[#FDFCFA] border border-[#E8DFC9] rounded-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow group"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                  <img
                    src={piece.coverImage}
                    alt={piece.koreanTitle}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-3 text-white">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm font-bold text-amber-300">
                        {piece.mbti}
                      </span>
                      <span className="text-[10px] text-stone-300">{piece.era.split(' ')[0]}</span>
                    </div>
                    <span className="text-xs text-stone-200 truncate mt-0.5">
                      {mbtiDetail?.label.replace(piece.mbti, '').trim()}
                    </span>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-4 space-y-2.5">
                  <div>
                    <h3 className="font-serif-kr text-base font-bold text-stone-900 line-clamp-1 group-hover:text-amber-900 transition-colors">
                      {piece.koreanTitle}
                    </h3>
                    <p className="text-xs text-stone-500 font-display mt-0.5 truncate">
                      {piece.composerKorean} ({piece.composer})
                    </p>
                  </div>

                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                    {piece.personalityKeyword}
                  </p>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-3 bg-[#FAF7F0] border-t border-[#EFE8DA] flex items-center justify-between gap-2">
                <button
                  onClick={() => handleTogglePlay(piece)}
                  className={`px-3 py-1.5 text-xs rounded-sm flex items-center gap-1.5 transition-colors cursor-pointer font-medium ${
                    isThisPlaying
                      ? 'bg-amber-600 text-white'
                      : 'bg-white text-stone-800 border border-[#E0D7C5] hover:bg-stone-100'
                  }`}
                >
                  {isThisPlaying ? (
                    <>
                      <Square className="w-3.5 h-3.5 fill-current" />
                      <span>정지</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>미리듣기</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => onSelectPiece(piece)}
                  className="px-2.5 py-1.5 text-xs text-stone-700 hover:text-stone-950 font-medium cursor-pointer underline underline-offset-4"
                >
                  상세 리포트 보기 →
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
