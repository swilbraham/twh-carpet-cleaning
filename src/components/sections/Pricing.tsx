"use client";

import { Check, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

const services = [
  {
    title: "Carpet Cleaning",
    from: "69",
    unit: "",
    popular: false,
    features: [
      "Hot water extraction deep clean",
      "Stain treatment included",
      "Deodorising & sanitising",
      "Fast drying (2-4 hours)",
      "Eco-friendly products",
    ],
  },
  {
    title: "Living Room, Stairs & Landing",
    from: "99",
    unit: "",
    popular: true,
    features: [
      "Hot water extraction deep clean",
      "Living room, stairs & landing",
      "Stain treatment included",
      "Deodorising & sanitising",
      "Fast drying (2-4 hours)",
    ],
  },
  {
    title: "Commercial Carpet Cleaning",
    from: "Custom",
    unit: "tailored quote",
    popular: false,
    features: [
      "Office & retail spaces",
      "Out-of-hours cleaning available",
      "Regular contract discounts",
      "Hard floor & carpet options",
      "Dedicated account manager",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-500 font-semibold text-sm uppercase tracking-wider">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-6">
            Affordable Cleaning,{" "}
            <span className="text-brand-500">Premium Results</span>
          </h2>
          <p className="text-lg text-gray-600">
            No hidden fees, no surprise charges. Just honest pricing for
            exceptional cleaning.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <AnimatedSection key={service.title} delay={idx * 0.1}>
              <div
                className={`relative rounded-2xl p-6 lg:p-8 h-full flex flex-col ${
                  service.popular
                    ? "bg-brand-500 text-white shadow-xl shadow-brand-500/20 scale-[1.02]"
                    : "bg-white border border-gray-200 shadow-sm"
                }`}
              >
                {service.popular && (
                  <Badge variant="warning" className="absolute -top-3 left-6">
                    Most Popular
                  </Badge>
                )}

                <h3
                  className={`text-xl font-bold mb-4 ${
                    service.popular ? "text-white" : "text-gray-900"
                  }`}
                >
                  {service.title}
                </h3>

                <div className="mb-6">
                  <span
                    className={`text-sm ${
                      service.popular ? "text-white/70" : "text-gray-500"
                    }`}
                  >
                    From
                  </span>
                  <div className="flex items-baseline gap-1">
                    {service.from !== "Custom" && (
                      <span
                        className={`text-lg ${
                          service.popular ? "text-white/70" : "text-gray-500"
                        }`}
                      >
                        &pound;
                      </span>
                    )}
                    <span className="text-4xl font-extrabold">
                      {service.from}
                    </span>
                  </div>
                  <span
                    className={`text-sm ${
                      service.popular ? "text-white/70" : "text-gray-500"
                    }`}
                  >
                    {service.unit}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          service.popular ? "text-white" : "text-green-500"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          service.popular ? "text-white/90" : "text-gray-600"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  href="#quote"
                  variant={service.popular ? "secondary" : "primary"}
                  className="w-full"
                >
                  Get a Quote
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
