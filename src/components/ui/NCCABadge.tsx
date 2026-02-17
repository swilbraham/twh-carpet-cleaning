"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

export default function NCCABadge() {
  return (
    <section className="py-12 md:py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          {/* NCCA Logo - clickable to open certificate */}
          <a
            href="/ncca-certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 hover:opacity-80 transition-opacity"
            title="View our NCCA Membership Certificate"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ncca-member.png"
              alt="NCCA - National Carpet Cleaners Association Advanced Member"
              className="h-20 md:h-24 w-auto"
              loading="lazy"
            />
          </a>

          {/* Description */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Proud Member of the NCCA
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              TWH Carpet Cleaning is an advanced member of the{" "}
              <strong>National Carpet Cleaners Association (NCCA)</strong> — the
              UK&apos;s only recognised trade association dedicated to the carpet
              and upholstery cleaning industry. Membership guarantees our
              technicians are fully trained, insured, and work to the highest
              professional standards. Click our badge to view our membership
              certificate.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
