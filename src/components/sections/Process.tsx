"use client";

import { PhoneCall, ClipboardCheck, SprayCan, ThumbsUp } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    step: "01",
    title: "Get Your Free Quote",
    description:
      "Tell us about your space — rooms, floor types, any problem areas. We'll give you an honest, no-obligation quote within hours.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "We Assess & Prepare",
    description:
      "On arrival, we inspect every area, identify stain types, and select the best cleaning method for your specific surfaces.",
  },
  {
    icon: SprayCan,
    step: "03",
    title: "Deep Clean & Restore",
    description:
      "Using professional-grade equipment and eco-friendly solutions, we deep clean every fibre and surface to restore them to their best.",
  },
  {
    icon: ThumbsUp,
    step: "04",
    title: "Walk-Through & Enjoy",
    description:
      "We do a final walk-through with you to make sure you're 100% satisfied. Then enjoy your fresh, like-new carpets and floors.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-500 font-semibold text-sm uppercase tracking-wider">
            Simple & Hassle-Free
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-6">
            4 Easy Steps to{" "}
            <span className="text-brand-500">Spotless Floors</span>
          </h2>
          <p className="text-lg text-gray-600">
            No stress, no hassle. We make professional carpet cleaning as simple
            as making a phone call.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <AnimatedSection key={step.step} delay={idx * 0.12}>
              <div className="relative text-center h-full">
                {/* Connector line */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-brand-200" />
                )}

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-brand-500 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-brand-500/20">
                    <step.icon className="w-9 h-9 text-white" />
                  </div>
                  <span className="text-brand-400 font-bold text-sm tracking-wider">
                    STEP {step.step}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5} className="text-center mt-14">
          <Button href="#quote" size="lg">
            Start With Step 1 — Get Your Free Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
