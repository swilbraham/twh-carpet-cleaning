"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Single Clean",
    price: "£8",
    unit: "per bin",
    description: "A one-off deep clean for a single wheelie bin.",
    features: [
      "Hot-water jet wash",
      "Sanitised & deodorised",
      "Waste water collected",
      "No contract",
    ],
    highlight: false,
  },
  {
    name: "Regular Clean",
    price: "£6",
    unit: "per bin / visit",
    description: "Our most popular plan — cleaned on a regular schedule.",
    features: [
      "Everything in Single Clean",
      "Monthly or fortnightly",
      "Priority booking",
      "Cancel anytime",
    ],
    highlight: true,
  },
  {
    name: "Multi-Bin & Commercial",
    price: "From £5",
    unit: "per bin",
    description: "Discounted rates for multiple bins or trade premises.",
    features: [
      "Best per-bin price",
      "Households & businesses",
      "Flexible scheduling",
      "Invoiced billing available",
    ],
    highlight: false,
  },
];

export default function BinPricing() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Simple, Honest{" "}
            <span className="text-brand-500">Pricing</span>
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            No hidden fees — ever. Prices vary by location and number of bins, so
            get in touch for an exact quote.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative rounded-2xl p-7 flex flex-col ${
                plan.highlight
                  ? "bg-brand-900 text-white shadow-xl ring-2 ring-accent-500"
                  : "bg-gray-50 text-gray-900 border border-gray-100 shadow-sm"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
              <div className="flex items-end gap-1 mb-3">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span
                  className={`text-sm mb-1 ${
                    plan.highlight ? "text-white/70" : "text-gray-500"
                  }`}
                >
                  {plan.unit}
                </span>
              </div>
              <p
                className={`text-sm mb-5 ${
                  plan.highlight ? "text-white/75" : "text-gray-600"
                }`}
              >
                {plan.description}
              </p>
              <ul className="space-y-2.5 mb-6 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check
                      className={`w-4 h-4 flex-shrink-0 ${
                        plan.highlight ? "text-accent-400" : "text-green-500"
                      }`}
                    />
                    <span
                      className={
                        plan.highlight ? "text-white/90" : "text-gray-700"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#top"
                className={`inline-flex items-center justify-center gap-2 font-semibold rounded-lg px-6 py-3 transition-all ${
                  plan.highlight
                    ? "bg-accent-500 text-white hover:bg-accent-600"
                    : "bg-brand-500 text-white hover:bg-brand-600"
                }`}
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Prices are a guide only and confirmed at the time of quote.
        </p>
      </div>
    </section>
  );
}
