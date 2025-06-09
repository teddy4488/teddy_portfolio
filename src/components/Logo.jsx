const Logo = ({ className = "" }) => (
  <svg
    viewBox="0 0 100 100"
    className={`h-8 w-8 ${className}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background circle */}
    <circle cx="50" cy="50" r="45" fill="#1E40AF" opacity="0.2" />

    {/* T letter (top part) */}
    <rect x="30" y="25" width="40" height="10" rx="2" fill="#60A5FA" />
    <rect x="55" y="35" width="10" height="30" rx="2" fill="#60A5FA" />

    {/* A letter (bottom part) */}
    <polygon points="30,70 70,70 60,40 40,40" fill="#60A5FA" opacity="0.8" />
    <rect x="45" y="55" width="10" height="15" rx="1" fill="#1F2937" />

    {/* Glow effect */}
    <circle
      cx="50"
      cy="50"
      r="45"
      fill="none"
      stroke="#60A5FA"
      strokeWidth="1"
      strokeOpacity="0.3"
    />
  </svg>
);

export default Logo;
