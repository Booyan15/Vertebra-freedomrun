import { useEffect, useState } from 'react';
import Hero from './components/Hero.jsx';
import QuickNav from './components/QuickNav.jsx';
import Section from './components/Section.jsx';
import ExerciseSection from './components/ExerciseSection.jsx';
import Footer from './components/Footer.jsx';
import { guideContent } from './data/guideContent.js';

function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (scrollTop / max) * 100) : 0);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return progress;
}

function useRevealOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function Icon({ type }) {
  return (
    <svg className={`icon icon-${type}`} viewBox="0 0 48 48" aria-hidden="true">
      {type === 'runner' && (
        <>
          <circle cx="28" cy="9" r="5" />
          <path d="M25 16l-8 9 10 4 8-8" />
          <path d="M27 29l-5 13" />
          <path d="M28 29l13 8" />
          <path d="M19 25l-10 2" />
        </>
      )}
      {type === 'pulse' && (
        <>
          <path d="M5 25h9l4-11 8 22 5-11h12" />
          <circle cx="24" cy="24" r="19" />
        </>
      )}
      {type === 'care' && (
        <>
          <path d="M24 41s16-9 16-23a9 9 0 0 0-16-5 9 9 0 0 0-16 5c0 14 16 23 16 23z" />
          <path d="M24 17v14" />
          <path d="M17 24h14" />
        </>
      )}
      {type === 'drop' && (
        <>
          <path d="M24 5s13 15 13 26a13 13 0 0 1-26 0C11 20 24 5 24 5z" />
          <path d="M19 33c4 4 10 2 12-2" />
        </>
      )}
      {type === 'meal' && (
        <>
          <circle cx="25" cy="25" r="15" />
          <path d="M7 8v18" />
          <path d="M12 8v18" />
          <path d="M7 17h5" />
          <path d="M40 8v32" />
          <path d="M21 23h10" />
        </>
      )}
    </svg>
  );
}

function BodyText({ paragraphs }) {
  return (
    <div className="body-text reveal">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

function BackToTop({ label }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 640);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <a className={`back-to-top ${visible ? 'is-visible' : ''}`} href="#top" aria-label={label}>
      ↑
    </a>
  );
}

export default function App() {
  const content = guideContent;
  const progress = useScrollProgress();
  useRevealOnScroll();

  return (
    <>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} />
      <Hero content={content} />
      <QuickNav items={content.quickNav} />

      <main>
        <Section
          id={content.welcomeSection.id}
          eyebrow={content.welcomeSection.eyebrow}
          title={content.welcomeSection.title}
          intro={content.welcomeSection.text[0]}
          accent="teal"
          className="welcome-section"
        >
          <p className="welcome-second reveal">{content.welcomeSection.text[1]}</p>
          <div className="feature-grid">
            {content.welcomeSection.cards.map((card) => (
              <article className="feature-card reveal" key={card.title}>
                <Icon type={card.icon} />
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="contents" title={content.ui.tableOfContents} accent="orange" className="toc-section">
          <div className="toc-grid">
            {content.toc.map((item) => (
              <a className="toc-card reveal" href={`#${item.id}`} key={item.id}>
                <span>{item.number}</span>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </a>
            ))}
          </div>
        </Section>

        <Section
          id={content.preparation.id}
          eyebrow={content.preparation.eyebrow}
          title={content.preparation.title}
          intro={content.preparation.intro}
          accent="teal"
        >
          <div className="split-layout">
            <BodyText paragraphs={content.preparation.body} />
            <aside className="highlight-card reveal">
              <strong>{content.preparation.highlight}</strong>
              <ul>
                {content.preparation.checks.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>
          </div>
        </Section>

        <Section
          id={content.warmup.id}
          eyebrow={content.warmup.eyebrow}
          title={content.warmup.title}
          intro={content.warmup.intro}
          className="warmup-section"
          accent="orange"
        >
          <div className="exercise-sections">
            {content.warmup.exercises.map((exercise) => (
              <ExerciseSection
                exercise={exercise}
                labels={content.ui}
                key={exercise.number}
              />
            ))}
          </div>
        </Section>

        <Section
          id={content.race.id}
          eyebrow={content.race.eyebrow}
          title={content.race.title}
          intro={content.race.intro}
          accent="teal"
        >
          <div className="tips-grid">
            {content.race.tips.map((tip, index) => (
              <article className="tip-card reveal" key={tip.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{tip.title}</h3>
                <p>{tip.text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id={content.recovery.id}
          eyebrow={content.recovery.eyebrow}
          title={content.recovery.title}
          intro={content.recovery.intro}
          accent="orange"
        >
          <div className="recovery-row">
            {content.recovery.cards.map((card) => (
              <article className="recovery-card reveal" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </Section>

        <section className="section dual-section">
          <div className="section-inner dual-grid">
            <article className="visual-info-card reveal" id={content.hydration.id}>
              <Icon type="drop" />
              <p className="eyebrow">{content.hydration.eyebrow}</p>
              <h2>{content.hydration.title}</h2>
              <p>{content.hydration.intro}</p>
              <ul>
                {content.hydration.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="visual-info-card nutrition-card reveal" id={content.nutrition.id}>
              <Icon type="meal" />
              <p className="eyebrow">{content.nutrition.eyebrow}</p>
              <h2>{content.nutrition.title}</h2>
              <p>{content.nutrition.intro}</p>
              <ul>
                {content.nutrition.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <Section
          id={content.sleep.id}
          eyebrow={content.sleep.eyebrow}
          title={content.sleep.title}
          intro={content.sleep.intro}
          accent="teal"
        >
          <div className="sleep-card reveal">
            <p>{content.sleep.lead}</p>
            <div className="check-grid">
              {content.sleep.checks.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <p>{content.sleep.closing}</p>
          </div>
        </Section>

        <Section
          id={content.help.id}
          eyebrow={content.help.eyebrow}
          title={content.help.title}
          intro={content.help.intro}
          accent="orange"
          className="help-section"
        >
          <div className="warning-card reveal">
            <h3>{content.help.symptomsTitle}</h3>
            <div className="symptom-grid">
              {content.help.symptoms.map((symptom) => (
                <span key={symptom}>{symptom}</span>
              ))}
            </div>
            <p>{content.help.note}</p>
          </div>
        </Section>

      </main>

      <a className="floating-warmup" href="#warmup">
        {content.ui.floatingWarmup}
      </a>
      <BackToTop label={content.ui.backToTop} />
      <Footer content={content} />
    </>
  );
}
