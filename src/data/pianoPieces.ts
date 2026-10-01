import { PianoPiece } from '../types/piano';

import grandPianoImg from '../assets/images/piano_grand_aesthetic_1790816944989.jpg';
import sheetNotesImg from '../assets/images/piano_sheet_notes_1790816960570.jpg';
import recitalHallImg from '../assets/images/piano_recital_hall_1790816972238.jpg';

export const PIANO_PIECES: Record<string, PianoPiece> = {
  INTJ: {
    id: 'bach-fugue-c-minor',
    mbti: 'INTJ',
    title: 'The Well-Tempered Clavier, Book 1: Fugue in C Minor, BWV 847',
    koreanTitle: '평균율 클라비어 곡집 1권: 푸가 2번 다단조',
    composer: 'Johann Sebastian Bach',
    composerKorean: '요한 제바스티안 바흐',
    era: '바로크 (Baroque)',
    keySignature: 'C minor (다단조)',
    tempoBpm: 84,
    temperamentGroup: '분석가형 (NT)',
    personalityKeyword: '치밀한 건축적 지성과 완벽한 구조미',
    whyItMatches:
      'INTJ는 본질을 꿰뚫어 보는 통찰력과 복잡한 원리를 하나의 유기적인 체계로 구축하는 전략가입니다. 바흐의 다단조 푸가는 3개의 성부가 수학적인 대위법으로 정교하게 얽히며 흔들리지 않는 논리적 필연성을 선사합니다. 정돈된 질서 속에 깃든 지적 카타르시스가 INTJ의 깊은 내면과 완벽하게 공명합니다.',
    curatorNote:
      '감정에 휘둘리지 않는 냉철한 구조적 완결성, 그리고 주제 동기가 거울처럼 대칭되고 변형되며 쌓아 올리는 지적 긴장감이 매혹적입니다.',
    listeningPoints: [
      '처음 단독으로 제시되는 주제 선율(Subject)의 간결하고도 명확한 추진력',
      '성부들이 한 겹씩 층위를 이루며 더해질 때 느껴지는 입체적인 대위적 긴장감',
      '종결부에서 하나의 확고한 결론으로 수렴하는 단호한 카덴차'
    ],
    recommendedPerformers: ['글렌 굴드 (Glenn Gould)', '안드라스 쉬프 (András Schiff)', '타티아나 니콜라예바 (Tatiana Nikolayeva)'],
    coverImage: grandPianoImg,
    previewMelody: [
      { note: 'C4', duration: 0.5 },
      { note: 'B3', duration: 0.5 },
      { note: 'C4', duration: 0.5 },
      { note: 'G3', duration: 0.5 },
      { note: 'Ab3', duration: 0.5 },
      { note: 'C4', duration: 0.5 },
      { note: 'B3', duration: 0.5 },
      { note: 'C4', duration: 0.5 },
      { note: 'D4', duration: 0.5 },
      { note: 'G3', duration: 0.5 },
      { note: 'Ab3', duration: 0.5 },
      { note: 'C4', duration: 0.5 },
      { note: 'B3', duration: 0.5 },
      { note: 'C4', duration: 1.0 },
      { note: 'Eb4', duration: 1.0 },
      { note: 'D4', duration: 1.0 },
      { note: 'C4', duration: 1.5 }
    ]
  },

  INTP: {
    id: 'debussy-clair-de-lune',
    mbti: 'INTP',
    title: 'Suite Bergamasque: III. Clair de Lune',
    koreanTitle: '베르가마스크 모음곡: 3곡 달빛',
    composer: 'Claude Debussy',
    composerKorean: '클로드 드뷔시',
    era: '인상주의 (Impressionism)',
    keySignature: 'D-flat major (내림라장조)',
    tempoBpm: 66,
    temperamentGroup: '분석가형 (NT)',
    personalityKeyword: '무한한 사색과 경계를 넘나드는 몽환적 상상력',
    whyItMatches:
      'INTP는 고정관념에 갇히지 않고 관습적 화성을 탈피해 새로운 세계관을 탐구하는 사상가입니다. 드뷔시의 [달빛]은 전통적인 기능화성의 굴레를 벗어나 9화음과 온음음계의 신비로운 공명을 탐색합니다. 밤하늘 은빛 달빛 아래 자유롭게 부유하는 사색의 자유가 INTP의 지적 유영과 닮아 있습니다.',
    curatorNote:
      '소리와 침묵 사이의 여백, 붓으로 터치하듯 퍼져 나가는 배음의 잔향이 끝없는 영감의 공간을 열어줍니다.',
    listeningPoints: [
      '첫 마디에서 부드럽게 하강하는 3도 화음의 나직하고 신비로운 울림',
      '템포 루바토(Tempo Rubato) 속에서 밀물과 썰물처럼 호흡하는 아르페지오',
      '마치 수면 위에 비친 달빛이 미풍에 흩어지는 듯한 고음역의 글리산도 감각'
    ],
    recommendedPerformers: ['알렉시스 바이센베르크 (Alexis Weissenberg)', '조성진 (Seong-Jin Cho)', '상송 프랑수아 (Samson François)'],
    coverImage: sheetNotesImg,
    previewMelody: [
      { note: 'F5', duration: 1.5 },
      { note: 'Eb5', duration: 1.0 },
      { note: 'Db5', duration: 1.5 },
      { note: 'C5', duration: 1.0 },
      { note: 'Bb4', duration: 1.5 },
      { note: 'Ab4', duration: 2.0 },
      { note: 'Db5', duration: 1.5 },
      { note: 'F5', duration: 1.0 },
      { note: 'Ab5', duration: 2.0 },
      { note: 'Gb5', duration: 1.5 },
      { note: 'F5', duration: 2.5 }
    ]
  },

  ENTJ: {
    id: 'rachmaninoff-prelude-c-sharp-minor',
    mbti: 'ENTJ',
    title: 'Morceaux de fantaisie, Op. 3 No. 2: Prelude in C-sharp Minor',
    koreanTitle: '환상적 소품집 작품번호 3-2: 전주곡 올림다단조 (모스크바의 종소리)',
    composer: 'Sergei Rachmaninoff',
    composerKorean: '세르게이 라흐마니노프',
    era: '후기 낭만주의 (Late Romantic)',
    keySignature: 'C-sharp minor (올림다단조)',
    tempoBpm: 60,
    temperamentGroup: '분석가형 (NT)',
    personalityKeyword: '거침없는 리더십과 묵직한 카리스마',
    whyItMatches:
      'ENTJ는 웅대한 비전을 세우고 주도적으로 현실을 장악하는 당당한 통솔자입니다. 도입부 3개의 저음 옥타브 종소리(A-G#-C#)는 운명을 선언하듯 거대한 존재감을 드러냅니다. 강렬한 에너지와 단단한 추진력, 목표를 향해 거침없이 전진하는 드라마가 ENTJ의 결단력을 대변합니다.',
    curatorNote:
      '피아노 건반 전체를 공명시키는 압도적인 포르티시모(fff) 화음과 폭풍처럼 휘몰아치는 아지타토(Agitato) 패시지가 심장을 고동치게 만듭니다.',
    listeningPoints: [
      '지축을 울리는 장엄한 세 개의 첫 음(Fortissimo 종소리 모티프)',
      '중간부에서 질주하는 반음계적 아르페지오의 긴박감',
      '4단 악보로 쓰일 만큼 거대하게 증폭되는 코다(Coda)의 웅장한 승리'
    ],
    recommendedPerformers: ['블라디미르 아슈케나지 (Vladimir Ashkenazy)', '에밀 길렐스 (Emil Gilels)', '임윤찬 (Yunchan Lim)'],
    coverImage: recitalHallImg,
    previewMelody: [
      { note: 'A3', duration: 1.5 },
      { note: 'G#3', duration: 1.5 },
      { note: 'C#3', duration: 2.5 },
      { note: 'REST', duration: 0.5 },
      { note: 'C#4', duration: 1.0 },
      { note: 'E4', duration: 1.0 },
      { note: 'D#4', duration: 1.0 },
      { note: 'C#4', duration: 1.0 },
      { note: 'B#3', duration: 1.5 },
      { note: 'C#4', duration: 2.5 }
    ]
  },

  ENTP: {
    id: 'liszt-la-campanella',
    mbti: 'ENTP',
    title: 'Grandes études de Paganini, S.141 No. 3: La Campanella',
    koreanTitle: '파가니니에 의한 대연습곡 3번: 라 캄파넬라 (종소리)',
    composer: 'Franz Liszt',
    composerKorean: '프란츠 리스트',
    era: '낭만주의 (Romantic)',
    keySignature: 'G-sharp minor (올림사단조)',
    tempoBpm: 120,
    temperamentGroup: '분석가형 (NT)',
    personalityKeyword: '눈부신 비르투오소 기교와 번뜩이는 재치',
    whyItMatches:
      'ENTP는 한계에 얽매이지 않고 즉흥적 영감과 두뇌 유희를 즐기는 창조적 혁신가입니다. 리스트의 [라 캄파넬라]는 피아노 고음역의 기민한 도약, 트릴, 아르페지오를 통해 인간의 한계를 시험하는 화려한 기교를 선보입니다. 틀을 깨부수고 무대를 장악하는 짜릿한 지적 도발이 ENTP와 일치합니다.',
    curatorNote:
      '청명하고 투명한 작은 종소리가 순식간에 눈부신 불꽃놀이처럼 변주되며 듣는 이를 매료시킵니다.',
    listeningPoints: [
      '오른손이 2옥타브를 번개처럼 도약하며 울리는 고음 D#6의 맑은 타건',
      '경쾌한 스타카토와 연속 트릴이 만드는 역동적인 리듬감',
      '피날레로 치달을수록 거침없이 폭발하는 화려한 옥타브 질주'
    ],
    recommendedPerformers: ['에프게니 키신 (Evgeny Kissin)', '랑랑 (Lang Lang)', '조지 치프라 (Georges Cziffra)'],
    coverImage: grandPianoImg,
    previewMelody: [
      { note: 'D#6', duration: 0.4 },
      { note: 'D#5', duration: 0.4 },
      { note: 'D#6', duration: 0.4 },
      { note: 'C#6', duration: 0.4 },
      { note: 'B5', duration: 0.4 },
      { note: 'A#5', duration: 0.4 },
      { note: 'B5', duration: 0.4 },
      { note: 'G#5', duration: 0.8 },
      { note: 'D#6', duration: 0.4 },
      { note: 'D#5', duration: 0.4 },
      { note: 'D#6', duration: 0.4 },
      { note: 'C#6', duration: 0.4 },
      { note: 'B5', duration: 0.4 },
      { note: 'A#5', duration: 0.4 },
      { note: 'G#5', duration: 1.2 }
    ]
  },

  INFJ: {
    id: 'chopin-nocturne-c-sharp-minor',
    mbti: 'INFJ',
    title: 'Nocturne in C-sharp Minor, Op. posth. B.49 (Lento con gran espressione)',
    koreanTitle: '야상곡 올림다단조 유작 (렌토 콘 그란 에스프레시오네)',
    composer: 'Frédéric Chopin',
    composerKorean: '프레데리크 쇼팽',
    era: '낭만주의 (Romantic)',
    keySignature: 'C-sharp minor (올림다단조)',
    tempoBpm: 63,
    temperamentGroup: '외교관형 (NF)',
    personalityKeyword: '영혼을 어루만지는 통찰과 깊은 위로',
    whyItMatches:
      'INFJ는 타인의 아픔을 깊이 공감하며 내면에 숭고한 영적 이상을 품은 신비로운 옹호자입니다. 쇼팽이 누이 루드비카를 위해 쓴 이 야상곡은 비극적 슬픔을 절제된 아름다움으로 승화시킵니다. 어둠 속에서 조용히 반짝이는 촛불처럼, 상처 입은 마음을 고요히 품어주는 선율이 INFJ의 영혼과 맞닿아 있습니다.',
    curatorNote:
      '피아니시모(pp)로 읊조리는 애수의 멜로디는 듣는 이의 가장 여린 내면까지 가만히 어루만집니다.',
    listeningPoints: [
      '왼손의 부드러운 아르페지오 베이스 위에 얹히는 한숨 같은 오른손의 멜리즈마',
      '중간부에 등장하는 콘체르토 2번의 회상 테마와 아련한 노스탤지어',
      '하늘로 증발하듯 사라지는 마지막 섬세한 35연음의 아라베스크 하강'
    ],
    recommendedPerformers: ['마리아 주앙 피레스 (Maria João Pires)', '블라디미르 호로비츠 (Vladimir Horowitz)', '조성진 (Seong-Jin Cho)'],
    coverImage: sheetNotesImg,
    previewMelody: [
      { note: 'G#4', duration: 1.5 },
      { note: 'C#5', duration: 1.0 },
      { note: 'E5', duration: 1.0 },
      { note: 'D#5', duration: 0.8 },
      { note: 'C#5', duration: 0.8 },
      { note: 'B#4', duration: 1.2 },
      { note: 'C#5', duration: 1.5 },
      { note: 'G#4', duration: 2.0 },
      { note: 'E4', duration: 1.0 },
      { note: 'D#4', duration: 1.0 },
      { note: 'C#4', duration: 2.0 }
    ]
  },

  INFP: {
    id: 'chopin-ballade-no-1',
    mbti: 'INFP',
    title: 'Ballade No. 1 in G Minor, Op. 23',
    koreanTitle: '발라드 1번 사단조, 작품번호 23',
    composer: 'Frédéric Chopin',
    composerKorean: '프레데리크 쇼팽',
    era: '낭만주의 (Romantic)',
    keySignature: 'G minor (사단조)',
    tempoBpm: 72,
    temperamentGroup: '외교관형 (NF)',
    personalityKeyword: '시적인 이상주의와 내면의 순수한 열정',
    whyItMatches:
      'INFP는 마음속에 하나의 온전한 문학적 우주를 품고 살아가는 낭만적 중재자입니다. 미츠키에비치의 서사시에서 영감을 받은 쇼팽의 발라드 1번은 서정적인 고독부터 벅차오르는 열망, 그리고 비극적 코다에 이르기까지 파란만장한 감정의 파고를 그려냅니다. 진실된 감정의 순수함을 간직한 INFP를 위한 완벽한 헌정곡입니다.',
    curatorNote:
      '영화 [피아니스트]에서 폐허 속 슈필만이 폐허의 침묵을 찢고 연주했던 바로 그 불멸의 선율입니다.',
    listeningPoints: [
      '무겁게 가라앉는 도입부 라르고(Largo) 옥타브의 질문 던지기',
      '내림마장조로 조옮김하며 펼쳐지는 제2주제의 천상적이고 포근한 사랑의 고백',
      '프레스토 콘 푸오코(Presto con fuoco)로 폭풍처럼 소용돌이치는 격정의 피날레'
    ],
    recommendedPerformers: ['크리스티안 지메르만 (Krystian Zimerman)', '블라디미르 호로비츠 (Vladimir Horowitz)', '임윤찬 (Yunchan Lim)'],
    coverImage: recitalHallImg,
    previewMelody: [
      { note: 'C3', duration: 1.5 },
      { note: 'Ab3', duration: 1.0 },
      { note: 'Eb4', duration: 1.5 },
      { note: 'G4', duration: 1.0 },
      { note: 'C5', duration: 2.0 },
      { note: 'Bb4', duration: 0.8 },
      { note: 'Ab4', duration: 0.8 },
      { note: 'G4', duration: 1.2 },
      { note: 'F#4', duration: 1.5 },
      { note: 'G4', duration: 2.5 }
    ]
  },

  ENFJ: {
    id: 'tchaikovsky-the-seasons-june',
    mbti: 'ENFJ',
    title: 'The Seasons, Op. 37a: VI. June "Barcarolle"',
    koreanTitle: '사계 작품번호 37a: 6월 "뱃노래 (뱃길 따라 흐르는 정취)"',
    composer: 'Pyotr Ilyich Tchaikovsky',
    composerKorean: '표트르 일리치 차이콥스키',
    era: '낭만주의 (Romantic)',
    keySignature: 'G minor (사단조)',
    tempoBpm: 76,
    temperamentGroup: '외교관형 (NF)',
    personalityKeyword: '사람의 마음을 이어주는 따스한 온기와 포용',
    whyItMatches:
      'ENFJ는 주변 사람들의 잠재력을 이끌어내고 세상에 온기를 퍼뜨리는 정의로운 선도자입니다. 차이콥스키의 6월 [뱃노래]는 잔잔한 물결 위를 미끄러지듯 유려한 선율로 듣는 이의 마음을 편안하게 감쌉니다. 서정적인 슬픔마저도 깊은 사랑의 품으로 보듬어 안는 곡의 성격이 ENFJ의 다정함과 닮았습니다.',
    curatorNote:
      '플레셰예프의 시 "해변으로 가자, 그곳에서 물결이 우리의 발을 씻겨주리라"라는 구절처럼 푸근한 쉼을 전합니다.',
    listeningPoints: [
      '6/8박자의 완만하고 흔들리는 뱃노래 리듬이 주는 평온한 안정감',
      '단조에서 장조로 햇살이 비추듯 번져가는 가슴 뭉클한 2주제',
      '피아니시시모(ppp)로 물안개 속으로 사라지듯 맺어지는 감미로운 여운'
    ],
    recommendedPerformers: ['스비아토슬라프 리히터 (Sviatoslav Richter)', '미하일 플레트네프 (Mikhail Pletnev)', '데니스 마추예프 (Denis Matsuev)'],
    coverImage: grandPianoImg,
    previewMelody: [
      { note: 'D5', duration: 1.0 },
      { note: 'Bb4', duration: 0.5 },
      { note: 'G4', duration: 1.0 },
      { note: 'D4', duration: 0.5 },
      { note: 'F#4', duration: 1.0 },
      { note: 'G4', duration: 1.5 },
      { note: 'D5', duration: 1.0 },
      { note: 'C5', duration: 0.5 },
      { note: 'Bb4', duration: 1.0 },
      { note: 'A4', duration: 0.5 },
      { note: 'G4', duration: 2.0 }
    ]
  },

  ENFP: {
    id: 'schubert-impromptu-op90-no4',
    mbti: 'ENFP',
    title: '4 Impromptus, Op. 90 D.899: No. 4 in A-flat Major',
    koreanTitle: '4개의 즉흥곡 작품번호 90: 4번 내림가장조 (알레그레토)',
    composer: 'Franz Schubert',
    composerKorean: '프란츠 슈베르트',
    era: '초기 낭만주의 (Early Romantic)',
    keySignature: 'A-flat major (내림가장조)',
    tempoBpm: 126,
    temperamentGroup: '외교관형 (NF)',
    personalityKeyword: '생동감 넘치는 호기심과 반짝이는 상상력',
    whyItMatches:
      'ENFP는 긍정적인 열정으로 새로운 가능성을 찾아 헤매며 사람들에게 활력을 불어넣는 재기발랄한 활동가입니다. 슈베르트 즉흥곡 4번의 도입부는 고음역에서 분수처럼 쏟아져 내리는 영롱한 아르페지오로 시작해 끊임없이 다채로운 화성적 모험을 떠납니다. 춤추듯 자유롭고 생기 넘치는 ENFP의 에너지 그 자체입니다.',
    curatorNote:
      '햇살을 머금은 맑은 물방울이 폭포처럼 굴러 떨어지다 격정적인 단조의 트리오로 극적인 반전을 이룹니다.',
    listeningPoints: [
      '오른손의 영롱한 하강 아르페지오가 만들어내는 청량하고 설레는 도입부',
      '트리오(중간부)에서 나타나는 슈베르트 특유의 열정적이고 비장한 노래',
      '다시 밝은 햇살로 돌아오는 활기찬 귀환의 기쁨'
    ],
    recommendedPerformers: ['라두 루푸 (Radu Lupu)', '머레이 페라이어 (Murray Perahia)', '알프레드 브렌델 (Alfred Brendel)'],
    coverImage: sheetNotesImg,
    previewMelody: [
      { note: 'Ab5', duration: 0.3 },
      { note: 'Eb5', duration: 0.3 },
      { note: 'C5', duration: 0.3 },
      { note: 'Ab4', duration: 0.3 },
      { note: 'Eb4', duration: 0.3 },
      { note: 'C4', duration: 0.3 },
      { note: 'Ab3', duration: 0.6 },
      { note: 'C4', duration: 0.4 },
      { note: 'Eb4', duration: 0.4 },
      { note: 'Ab4', duration: 0.8 },
      { note: 'C5', duration: 0.8 },
      { note: 'Eb5', duration: 1.2 }
    ]
  },

  ISTJ: {
    id: 'bach-goldberg-variations-aria',
    mbti: 'ISTJ',
    title: 'Goldberg Variations, BWV 988: Aria',
    koreanTitle: '골드베르크 변주곡: 아리아 (Aria)',
    composer: 'Johann Sebastian Bach',
    composerKorean: '요한 제바스티안 바흐',
    era: '바로크 (Baroque)',
    keySignature: 'G major (사장조)',
    tempoBpm: 60,
    temperamentGroup: '관리자형 (SJ)',
    personalityKeyword: '원칙과 신뢰, 단정하고 변함없는 기본의 미학',
    whyItMatches:
      'ISTJ는 책임감이 투철하고 체계적이며 흔들림 없이 약속을 지키는 청렴결백한 논리주의자입니다. [골드베르크 변주곡]의 시작과 끝을 장식하는 [아리아]는 32마디의 완벽한 저음 베이스 진행 위에 단아한 사라방드 리듬을 얹어 평정심을 선물합니다. 화려한 과장 없이 본질의 숭고함을 지키는 모습이 ISTJ의 미덕입니다.',
    curatorNote:
      '30개의 거대한 변주를 모두 마치고 다시 첫 아리아로 돌아왔을 때 느껴지는 생의 완결성과 묵직한 감동.',
    listeningPoints: [
      '3/4박자의 정갈하고 품격 있는 프랑스풍 사라방드 리듬',
      '절제된 장식음(Trill, Mordent)이 빚어내는 단아한 기품',
      '불필요한 감정 과잉을 배제한 정결하고 투명한 화음의 균형'
    ],
    recommendedPerformers: ['글렌 굴드 (Glenn Gould, 1981년반)', '안드라스 쉬프 (András Schiff)', '머레이 페라이어 (Murray Perahia)'],
    coverImage: grandPianoImg,
    previewMelody: [
      { note: 'G4', duration: 1.0 },
      { note: 'G4', duration: 0.5 },
      { note: 'A4', duration: 0.5 },
      { note: 'B4', duration: 1.5 },
      { note: 'A4', duration: 0.5 },
      { note: 'G4', duration: 0.5 },
      { note: 'F#4', duration: 1.5 },
      { note: 'E4', duration: 0.5 },
      { note: 'D4', duration: 2.0 },
      { note: 'B4', duration: 1.0 },
      { note: 'C5', duration: 0.5 },
      { note: 'D5', duration: 2.0 }
    ]
  },

  ISFJ: {
    id: 'chopin-raindrop-prelude',
    mbti: 'ISFJ',
    title: '24 Preludes, Op. 28 No. 15 in D-flat Major "Raindrop"',
    koreanTitle: '24개의 전주곡 작품번호 28: 15번 내림라장조 "빗방울"',
    composer: 'Frédéric Chopin',
    composerKorean: '프레데리크 쇼팽',
    era: '낭만주의 (Romantic)',
    keySignature: 'D-flat major (내림라장조)',
    tempoBpm: 68,
    temperamentGroup: '관리자형 (SJ)',
    personalityKeyword: '묵묵한 헌신과 변함없는 안식처가 되어주는 온기',
    whyItMatches:
      'ISFJ는 사랑하는 이들을 위해 묵묵히 헌신하며 평화와 안정을 지켜내는 따뜻한 수호자입니다. 쇼팽의 [빗방울 전주곡]은 마요르카 섬의 처마 밑에서 떨어지는 규칙적인 빗방울(A-flat 음의 반복)처럼 변함없이 흐르며 쉼을 제공합니다. 중간부의 어두운 폭풍우 속에서도 다시 평온한 햇살을 되찾아주는 위로가 ISFJ의 헌신과 같습니다.',
    curatorNote:
      '어떤 비바람이 몰아쳐도 묵묵히 자리를 지켜주는 든든한 나무 그늘 같은 포근한 명곡입니다.',
    listeningPoints: [
      '곡 전체를 관통하며 똑, 똑 떨어지는 규칙적인 오스티나토(반복음)의 편안함',
      '어두운 올림다단조로 바뀌며 내면의 불안과 번민을 담담히 마주하는 중간부',
      '다시 밝은 빛으로 안도감을 선사하는 내림라장조의 다정한 귀환'
    ],
    recommendedPerformers: ['마르타 아르헤리치 (Martha Argerich)', '블라디미르 아슈케나지 (Vladimir Ashkenazy)', '이보 포고렐리치 (Ivo Pogorelich)'],
    coverImage: sheetNotesImg,
    previewMelody: [
      { note: 'F4', duration: 1.0 },
      { note: 'Ab4', duration: 1.0 },
      { note: 'Db5', duration: 1.5 },
      { note: 'C5', duration: 0.5 },
      { note: 'Bb4', duration: 1.0 },
      { note: 'Ab4', duration: 1.5 },
      { note: 'F4', duration: 1.0 },
      { note: 'Gb4', duration: 0.5 },
      { note: 'Ab4', duration: 2.0 },
      { note: 'Eb4', duration: 2.0 }
    ]
  },

  ESTJ: {
    id: 'beethoven-pathetique-rondo',
    mbti: 'ESTJ',
    title: 'Piano Sonata No. 8 in C Minor, Op. 13 "Pathétique": III. Rondo (Allegro)',
    koreanTitle: '피아노 소나타 8번 다단조 작품번호 13 "비창": 3악장 론도 (알레그로)',
    composer: 'Ludwig van Beethoven',
    composerKorean: '루트비히 판 베토벤',
    era: '고전주의 (Classical)',
    keySignature: 'C minor (다단조)',
    tempoBpm: 132,
    temperamentGroup: '관리자형 (SJ)',
    personalityKeyword: '명확한 질서와 흔들리지 않는 원칙적 실행력',
    whyItMatches:
      'ESTJ는 명확한 기준과 탁월한 조직력으로 혼돈을 정돈하고 목표를 실현하는 엄격한 경영자입니다. 베토벤 비창 소나타의 론도 악장은 명료한 구조적 규칙 속에 한 치의 오차도 없는 리듬의 추진력을 뿜어냅니다. 고난에 굴복하지 않고 결단력 있게 극복해 나가는 강인함이 ESTJ의 기상과 통합니다.',
    curatorNote:
      '정확한 타건과 절도 있는 악센트, 흔들림 없는 템포 유지가 주는 지적 쾌감이 일품입니다.',
    listeningPoints: [
      '귀에 쏙 들어오는 명쾌하고 리드미컬한 론도 메인 테마의 질주감',
      '엄격한 소나타 론도 형식의 균형미와 탄탄한 음악적 논리',
      '망설임 없이 결연하게 내리꽂히는 종결부의 단호한 포르테'
    ],
    recommendedPerformers: ['에밀 길렐스 (Emil Gilels)', '다니엘 바렌보임 (Daniel Barenboim)', '빌헬름 켐프 (Wilhelm Kempff)'],
    coverImage: recitalHallImg,
    previewMelody: [
      { note: 'G4', duration: 0.5 },
      { note: 'C5', duration: 0.5 },
      { note: 'D5', duration: 0.5 },
      { note: 'Eb5', duration: 0.5 },
      { note: 'D5', duration: 0.5 },
      { note: 'C5', duration: 0.5 },
      { note: 'B4', duration: 0.5 },
      { note: 'C5', duration: 0.5 },
      { note: 'D5', duration: 1.0 },
      { note: 'G4', duration: 1.0 },
      { note: 'Eb5', duration: 1.0 },
      { note: 'D5', duration: 1.0 },
      { note: 'C5', duration: 1.5 }
    ]
  },

  ESFJ: {
    id: 'liszt-liebestraum-no3',
    mbti: 'ESFJ',
    title: 'Liebesträume, S.541 No. 3 in A-flat Major (Notturno)',
    koreanTitle: '사랑의 꿈 3번 내림가장조 "오 사랑하라, 사랑할 수 있는 한"',
    composer: 'Franz Liszt',
    composerKorean: '프란츠 리스트',
    era: '낭만주의 (Romantic)',
    keySignature: 'A-flat major (내림가장조)',
    tempoBpm: 70,
    temperamentGroup: '관리자형 (SJ)',
    personalityKeyword: '조화로운 다정함과 나눌수록 커지는 사랑의 선율',
    whyItMatches:
      'ESFJ는 주변 이들의 행복을 세심하게 챙기며 공동체의 조화를 꽃피우는 사교적인 외교관입니다. 리스트의 [사랑의 꿈 3번]은 페르디난트 프라일리히라트의 시 "사랑하라, 그대를 사랑할 심장이 뛰고 있는 한"을 바탕으로 쓴 노래입니다. 풍성한 아르페지오 반주 위에 얹힌 감미로운 멜로디는 타인을 향한 아낌없는 진심을 대변합니다.',
    curatorNote:
      '두 번의 화려한 카덴차를 거치며 사랑의 벅찬 감격이 온 공간을 가득 채웁니다.',
    listeningPoints: [
      '양손의 엄지손가락이 번갈아 노래하는 벨칸토 오페라 아리아 같은 주선율',
      '하프처럼 공간을 수놓는 환상적인 아르페지오의 감싸 안음',
      '온기 어린 미소로 사람들의 마음을 하나로 엮는 감동적인 클라이맥스'
    ],
    recommendedPerformers: ['에프게니 키신 (Evgeny Kissin)', '호르헤 볼레 (Jorge Bolet)', '조성진 (Seong-Jin Cho)'],
    coverImage: grandPianoImg,
    previewMelody: [
      { note: 'C4', duration: 1.0 },
      { note: 'Eb4', duration: 1.0 },
      { note: 'Ab4', duration: 1.5 },
      { note: 'C5', duration: 1.0 },
      { note: 'Bb4', duration: 0.5 },
      { note: 'Ab4', duration: 1.0 },
      { note: 'G4', duration: 1.0 },
      { note: 'Ab4', duration: 1.5 },
      { note: 'F4', duration: 1.0 },
      { note: 'Eb4', duration: 2.0 }
    ]
  },

  ISTP: {
    id: 'ravel-jeux-deau',
    mbti: 'ISTP',
    title: "Jeux d'eau (Fountains)",
    koreanTitle: '물의 희열 (물의 장난)',
    composer: 'Maurice Ravel',
    composerKorean: '모리스 라벨',
    era: '인상주의 (Impressionism)',
    keySignature: 'E major (마장조)',
    tempoBpm: 138,
    temperamentGroup: '탐험가형 (SP)',
    personalityKeyword: '정교한 감각 제어와 도구의 본질을 꿰뚫는 마에스트로',
    whyItMatches:
      'ISTP는 냉철한 관찰력과 즉흥적 문제해결력으로 도구를 자유자재로 다루는 만능 재주꾼입니다. 라벨의 [물의 장난]은 피아노라는 악기가 가진 음향적 잠재력을 극대화하여 물방울의 튀김, 분수의 분사, 햇살의 반사를 완벽한 기술적 통제로 구현해 냅니다. 군더더기 없는 장인정신과 즉각적 센스가 ISTP와 빼닮았습니다.',
    curatorNote:
      '앙리 드 레니에의 시 "물에 입 맞추는 강의 신이 미소 짓는다"는 글귀처럼 세련되고 투명한 감각의 극치.',
    listeningPoints: [
      '피아노 초고음역에서 번뜩이는 7화음과 9화음의 청명한 타건',
      '양손이 복잡하게 교차하며 물결치는 정밀한 기교적 쾌감',
      '감상주의에 빠지지 않고 물질의 순수한 물성을 즐기는 쿨한 감각'
    ],
    recommendedPerformers: ['마르타 아르헤리치 (Martha Argerich)', '장-이브 티보데 (Jean-Yves Thibaudet)', '블라도 페를뮈테르 (Vlado Perlemuter)'],
    coverImage: sheetNotesImg,
    previewMelody: [
      { note: 'G#5', duration: 0.3 },
      { note: 'B5', duration: 0.3 },
      { note: 'D#6', duration: 0.3 },
      { note: 'F#6', duration: 0.3 },
      { note: 'E6', duration: 0.4 },
      { note: 'D#6', duration: 0.4 },
      { note: 'B5', duration: 0.4 },
      { note: 'G#5', duration: 0.4 },
      { note: 'F#5', duration: 0.4 },
      { note: 'E5', duration: 0.8 },
      { note: 'G#5', duration: 0.8 },
      { note: 'B5', duration: 1.2 }
    ]
  },

  ISFP: {
    id: 'debussy-reflets-dans-leau',
    mbti: 'ISFP',
    title: "Images, 1ère série: I. Reflets dans l'eau",
    koreanTitle: '영상 1집: 1곡 물의 반영 (물에 비치는 그림자)',
    composer: 'Claude Debussy',
    composerKorean: '클로드 드뷔시',
    era: '인상주의 (Impressionism)',
    keySignature: 'D-flat major (내림라장조)',
    tempoBpm: 69,
    temperamentGroup: '탐험가형 (SP)',
    personalityKeyword: '섬세한 미적 감수성과 순간의 빛깔을 포착하는 예술가',
    whyItMatches:
      'ISFP는 오감을 통해 세상의 아름다움을 음미하며 자신만의 온화한 감성을 조용히 표현하는 호기심 많은 예술가입니다. 드뷔시의 [물의 반영]은 고요한 호수에 떨어진 작은 물방울 하나가 퍼져 나가며 만들어내는 동심원과 빛의 굴절을 그립니다. 강요하지 않는 여백의 미와 은은한 감성의 깊이가 ISFP의 영혼과 울림을 나눕니다.',
    curatorNote:
      '소리를 듣는 것을 넘어, 햇살이 부서지는 맑은 물빛의 색채를 눈앞에 보듯 느끼게 해줍니다.',
    listeningPoints: [
      '물방울이 퐁당 떨어지듯 고요를 깨우는 첫 3마디의 모티프',
      '펜타토닉(5음음계)과 온음음계가 어우러져 피어나는 몽환적 색채감',
      '거울 같은 수면으로 다시 차분히 돌아오는 서정적인 마무리'
    ],
    recommendedPerformers: ['아르투로 베네데티 미켈란젤리 (Arturo Benedetti Michelangeli)', '피에르-로랑 에마르 (Pierre-Laurent Aimard)', '조성진 (Seong-Jin Cho)'],
    coverImage: grandPianoImg,
    previewMelody: [
      { note: 'Ab4', duration: 0.8 },
      { note: 'F4', duration: 0.8 },
      { note: 'Eb4', duration: 0.8 },
      { note: 'Db4', duration: 1.5 },
      { note: 'Ab4', duration: 0.8 },
      { note: 'F4', duration: 0.8 },
      { note: 'Eb4', duration: 0.8 },
      { note: 'Db4', duration: 2.0 },
      { note: 'F5', duration: 1.0 },
      { note: 'Ab5', duration: 1.0 },
      { note: 'Db6', duration: 1.5 }
    ]
  },

  ESTP: {
    id: 'brahms-hungarian-dance-no5',
    mbti: 'ESTP',
    title: 'Hungarian Dances, WoO 1: No. 5 in F-sharp Minor',
    koreanTitle: '헝가리 무곡 5번 올림바단조 (알레그로)',
    composer: 'Johannes Brahms',
    composerKorean: '요하네스 브람스',
    era: '낭만주의 (Romantic)',
    keySignature: 'F-sharp minor (올림바단조)',
    tempoBpm: 128,
    temperamentGroup: '탐험가형 (SP)',
    personalityKeyword: '짜릿한 스릴과 넘치는 활력의 승부사',
    whyItMatches:
      'ESTP는 순발력이 뛰어나고 현재의 에너지를 온몸으로 즐기는 대담한 모험가입니다. 브람스 [헝가리 무곡 5번]은 집시 음악의 차르다시(Csárdás) 리듬을 기반으로, 느리고 서정적인 도입부(Lassú)에서 폭발적인 질주(Friss)로 급변하며 심박수를 끌어올립니다. 예측 불가능한 스릴과 야성적인 생명력이 ESTP의 심장을 뛰게 합니다.',
    curatorNote:
      '발을 구르고 손뼉을 치고 싶게 만드는 강렬한 싱코페이션(당김음)과 급제동, 급발진의 쾌감!',
    listeningPoints: [
      '밀고 당기는 템포 루바토의 절묘한 긴장감과 해소',
      '올림바장조로 전조되며 불꽃처럼 타오르는 신나는 춤곡의 리듬',
      '끝까지 브레이크 없이 내달리는 호쾌한 피날레'
    ],
    recommendedPerformers: ['에브게니 키신 (Evgeny Kissin)', '카티아 부니아티슈빌리 (Katia Buniatishvili)', '율리어스 카첸 (Julius Katchen)'],
    coverImage: recitalHallImg,
    previewMelody: [
      { note: 'F#4', duration: 0.5 },
      { note: 'G#4', duration: 0.5 },
      { note: 'A4', duration: 0.8 },
      { note: 'C#5', duration: 0.5 },
      { note: 'B4', duration: 0.5 },
      { note: 'A4', duration: 0.5 },
      { note: 'G#4', duration: 0.5 },
      { note: 'F#4', duration: 1.2 },
      { note: 'C#5', duration: 0.5 },
      { note: 'D5', duration: 0.5 },
      { note: 'E5', duration: 0.8 },
      { note: 'G#5', duration: 0.5 },
      { note: 'F#5', duration: 1.5 }
    ]
  },

  ESFP: {
    id: 'mozart-rondo-alla-turca',
    mbti: 'ESFP',
    title: 'Piano Sonata No. 11 in A Major, K. 331: III. Alla Turca (Allegretto)',
    koreanTitle: '피아노 소나타 11번 가장조, K.331: 3악장 터키 행진곡',
    composer: 'Wolfgang Amadeus Mozart',
    composerKorean: '볼프강 아마데우스 모차르트',
    era: '고전주의 (Classical)',
    keySignature: 'A minor / A major (가단조/가장조)',
    tempoBpm: 120,
    temperamentGroup: '탐험가형 (SP)',
    personalityKeyword: '모두를 미소 짓게 만드는 눈부신 매력과 경쾌한 흥',
    whyItMatches:
      'ESFP는 어디서든 즐거움을 만들어내고 스포트라이트를 받는 자유로운 영혼의 연예인입니다. 모차르트의 [터키 행진곡]은 오스만 제국 군악대의 경쾌한 북소리와 심벌즈 소리를 피아노 건반 위에서 유쾌하게 재현합니다. 듣는 순간 저절로 고개를 끄덕이게 만드는 흥겨운 리듬과 천진난만한 기쁨이 ESFP의 밝은 기운과 꼭 맞습니다.',
    curatorNote:
      '어떤 우울함도 단숨에 날려버리는 모차르트 특유의 반짝이는 위트와 생기발랄함.',
    listeningPoints: [
      '오른손의 경쾌한 16분음표 아르페지오가 이끄는 사랑스러운 행진곡 테마',
      '가장조(A major) 코다에서 터키 군악대의 타악기처럼 쿵짝쿵짝 울리는 베이스',
      '피아노 건반 위를 통통 튀며 날아다니는 듯한 명랑한 터치'
    ],
    recommendedPerformers: ['글렌 굴드 (Glenn Gould)', '머레이 페라이어 (Murray Perahia)', '알리시아 데 라로차 (Alicia de Larrocha)'],
    coverImage: grandPianoImg,
    previewMelody: [
      { note: 'B4', duration: 0.25 },
      { note: 'A4', duration: 0.25 },
      { note: 'G#4', duration: 0.25 },
      { note: 'A4', duration: 0.25 },
      { note: 'C5', duration: 0.8 },
      { note: 'D5', duration: 0.25 },
      { note: 'C5', duration: 0.25 },
      { note: 'B4', duration: 0.25 },
      { note: 'C5', duration: 0.25 },
      { note: 'E5', duration: 0.8 },
      { note: 'F5', duration: 0.25 },
      { note: 'E5', duration: 0.25 },
      { note: 'D#5', duration: 0.25 },
      { note: 'E5', duration: 0.25 },
      { note: 'B5', duration: 0.5 },
      { note: 'A5', duration: 0.5 },
      { note: 'G#5', duration: 0.5 },
      { note: 'A5', duration: 1.0 }
    ]
  }
};

export const MBTI_OPTIONS: Array<{ code: import('../types/piano').MBTIType; label: string; group: string }> = [
  // Analysts
  { code: 'INTJ', label: 'INTJ 용의주도한 전략가', group: '분석가형 (NT)' },
  { code: 'INTP', label: 'INTP 논리적인 사색가', group: '분석가형 (NT)' },
  { code: 'ENTJ', label: 'ENTJ 대담한 통솔자', group: '분석가형 (NT)' },
  { code: 'ENTP', label: 'ENTP 뜨거운 논쟁을 즐기는 변론가', group: '분석가형 (NT)' },
  // Diplomats
  { code: 'INFJ', label: 'INFJ 통찰력 있는 선지자', group: '외교관형 (NF)' },
  { code: 'INFP', label: 'INFP 열정적인 중재자', group: '외교관형 (NF)' },
  { code: 'ENFJ', label: 'ENFJ 정의로운 지도자', group: '외교관형 (NF)' },
  { code: 'ENFP', label: 'ENFP 재기발랄한 활동가', group: '외교관형 (NF)' },
  // Sentinels
  { code: 'ISTJ', label: 'ISTJ 청렴결백한 논리주의자', group: '관리자형 (SJ)' },
  { code: 'ISFJ', label: 'ISFJ 용감한 수호자', group: '관리자형 (SJ)' },
  { code: 'ESTJ', label: 'ESTJ 엄격한 관리자', group: '관리자형 (SJ)' },
  { code: 'ESFJ', label: 'ESFJ 사교적인 외교관', group: '관리자형 (SJ)' },
  // Explorers
  { code: 'ISTP', label: 'ISTP 만능 재주꾼', group: '탐험가형 (SP)' },
  { code: 'ISFP', label: 'ISFP 호기심 많은 예술가', group: '탐험가형 (SP)' },
  { code: 'ESTP', label: 'ESTP 모험을 즐기는 사업가', group: '탐험가형 (SP)' },
  { code: 'ESFP', label: 'ESFP 자유로운 영혼의 연예인', group: '탐험가형 (SP)' }
];
