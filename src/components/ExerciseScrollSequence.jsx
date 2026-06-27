import { useEffect, useMemo, useRef, useState } from 'react';
import { getSectionScrollProgress, mapScrollToFrame } from '../utils/mapScrollToFrame.js';
import { preloadFrames } from '../utils/preloadFrames.js';

export default function ExerciseScrollSequence({
  title,
  frames = [],
  alt,
  steps = 4,
  sticky = true,
  highlightColor = 'teal',
  area
}) {
  const rootRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [shouldPreload, setShouldPreload] = useState(false);
  const hasFrames = frames.length > 0;
  const totalSteps = hasFrames ? frames.length : steps;

  const stepIndexes = useMemo(
    () => Array.from({ length: totalSteps }, (_, index) => index),
    [totalSteps]
  );

  useEffect(() => {
    const element = rootRef.current;
    if (!element || !('IntersectionObserver' in window)) {
      setShouldPreload(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldPreload(true);
          observer.disconnect();
        }
      },
      { rootMargin: '700px 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldPreload || !hasFrames) return undefined;
    return preloadFrames(frames);
  }, [frames, hasFrames, shouldPreload]);

  useEffect(() => {
    const element = rootRef.current;
    if (!element || totalSteps <= 1) return undefined;

    let animationFrame = 0;

    const update = () => {
      animationFrame = 0;
      const section = element.closest('.exercise-section') || element;
      const viewport = window.innerHeight || document.documentElement.clientHeight;
      const progress = getSectionScrollProgress(section, viewport);
      setActiveIndex(mapScrollToFrame(progress, totalSteps));
    };

    const requestUpdate = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, [totalSteps]);

  return (
    <div
      className={`sequence-panel ${sticky ? 'is-sticky' : ''} highlight-${highlightColor}`}
      ref={rootRef}
      aria-label={alt || title}
    >
      <div className="sequence-stage">
        {hasFrames ? (
          frames.map((frame, index) => (
            <img
              className={`sequence-frame ${index === activeIndex ? 'is-active' : ''}`}
              src={frame.src}
              alt={index === activeIndex ? frame.alt || alt || title : ''}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
              key={frame.src}
            />
          ))
        ) : (
          <div className="sequence-empty" aria-hidden="true">
            <span className="sequence-area">{area}</span>
            <span className="sequence-orbit orbit-one"></span>
            <span className="sequence-orbit orbit-two"></span>
            <span className="sequence-figure-space"></span>
          </div>
        )}
      </div>
      <div className="sequence-controls" aria-hidden="true">
        {stepIndexes.map((index) => (
          <span
            className={index === activeIndex ? 'is-active' : ''}
            key={index}
            style={{ '--step-progress': `${((index + 1) / totalSteps) * 100}%` }}
          />
        ))}
      </div>
    </div>
  );
}
