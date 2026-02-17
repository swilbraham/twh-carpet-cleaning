"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

const services = [
  {
    title: "Carpet Cleaning",
    description:
      "Deep hot water extraction removes embedded dirt, stains, and allergens from every fibre.",
    image: "/carpets1.png",
  },
  {
    title: "Upholstery Cleaning",
    description:
      "Sofas, armchairs, and fabric furniture restored to look and smell like new.",
    image: "/upholstery1.png",
  },
  {
    title: "Hard Floor Cleaning",
    description:
      "Tile, vinyl, laminate, and stone floors professionally cleaned, stripped, and sealed.",
    image: "/hardfloor.png",
  },
];

export default function ServiceShowcase() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-500 font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-6">
            Expert Cleaning for{" "}
            <span className="text-brand-500">Every Surface</span>
          </h2>
          <p className="text-lg text-gray-600">
            From plush carpets to hard floors, we have the equipment and
            expertise to bring any surface back to life.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <AnimatedSection key={service.title} delay={idx * 0.12}>
              <div className="group rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow h-full bg-white">
                <div className="relative h-56 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-white font-bold text-xl">
                    {service.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
