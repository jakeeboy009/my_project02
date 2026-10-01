import React, { useState, useEffect } from 'react';
import { pianoSynth } from './utils/audioSynthesizer';
import { Volume2, VolumeX, Music } from 'lucide-react';

// 연주 경력 타입 정의
type ExperienceLevel = '입문자' | '초급자' | '중급자' | '고급자';

// 선호하는 곡의 특징 목록
const SONG_FEATURES = [
  '화려한 곡',
  '서정적인 곡',
  '웅장한 곡',
  '차분한 곡',
  '어두운 분위기',
  '밝은 분위기',
] as const;

// 16가지 MBTI 목록
const MBTI_LIST = [
  'INTJ', 'INTP', 'ENTJ', 'ENTP',
  'INFJ', 'INFP', 'ENFJ', 'ENFP',
  'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ',
  'ISTP', 'ISFP', 'ESTP', 'ESFP',
] as const;

// MBTI별 기본 대표 곡 데이터베이스
interface PieceData {
  composer: string;
  title: string;
  trait: string;
  notes?: Array<{ note: string; duration: number }>;
}

const DEFAULT_MBTI_PIECES: Record<string, PieceData> = {
  INTJ: {
    composer: '리스트',
    title: '라 캄파넬라',
    trait: '눈부신 비르투오소 기교와 재치',
    notes: [
      { note: 'D#5', duration: 0.3 }, { note: 'D#6', duration: 0.3 },
      { note: 'D#5', duration: 0.3 }, { note: 'D#6', duration: 0.3 },
      { note: 'C#6', duration: 0.3 }, { note: 'B5', duration: 0.3 },
      { note: 'A#5', duration: 0.3 }, { note: 'B5', duration: 0.3 },
      { note: 'G#5', duration: 0.8 },
    ],
  },
  INTP: {
    composer: '바흐',
    title: '골드베르크 변주곡',
    trait: '논리적인 구조 속에서 끝없이 펼쳐지는 음악적 탐구',
    notes: [
      { note: 'G4', duration: 0.6 }, { note: 'G4', duration: 0.3 }, { note: 'A4', duration: 0.3 },
      { note: 'B4', duration: 0.8 }, { note: 'A4', duration: 0.3 }, { note: 'G4', duration: 0.3 },
      { note: 'F#4', duration: 0.8 }, { note: 'E4', duration: 0.4 }, { note: 'D4', duration: 1.0 },
    ],
  },
  ENTJ: {
    composer: '베토벤',
    title: '피아노 소나타 23번 열정',
    trait: '강렬한 추진력과 압도적인 에너지',
    notes: [
      { note: 'F4', duration: 0.4 }, { note: 'Ab4', duration: 0.4 }, { note: 'C5', duration: 0.6 },
      { note: 'F5', duration: 0.6 }, { note: 'C5', duration: 0.4 }, { note: 'Ab4', duration: 0.4 },
      { note: 'F4', duration: 1.0 },
    ],
  },
  ENTP: {
    composer: '리스트',
    title: '헝가리 광시곡 2번',
    trait: '예측하기 어려운 전개와 화려한 기교',
    notes: [
      { note: 'C4', duration: 0.4 }, { note: 'D#4', duration: 0.4 }, { note: 'F#4', duration: 0.4 },
      { note: 'G4', duration: 0.8 }, { note: 'F#4', duration: 0.3 }, { note: 'G4', duration: 0.3 },
      { note: 'D4', duration: 1.0 },
    ],
  },
  INFJ: {
    composer: '쇼팽',
    title: '녹턴 Op.9 No.2',
    trait: '섬세하고 깊은 감정을 담은 서정적인 선율',
    notes: [
      { note: 'Bb4', duration: 0.4 }, { note: 'G5', duration: 0.8 }, { note: 'F5', duration: 0.4 },
      { note: 'G5', duration: 0.4 }, { note: 'Eb5', duration: 1.0 }, { note: 'C5', duration: 0.4 },
      { note: 'Bb4', duration: 1.2 },
    ],
  },
  INFP: {
    composer: '드뷔시',
    title: '달빛',
    trait: '몽환적이고 감성적인 분위기',
    notes: [
      { note: 'F5', duration: 0.8 }, { note: 'Eb5', duration: 0.5 }, { note: 'Db5', duration: 0.8 },
      { note: 'C5', duration: 0.5 }, { note: 'Bb4', duration: 0.8 }, { note: 'Ab4', duration: 1.2 },
    ],
  },
  ENFJ: {
    composer: '차이콥스키',
    title: '사계 중 6월 뱃노래',
    trait: '따뜻하고 친근하면서도 감성적인 선율',
    notes: [
      { note: 'D5', duration: 0.6 }, { note: 'Bb4', duration: 0.3 }, { note: 'G4', duration: 0.6 },
      { note: 'D4', duration: 0.3 }, { note: 'F#4', duration: 0.6 }, { note: 'G4', duration: 1.0 },
    ],
  },
  ENFP: {
    composer: '모차르트',
    title: '터키 행진곡',
    trait: '밝고 경쾌하며 활기찬 분위기',
    notes: [
      { note: 'B4', duration: 0.2 }, { note: 'A4', duration: 0.2 }, { note: 'G#4', duration: 0.2 },
      { note: 'A4', duration: 0.2 }, { note: 'C5', duration: 0.6 }, { note: 'D5', duration: 0.2 },
      { note: 'C5', duration: 0.2 }, { note: 'B4', duration: 0.2 }, { note: 'C5', duration: 0.2 },
      { note: 'E5', duration: 0.8 },
    ],
  },
  ISTJ: {
    composer: '바흐',
    title: '평균율 클라비어곡집 프렐류드 1번',
    trait: '정돈된 구조와 균형미',
    notes: [
      { note: 'C4', duration: 0.25 }, { note: 'E4', duration: 0.25 }, { note: 'G4', duration: 0.25 },
      { note: 'C5', duration: 0.25 }, { note: 'E5', duration: 0.5 }, { note: 'G4', duration: 0.25 },
      { note: 'C5', duration: 0.25 }, { note: 'E5', duration: 0.5 },
    ],
  },
  ISFJ: {
    composer: '슈만',
    title: '트로이메라이',
    trait: '따뜻하고 포근한 감성을 담은 선율',
    notes: [
      { note: 'C4', duration: 0.4 }, { note: 'F4', duration: 0.8 }, { note: 'E4', duration: 0.3 },
      { note: 'D4', duration: 0.3 }, { note: 'C4', duration: 0.4 }, { note: 'A4', duration: 0.8 },
      { note: 'G4', duration: 1.2 },
    ],
  },
  ESTJ: {
    composer: '베토벤',
    title: '피아노 소나타 8번 비창 3악장',
    trait: '명확한 리듬과 강한 추진력',
    notes: [
      { note: 'G4', duration: 0.3 }, { note: 'C5', duration: 0.3 }, { note: 'D5', duration: 0.3 },
      { note: 'Eb5', duration: 0.3 }, { note: 'D5', duration: 0.3 }, { note: 'C5', duration: 0.3 },
      { note: 'B4', duration: 0.3 }, { note: 'C5', duration: 0.3 }, { note: 'D5', duration: 0.6 },
    ],
  },
  ESFJ: {
    composer: '멘델스존',
    title: '봄노래',
    trait: '밝고 친근하며 우아한 분위기',
    notes: [
      { note: 'A4', duration: 0.3 }, { note: 'C#5', duration: 0.3 }, { note: 'E5', duration: 0.6 },
      { note: 'A5', duration: 0.8 }, { note: 'G#5', duration: 0.3 }, { note: 'F#5', duration: 0.3 },
      { note: 'E5', duration: 1.0 },
    ],
  },
  ISTP: {
    composer: '쇼팽',
    title: '에튀드 Op.10 No.4',
    trait: '정밀한 테크닉과 빠른 손놀림이 돋보이는 곡',
    notes: [
      { note: 'C#4', duration: 0.2 }, { note: 'D#4', duration: 0.2 }, { note: 'E4', duration: 0.2 },
      { note: 'F#4', duration: 0.2 }, { note: 'G#4', duration: 0.2 }, { note: 'A4', duration: 0.2 },
      { note: 'B4', duration: 0.2 }, { note: 'C#5', duration: 0.6 },
    ],
  },
  ISFP: {
    composer: '쇼팽',
    title: '왈츠 Op.64 No.2',
    trait: '우아함과 쓸쓸함이 공존하는 섬세한 곡',
    notes: [
      { note: 'C#5', duration: 0.5 }, { note: 'B#4', duration: 0.3 }, { note: 'C#5', duration: 0.5 },
      { note: 'D#5', duration: 0.3 }, { note: 'C#5', duration: 0.5 }, { note: 'G#4', duration: 1.0 },
    ],
  },
  ESTP: {
    composer: '리스트',
    title: '초절기교 연습곡 4번 마제파',
    trait: '폭발적인 속도감과 화려한 기교',
    notes: [
      { note: 'D4', duration: 0.3 }, { note: 'F4', duration: 0.3 }, { note: 'A4', duration: 0.3 },
      { note: 'D5', duration: 0.5 }, { note: 'C#5', duration: 0.3 }, { note: 'D5', duration: 0.8 },
    ],
  },
  ESFP: {
    composer: '거슈윈',
    title: '랩소디 인 블루',
    trait: '재즈의 자유로움과 화려한 에너지가 어우러진 곡',
    notes: [
      { note: 'F4', duration: 0.3 }, { note: 'Ab4', duration: 0.3 }, { note: 'Bb4', duration: 0.3 },
      { note: 'C5', duration: 0.5 }, { note: 'Eb5', duration: 0.5 }, { note: 'F5', duration: 1.0 },
    ],
  },
};

/**
 * MBTI, 연주 경력, 선호하는 곡의 특징에 따라 추천 곡을 계산하는 함수
 */
function calculateRecommendation(
  mbti: string,
  level: ExperienceLevel,
  features: string[]
): PieceData | null {
  if (!mbti || !DEFAULT_MBTI_PIECES[mbti]) {
    return null;
  }

  // 기본 MBTI 곡
  let result = { ...DEFAULT_MBTI_PIECES[mbti] };

  // 예시 규칙: INFP + 초급자 + 서정적인 곡 => 사티 - "짐노페디 1번" (단순하면서도 몽환적이고 섬세한 분위기)
  if (
    (mbti === 'INFP' || mbti === 'INFJ') &&
    (level === '입문자' || level === '초급자') &&
    (features.includes('서정적인 곡') || features.includes('차분한 곡'))
  ) {
    return {
      composer: '사티',
      title: '짐노페디 1번',
      trait: '단순하면서도 몽환적이고 섬세한 분위기',
      notes: [
        { note: 'F#5', duration: 0.8 }, { note: 'D5', duration: 0.8 },
        { note: 'B4', duration: 0.8 }, { note: 'C#5', duration: 1.2 },
      ],
    };
  }

  // 예시 규칙: INTJ + 고급자 + 화려한 곡 => 리스트 - "라 캄파넬라" (눈부신 비르투오소 기교와 재치)
  if (mbti === 'INTJ' && level === '고급자' && features.includes('화려한 곡')) {
    return {
      composer: '리스트',
      title: '라 캄파넬라',
      trait: '눈부신 비르투오소 기교와 재치',
      notes: DEFAULT_MBTI_PIECES.INTJ.notes,
    };
  }

  // INTJ이면서 입문자/초급자인 경우 좀 더 접근하기 쉬운 대위법 명곡 추천
  if (mbti === 'INTJ' && (level === '입문자' || level === '초급자')) {
    return {
      composer: '바흐',
      title: '2성 인벤션 1번 다장조',
      trait: '명료한 대위법과 지적인 구조의 시작',
      notes: [
        { note: 'C4', duration: 0.3 }, { note: 'D4', duration: 0.3 }, { note: 'E4', duration: 0.3 },
        { note: 'F4', duration: 0.3 }, { note: 'D4', duration: 0.3 }, { note: 'E4', duration: 0.3 },
        { note: 'C4', duration: 0.6 },
      ],
    };
  }

  // 웅장한 곡 + 중/고급자 선호 시 라흐마니노프 추천
  if (
    features.includes('웅장한 곡') &&
    (level === '중급자' || level === '고급자') &&
    (mbti.includes('T') || mbti.includes('J'))
  ) {
    return {
      composer: '라흐마니노프',
      title: '전주곡 올림다단조 Op.3 No.2',
      trait: '지축을 울리는 웅장한 종소리와 압도적인 에너지',
      notes: [
        { note: 'A3', duration: 0.8 }, { note: 'G#3', duration: 0.8 }, { note: 'C#3', duration: 1.4 },
      ],
    };
  }

  // 어두운 분위기 + 서정적인 곡 선호 시 쇼팽 유작 녹턴 추천
  if (
    features.includes('어두운 분위기') &&
    (mbti === 'INFJ' || mbti === 'INFP' || mbti === 'ISFP')
  ) {
    return {
      composer: '쇼팽',
      title: '녹턴 올림다단조 유작',
      trait: '가슴 시린 애수와 깊은 서정성을 지닌 낭만 소품',
      notes: [
        { note: 'G#4', duration: 0.8 }, { note: 'C#5', duration: 0.5 }, { note: 'E5', duration: 0.5 },
        { note: 'D#5', duration: 0.4 }, { note: 'C#5', duration: 0.4 }, { note: 'B#4', duration: 0.8 },
      ],
    };
  }

  // 밝은 분위기 + 입문/초급자일 경우 모차르트나 멘델스존 봄노래 추천
  if (
    features.includes('밝은 분위기') &&
    (level === '입문자' || level === '초급자') &&
    mbti.includes('F')
  ) {
    return {
      composer: '멘델스존',
      title: '봄노래',
      trait: '밝고 친근하며 우아한 분위기',
      notes: DEFAULT_MBTI_PIECES.ESFJ.notes,
    };
  }

  return result;
}

export default function App() {
  // 폼 입력 상태
  const [name, setName] = useState<string>('');
  const [mbti, setMbti] = useState<string>('');
  const [experience, setExperience] = useState<ExperienceLevel>('초급자');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [userStory, setUserStory] = useState<string>('');

  // 유효성 검사 에러 메시지
  const [errorMessage, setErrorMessage] = useState<string>('');

  // 제출 후 확인 메시지
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  // 음원 미리듣기 상태
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  // 실시간 추천 곡 계산 (MBTI, 연주 경력, 선호 특징이 변경될 때마다 자동 계산)
  const currentRecommendation = calculateRecommendation(mbti, experience, selectedFeatures);

  // 실시간 예상 금액 계산 (기본 10,000원 + 경력별 가산 + 특징 옵션당 1,000원)
  const calculatePrice = (): number => {
    let basePrice = 10000;
    if (experience === '입문자') basePrice += 0;
    else if (experience === '초급자') basePrice += 2000;
    else if (experience === '중급자') basePrice += 4000;
    else if (experience === '고급자') basePrice += 6000;

    // 선택된 특징 개수당 1,000원 추가
    basePrice += selectedFeatures.length * 1000;
    return basePrice;
  };

  const expectedPrice = calculatePrice();

  // 체크박스 토글 핸들러
  const handleFeatureToggle = (feature: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature) ? prev.filter((f) => f !== feature) : [...prev, feature]
    );
  };

  // 피아노 곡 추천받기 버튼 클릭 시
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. 이름이 비어있으면 알림
    if (!name.trim()) {
      setErrorMessage('이름을 입력해주세요');
      setSubmittedMessage(null);
      return;
    }

    // 2. MBTI를 선택하지 않았으면 알림
    if (!mbti) {
      setErrorMessage('MBTI를 선택해주세요');
      setSubmittedMessage(null);
      return;
    }

    // 오류 메시지 초기화
    setErrorMessage('');

    // 추천 곡 가져오기
    const rec = currentRecommendation || DEFAULT_MBTI_PIECES[mbti];
    const featuresDesc =
      selectedFeatures.length > 0 ? selectedFeatures.join(', ') : '균형 잡힌 음악성';

    // 제출 확인 메시지 생성
    const message = `${name.trim()}님은 ${mbti} 성향의 ${experience}입니다.\n추천 곡은 ${rec.composer}의 '${rec.title}'입니다.\n${rec.trait}을 가진 곡으로, ${featuresDesc}을 좋아하는 성향과 잘 어울립니다.`;

    setSubmittedMessage(message);

    // 사운드 피드백 (음악 재생)
    if (rec.notes && rec.notes.length > 0) {
      pianoSynth.playMelody(rec.notes, 100, undefined, () => setIsPlayingAudio(false));
      setIsPlayingAudio(true);
    }
  };

  // 다시 작성 버튼 클릭 시 초기화
  const handleReset = () => {
    setName('');
    setMbti('');
    setExperience('초급자');
    setSelectedFeatures([]);
    setUserStory('');
    setErrorMessage('');
    setSubmittedMessage(null);
    pianoSynth.stopMelody();
    setIsPlayingAudio(false);
  };

  // 곡 미리듣기 토글
  const handleTogglePreview = () => {
    if (!currentRecommendation?.notes) return;
    if (isPlayingAudio) {
      pianoSynth.stopMelody();
      setIsPlayingAudio(false);
    } else {
      setIsPlayingAudio(true);
      pianoSynth.playMelody(currentRecommendation.notes, 90, undefined, () => {
        setIsPlayingAudio(false);
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#faf6f0] text-[#3e2723] py-8 px-4 flex flex-col justify-between">
      {/* 최대 너비 520px 가운데 정렬 컨테이너 */}
      <div className="w-full max-w-[520px] mx-auto bg-white rounded-2xl shadow-md p-6 sm:p-8 border border-[#e8dfd8]">
        {/* [페이지 상단] */}
        <header className="text-center mb-7">
          <div className="text-5xl mb-2 select-none" role="img" aria-label="피아노 로고">
            🎹
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-[#6b4226]">MBTI Piano</h1>
          <p className="text-sm text-[#8d6e63] mt-1">
            당신의 성격에 어울리는 피아노 곡을 찾아보세요
          </p>
        </header>

        {/* [추천 입력 항목 폼] */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* 이름 (필수, text) */}
          <div>
            <label htmlFor="user-name" className="block text-sm font-semibold text-[#5d4037] mb-1.5">
              이름 <span className="text-red-500">*</span>
            </label>
            <input
              id="user-name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errorMessage === '이름을 입력해주세요') setErrorMessage('');
              }}
              placeholder="이름을 입력해주세요"
              className="cafe-input"
            />
          </div>

          {/* MBTI 선택 (드롭다운) */}
          <div>
            <label htmlFor="user-mbti" className="block text-sm font-semibold text-[#5d4037] mb-1.5">
              MBTI 선택 <span className="text-red-500">*</span>
            </label>
            <select
              id="user-mbti"
              value={mbti}
              onChange={(e) => {
                setMbti(e.target.value);
                if (errorMessage === 'MBTI를 선택해주세요') setErrorMessage('');
              }}
              className="cafe-input cursor-pointer"
            >
              <option value="">MBTI를 선택하세요</option>
              {MBTI_LIST.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* 연주 경력 (라디오 버튼, 가로 배치) */}
          <div>
            <span className="block text-sm font-semibold text-[#5d4037] mb-2">
              연주 경력
            </span>
            <div className="flex flex-wrap gap-4 items-center">
              {(['입문자', '초급자', '중급자', '고급자'] as ExperienceLevel[]).map((level) => (
                <div key={level} className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    id={`exp-${level}`}
                    name="experience-level"
                    value={level}
                    checked={experience === level}
                    onChange={() => setExperience(level)}
                    className="accent-[#6b4226] cursor-pointer"
                  />
                  <label htmlFor={`exp-${level}`} className="text-sm text-[#4e342e] cursor-pointer">
                    {level}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* 선호하는 곡의 특징 (체크박스, 가로 배치) */}
          <div>
            <span className="block text-sm font-semibold text-[#5d4037] mb-2">
              선호하는 곡의 특징
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {SONG_FEATURES.map((feature, idx) => (
                <div key={feature} className="flex items-center gap-1.5">
                  <input
                    type="checkbox"
                    id={`feature-${idx}`}
                    checked={selectedFeatures.includes(feature)}
                    onChange={() => handleFeatureToggle(feature)}
                    className="accent-[#6b4226] cursor-pointer rounded"
                  />
                  <label
                    htmlFor={`feature-${idx}`}
                    className="text-sm text-[#4e342e] cursor-pointer select-none"
                  >
                    {feature}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* 좋아하는 음악이나 원하는 분위기 (textarea) */}
          <div>
            <label
              htmlFor="user-story"
              className="block text-sm font-semibold text-[#5d4037] mb-1.5"
            >
              좋아하는 음악이나 원하는 분위기
            </label>
            <textarea
              id="user-story"
              rows={3}
              value={userStory}
              onChange={(e) => setUserStory(e.target.value)}
              placeholder='예: "빠르고 화려하면서도 극적인 곡을 좋아합니다."'
              className="cafe-input resize-none"
            />
          </div>

          {/* [예상 금액: 큰 글씨(24px), 갈색, 굵게, 가운데 정렬, 천 단위 콤마 toLocaleString] */}
          <div className="pt-2 pb-1 text-center bg-[#faf6f0] rounded-xl p-3 border border-[#eedfcb]">
            <span className="text-xs text-[#8d6e63] block font-medium">
              맞춤 피아노 큐레이션 예상 금액
            </span>
            <div className="expected-price mt-1">
              {expectedPrice.toLocaleString()}원
            </div>
            <span className="text-[11px] text-[#a1887f]">
              (기본 10,000원 + {experience} + 취향 옵션 {selectedFeatures.length}개)
            </span>
          </div>

          {/* [실시간 추천 결과 표시 영역 - "피아노 곡 추천받기" 버튼 바로 위에 큰 글씨로 표시] */}
          <div className="bg-[#fbf7f4] border border-[#e2d5cb] rounded-xl p-4 text-center">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#8d6e63] block mb-1">
              실시간 맞춤 추천 곡
            </span>
            {currentRecommendation ? (
              <div className="space-y-1">
                <div className="text-lg sm:text-xl font-bold text-[#6b4226] leading-snug">
                  추천 곡: {currentRecommendation.composer} - "{currentRecommendation.title}" ({currentRecommendation.trait})
                </div>
                {/* 피아노 선율 미리듣기 버튼 */}
                {currentRecommendation.notes && (
                  <button
                    type="button"
                    onClick={handleTogglePreview}
                    className="inline-flex items-center gap-1.5 mt-2 text-xs font-semibold text-[#6b4226] bg-[#f0e6df] hover:bg-[#e7d8cf] px-3 py-1.5 rounded-full transition-colors cursor-pointer"
                  >
                    {isPlayingAudio ? (
                      <>
                        <VolumeX className="w-3.5 h-3.5 text-[#6b4226]" />
                        <span>선율 정지</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-3.5 h-3.5 text-[#6b4226]" />
                        <span>피아노 선율 미리듣기</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            ) : (
              <p className="text-sm text-[#a1887f]">
                MBTI를 선택하시면 어울리는 피아노 곡이 실시간으로 표시됩니다.
              </p>
            )}
          </div>

          {/* 유효성 검사 에러 알림 메시지 */}
          {errorMessage && (
            <div className="p-3 bg-red-50 text-red-700 text-sm font-medium rounded-lg border border-red-200 text-center animate-shake">
              ⚠️ {errorMessage}
            </div>
          )}

          {/* 버튼 영역: 피아노 곡 추천받기 & 다시 작성 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <button type="submit" className="cafe-button flex items-center justify-center gap-2">
              <Music className="w-4 h-4" />
              <span>피아노 곡 추천받기</span>
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="cafe-secondary-button flex items-center justify-center gap-2"
            >
              <span>다시 작성</span>
            </button>
          </div>
        </form>

        {/* [추천 확인 메시지: 연두색 배경, 초록 글씨, 둥근 모서리] */}
        {submittedMessage && (
          <div className="confirmation-box mt-6 whitespace-pre-line text-sm sm:text-base animate-fadeIn">
            {submittedMessage}
          </div>
        )}
      </div>

      {/* 푸터 */}
      <footer className="text-center text-xs text-[#a1887f] mt-8">
        © MBTI Piano Curation Board · 따뜻한 피아노 음악 쉼터
      </footer>
    </div>
  );
}
