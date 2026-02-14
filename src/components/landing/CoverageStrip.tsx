"use client";

import { motion } from "framer-motion";
import { MapPin, CheckCircle } from "lucide-react";

const areas = [
  "Chester",
  "Ellesmere Port",
  "Wirral",
  "Neston",
  "Frodsham",
  "Helsby",
  "Runcorn",
  "Parts of North Wales",
];

export default function CoverageStrip() {
  return (
    <section className="py-14 bg-brand-900 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-accent-400" />
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              Covering the Entire{" "}
              <span className="text-accent-400">CH Postcode</span> Area
            </h2>
          </div>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto text-sm">
            We cover anywhere with a CH postcode, including Chester, Ellesmere
            Port, Wirral and parts of North Wales, as well as some parts of
            West Cheshire like Frodsham, Helsby and Runcorn.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 text-sm"
              >
                <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                {area}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
