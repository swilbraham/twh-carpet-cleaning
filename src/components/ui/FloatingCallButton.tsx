"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

export default function FloatingCallButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="tel:01513572295"
      aria-label="Call TWH Carpet Cleaning on 0151 357 2295"
      className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-full shadow-2xl shadow-brand-500/40 ring-4 ring-brand-500/20 transition-all duration-300 group ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <span className="flex items-center justify-center w-14 h-14 rounded-full bg-brand-500 group-hover:bg-brand-600 transition-colors">
        <Phone className="w-6 h-6 fill-white" />
      </span>
      <span className="hidden sm:block pr-5 text-sm leading-tight">
        <span className="block text-white/80 text-xs">Call now</span>
        <span className="block font-bold">0151 357 2295</span>
      </span>
    </a>
  );
}
