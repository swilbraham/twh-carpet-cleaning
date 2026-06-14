"use client";

import { motion } from "framer-motion";
import { PhoneCall, Droplets, ThumbsUp } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    num: "1",
    title: "Book Your Clean",
    text: "Fill in the form or call us. Choose a one-off clean or a regular schedule that suits you.",
  },
  {
    icon: Droplets,
    num: "2",
    title: "We Jet-Wash & Sanitise",
    text: "After your bins are emptied, we clean them with high-pressure hot water, sanitiser and deodoriser — collecting all waste water.",
  },
  {
    icon: ThumbsUp,
    num: "3",
    title: "Enjoy Fresh Bins",
    text: "Your bins are left clean, germ-free and smelling fresh. No mess, no fuss — that's it.",
  },
];

export default function BinHowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            3 Simple Steps to{" "}
            <span className="text-brand-500">Fresh, Clean Bins</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 }}
              className="text-center"
            >
              <div className="relative inline-flex items-center justify-center mb-5">
                <div className="w-16 h-16 bg-brand-500 rounded-2xl flex items-center justify-center shadow-lg shadow-brand-500/20">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 bg-accent-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow">
                  {step.num}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
