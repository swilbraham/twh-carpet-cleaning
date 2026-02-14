"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Clock, Leaf, Users, ThumbsUp } from "lucide-react";

const trustItems = [
  { icon: ShieldCheck, label: "Fully Insured" },
  { icon: Award, label: "10+ Years Experience" },
  { icon: Clock, label: "Same-Week Booking" },
  { icon: Leaf, label: "Eco-Friendly Products" },
  { icon: Users, label: "500+ Happy Customers" },
  { icon: ThumbsUp, label: "Satisfaction Guaranteed" },
];

export default function TrustBar() {
  return (
    <section className="bg-brand-500 py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3"
        >
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-white/90"
            >
              <item.icon className="w-4 h-4 text-white/70" />
              <span className="text-sm font-medium whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
