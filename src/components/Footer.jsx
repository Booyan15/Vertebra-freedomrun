import VertebraLogo from './VertebraLogo.jsx';

export default function Footer({ content }) {
  return (
    <footer className="footer" aria-label={content.final.brand}>
      <span className="footer-logo-wrap">
        <VertebraLogo variant="footer" />
      </span>
      <div className="footer-slogan">
        {content.final.slogan.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </div>
      <div className="footer-message">
        {content.final.text.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </footer>
  );
}
