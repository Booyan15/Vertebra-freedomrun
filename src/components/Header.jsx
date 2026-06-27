import VertebraLogo from './VertebraLogo.jsx';

export default function Header({ content }) {
  return (
    <header className="site-header" aria-label={content.ui.guideLabel}>
      <a className="brand-lockup vertebra-primary" href="#top" aria-label={content.meta.partnerName}>
        <span className="header-logo-wrap">
          <VertebraLogo variant="header" />
        </span>
      </a>
      <div className="event-lockup" aria-label={content.meta.eventName}>
        <span>
          <strong>{content.meta.eventName}</strong>
          <small>{content.ui.guideLabel}</small>
        </span>
      </div>
    </header>
  );
}
