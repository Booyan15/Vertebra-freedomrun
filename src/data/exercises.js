function getFrames(slug, title, count) {
  return Array.from({ length: count }, (_, index) => {
    const fileName = `frame-${String(index + 1).padStart(2, '0')}.webp`;

    return {
      src: `/exercises/${slug}/${fileName}`,
      alt: `${title} - frame ${index + 1}`,
      fileName
    };
  });
}

const exerciseBase = [
  {
    number: '01',
    slug: 'foot-toes',
    title: 'Мобилизација на стапалото и прстите',
    area: 'стапало',
    instruction:
      'Застанете стабилно. Подигнувајте ги прстите од подлогата, потоа спуштете ги и нежно притиснете со целото стапало.',
    duration: '8–10 повторувања по стапало',
    why:
      'Го буди контактот со подлогата, ја подобрува стабилноста и го подготвува стапалото за првиот удар при трчање.',
    expectedFrames: 5,
    view: 'lower-body close-up'
  },
  {
    number: '02',
    slug: 'ankles',
    title: 'Мобилизација на глуждовите',
    area: 'глужд',
    instruction:
      'Поставете ја тежината на едната нога и правете бавни кругови со глуждот во двата правци.',
    duration: '6 кругови во секој правец по нога',
    why:
      'Го зголемува опсегот на движење и помага чекорот да биде полесен, постабилен и помалку крут.',
    expectedFrames: 5,
    view: 'lower-body close-up'
  },
  {
    number: '03',
    slug: 'calves',
    title: 'Активирање на листовите',
    area: 'листови',
    instruction:
      'Подигнете се на прсти, задржете кратко, па контролирано спуштете ги петиците кон подлогата.',
    duration: '10–12 повторувања',
    why:
      'Листовите ја носат голема дел од работата при трчање. Активирањето ги подготвува за одраз и амортизација.',
    expectedFrames: 4,
    view: 'full body side view'
  },
  {
    number: '04',
    slug: 'knees',
    title: 'Подготовка на колената',
    area: 'колена',
    instruction:
      'Направете плиток чучњ со колената насочени напред. Движењето нека биде кратко, меко и контролирано.',
    duration: '8–10 повторувања',
    why:
      'Ги подготвува колената за товар, ја подобрува координацијата и го намалува чувството на вкочанетост.',
    expectedFrames: 4,
    view: 'three-quarter front view'
  },
  {
    number: '05',
    slug: 'hamstrings',
    title: 'Активирање на задната страна на бутот',
    area: 'задна ложа',
    instruction:
      'Со исправен труп направете контролирано замавнување на ногата напред и назад, без нагло истегнување.',
    duration: '8 повторувања по нога',
    why:
      'Задната ложа помага при стабилност и повлекување на ногата. Динамичната подготовка ја намалува напнатоста.',
    expectedFrames: 5,
    view: 'side view'
  },
  {
    number: '06',
    slug: 'quads',
    title: 'Активирање на предната страна на бутот',
    area: 'квадрицепс',
    instruction:
      'Поттрчувајте во место со лесно подигање на петата кон задникот. Држете го трупот исправен.',
    duration: '20–30 секунди',
    why:
      'Ги активира квадрицепсите и ја подготвува ногата за повторливо подигање, спуштање и стабилизација.',
    expectedFrames: 5,
    view: 'side view'
  },
  {
    number: '07',
    slug: 'hips',
    title: 'Подвижност на колковите',
    area: 'колкови',
    instruction:
      'Подигнете го коленото и направете мал контролиран круг од колкот. Повторете во двата правци.',
    duration: '5 кругови по правец по нога',
    why:
      'Колковите го водат чекорот. Подобрата подвижност помага трчањето да биде поекономично и порелаксирано.',
    expectedFrames: 6,
    view: 'three-quarter front view'
  },
  {
    number: '08',
    slug: 'trunk',
    title: 'Подвижност на трупот',
    area: 'труп',
    instruction:
      'Со стапалата стабилни, ротирајте го трупот лево и десно. Движењето нека доаѓа од средината на телото.',
    duration: '8–10 ротации',
    why:
      'Трупот ја пренесува силата меѓу рацете и нозете. Ротацијата го подобрува ритамот и контролата.',
    expectedFrames: 5,
    view: 'front view'
  },
  {
    number: '09',
    slug: 'shoulders',
    title: 'Подвижност на рамената',
    area: 'рамена',
    instruction:
      'Правете меки кругови со рамената и рацете, прво наназад, потоа нанапред.',
    duration: '6–8 кругови во секој правец',
    why:
      'Опуштените рамена овозможуваат подобро дишење и поефикасно движење на рацете за време на трчањето.',
    expectedFrames: 5,
    view: 'upper-body front view'
  },
  {
    number: '10',
    slug: 'start',
    title: 'Подготовка за старт',
    area: 'целото тело',
    instruction:
      'Направете 2–3 кратки забрзувања со постепено зголемување на темпото, без максимален спринт.',
    duration: '2–3 серии од 10–15 секунди',
    why:
      'Го поврзува загревањето со вистинското темпо и му дава сигнал на телото дека започнува трката.',
    expectedFrames: 6,
    view: 'side view'
  }
];

export const exercises = exerciseBase.map((exercise) => ({
  ...exercise,
  frames: getFrames(exercise.slug, exercise.title, exercise.expectedFrames),
  frameFolder: `public/exercises/${exercise.slug}`,
  expectedFileNames: Array.from(
    { length: exercise.expectedFrames },
    (_, index) => `frame-${String(index + 1).padStart(2, '0')}.webp`
  )
}));
