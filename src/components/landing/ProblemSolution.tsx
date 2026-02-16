"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart, Home, ShieldCheck, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Looks & Feels Brand New",
    description:
      "Professional deep cleaning restores the original colour, texture, and softness of your carpets and upholstery.",
  },
  {
    icon: Heart,
    title: "Healthier for Your Family",
    description:
      "Removes 98% of allergens, dust mites, and bacteria — creating a cleaner, fresher environment for everyone.",
  },
  {
    icon: Home,
    title: "A Home You'll Love Coming Back To",
    description:
      "Fresh carpets and spotless upholstery transform every room, giving a great impression to family and guests alike.",
  },
  {
    icon: ShieldCheck,
    title: "Extends the Life of Your Carpets",
    description:
      "Regular professional cleaning protects your investment, keeping carpets looking newer for years longer.",
  },
];

export default function ProblemSolution() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-brand-500 font-semibold text-sm uppercase tracking-wider">
            The Difference Is Clear
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3">
            A Brighter, Fresher{" "}
            <span className="text-brand-500">Home</span>
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Professional carpet and upholstery cleaning doesn&apos;t just
            remove stains — it transforms your living space into somewhere
            you love to be.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-5 h-5 text-brand-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="#quote-form"
            className="inline-flex items-center gap-2 bg-brand-500 text-white font-semibold rounded-lg px-8 py-4 text-lg hover:bg-brand-600 transition-all shadow-lg shadow-brand-500/25 hover:-translate-y-0.5"
          >
            Get Your Free Quote Now
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
