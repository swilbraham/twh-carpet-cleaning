"use client";

import { useEffect } from "react";

export default function ElfsightReviews() {
  useEffect(() => {
    if (
      document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')
    )
      return;
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="elfsight-app-4ffe4903-b048-4ee1-b972-9d7271a76414"
          data-elfsight-app-lazy
        />
      </div>
    </section>
  );
}
