"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Star,
  CheckCircle,
  Send,
  Loader2,
  ShieldCheck,
} from "lucide-react";

const FORMSUBMIT_URL = "https://formsubmit.co/ajax/Twhcarpetcleaning@outlook.com";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function LandingHero() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const successRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    serviceType: "",
    message: "",
  });

  useEffect(() => {
    if (status === "success" && successRef.current) {
      successRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [status]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...formData,
          _subject: `Landing Page Quote — ${formData.name}`,
          _template: "table",
        }),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok)
        setFormData({ name: "", email: "", phone: "", postcode: "", serviceType: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/tom2.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-900/90 to-brand-800/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Top bar — logo + phone */}
        <div className="flex items-center justify-between mb-10 md:mb-14">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="TWH Carpet Cleaning" className="h-12 md:h-14 w-auto" />
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:01513572295"
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-white hover:bg-white/20 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold text-sm">0151 357 2295</span>
            </a>
            <a
              href="tel:07334231504"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              07334 231 504
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-white/80 text-sm font-medium">
                4.9 from 500+ customers
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] mb-6">
              Professional Carpet Cleaning
              <span className="block text-accent-400 mt-1">
                That Transforms Your Space
              </span>
            </h1>

            <p className="text-lg text-white/75 mb-8 leading-relaxed max-w-lg">
              Serving Chester, Ellesmere Port, Wirral &amp; the CH postcode
              area. Domestic &amp; commercial. Eco-friendly products. Fast
              drying. Outstanding results guaranteed.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                "Deep hot-water extraction",
                "Eco-friendly & safe for pets",
                "Same-week availability",
                "100% satisfaction guarantee",
                "Fully insured technicians",
                "No hidden fees — ever",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-white/80">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Mobile phone buttons */}
            <div className="flex flex-col sm:hidden gap-3 mb-8">
              <a
                href="tel:01513572295"
                className="flex items-center justify-center gap-2 bg-white text-brand-700 font-semibold rounded-lg px-6 py-4 text-lg shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call 0151 357 2295
              </a>
              <a
                href="tel:07334231504"
                className="flex items-center justify-center gap-2 border border-white/30 text-white font-medium rounded-lg px-6 py-3 text-sm"
              >
                <Phone className="w-4 h-4" />
                Mobile: 07334 231 504
              </a>
            </div>

            {/* Trust badges */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2 bg-green-500/15 border border-green-400/30 rounded-lg px-4 py-2">
                <ShieldCheck className="w-5 h-5 text-green-400" />
                <span className="text-green-300 text-sm font-medium">
                  100% Money-Back Guarantee
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
              {status === "success" ? (
                <div ref={successRef} className="text-center py-10 scroll-mt-24">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Quote Request Sent!
                  </h3>
                  <p className="text-gray-600">
                    We&apos;ll get back to you within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="text-center mb-1">
                    <h2 className="text-xl font-bold text-gray-900">
                      Get Your FREE Quote
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      No obligation — we reply within 2 hours
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name *"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-sm"
                    />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email *"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-sm"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number *"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-sm"
                    />
                    <input
                      type="text"
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleChange}
                      placeholder="Postcode"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-sm"
                    />
                  </div>

                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-sm bg-white"
                  >
                    <option value="">What do you need cleaning?</option>
                    <option value="Carpet Cleaning">Carpet Cleaning</option>
                    <option value="Upholstery Cleaning">Upholstery Cleaning</option>
                    <option value="Hard Floor Cleaning">Hard Floor Cleaning</option>
                    <option value="Full Home Package">Full Home Package</option>
                    <option value="Commercial Cleaning">Commercial Cleaning</option>
                    <option value="Multiple Services">Multiple Services</option>
                  </select>

                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any details? (rooms, stains, size of area...)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-sm resize-none"
                  />

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full bg-brand-500 text-white font-bold py-4 rounded-lg hover:bg-brand-600 transition-all shadow-lg shadow-brand-500/25 hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg cursor-pointer"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Get My Free Quote
                      </>
                    )}
                  </button>

                  {status === "error" && (
                    <p className="text-red-600 text-sm text-center">
                      Something went wrong. Please call us instead.
                    </p>
                  )}

                  <p className="text-xs text-gray-400 text-center">
                    No spam. No obligation. Your details are safe with us.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
