"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  CONSENT_EVENT,
  clearConsent,
  getConsent,
} from "@/lib/cookieConsent";

export default function ElfsightReviews() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const check = () => setAccepted(getConsent() === "accepted");
    check();
    window.addEventListener(CONSENT_EVENT, check);
    return () => window.removeEventListener(CONSENT_EVENT, check);
  }, []);

  useEffect(() => {
    if (!accepted) return;
    if (
      document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')
    )
      return;
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, [accepted]);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {accepted ? (
          <div
            className="elfsight-app-4ffe4903-b048-4ee1-b972-9d7271a76414"
            data-elfsight-app-lazy
          />
        ) : (
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-12 text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Customer reviews
            </h3>
            <p className="text-gray-600 text-sm mb-5">
              Our review widget needs cookies to load. Accept cookies to see
              what our customers say, or read our reviews directly on Google.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={() => clearConsent()}
                className="bg-brand-500 text-white font-semibold rounded-lg px-5 py-2.5 text-sm hover:bg-brand-600 transition-colors cursor-pointer"
              >
                Manage cookie settings
              </button>
              <Link
                href="https://www.google.com/search?q=TWH+Carpet+Cleaning+Ellesmere+Port"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 text-gray-700 font-semibold rounded-lg px-5 py-2.5 text-sm hover:bg-gray-50 transition-colors"
              >
                View reviews on Google
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
