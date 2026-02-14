"use client";

import { useState, useEffect } from "react";
import { ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (dismissed) return;
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-brand-600 shadow-2xl shadow-brand-900/30 border-t border-brand-500 md:hidden"
        >
          <div className="flex items-center justify-between px-4 py-3">
            <div className="text-white">
              <p className="font-bold text-sm">Get Your Free Quote</p>
              <p className="text-xs text-white/70">
                No obligation &bull; Fast response
              </p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="#quote"
                className="bg-white text-brand-700 font-semibold text-sm px-4 py-2 rounded-lg flex items-center gap-1 hover:bg-brand-50 transition-colors"
              >
                Quote
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => setDismissed(true)}
                className="text-white/60 hover:text-white p-1"
                aria-label="Dismiss"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
