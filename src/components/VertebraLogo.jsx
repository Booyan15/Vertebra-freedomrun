import vertebraLogo from '../img/logo-vertebra.png';

export default function VertebraLogo({ className = '', variant = 'default' }) {
  return (
    <img
      className={`vertebra-logo vertebra-logo-${variant} ${className}`}
      src={vertebraLogo}
      alt="VERTEBRA Functional Health & Rehab"
      loading="eager"
      decoding="async"
    />
  );
}
