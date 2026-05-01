"use client";

import {
  Award,
  Users,
  Calendar,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const stats = [
  { icon: Users, value: "500+", label: "Happy Customers" },
  { icon: Calendar, value: "10+", label: "Years Experience" },
  { icon: Award, value: "4.9", label: "Average Rating" },
  { icon: ShieldCheck, value: "100%", label: "Satisfaction Guarantee" },
];

const credentials = [
  "Fully insured and certified",
  "DBS-checked technicians",
  "Professional-grade equipment",
  "Eco-friendly cleaning solutions",
  "Domestic & commercial expertise",
  "Flexible scheduling, including weekends",
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-brand-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedSection direction="left">
            <span className="text-brand-300 font-semibold text-sm uppercase tracking-wider">
              Why Choose TWH
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-3 mb-6">
              Your Local Carpet Cleaning{" "}
              <span className="text-accent-400">Experts</span>
            </h2>
            <p className="text-white/70 text-lg mb-6 leading-relaxed">
              TWH Carpet Cleaning was founded on a simple belief: everyone
              deserves a clean, healthy space — without the premium price tag. We
              combine industry-leading equipment with genuine care for every
              customer.
            </p>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Whether you need a single room freshened up or an entire office
              building restored, our experienced team delivers consistent,
              outstanding results every time.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {credentials.map((credential) => (
                <div
                  key={credential}
                  className="flex items-center gap-2 text-white/80"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">{credential}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="space-y-6">
              {/* Real photos */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/tom1.jpg"
                    alt="Tom from TWH Carpet Cleaning at work"
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/tom2.jpg"
                    alt="TWH Carpet Cleaning commercial office cleaning"
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, idx) => (
                  <div
                    key={stat.label}
                    className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 ${
                      idx === 0 ? "mt-4" : idx === 1 ? "" : idx === 2 ? "" : "mt-4"
                    }`}
                  >
                    <stat.icon className="w-8 h-8 text-accent-400 mx-auto mb-3" />
                    <p className="text-3xl font-extrabold mb-1">{stat.value}</p>
                    <p className="text-white/60 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
