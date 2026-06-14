"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Domestic Wheelie Bins",
    description: "General waste, recycling and garden bins jet-washed, sanitised and deodorised at your kerbside.",
    image: "/bin-clean.jpg",
  },
  {
    title: "Recycling & Food Caddies",
    description: "Smaller recycling boxes and food caddies cleaned and treated to keep flies and odours away.",
    image: "/bin-recycling.jpg",
  },
  {
    title: "Commercial & Trade Bins",
    description: "Pubs, restaurants, shops and offices — scheduled trade bin cleaning to keep your premises hygienic.",
    image: "/bin-blue.jpg",
  },
];

export default function BinServices() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Bins We <span className="text-brand-500">Clean</span>
          </h2>
          <p className="text-gray-600 mt-3">
            Domestic &amp; commercial — we handle it all.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <h3 className="absolute bottom-3 left-4 text-white font-bold text-lg">
                  {service.title}
                </h3>
              </div>
              <div className="p-5">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
