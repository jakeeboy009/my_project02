interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export function Navbar({ onNavigate, activeSection }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E8DFC9] transition-colors">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => onNavigate('hero')}
          className="text-left group cursor-pointer focus-visible:outline-none"
        >
          <span className="font-serif-kr text-xl tracking-wide text-stone-900 font-semibold group-hover:text-stone-700 transition-colors">
            페르소나 피아노
          </span>
        </button>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
          <button
            onClick={() => onNavigate('curation-form')}
            className={`transition-colors cursor-pointer hover:text-stone-900 ${
              activeSection === 'curation-form' ? 'text-stone-950 font-semibold underline underline-offset-8' : ''
            }`}
          >
            맞춤 큐레이션
          </button>
          <button
            onClick={() => onNavigate('catalogue')}
            className={`transition-colors cursor-pointer hover:text-stone-900 ${
              activeSection === 'catalogue' ? 'text-stone-950 font-semibold underline underline-offset-8' : ''
            }`}
          >
            16가지 MBTI 명곡집
          </button>
          <button
            onClick={() => onNavigate('piano-keyboard')}
            className={`transition-colors cursor-pointer hover:text-stone-900 ${
              activeSection === 'piano-keyboard' ? 'text-stone-950 font-semibold underline underline-offset-8' : ''
            }`}
          >
            가상 피아노 건반
          </button>
          <button
            onClick={() => onNavigate('philosophy')}
            className={`transition-colors cursor-pointer hover:text-stone-900 ${
              activeSection === 'philosophy' ? 'text-stone-950 font-semibold underline underline-offset-8' : ''
            }`}
          >
            큐레이션 원리
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('curation-form')}
            className="px-4 py-2 text-xs tracking-wider uppercase font-medium text-white bg-stone-900 rounded-sm hover:bg-stone-800 active:scale-95 transition-all whitespace-nowrap cursor-pointer shadow-sm"
          >
            내 맞춤 곡 진단
          </button>
        </div>
      </div>
    </header>
  );
}
