"use client";

import { Star, Quote } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Homeowner",
    text: "I couldn't believe the difference. Stains I'd lived with for years just vanished. My carpets look like they did when we moved in. Absolutely brilliant service.",
    rating: 5,
  },
  {
    name: "James P.",
    role: "Office Manager",
    text: "We use TWH for all our office carpets quarterly. They're always professional, on time, and the results speak for themselves. Our team notices the difference every time.",
    rating: 5,
  },
  {
    name: "Linda & Tom K.",
    role: "Homeowners",
    text: "With two dogs and three kids, our carpets take a beating. TWH transformed them completely — and the eco-friendly products mean we don't worry about the little ones.",
    rating: 5,
  },
  {
    name: "Rachel D.",
    role: "Restaurant Owner",
    text: "Fast, efficient, and the results are outstanding. They cleaned our dining area carpets and upholstery overnight — zero disruption to our business. Highly recommend.",
    rating: 5,
  },
  {
    name: "Mark T.",
    role: "Landlord",
    text: "I call TWH between every tenancy. They always get the carpets looking fresh for new tenants. Professional service and very fairly priced.",
    rating: 5,
  },
  {
    name: "Emma W.",
    role: "Homeowner",
    text: "The sofa looked brand new after they were done with it. I'd been quoted much more elsewhere. TWH gave me the best price AND the best result. Won't use anyone else now.",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4 fill-amber-400 text-amber-400"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-500 font-semibold text-sm uppercase tracking-wider">
            Don&apos;t Just Take Our Word For It
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-6">
            Loved by <span className="text-brand-500">Hundreds</span> of Happy
            Customers
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span className="text-gray-600 font-medium">
              4.9/5 average rating
            </span>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <AnimatedSection key={testimonial.name} delay={idx * 0.08}>
              <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 border border-gray-100 h-full flex flex-col">
                <Quote className="w-8 h-8 text-brand-200 mb-4" />
                <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                  <StarRating rating={testimonial.rating} />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
