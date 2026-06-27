export function preloadFrames(frames = []) {
  const loadedImages = [];

  frames.forEach((frame) => {
    if (!frame?.src) return;

    const image = new Image();
    image.decoding = 'async';
    image.src = frame.src;
    loadedImages.push(image);
  });

  return () => {
    loadedImages.forEach((image) => {
      image.onload = null;
      image.onerror = null;
    });
  };
}
