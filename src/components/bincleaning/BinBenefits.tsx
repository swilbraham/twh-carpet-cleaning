"use client";

import { motion } from "framer-motion";
import { Sparkles, Bug, Wind, ShieldCheck, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Spotlessly Clean Inside & Out",
    description:
      "A high-pressure hot-water jet wash blasts away caked-on grime, food residue and stains from every surface of your bin.",
  },
  {
    icon: Bug,
    title: "No More Maggots or Flies",
    description:
      "Dirty bins attract maggots, flies and vermin. We sanitise and treat your bin so it stays hygienic between collections.",
  },
  {
    icon: Wind,
    title: "Fresh, Odour-Free Bins",
    description:
      "We deodorise every bin with a fresh-scented treatment, so you never have to hold your breath when you take the rubbish out.",
  },
  {
    icon: ShieldCheck,
    title: "Healthier for Your Family",
    description:
      "Bins harbour E. coli, salmonella and listeria. Our sanitising kills 99.9% of germs and bacteria for a healthier home.",
  },
];

export default function BinBenefits() {
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
            Say Goodbye to Dirty Bins
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3">
            A Cleaner, Fresher{" "}
            <span className="text-brand-500">Bin</span>
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Your wheelie bin is one of the dirtiest things you touch every week.
            Our professional cleaning doesn&apos;t just rinse it — it sanitises,
            deodorises and protects your family.
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
            href="#top"
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
