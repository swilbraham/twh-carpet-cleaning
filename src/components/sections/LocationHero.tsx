"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, CheckCircle, Phone, MapPin } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Logo from "@/components/ui/Logo";
import type { Location } from "@/lib/locations";

export default function LocationHero({ location }: { location: Location }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/tom2.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900/90 via-brand-800/85 to-brand-700/80" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 w-full">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <Logo variant="light" size="lg" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex justify-center gap-2 flex-wrap"
          >
            <Badge variant="warning" className="mb-6">
              <Star className="w-3.5 h-3.5 mr-1 fill-amber-500 text-amber-500" />
              Trusted by 500+ local customers
            </Badge>
            <Badge variant="success" className="mb-6">
              <MapPin className="w-3.5 h-3.5 mr-1" />
              {location.name} — {location.postcode}
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6"
          >
            {location.heroTitle}
            <br />
            <span className="text-accent-400">{location.heroTitleAccent}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto"
          >
            {location.heroSubtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
          >
            <Button href="#quote" size="lg">
              Get Your Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button href="tel:01513572295" variant="secondary" size="lg">
              <Phone className="w-5 h-5 mr-2" />
              Call 0151 357 2295
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mb-8"
          >
            <a
              href="tel:07334231504"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              Or call mobile: 07334 231 504
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-x-6 gap-y-2"
          >
            {[
              "No hidden fees",
              "Eco-friendly products",
              "Same-week availability",
              `Local to ${location.name}`,
            ].map((item) => (
              <span
                key={item}
                className="flex items-center gap-2 text-white/70 text-sm"
              >
                <CheckCircle className="w-4 h-4 text-green-400" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
