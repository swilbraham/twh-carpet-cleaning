import { type ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "success" | "warning" | "brand";
  className?: string;
}

export default function Badge({
  children,
  variant = "brand",
  className = "",
}: BadgeProps) {
  const variants = {
    success: "bg-green-100 text-green-800 border-green-200",
    warning: "bg-amber-100 text-amber-800 border-amber-200",
    brand: "bg-brand-100 text-brand-800 border-brand-200",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
