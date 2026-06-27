import ExerciseScrollSequence from './ExerciseScrollSequence.jsx';

export default function ExerciseSection({ exercise, labels }) {
  return (
    <article className="exercise-section reveal" id={`exercise-${exercise.slug}`}>
      <div className="exercise-layout">
        <div className="exercise-visual-column">
          <ExerciseScrollSequence
            title={exercise.title}
            frames={exercise.frames}
            alt={`${exercise.title} - визуелна секвенца`}
            steps={exercise.expectedFrames}
            area={exercise.area}
            highlightColor={exercise.slug === 'start' ? 'orange' : 'teal'}
          />
        </div>
        <div className="exercise-detail">
          <span className="exercise-kicker">{exercise.number}</span>
          <h3>{exercise.title}</h3>
          <p>{exercise.instruction}</p>
          <div className="exercise-meta">
            <span>{labels.durationLabel}</span>
            <strong>{exercise.duration}</strong>
          </div>
          <div className="why-box">
            <span>{labels.whyLabel}</span>
            <p>{exercise.why}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
