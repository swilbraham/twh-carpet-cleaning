"use client";

import Link from "next/link";
import { MapPin, CheckCircle, Clock, Shield, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Location } from "@/lib/locations";
import { carpetLocations, sofaLocations } from "@/lib/locations";

export default function LocationContent({ location }: { location: Location }) {
  const sameService =
    location.serviceKey === "sofa" ? sofaLocations : carpetLocations;
  const others = sameService.filter((l) => l.slug !== location.slug);
  const crossService =
    location.serviceKey === "sofa"
      ? carpetLocations.find((l) => l.slug === location.slug)
      : sofaLocations.find((l) => l.slug === location.slug);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Main content */}
          <div className="lg:col-span-2">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-brand-600" />
                </div>
                <span className="text-brand-500 font-semibold text-sm uppercase tracking-wider">
                  Your Local {location.name} Cleaner
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                {location.serviceKey === "sofa"
                  ? "Sofa & Upholstery Cleaning in "
                  : "Carpet, Upholstery & Hard Floor Cleaning in "}
                <span className="text-brand-500">{location.name}</span>
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {location.intro}
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {location.local}
              </p>

              {/* Trust points */}
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {[
                  {
                    icon: Shield,
                    title: "NCCA-accredited",
                    text: "Full member of the National Carpet Cleaners Association.",
                  },
                  {
                    icon: Clock,
                    title: `~${location.travelMinutes} mins away`,
                    text: `We're just ${location.travelMinutes} minutes from ${location.name} — usually same-week bookings.`,
                  },
                  {
                    icon: Sparkles,
                    title: "Eco-friendly",
                    text: "Child- and pet-safe solutions. Dry within hours.",
                  },
                  {
                    icon: CheckCircle,
                    title:
                      location.serviceKey === "sofa" ? "From £45" : "From £69",
                    text:
                      location.serviceKey === "sofa"
                        ? "£45 two-seater, £65 three-seater, £95 corner suite."
                        : "£69 first room, £30 second, £20 per room after.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100"
                  >
                    <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-brand-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Landmarks / areas within */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 mb-10">
                <h3 className="font-bold text-gray-900 mb-4">
                  Areas we clean in {location.name}:
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {location.landmarks.map((area) => (
                    <div
                      key={area}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm font-medium">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <h3 className="text-2xl font-extrabold text-gray-900 mb-6">
                {location.name} {location.serviceShort} FAQs
              </h3>
              <div className="space-y-4 mb-10">
                {location.faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="bg-white rounded-xl p-6 border border-gray-200"
                  >
                    <h4 className="font-bold text-gray-900 mb-2">{faq.q}</h4>
                    <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Sidebar — other locations */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-brand-50 rounded-xl p-6 border border-brand-100">
                <h3 className="font-bold text-brand-900 mb-3">
                  Also serving nearby
                </h3>
                <ul className="space-y-2">
                  {others.map((l) => (
                    <li key={l.slug}>
                      <Link
                        href={l.urlPath}
                        className="flex items-center gap-2 text-brand-700 hover:text-brand-900 hover:underline text-sm font-medium"
                      >
                        <MapPin className="w-4 h-4" />
                        {l.serviceShort} {l.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {crossService && (
                <div className="bg-accent-50 rounded-xl p-6 border border-accent-100">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Also in {location.name}
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Need the other service too? We usually offer a discount for
                    combined bookings in the same visit.
                  </p>
                  <Link
                    href={crossService.urlPath}
                    className="inline-flex items-center gap-2 text-brand-700 hover:text-brand-900 hover:underline text-sm font-semibold"
                  >
                    <MapPin className="w-4 h-4" />
                    {crossService.serviceShort} in {crossService.name}
                  </Link>
                </div>
              )}

              <div className="bg-gray-900 rounded-xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">
                  Ready to book in {location.name}?
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Call for a free, no-obligation quote — most jobs booked in
                  the same week.
                </p>
                <a
                  href="tel:01513572295"
                  className="inline-flex items-center justify-center bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-lg px-4 py-3 text-sm w-full mb-2"
                >
                  Call 0151 357 2295
                </a>
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center border border-gray-700 text-gray-200 hover:border-gray-500 font-semibold rounded-lg px-4 py-3 text-sm w-full"
                >
                  Get a free quote
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">Postcodes</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Covering {location.postcode} and surrounding streets.
                </p>
                <h4 className="font-bold text-gray-900 mb-1 mt-4">
                  Also on our round
                </h4>
                <p className="text-gray-700 text-sm">
                  {location.neighbours.join(" · ")}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
