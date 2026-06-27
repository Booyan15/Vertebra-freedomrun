import Header from './Header.jsx';

export default function Hero({ content }) {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <span className="motion-line line-one"></span>
        <span className="motion-line line-two"></span>
        <span className="particle particle-one"></span>
        <span className="particle particle-two"></span>
        <span className="particle particle-three"></span>
      </div>

      <Header content={content} />

      <div className="hero-content reveal">
        <p className="eyebrow">
          {content.meta.partnerName} – {content.meta.partnerDescriptor}
        </p>
        <h1>{content.meta.title}</h1>
        <p className="hero-event">
          {content.meta.eventSupport}
        </p>
        <p className="hero-slogan">{content.meta.slogan}</p>
        <p className="hero-welcome">{content.meta.welcome}</p>
        <div className="hero-actions">
          <a className="button primary" href="#warmup">
            {content.ui.startWarmup}
          </a>
          <a className="button ghost" href="#recovery">
            {content.ui.afterRaceTips}
          </a>
        </div>
      </div>
    </section>
  );
}
