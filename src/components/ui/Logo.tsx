interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

export default function Logo({
  className = "",
  size = "md",
  variant = "dark",
}: LogoProps) {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-16 h-16",
  };

  const textColor = variant === "light" ? "text-white" : "text-brand-900";
  const subColor = variant === "light" ? "text-white/80" : "text-gray-500";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 120 120"
        className={sizes[size]}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer circle */}
        <circle cx="60" cy="60" r="58" fill="#1d6fbf" stroke="#14508d" strokeWidth="2" />
        {/* Inner circle accent */}
        <circle cx="60" cy="60" r="48" fill="none" stroke="#ffffff" strokeWidth="1.5" opacity="0.3" />

        {/* Carpet/wave lines at bottom */}
        <path
          d="M25 78 Q37 72, 48 78 Q58 84, 68 78 Q78 72, 90 78"
          fill="none"
          stroke="#60a5fa"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M20 85 Q35 79, 48 85 Q60 91, 72 85 Q85 79, 100 85"
          fill="none"
          stroke="#60a5fa"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.4"
        />

        {/* TWH Text */}
        <text
          x="60"
          y="52"
          textAnchor="middle"
          fill="white"
          fontFamily="Inter, system-ui, sans-serif"
          fontWeight="800"
          fontSize="32"
          letterSpacing="2"
        >
          TWH
        </text>

        {/* Divider line */}
        <line x1="30" y1="58" x2="90" y2="58" stroke="white" strokeWidth="1" opacity="0.5" />

        {/* Carpet Cleaning subtitle */}
        <text
          x="60"
          y="72"
          textAnchor="middle"
          fill="white"
          fontFamily="Inter, system-ui, sans-serif"
          fontWeight="500"
          fontSize="9"
          letterSpacing="3"
          opacity="0.9"
        >
          CARPET CLEANING
        </text>
      </svg>

      <div>
        <span className={`font-bold text-lg leading-tight block ${textColor}`}>
          TWH
        </span>
        <span className={`text-xs leading-tight block ${subColor}`}>
          Carpet Cleaning
        </span>
      </div>
    </div>
  );
}
