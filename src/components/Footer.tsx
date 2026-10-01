export function Footer() {
  return (
    <footer className="w-full bg-[#1C1917] text-stone-400 py-12 px-6 border-t border-stone-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="font-serif-kr text-lg text-stone-200 font-semibold tracking-wide block">
            페르소나 피아노 (Persona Piano)
          </span>
          <p className="text-xs text-stone-500 mt-1 max-w-md leading-relaxed">
            개인의 고유한 성향(MBTI)과 심리적 결을 클래식 피아노 음악 예술과 연결하는
            인터랙티브 큐레이션 플랫폼입니다.
          </p>
        </div>

        <div className="text-xs text-stone-500 space-y-1 md:text-right">
          <div>어쿠스틱 사운드: Web Audio API Physical Model Synthesis</div>
          <div>모든 사용자 입력 정보(이름, 이메일, 전화번호)는 브라우저 로컬 세션에서만 안전하게 처리됩니다.</div>
          <div className="text-[11px] text-stone-600 pt-1">
            © {new Date().getFullYear()} Persona Piano Curation. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
