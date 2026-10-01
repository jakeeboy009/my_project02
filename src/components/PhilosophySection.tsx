import { BookOpen, Sparkles, Music2, HeartHandshake } from 'lucide-react';

export function PhilosophySection() {
  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-6 border-t border-[#E8DFC9] space-y-10">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs uppercase tracking-widest text-stone-500 font-sans block mb-2">
          Curatorial Philosophy
        </span>
        <h2 className="font-serif-kr text-2xl md:text-3xl font-bold text-stone-900 tracking-tight">
          음악적 형식과 융의 심리학이 만나는 자리
        </h2>
        <p className="text-sm text-stone-600 mt-2 leading-relaxed">
          어째서 특정한 피아노 선율은 듣는 순간 우리의 심장 박동을 바꾸고 내면의 깊은 곳을 울릴까요?
          페르소나 피아노는 성격 심리학의 인지 기능과 서양 고전음악의 작곡 기법 사이의 유기적 상관관계를 탐구합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* NT */}
        <div className="bg-[#FAF7F0] p-6 rounded-sm border border-[#E8DFC9] space-y-3">
          <div className="w-8 h-8 rounded-full bg-stone-900 text-amber-300 flex items-center justify-center text-xs font-mono font-bold">
            NT
          </div>
          <h3 className="font-serif-kr text-base font-bold text-stone-900">
            분석가형과 대위법적 구조미
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            바흐와 라흐마니노프의 대위법적 성부 전개, 파가니니풍의 지적 비르투오소 기교는 논리와 시스템을 즐기는 NT형의 뇌파와 완벽한 조화를 이룹니다.
          </p>
          <div className="text-[11px] text-stone-500 pt-2 border-t border-[#E8DFC9]">
            매칭 작곡가: J.S. 바흐, 라흐마니노프, 리스트
          </div>
        </div>

        {/* NF */}
        <div className="bg-[#FAF7F0] p-6 rounded-sm border border-[#E8DFC9] space-y-3">
          <div className="w-8 h-8 rounded-full bg-stone-900 text-amber-300 flex items-center justify-center text-xs font-mono font-bold">
            NF
          </div>
          <h3 className="font-serif-kr text-base font-bold text-stone-900">
            외교관형과 시적 낭만주의
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            쇼팽의 루바토, 차이콥스키의 멜랑콜리, 슈베르트의 영롱한 가곡풍 선율은 영혼의 순수한 이상과 타인을 향한 깊은 공감을 간직한 NF형에게 안식처가 됩니다.
          </p>
          <div className="text-[11px] text-stone-500 pt-2 border-t border-[#E8DFC9]">
            매칭 작곡가: 쇼팽, 차이콥스키, 슈베르트
          </div>
        </div>

        {/* SJ */}
        <div className="bg-[#FAF7F0] p-6 rounded-sm border border-[#E8DFC9] space-y-3">
          <div className="w-8 h-8 rounded-full bg-stone-900 text-amber-300 flex items-center justify-center text-xs font-mono font-bold">
            SJ
          </div>
          <h3 className="font-serif-kr text-base font-bold text-stone-900">
            관리자형과 고전 소나타의 균형
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            베토벤 소나타의 견고한 론도 형식, 바흐 골드베르크의 32마디 베이스 규칙성은 신뢰와 질서를 귀하게 여기는 SJ형에게 정서적 확신을 제공합니다.
          </p>
          <div className="text-[11px] text-stone-500 pt-2 border-t border-[#E8DFC9]">
            매칭 작곡가: 베토벤, 리스트(사랑의 꿈), 멘델스존
          </div>
        </div>

        {/* SP */}
        <div className="bg-[#FAF7F0] p-6 rounded-sm border border-[#E8DFC9] space-y-3">
          <div className="w-8 h-8 rounded-full bg-stone-900 text-amber-300 flex items-center justify-center text-xs font-mono font-bold">
            SP
          </div>
          <h3 className="font-serif-kr text-base font-bold text-stone-900">
            탐험가형과 감각적 음색의 쾌감
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            라벨의 물놀이, 드뷔시의 인상주의적 색채, 브람스 헝가리 무곡의 격정적 리듬은 오감을 번뜩이며 현재를 살아가는 SP형의 순발력을 매료시킵니다.
          </p>
          <div className="text-[11px] text-stone-500 pt-2 border-t border-[#E8DFC9]">
            매칭 작곡가: 라벨, 드뷔시, 브람스, 모차르트
          </div>
        </div>
      </div>
    </div>
  );
}
