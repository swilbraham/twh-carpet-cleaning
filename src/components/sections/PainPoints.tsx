"use client";

import { AlertTriangle, Bug, Frown, Ban } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const painPoints = [
  {
    icon: AlertTriangle,
    title: "Stubborn Stains That Won't Budge",
    description:
      "DIY cleaning and shop-bought products only push dirt deeper into the fibres, leaving your carpets looking worse over time.",
  },
  {
    icon: Bug,
    title: "Hidden Allergens & Bacteria",
    description:
      "Your carpets trap dust mites, pet dander, and bacteria that regular vacuuming can't reach — affecting your family's health every day.",
  },
  {
    icon: Frown,
    title: "Embarrassing First Impressions",
    description:
      "Dirty carpets and stained upholstery make your home feel tired and your business look unprofessional to visitors and clients.",
  },
  {
    icon: Ban,
    title: "Wear & Tear Cutting Carpet Life Short",
    description:
      "Without proper deep cleaning, ground-in dirt acts like sandpaper, wearing down carpet fibres and costing you thousands in premature replacements.",
  },
];

export default function PainPoints() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">
            Sound Familiar?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-6">
            Your Carpets Are Quietly Making Things{" "}
            <span className="text-red-500">Worse</span>
          </h2>
          <p className="text-lg text-gray-600">
            Most people don&apos;t realise the hidden problems lurking in their
            carpets and floors. Here&apos;s what you might be dealing with right
            now...
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {painPoints.map((point, idx) => (
            <AnimatedSection
              key={point.title}
              delay={idx * 0.1}
              direction={idx % 2 === 0 ? "left" : "right"}
            >
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {point.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {point.description}
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
