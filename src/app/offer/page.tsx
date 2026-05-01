"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Star,
  CheckCircle,
  Send,
  Loader2,
  ShieldCheck,
  Clock,
  Sparkles,
  MapPin,
  Tag,
} from "lucide-react";
import ElfsightReviews from "@/components/ui/ElfsightReviews";
import NCCABadge from "@/components/ui/NCCABadge";
import LandingFooter from "@/components/landing/LandingFooter";

const FORMSUBMIT_URL = "https://formsubmit.co/ajax/Twhcarpetcleaning@outlook.com";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function OfferPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    rooms: "",
    message: "",
  });

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
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: `OFFER (3 Carpets £119) — ${formData.name}`,
          _template: "table",
        }),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok)
        setFormData({
          name: "",
          email: "",
          phone: "",
          postcode: "",
          rooms: "",
          message: "",
        });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div id="top">
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/tom2.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-900/90 to-brand-800/80" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-10 md:mb-14">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="TWH Carpet Cleaning"
                className="h-12 md:h-14 w-auto"
              />
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
              {/* Left — Offer Copy */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 bg-accent-500/20 border border-accent-400/40 rounded-full px-4 py-1.5 mb-5">
                  <Tag className="w-4 h-4 text-accent-400" />
                  <span className="text-accent-400 text-sm font-semibold uppercase tracking-wide">
                    Limited Time Offer
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6">
                  3 Carpets Professionally Cleaned for Only{" "}
                  <span className="text-accent-400">£119</span>
                </h1>

                <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-lg">
                  Bring three of your carpets back to life with our deep
                  hot-water extraction clean — same eco-friendly process, same
                  NCCA-accredited technicians, one unbeatable price. Available
                  across Chester, Ellesmere Port, Wirral and the surrounding
                  CH postcode area.
                </p>

                {/* Price card */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-8 max-w-md">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-white/60 text-lg line-through">
                      £150
                    </span>
                    <span className="text-5xl font-extrabold text-white">
                      £119
                    </span>
                    <span className="text-white/70 text-sm">all-in</span>
                  </div>
                  <p className="text-white/70 text-sm">
                    Three carpets, one fixed price. No hidden fees, no VAT
                    surprises.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "Deep hot-water extraction",
                    "Eco-friendly & pet-safe",
                    "Pre-treatment of high-traffic areas",
                    "Stain & spot treatment included",
                    "Fast drying — usually 2–4 hours",
                    "100% satisfaction guarantee",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-white/85"
                    >
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

                {/* Reviews badge */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <span className="text-white/80 text-sm font-medium">
                    4.9/5 from 500+ happy customers
                  </span>
                </div>

                {/* Trust badges */}
                <div className="hidden md:flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2 bg-green-500/15 border border-green-400/30 rounded-lg px-4 py-2">
                    <ShieldCheck className="w-5 h-5 text-green-400" />
                    <span className="text-green-300 text-sm font-medium">
                      NCCA Accredited
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-4 py-2">
                    <Clock className="w-5 h-5 text-white" />
                    <span className="text-white text-sm font-medium">
                      Reply within 2 hours
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Right — Booking Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 relative">
                  {/* Offer ribbon */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-500 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg">
                    Claim Your £119 Offer
                  </div>

                  {status === "success" ? (
                    <div className="text-center py-10">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Offer Reserved!
                      </h3>
                      <p className="text-gray-600">
                        Thanks — we&apos;ll call you within 2 hours to book a
                        time that suits you.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                      <div className="text-center mb-1">
                        <h2 className="text-xl font-bold text-gray-900">
                          Book the £119 Offer
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">
                          3 carpets cleaned — fixed price, no obligation
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
                        name="rooms"
                        value={formData.rooms}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-sm bg-white"
                      >
                        <option value="">Which rooms? (optional)</option>
                        <option value="Lounge, Hallway, Stairs">
                          Lounge, Hallway, Stairs
                        </option>
                        <option value="Lounge & 2 Bedrooms">
                          Lounge &amp; 2 Bedrooms
                        </option>
                        <option value="3 Bedrooms">3 Bedrooms</option>
                        <option value="Lounge, Dining Room, Bedroom">
                          Lounge, Dining Room, Bedroom
                        </option>
                        <option value="Other combination">
                          Other combination
                        </option>
                      </select>

                      <textarea
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Any details? (stains, pets, preferred dates...)"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-sm resize-none"
                      />

                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="w-full bg-accent-500 text-white font-bold py-4 rounded-lg hover:bg-accent-600 transition-all shadow-lg shadow-accent-500/25 hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg cursor-pointer"
                      >
                        {status === "submitting" ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Claim My £119 Offer
                          </>
                        )}
                      </button>

                      {status === "error" && (
                        <p className="text-red-600 text-sm text-center">
                          Something went wrong. Please call 0151 357 2295
                          instead.
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

        {/* What's included */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                What&apos;s Included in Your{" "}
                <span className="text-brand-500">£119 Clean</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A full professional clean for three carpets — exactly the same
                process we use on every job, no shortcuts.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Sparkles,
                  title: "Pre-vacuum & inspection",
                  body:
                    "We thoroughly inspect every carpet, identify problem areas and pre-vacuum to lift dry soil before deep cleaning.",
                },
                {
                  icon: ShieldCheck,
                  title: "Pre-treat & agitate",
                  body:
                    "High-traffic lanes, stains and spots are pre-treated with eco-friendly solutions and agitated to break down grime.",
                },
                {
                  icon: CheckCircle,
                  title: "Hot-water extraction",
                  body:
                    "Powerful truck-quality extraction lifts out dirt, allergens and residue — leaving carpets fresh and dry in 2–4 hours.",
                },
              ].map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand-500" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {body}
                  </p>
                </div>
              ))}
            </div>

            {/* Terms */}
            <div className="mt-10 bg-brand-50 border border-brand-100 rounded-2xl p-6 text-center">
              <p className="text-sm text-gray-700">
                <strong className="text-brand-700">The fine print:</strong>{" "}
                Offer applies to three standard domestic carpets in the same
                property. Stairs count as one carpet. Heavily soiled carpets or
                specialist fibres (wool, sisal) may incur a small supplement —
                we&apos;ll always tell you before we start. Available within
                our standard service area.
              </p>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <ElfsightReviews />

        {/* Final CTA */}
        <section id="claim" className="py-16 md:py-24 bg-brand-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
                Ready to claim your{" "}
                <span className="text-accent-400">£119 offer?</span>
              </h2>
              <p className="text-lg text-white/75 mb-10 max-w-2xl mx-auto">
                Call now or scroll up to book online — we&apos;ll respond within
                2 hours during working hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <a
                  href="tel:01513572295"
                  className="inline-flex items-center justify-center gap-2 bg-accent-500 text-white font-bold rounded-lg px-8 py-4 text-lg hover:bg-accent-600 transition-all shadow-lg shadow-accent-500/25 hover:-translate-y-0.5"
                >
                  <Phone className="w-5 h-5" />
                  Call 0151 357 2295
                </a>
                <a
                  href="#top"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold rounded-lg px-8 py-4 text-lg hover:bg-white hover:text-brand-900 transition-all"
                >
                  Book Online
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-white/60 text-sm">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  Response within 2 hours
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  100% satisfaction guarantee
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  Chester, Wirral &amp; CH postcodes
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        <NCCABadge />
      </main>
      <LandingFooter />
    </div>
  );
}
