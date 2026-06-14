"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight, ShieldCheck, Clock, MapPin } from "lucide-react";

export default function BinCTA() {
  return (
    <section id="quote-form" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Ready for Bins That Are{" "}
            <span className="text-brand-500">Fresh &amp; Clean?</span>
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Join hundreds of happy customers across Chester, Wirral and
            Ellesmere Port. Get your free bin cleaning quote today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="tel:01513572295"
              className="inline-flex items-center justify-center gap-2 bg-brand-500 text-white font-bold rounded-lg px-8 py-4 text-lg hover:bg-brand-600 transition-all shadow-lg shadow-brand-500/25 hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" />
              Call 0151 357 2295
            </a>
            <a
              href="tel:07334231504"
              className="inline-flex items-center justify-center gap-2 border-2 border-brand-500 text-brand-500 font-bold rounded-lg px-8 py-4 text-lg hover:bg-brand-500 hover:text-white transition-all"
            >
              <Phone className="w-5 h-5" />
              Mobile: 07334 231 504
            </a>
            <a
              href="#top"
              className="inline-flex items-center justify-center gap-2 bg-accent-500 text-white font-bold rounded-lg px-8 py-4 text-lg hover:bg-accent-600 transition-all shadow-lg shadow-accent-500/25 hover:-translate-y-0.5"
            >
              Get a Quote Online
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-gray-500 text-sm">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              Response within 2 hours
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              Fully insured &amp; guaranteed
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              21 Girton Road, Ellesmere Port, CH65 5BE
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
