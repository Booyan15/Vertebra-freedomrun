import VertebraLogo from './VertebraLogo.jsx';

export default function Footer({ content }) {
  return (
    <footer className="footer">
      <span className="footer-logo-wrap">
        <VertebraLogo variant="footer" />
      </span>
      <strong>{content.final.brand}</strong>
      <span>{content.final.slogan}</span>
    </footer>
  );
}
