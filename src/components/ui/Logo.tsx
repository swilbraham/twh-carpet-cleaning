interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

export default function Logo({
  className = "",
  size = "md",
}: LogoProps) {
  const sizes = {
    sm: "h-9",
    md: "h-11",
    lg: "h-16",
  };

  return (
    <div className={`flex items-center ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt="TWH Carpet Cleaning"
        className={`${sizes[size]} w-auto`}
      />
    </div>
  );
}
