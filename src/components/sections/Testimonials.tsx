"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 pb-0 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <span className="text-brand-500 font-semibold text-sm uppercase tracking-wider">
            Don&apos;t Just Take Our Word For It
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mt-3">
            What Our <span className="text-brand-500">Customers</span> Say
          </h2>
        </AnimatedSection>
      </div>
    </section>
  );
}
