"use client";

import { ArrowRight, Phone, Clock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 rounded-3xl overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 px-6 py-16 sm:px-12 sm:py-20 md:px-16 md:py-24 text-center">
            <AnimatedSection>
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                  Ready for Carpets That Look{" "}
                  <span className="text-accent-400">Brand New?</span>
                </h2>
                <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10">
                  Join hundreds of happy customers who&apos;ve transformed their
                  homes and businesses. Get your free, no-obligation quote in
                  minutes.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                  <Button href="tel:01513572295" variant="secondary" size="lg">
                    <Phone className="w-5 h-5 mr-2" />
                    Call 0151 357 2295
                  </Button>
                  <Button
                    href="#quote"
                    size="lg"
                    className="bg-accent-500 hover:bg-accent-600 shadow-accent-500/25"
                  >
                    Request a Quote Online
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6 text-white/70 text-sm">
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Response within 2 hours
                  </span>
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    100% satisfaction guarantee
                  </span>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
