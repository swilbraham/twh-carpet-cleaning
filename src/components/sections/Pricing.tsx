"use client";

import { Check, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

const packages = [
  {
    title: "Essential Clean",
    tagline: "Freshen & Reset",
    from: "79",
    popular: false,
    features: [
      "Full professional pre-inspection",
      "Commercial pre-vacuum",
      "Targeted pre-spray treatment",
      "Professional agitation in traffic lanes",
      "Truck-mounted hot water extraction",
      "Basic stain treatment",
      "Grooming for faster drying",
    ],
  },
  {
    title: "Signature Clean",
    tagline: "Deep Clean + Freshness Boost",
    from: "109",
    popular: true,
    features: [
      "Everything in Essential Clean",
      "Premium odour neutralising treatment",
      "Extra dwell time for deeper soil breakdown",
      "Intensive traffic lane restoration",
      "Pile reset for improved finish",
    ],
  },
  {
    title: "Premium Protection",
    tagline: "Full Restoration & Protect",
    from: "149",
    popular: false,
    features: [
      "Everything in Signature Clean",
      "Professional stain protection applied",
      "Spill resistance barrier added",
      "Priority air movement to aid drying",
      "12-month care reminder",
      "Aftercare advice tailored to your home",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="packages" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-500 font-semibold text-sm uppercase tracking-wider">
            Choose Your Clean
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-6">
            Three Levels,{" "}
            <span className="text-brand-500">One Standard</span>
          </h2>
          <p className="text-lg text-gray-600">
            Every package delivers a professional clean. Choose the level
            that&apos;s right for your home.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, idx) => (
            <AnimatedSection key={pkg.title} delay={idx * 0.1}>
              <div
                className={`relative rounded-2xl p-6 lg:p-8 h-full flex flex-col ${
                  pkg.popular
                    ? "bg-brand-500 text-white shadow-xl shadow-brand-500/20 scale-[1.02]"
                    : "bg-white border border-gray-200 shadow-sm"
                }`}
              >
                {pkg.popular && (
                  <Badge variant="warning" className="absolute -top-3 left-6">
                    Most Popular
                  </Badge>
                )}

                <h3
                  className={`text-xl font-bold mb-1 ${
                    pkg.popular ? "text-white" : "text-gray-900"
                  }`}
                >
                  {pkg.title}
                </h3>
                <p
                  className={`text-sm mb-4 ${
                    pkg.popular ? "text-white/70" : "text-gray-500"
                  }`}
                >
                  &ldquo;{pkg.tagline}&rdquo;
                </p>

                <div className="mb-6">
                  <span
                    className={`text-sm ${
                      pkg.popular ? "text-white/70" : "text-gray-500"
                    }`}
                  >
                    From
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-lg ${
                        pkg.popular ? "text-white/70" : "text-gray-500"
                      }`}
                    >
                      &pound;
                    </span>
                    <span className="text-4xl font-extrabold">{pkg.from}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          pkg.popular ? "text-white" : "text-green-500"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          pkg.popular ? "text-white/90" : "text-gray-600"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  href="#calculator"
                  variant={pkg.popular ? "secondary" : "primary"}
                  className="w-full"
                >
                  Get Your Price
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
