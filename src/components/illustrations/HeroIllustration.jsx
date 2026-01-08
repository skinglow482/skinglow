const HeroIllustration = ({ className }) => (
  <svg className={className} width="800" height="400" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ilustração SkinGlow">
    <rect width="800" height="400" rx="20" fill="#fff0ee"/>
    <g transform="translate(40,40)">
      <circle cx="120" cy="120" r="100" fill="#fa8072" opacity="0.15" />
      <circle cx="320" cy="80" r="60" fill="#fa8072" opacity="0.18" />
      <rect x="440" y="60" width="220" height="220" rx="18" fill="#fa8072" opacity="0.08" />
      <text x="140" y="240" fill="#c75a47" fontSize="28" fontFamily="Poppins, Arial, sans-serif">SkinGlow</text>
    </g>
  </svg>
);

export default HeroIllustration;