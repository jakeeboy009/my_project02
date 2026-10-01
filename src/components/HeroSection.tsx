import grandPianoImg from '../assets/images/piano_grand_aesthetic_1790816944989.jpg';
import { ArrowDown, Music2, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onStartCuration: () => void;
  onExploreCatalogue: () => void;
}

export function HeroSection({ onStartCuration, onExploreCatalogue }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden py-12 md:py-20 border-b border-[#E8DFC9]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-900 bg-amber-100/60 px-2.5 py-1 rounded-xs border border-amber-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Persona & Classical Piano Curation</span>
            </div>

            <h1 className="font-serif-kr text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-stone-900 leading-[1.18] tracking-tight">
              당신의 이름과 기질 속에 잠든{' '}
              <span className="italic font-display font-medium text-amber-900 block mt-1">
                단 하나의 피아노 선율
              </span>
            </h1>

            <p className="text-stone-600 text-sm md:text-base leading-relaxed max-w-xl font-serif-kr">
              88개의 건반 위에서 탄생한 수많은 불멸의 클래식 소품 중, 당신의 MBTI 기질과
              내면의 감정선을 가장 투명하게 비추는 피아노 명곡을 찾아드립니다.
              이름과 연락처, MBTI를 입력하고 당신만을 위한 헌정 리포트를 만나보세요.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onStartCuration}
                className="px-6 py-3.5 bg-stone-900 hover:bg-stone-800 active:scale-95 text-white font-medium text-sm rounded-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <Music2 className="w-4 h-4 text-amber-300" />
                <span>지금 내 맞춤 곡 추천받기</span>
                <ArrowDown className="w-3.5 h-3.5 text-stone-400" />
              </button>

              <button
                onClick={onExploreCatalogue}
                className="px-5 py-3.5 bg-white hover:bg-stone-50 border border-[#DCD1BC] text-stone-800 font-medium text-sm rounded-sm transition-all cursor-pointer shadow-xs"
              >
                16가지 전곡 카탈로그 둘러보기
              </button>
            </div>

            {/* Editorial Quote */}
            <div className="pt-4 border-t border-[#E8DFC9]/70 text-xs text-stone-500 font-serif-kr italic">
              "말이 멈추는 곳에서 음악은 비로소 시작된다." — 하인리히 하이네 (Heinrich Heine)
            </div>
          </div>

          {/* Right Image Feature */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden shadow-2xl border-4 border-white bg-stone-900 aspect-[4/3] group">
              <img
                src={grandPianoImg}
                alt="Concert Grand Piano in European Salon"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                <span className="text-[11px] font-mono tracking-widest text-amber-300 uppercase">
                  Steinway & Sons D-274
                </span>
                <p className="font-serif-kr text-base font-semibold text-stone-100">
                  피아노의 88개 건반, 16가지 영혼의 울림
                </p>
                <span className="text-xs text-stone-300 mt-0.5">
                  Web Audio 기반 실시간 피아노 건반 음원 내장
                </span>
              </div>
            </div>

            {/* Floating Trust Card */}
            <div className="hidden sm:block absolute -bottom-5 -left-5 bg-[#FAF7F0] border border-[#D6CBB7] p-3.5 rounded-sm shadow-lg max-w-[220px]">
              <span className="text-[10px] text-stone-500 uppercase tracking-wider block font-mono">
                Curated Masterpieces
              </span>
              <span className="font-serif-kr text-xs font-bold text-stone-900 block mt-0.5">
                바흐, 쇼팽, 라흐마니노프, 드뷔시 등 16대 명곡 전수 매칭
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
