const QuestionIllustration = ({ className }) => (
  <svg className={className} width="400" height="220" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ilustração de questionário">
    <rect width="400" height="220" rx="16" fill="#fff0ee"/>
    <g transform="translate(24,24)">
      <rect x="28" y="28" width="340" height="120" rx="12" fill="#fa8072" opacity="0.06" />
      <circle cx="300" cy="120" r="30" fill="#fa8072" opacity="0.09" />
      <text x="16" y="150" fill="#c75a47" fontSize="20" fontFamily="Poppins, Arial, sans-serif">Questionário</text>
    </g>
  </svg>
);

export default QuestionIllustration;