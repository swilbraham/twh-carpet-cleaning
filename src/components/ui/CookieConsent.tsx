"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";
import {
  CONSENT_EVENT,
  ConsentStatus,
  getConsent,
  setConsent,
} from "@/lib/cookieConsent";

export default function CookieConsent() {
  const [status, setStatus] = useState<ConsentStatus>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setStatus(getConsent());
    setHydrated(true);
    const handler = () => setStatus(getConsent());
    window.addEventListener(CONSENT_EVENT, handler);
    return () => window.removeEventListener(CONSENT_EVENT, handler);
  }, []);

  if (!hydrated || status !== null) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-6 md:left-auto md:right-6 md:max-w-md z-[100] bg-white border border-gray-200 shadow-2xl rounded-2xl p-5"
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 bg-brand-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <Cookie className="w-5 h-5 text-brand-500" />
        </div>
        <div>
          <h2 className="font-bold text-gray-900 text-base mb-1">
            We use cookies
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            We use a Google Reviews widget that sets cookies to show you our
            customer reviews. Strictly necessary cookies are always on. Read our{" "}
            <Link
              href="/cookies"
              className="text-brand-500 hover:text-brand-600 underline"
            >
              cookie policy
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <button
          type="button"
          onClick={() => setConsent("rejected")}
          className="flex-1 border border-gray-300 text-gray-700 font-semibold rounded-lg px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors cursor-pointer"
        >
          Reject non-essential
        </button>
        <button
          type="button"
          onClick={() => setConsent("accepted")}
          className="flex-1 bg-brand-500 text-white font-semibold rounded-lg px-4 py-2.5 text-sm hover:bg-brand-600 transition-colors cursor-pointer"
        >
          Accept all
        </button>
      </div>
    </div>
  );
}
