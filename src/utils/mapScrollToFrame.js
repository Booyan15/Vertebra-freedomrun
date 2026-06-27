export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export function easeInOutCubic(value) {
  const t = clamp(value, 0, 1);
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function getSectionScrollProgress(section, viewportHeight) {
  if (!section) return 0;

  const rect = section.getBoundingClientRect();
  const travel = Math.max(1, rect.height - viewportHeight * 0.18);
  return clamp((viewportHeight * 0.72 - rect.top) / travel, 0, 1);
}

export function mapScrollToFrame(progress, frameCount) {
  if (frameCount <= 1) return 0;

  const eased = easeInOutCubic(progress);
  return Math.min(frameCount - 1, Math.floor(eased * frameCount));
}
