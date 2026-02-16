"use client";

import { Sparkles, Heart, Home, ShieldCheck } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const benefits = [
  {
    icon: Sparkles,
    title: "Carpets That Look & Feel Brand New",
    description:
      "Professional deep cleaning lifts embedded dirt and restores the original colour and softness of your carpets — making every room feel fresh and inviting.",
  },
  {
    icon: Heart,
    title: "A Healthier Home for Your Family",
    description:
      "Our thorough cleaning removes dust mites, allergens, and bacteria from deep within the fibres, creating a cleaner, healthier environment for everyone.",
  },
  {
    icon: Home,
    title: "A Home You're Proud to Show Off",
    description:
      "Clean carpets and fresh upholstery transform the look and feel of your home, giving a great impression to guests and making every day more enjoyable.",
  },
  {
    icon: ShieldCheck,
    title: "Protect Your Investment & Save Money",
    description:
      "Regular professional cleaning extends the life of your carpets and upholstery by years, saving you thousands on premature replacements.",
  },
];

export default function PainPoints() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-500 font-semibold text-sm uppercase tracking-wider">
            The Difference Is Clear
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-6">
            A Brighter, Fresher{" "}
            <span className="text-brand-500">Home</span>
          </h2>
          <p className="text-lg text-gray-600">
            Professional carpet and upholstery cleaning doesn&apos;t just
            remove stains — it transforms your living space into somewhere
            you love to be.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, idx) => (
            <AnimatedSection
              key={benefit.title}
              delay={idx * 0.1}
              direction={idx % 2 === 0 ? "left" : "right"}
            >
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-brand-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
