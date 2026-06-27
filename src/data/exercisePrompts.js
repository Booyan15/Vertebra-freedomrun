const sharedStyle =
  'Use the same realistic athletic male model across the full sequence: natural athletic build, short dark hair, trimmed beard, fitted charcoal athletic T-shirt, black shorts, barefoot. Transparent background. Premium physiotherapy and sports-rehab instructional style. Clean realistic lighting, anatomical proportions, no text labels embedded in the image, no gym scene, no props, no extra background. Add subtle teal motion arrows and very light ghosted motion trails only where they clarify the movement.';

export const exercisePrompts = [
  {
    slug: 'foot-toes',
    title: 'Мобилизација на стапалото и прстите',
    frames: 5,
    prompt: `${sharedStyle} Create a 5-frame transparent PNG/WebP sequence for foot and toe mobility. Lower-body close-up from mid-shin to feet, side view. Show the model shifting through: neutral barefoot stance, toes lifting while heel stays grounded, toes extending upward, heel gently lifting, and foot returning to neutral. Highlight the active foot and toes with a soft teal glow and small teal motion indicators.`
  },
  {
    slug: 'ankles',
    title: 'Мобилизација на глуждовите',
    frames: 5,
    prompt: `${sharedStyle} Create a 5-frame transparent PNG/WebP sequence for ankle mobility. Lower-body close-up, one foot slightly raised from the floor while the standing leg remains stable. Show circular ankle motion through multiple realistic positions with ghosted foot positions and subtle teal circular arrows around the ankle. The movement should be clear, clinical, and controlled.`
  },
  {
    slug: 'calves',
    title: 'Активирање на листовите',
    frames: 4,
    prompt: `${sharedStyle} Create a 4-frame transparent PNG/WebP sequence for standing calf raises. Full body side view. Show start position with heels on the floor, mid-rise, top position on toes with calves engaged, and controlled return. Add subtle teal up/down arrows near the heels and soft teal highlight over the calf muscles.`
  },
  {
    slug: 'knees',
    title: 'Подготовка на колената',
    frames: 4,
    prompt: `${sharedStyle} Create a 4-frame transparent PNG/WebP sequence for a light half squat used as knee preparation. Three-quarter front view. Show upright starting posture, controlled knee bend, stable half-squat with knees aligned forward, and return to standing. Use soft teal highlights around both knees and minimal motion trails.`
  },
  {
    slug: 'hamstrings',
    title: 'Активирање на задната страна на бутот',
    frames: 5,
    prompt: `${sharedStyle} Create a 5-frame transparent PNG/WebP sequence for a dynamic straight-leg swing to activate the hamstrings. Full body side view. Show the working leg moving from neutral stance to backward preparation, forward straight-leg swing, highest controlled point, and return. Highlight the back of the thigh with a soft teal glow and use clean motion trails around the moving leg.`
  },
  {
    slug: 'quads',
    title: 'Активирање на предната страна на бутот',
    frames: 5,
    prompt: `${sharedStyle} Create a 5-frame transparent PNG/WebP sequence for light running in place with heels moving toward the glutes. Full body side view. Show alternating leg positions with one heel lifting toward the glute, then the other, maintaining upright posture. Highlight the front thigh/quadriceps with subtle teal glow and add light motion trails near the heels.`
  },
  {
    slug: 'hips',
    title: 'Подвижност на колковите',
    frames: 6,
    prompt: `${sharedStyle} Create a 6-frame transparent PNG/WebP sequence for hip mobility combining controlled hip circles and leg swings. Three-quarter front view. Show knee lift, outward hip circle, inward return, front leg swing, side opening, and neutral stance. Highlight the hip joint area with soft teal glow and use small teal circular arrows around the moving hip.`
  },
  {
    slug: 'trunk',
    title: 'Подвижност на трупот',
    frames: 5,
    prompt: `${sharedStyle} Create a 5-frame transparent PNG/WebP sequence for trunk mobility. Front view with slight angle. Show neutral stance, trunk rotation left, return through center, trunk rotation right, and a gentle side bend variation. Keep pelvis stable, posture controlled, and highlight the torso with soft teal accents and clean rotational arrows.`
  },
  {
    slug: 'shoulders',
    title: 'Подвижност на рамената',
    frames: 5,
    prompt: `${sharedStyle} Create a 5-frame transparent PNG/WebP sequence for shoulder mobility. Upper-body front view or three-quarter view. Show shoulder circles and arm swings through multiple realistic positions: arms down, arms forward, arms overhead, arms back, and return. Highlight both shoulder joints with soft teal glow and use subtle circular teal arrows.`
  },
  {
    slug: 'start',
    title: 'Подготовка за старт',
    frames: 6,
    prompt: `${sharedStyle} Create a 6-frame transparent PNG/WebP sequence for start preparation: easy jog progressing into a short acceleration posture. Full body side view. Show light jog stance, first quick step, forward lean, stronger arm drive, sprint-ready acceleration posture, and controlled finish. Use subtle orange-red energy trails behind the moving limbs and teal accents for posture alignment.`
  }
];
