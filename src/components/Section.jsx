export default function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = '',
  accent = 'orange'
}) {
  return (
    <section className={`section ${className}`} id={id}>
      <div className="section-inner">
        <div className={`section-heading reveal accent-${accent}`}>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2>{title}</h2>
          {intro && <p>{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
