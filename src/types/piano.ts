export type MBTIType =
  | 'INTJ' | 'INTP' | 'ENTJ' | 'ENTP'
  | 'INFJ' | 'INFP' | 'ENFJ' | 'ENFP'
  | 'ISTJ' | 'ISFJ' | 'ESTJ' | 'ESFJ'
  | 'ISTP' | 'ISFP' | 'ESTP' | 'ESFP';

export type MoodPreference = 'all' | 'lyrical' | 'epic' | 'contemplative' | 'bright';

export interface UserProfile {
  name: string;
  email: string;
  phone: string;
  mbti: MBTIType;
  moodPreference: MoodPreference;
  submittedAt: string;
}

export interface NoteEvent {
  note: string; // e.g. "C4", "D#4", "G5"
  duration: number; // in beats or seconds
}

export interface PianoPiece {
  id: string;
  mbti: MBTIType;
  title: string;
  koreanTitle: string;
  composer: string;
  composerKorean: string;
  era: string; // e.g. "낭만주의 (Romantic)", "고전주의 (Classical)", "인상주의 (Impressionism)"
  keySignature: string; // e.g. "C-sharp minor", "D-flat major"
  tempoBpm: number;
  temperamentGroup: '분석가형 (NT)' | '외교관형 (NF)' | '관리자형 (SJ)' | '탐험가형 (SP)';
  personalityKeyword: string;
  whyItMatches: string;
  curatorNote: string;
  listeningPoints: string[];
  recommendedPerformers: string[];
  coverImage: string;
  previewMelody: NoteEvent[];
}
