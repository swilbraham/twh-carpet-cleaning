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

const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const WEB3FORMS_KEY = "e8b4dd99-992e-4928-8e30-99af9daf2b32";

type FormStatus = "idle" | "submitting" | "success" | "error";

const plans = [
  { value: "Black Bin — £5/month", label: "Black Bin", price: "£5", sub: "General waste" },
  { value: "Red Bin — £5/month", label: "Red Bin", price: "£5", sub: "Recycling" },
  { value: "Both Bins — £9/month", label: "Both Bins", price: "£9", sub: "Save £1", popular: true },
  { value: "Healthy Home — £14/month", label: "Healthy Home", price: "£14", sub: "Black ×2 + Red" },
];

export default function BinHero() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const successRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    postcode: "",
    plan: "",
    collectionDate: "",
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot — silently drop bot submissions
    const honey = (e.currentTarget.elements.namedItem("_honey") as HTMLInputElement | null)?.value;
    if (honey) { setStatus("success"); return; }

    setStatus("submitting");
    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...formData,
          access_key: WEB3FORMS_KEY,
          subject: `Bin Cleaning Sign-Up — ${formData.name} (${formData.plan || "no plan selected"})`,
          from_name: "TWH Bin Cleaning Website",
        }),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok)
        setFormData({
          name: "",
          mobile: "",
          email: "",
          address: "",
          postcode: "",
          plan: "",
          collectionDate: "",
          message: "",
        });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bin-clean.jpg')" }}
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
              href="tel:07434231504"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              07434 231 504
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
              Professional Wheelie Bin Cleaning
              <span className="block text-accent-400 mt-1">
                Fresh, Hygienic &amp; Odour-Free
              </span>
            </h1>

            <p className="text-lg text-white/75 mb-8 leading-relaxed max-w-lg">
              From just <span className="text-white font-semibold">£5 a month</span>.
              Serving Chester, Ellesmere Port, Wirral &amp; the CH postcode area.
              We collect, jet-wash, sanitise and deodorise your bins — right at
              the kerbside. Register online in under a minute.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                "Kills 99.9% of germs & bacteria",
                "Removes odours & maggots",
                "High-pressure hot-water wash",
                "Eco-friendly & safe for pets",
                "Waste water collected, never spilled",
                "Regular or one-off cleans",
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
                href="tel:07434231504"
                className="flex items-center justify-center gap-2 border border-white/30 text-white font-medium rounded-lg px-6 py-3 text-sm"
              >
                <Phone className="w-4 h-4" />
                Mobile: 07434 231 504
              </a>
            </div>

            {/* Trust badges */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2 bg-green-500/15 border border-green-400/30 rounded-lg px-4 py-2">
                <ShieldCheck className="w-5 h-5 text-green-400" />
                <span className="text-green-300 text-sm font-medium">
                  Fully Insured &amp; Satisfaction Guaranteed
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
                    You&apos;re Signed Up!
                  </h3>
                  <p className="text-gray-600">
                    Thanks for registering your bins. We&apos;ll be in touch
                    within 2 hours to confirm your first clean.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot — bots fill this; humans never see it */}
                  <input
                    type="text"
                    name="_honey"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0 }}
                  />
                  <div className="text-center mb-1">
                    <h2 className="text-xl font-bold text-gray-900">
                      Register Your Bins
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      Sign up online — we reply within 2 hours
                    </p>
                  </div>

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
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Address *"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-sm"
                  />

                  <div className="grid sm:grid-cols-2 gap-3">
                    <input
                      type="tel"
                      name="mobile"
                      required
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Mobile Number *"
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

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email (optional)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-sm"
                  />

                  {/* Plan picker */}
                  <fieldset>
                    <legend className="text-sm font-semibold text-gray-700 mb-2">
                      Choose your plan *
                    </legend>
                    <div className="grid grid-cols-2 gap-2">
                      {plans.map((plan) => {
                        const selected = formData.plan === plan.value;
                        return (
                          <label
                            key={plan.value}
                            className={`relative cursor-pointer rounded-lg border-2 p-3 transition-all ${
                              selected
                                ? "border-brand-500 bg-brand-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <input
                              type="radio"
                              name="plan"
                              required
                              value={plan.value}
                              checked={selected}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            {plan.popular && (
                              <span className="absolute -top-2 right-2 bg-accent-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                                Popular
                              </span>
                            )}
                            <div className="flex items-baseline justify-between">
                              <span className="text-sm font-bold text-gray-900">
                                {plan.label}
                              </span>
                              <span className="text-sm font-extrabold text-brand-600">
                                {plan.price}
                                <span className="text-[10px] font-medium text-gray-400">
                                  /mo
                                </span>
                              </span>
                            </div>
                            <span className="block text-[11px] text-gray-500 mt-0.5">
                              {plan.sub}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </fieldset>

                  <div>
                    <label
                      htmlFor="collectionDate"
                      className="block text-sm font-semibold text-gray-700 mb-1.5"
                    >
                      Date of your next bin collection
                    </label>
                    <input
                      id="collectionDate"
                      type="date"
                      name="collectionDate"
                      value={formData.collectionDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-sm text-gray-700"
                    />
                    <p className="text-[11px] text-gray-400 mt-1">
                      So we know when to clean your bins after they&apos;re emptied.
                    </p>
                  </div>

                  <textarea
                    name="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Anything else? (bin location, access, gate code...)"
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
                        Register My Bins
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
