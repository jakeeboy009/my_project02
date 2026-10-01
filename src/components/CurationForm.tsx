import React, { useState } from 'react';
import { MBTIType, MoodPreference, UserProfile } from '../types/piano';
import { MBTI_OPTIONS } from '../data/pianoPieces';
import { pianoSynth } from '../utils/audioSynthesizer';
import { Sparkles, CheckCircle2, User, Mail, Phone, Compass, Music2 } from 'lucide-react';

interface CurationFormProps {
  onSubmit: (profile: UserProfile) => void;
  isLoading?: boolean;
}

export function CurationForm({ onSubmit, isLoading = false }: CurationFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [mbti, setMbti] = useState<MBTIType>('INFJ');
  const [moodPreference, setMoodPreference] = useState<MoodPreference>('all');

  // Interactive 4-trait builder
  const [traitE, setTraitE] = useState<'E' | 'I'>('I');
  const [traitS, setTraitS] = useState<'S' | 'N'>('N');
  const [traitT, setTraitT] = useState<'T' | 'F'>('F');
  const [traitJ, setTraitJ] = useState<'J' | 'P'>('J');

  const [selectorMode, setSelectorMode] = useState<'picker' | 'traits'>('picker');
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Auto-format phone number
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, '');
    let formatted = raw;
    if (raw.length <= 3) {
      formatted = raw;
    } else if (raw.length <= 7) {
      formatted = `${raw.slice(0, 3)}-${raw.slice(3)}`;
    } else {
      formatted = `${raw.slice(0, 3)}-${raw.slice(3, 7)}-${raw.slice(7, 11)}`;
    }
    setPhone(formatted);
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
  };

  const handleTraitToggle = (dimension: 'EI' | 'SN' | 'TF' | 'JP', value: string) => {
    let nextE = traitE;
    let nextS = traitS;
    let nextT = traitT;
    let nextJ = traitJ;

    if (dimension === 'EI') {
      nextE = value as 'E' | 'I';
      setTraitE(nextE);
    } else if (dimension === 'SN') {
      nextS = value as 'S' | 'N';
      setTraitS(nextS);
    } else if (dimension === 'TF') {
      nextT = value as 'T' | 'F';
      setTraitT(nextT);
    } else if (dimension === 'JP') {
      nextJ = value as 'J' | 'P';
      setTraitJ(nextJ);
    }

    const composed = `${nextE}${nextS}${nextT}${nextJ}` as MBTIType;
    setMbti(composed);
    pianoSynth.playNote('E5', 0.4, 0.5);
  };

  const handleMbtiSelect = (selected: MBTIType) => {
    setMbti(selected);
    setTraitE(selected[0] as 'E' | 'I');
    setTraitS(selected[1] as 'S' | 'N');
    setTraitT(selected[2] as 'T' | 'F');
    setTraitJ(selected[3] as 'J' | 'P');
    pianoSynth.playNote('A4', 0.4, 0.5);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!name.trim()) {
      newErrors.name = '성함을 입력해 주세요.';
    }

    if (!email.trim()) {
      newErrors.email = '이메일 주소를 입력해 주세요.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = '올바른 이메일 형식이 아닙니다 (예: name@domain.com).';
    }

    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (!cleanPhone) {
      newErrors.phone = '전화번호를 입력해 주세요.';
    } else if (cleanPhone.length < 10) {
      newErrors.phone = '정확한 전화번호 10~11자리를 입력해 주세요.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Play pleasant confirmation arpeggio
    pianoSynth.playNote('C4', 0.3, 0.7);
    setTimeout(() => pianoSynth.playNote('G4', 0.3, 0.7), 80);
    setTimeout(() => pianoSynth.playNote('C5', 0.6, 0.8), 160);

    onSubmit({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      mbti,
      moodPreference,
      submittedAt: new Date().toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    });
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-[#FDFCFA] border border-[#E8DFC9] shadow-sm rounded-sm p-6 md:p-10 relative">
      {/* Decorative top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-700/20 via-stone-800 to-amber-700/20" />

      {/* Header */}
      <div className="text-center mb-8">
        <span className="text-xs uppercase tracking-widest text-stone-500 font-sans block mb-2">
          Persona Piano Consultation
        </span>
        <h2 className="font-serif-kr text-2xl md:text-3xl text-stone-900 font-semibold tracking-tight">
          당신의 페르소나와 감성을 위한 피아노 선율 진단
        </h2>
        <p className="text-stone-600 text-sm md:text-base mt-2 max-w-xl mx-auto leading-relaxed">
          이름과 연락처, MBTI 기질을 입력하시면 16가지 고유 성향과 내면의 파동에 깊이 공명하는
          클래식 피아노 명곡을 엄선하여 추천해 드립니다.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Name */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
              이름 <span className="text-amber-800">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                }}
                placeholder="예: 김선율"
                className={`w-full pl-9 pr-3 py-2.5 text-sm bg-white border ${
                  errors.name ? 'border-red-400 focus:border-red-500' : 'border-[#E0D7C5] focus:border-stone-800'
                } rounded-sm text-stone-900 placeholder:text-stone-400 focus:outline-none transition-colors`}
              />
            </div>
            {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
              이메일 <span className="text-amber-800">*</span>
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
                }}
                placeholder="melody@example.com"
                className={`w-full pl-9 pr-3 py-2.5 text-sm bg-white border ${
                  errors.email ? 'border-red-400 focus:border-red-500' : 'border-[#E0D7C5] focus:border-stone-800'
                } rounded-sm text-stone-900 placeholder:text-stone-400 focus:outline-none transition-colors`}
              />
            </div>
            {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
              전화번호 <span className="text-amber-800">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="tel"
                value={phone}
                onChange={handlePhoneChange}
                placeholder="010-0000-0000"
                maxLength={13}
                className={`w-full pl-9 pr-3 py-2.5 text-sm bg-white border ${
                  errors.phone ? 'border-red-400 focus:border-red-500' : 'border-[#E0D7C5] focus:border-stone-800'
                } rounded-sm text-stone-900 placeholder:text-stone-400 focus:outline-none transition-colors`}
              />
            </div>
            {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
          </div>
        </div>

        {/* MBTI Selection Section */}
        <div className="pt-3 border-t border-[#EFE8DA]">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-stone-700" />
              <span className="text-xs font-semibold text-stone-800 uppercase tracking-wider">
                나의 MBTI 성격 유형 <span className="text-amber-800">*</span>
              </span>
            </div>

            {/* Mode switch */}
            <div className="flex items-center gap-1 bg-[#F2EDE1] p-0.5 rounded-sm text-xs font-medium">
              <button
                type="button"
                onClick={() => setSelectorMode('picker')}
                className={`px-2.5 py-1 rounded-sm transition-colors cursor-pointer ${
                  selectorMode === 'picker' ? 'bg-white text-stone-900 shadow-xs font-semibold' : 'text-stone-600'
                }`}
              >
                16가지 목록 선택
              </button>
              <button
                type="button"
                onClick={() => setSelectorMode('traits')}
                className={`px-2.5 py-1 rounded-sm transition-colors cursor-pointer ${
                  selectorMode === 'traits' ? 'bg-white text-stone-900 shadow-xs font-semibold' : 'text-stone-600'
                }`}
              >
                4가지 지표 조합
              </button>
            </div>
          </div>

          {selectorMode === 'picker' ? (
            /* 16 Type Grid */
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {MBTI_OPTIONS.map((item) => {
                const isSelected = mbti === item.code;
                return (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => handleMbtiSelect(item.code)}
                    className={`text-left p-2.5 rounded-sm border transition-all cursor-pointer ${
                      isSelected
                        ? 'border-stone-900 bg-stone-900 text-white shadow-xs'
                        : 'border-[#E8DFC9] bg-white text-stone-800 hover:border-stone-400 hover:bg-[#FAF7F0]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`font-mono text-sm font-bold ${isSelected ? 'text-amber-300' : 'text-stone-900'}`}>
                        {item.code}
                      </span>
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-amber-300" />}
                    </div>
                    <span className={`block text-[11px] truncate mt-0.5 ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                      {item.label.replace(item.code, '').trim()}
                    </span>
                  </button>
                );
              })}
            </div>
          ) : (
            /* 4-Dimension Toggle */
            <div className="space-y-2.5 bg-[#FAF7F0] p-4 rounded-sm border border-[#E8DFC9]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* E vs I */}
                <div className="flex items-center justify-between bg-white p-2 rounded-sm border border-[#E4DCB] px-3">
                  <span className="text-xs text-stone-600">에너지 방향</span>
                  <div className="flex gap-1">
                    <button
                      type="button"
                      onClick={() => handleTraitToggle('EI', 'E')}
                      className={`px-3 py-1 text-xs font-semibold rounded-sm cursor-pointer ${
                        traitE === 'E' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                      }`}
                    >
                      E 외향
                    </button>
                    <button
                      type="button"
                      onClick={() => handleTraitToggle('EI', 'I')}
                      className={`px-3 py-1 text-xs font-semibold rounded-sm cursor-pointer ${
                        traitE === 'I' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                      }`}
                    >
                      I 내향
                    </button>
                  </div>
                </div>

                {/* S vs N */}
                <div className="flex items-center justify-between bg-white p-2 rounded-sm border border-[#E4DCB] px-3">
                  <span className="text-xs text-stone-600">인식 방식</span>
                  <div className="flex gap-1">
                    <button
                      type="button"
                      onClick={() => handleTraitToggle('SN', 'S')}
                      className={`px-3 py-1 text-xs font-semibold rounded-sm cursor-pointer ${
                        traitS === 'S' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                      }`}
                    >
                      S 감각
                    </button>
                    <button
                      type="button"
                      onClick={() => handleTraitToggle('SN', 'N')}
                      className={`px-3 py-1 text-xs font-semibold rounded-sm cursor-pointer ${
                        traitS === 'N' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                      }`}
                    >
                      N 직관
                    </button>
                  </div>
                </div>

                {/* T vs F */}
                <div className="flex items-center justify-between bg-white p-2 rounded-sm border border-[#E4DCB] px-3">
                  <span className="text-xs text-stone-600">판단 기준</span>
                  <div className="flex gap-1">
                    <button
                      type="button"
                      onClick={() => handleTraitToggle('TF', 'T')}
                      className={`px-3 py-1 text-xs font-semibold rounded-sm cursor-pointer ${
                        traitT === 'T' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                      }`}
                    >
                      T 사고
                    </button>
                    <button
                      type="button"
                      onClick={() => handleTraitToggle('TF', 'F')}
                      className={`px-3 py-1 text-xs font-semibold rounded-sm cursor-pointer ${
                        traitT === 'F' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                      }`}
                    >
                      F 감정
                    </button>
                  </div>
                </div>

                {/* J vs P */}
                <div className="flex items-center justify-between bg-white p-2 rounded-sm border border-[#E4DCB] px-3">
                  <span className="text-xs text-stone-600">생활 양식</span>
                  <div className="flex gap-1">
                    <button
                      type="button"
                      onClick={() => handleTraitToggle('JP', 'J')}
                      className={`px-3 py-1 text-xs font-semibold rounded-sm cursor-pointer ${
                        traitJ === 'J' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                      }`}
                    >
                      J 판단
                    </button>
                    <button
                      type="button"
                      onClick={() => handleTraitToggle('JP', 'P')}
                      className={`px-3 py-1 text-xs font-semibold rounded-sm cursor-pointer ${
                        traitJ === 'P' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                      }`}
                    >
                      P 인식
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-center pt-2">
                <span className="text-xs text-stone-500">선택된 유형: </span>
                <span className="font-mono text-sm font-bold text-amber-900 ml-1">
                  {mbti}
                </span>
                <span className="text-xs text-stone-600 ml-2">
                  ({MBTI_OPTIONS.find((o) => o.code === mbti)?.label.replace(mbti, '').trim()})
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Optional Preferred Mood */}
        <div className="pt-2 border-t border-[#EFE8DA]">
          <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
            선호하는 음악적 분위기 <span className="text-stone-400 font-normal">(선택)</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'MBTI 본연의 추천' },
              { id: 'lyrical', label: '서정적 · 낭만적인' },
              { id: 'epic', label: '웅장함 · 열정적인' },
              { id: 'contemplative', label: '사색적 · 차분한' },
              { id: 'bright', label: '밝고 · 경쾌한' }
            ].map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setMoodPreference(m.id as MoodPreference)}
                className={`px-3 py-1.5 text-xs rounded-sm border transition-colors cursor-pointer ${
                  moodPreference === m.id
                    ? 'border-amber-800 bg-amber-50 text-amber-900 font-medium'
                    : 'border-[#E0D7C5] bg-white text-stone-600 hover:bg-[#FAF7F0]'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        {/* Privacy Note */}
        <p className="text-[11px] text-stone-500 leading-relaxed">
          * 입력하신 이름, 이메일, 전화번호는 브라우저 세션 내에서 맞춤형 헌정 증서 발행 및 결과 저장 목적으로만 사용되며 안전하게 처리됩니다.
        </p>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3.5 px-6 bg-stone-900 hover:bg-stone-800 active:scale-[0.99] text-white font-medium rounded-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <div className="w-4 h-4 border-2 border-amber-300 border-t-transparent rounded-full animate-spin" />
              <span>선율 분석 및 헌정 리포트 생성 중...</span>
            </>
          ) : (
            <>
              <Music2 className="w-4 h-4 text-amber-300" />
              <span className="font-serif-kr tracking-wide text-sm md:text-base">
                내 MBTI에 맞는 피아노 곡 큐레이션 결과 확인하기
              </span>
              <Sparkles className="w-3.5 h-3.5 text-amber-300 ml-1" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
