"use client";

import {
  Sparkles,
  Heart,
  Clock,
  Leaf,
  Home,
  Building2,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GuaranteeBadge from "@/components/ui/GuaranteeBadge";

const benefits = [
  {
    icon: Sparkles,
    title: "Deep Clean That Actually Works",
    description:
      "Our industrial-grade hot water extraction removes 98% of dirt, stains, and allergens — far beyond what any household machine can achieve.",
  },
  {
    icon: Heart,
    title: "Healthier Home & Workplace",
    description:
      "Eliminate dust mites, bacteria, and allergens trapped deep in your carpets. Breathe easier from the very first clean.",
  },
  {
    icon: Clock,
    title: "Fast Drying, Minimal Disruption",
    description:
      "Our powerful extraction process means carpets dry in hours, not days. Get back to normal life faster.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & Safe",
    description:
      "We use biodegradable, non-toxic cleaning solutions that are safe for children, pets, and the environment.",
  },
  {
    icon: Home,
    title: "Domestic Specialists",
    description:
      "From living rooms to bedrooms, we treat your home with care and attention. Every room left spotless.",
  },
  {
    icon: Building2,
    title: "Commercial Ready",
    description:
      "Offices, restaurants, hotels — we handle high-traffic commercial spaces with efficiency and professionalism.",
  },
];

export default function Benefits() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-500 font-semibold text-sm uppercase tracking-wider">
            The TWH Difference
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-6">
            Professional Results You Can{" "}
            <span className="text-brand-500">See & Feel</span>
          </h2>
          <p className="text-lg text-gray-600">
            We don&apos;t just clean surfaces — we restore them. Here&apos;s
            what you get when you choose TWH Carpet Cleaning.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {benefits.map((benefit, idx) => (
            <AnimatedSection key={benefit.title} delay={idx * 0.08}>
              <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 hover:bg-brand-50 transition-colors group h-full border border-gray-100">
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-200 transition-colors">
                  <benefit.icon className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="flex justify-center">
          <GuaranteeBadge />
        </AnimatedSection>
      </div>
    </section>
  );
}
