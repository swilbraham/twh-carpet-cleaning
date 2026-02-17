"use client";

import { motion } from "framer-motion";

export default function TestimonialStrip() {
  return (
    <section className="py-16 md:py-24 pb-0 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            What Our <span className="text-brand-500">Customers</span> Say
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
