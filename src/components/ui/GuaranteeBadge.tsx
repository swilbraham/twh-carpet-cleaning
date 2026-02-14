import { ShieldCheck } from "lucide-react";

interface GuaranteeBadgeProps {
  className?: string;
}

export default function GuaranteeBadge({ className = "" }: GuaranteeBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-3 bg-green-50 border-2 border-green-200 rounded-xl px-5 py-3 ${className}`}
    >
      <ShieldCheck className="w-8 h-8 text-green-600 flex-shrink-0" />
      <div>
        <p className="font-bold text-green-800 text-sm">
          100% Satisfaction Guarantee
        </p>
        <p className="text-green-600 text-xs">
          Not happy? We&apos;ll re-clean for free
        </p>
      </div>
    </div>
  );
}
