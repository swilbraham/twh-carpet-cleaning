"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Phone, Loader2 } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GuaranteeBadge from "@/components/ui/GuaranteeBadge";

type FormStatus = "idle" | "submitting" | "success" | "error";

const FORMSUBMIT_URL = "https://formsubmit.co/ajax/Twhcarpetcleaning@outlook.com";

export default function QuoteForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    serviceType: "",
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
    setErrorMessage("");

    try {
      const res = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          postcode: formData.postcode,
          "Service Type": formData.serviceType,
          "Number of Rooms": formData.rooms,
          message: formData.message,
          _subject: `New Quote Request from ${formData.name} — TWH Carpet Cleaning`,
          _template: "table",
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          postcode: "",
          serviceType: "",
          rooms: "",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage("Something went wrong. Please try again or call us instead.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try calling us instead.");
    }
  };

  return (
    <section id="quote" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Copy */}
          <AnimatedSection direction="left">
            <span className="text-brand-500 font-semibold text-sm uppercase tracking-wider">
              Free, No-Obligation Quote
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-6">
              Get Your <span className="text-brand-500">Free Quote</span> in
              Minutes
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Fill in the form and we&apos;ll get back to you with an honest,
              no-obligation quote — usually within 2 hours. Or give us a call
              for an instant quote.
            </p>

            <div className="space-y-4 mb-8">
              <a
                href="tel:01513572295"
                className="flex items-center gap-4 bg-white rounded-xl p-4 border border-gray-200 hover:border-brand-300 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center group-hover:bg-brand-200 transition-colors">
                  <Phone className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Landline</p>
                  <p className="text-brand-600 font-semibold text-lg">
                    0151 357 2295
                  </p>
                </div>
              </a>

              <a
                href="tel:07334231504"
                className="flex items-center gap-4 bg-white rounded-xl p-4 border border-gray-200 hover:border-brand-300 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center group-hover:bg-brand-200 transition-colors">
                  <Phone className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Mobile</p>
                  <p className="text-brand-600 font-semibold text-lg">
                    07334 231 504
                  </p>
                </div>
              </a>
            </div>

            <GuaranteeBadge />
          </AnimatedSection>

          {/* Right: Form */}
          <AnimatedSection direction="right">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
              {status === "success" ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Quote Request Sent!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thanks! We&apos;ll get back to you with your quote within 2
                    hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-brand-500 font-semibold hover:underline cursor-pointer"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="text-center mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      Request Your Free Quote
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      We&apos;ll respond within 2 hours
                    </p>
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 rounded-lg p-3 text-sm">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="07XXX XXXXXX"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="postcode"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Postcode
                      </label>
                      <input
                        type="text"
                        id="postcode"
                        name="postcode"
                        value={formData.postcode}
                        onChange={handleChange}
                        placeholder="CH65 5BE"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="serviceType"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Service Needed
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors text-sm bg-white"
                      >
                        <option value="">Select a service...</option>
                        <option value="Carpet Cleaning">Carpet Cleaning</option>
                        <option value="Upholstery Cleaning">
                          Upholstery Cleaning
                        </option>
                        <option value="Hard Floor Cleaning">
                          Hard Floor Cleaning
                        </option>
                        <option value="Full Home Package">
                          Full Home Package
                        </option>
                        <option value="Commercial Cleaning">
                          Commercial Cleaning
                        </option>
                        <option value="Multiple Services">
                          Multiple Services
                        </option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="rooms"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Number of Rooms
                      </label>
                      <select
                        id="rooms"
                        name="rooms"
                        value={formData.rooms}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors text-sm bg-white"
                      >
                        <option value="">Select...</option>
                        <option value="1">1 room</option>
                        <option value="2">2 rooms</option>
                        <option value="3">3 rooms</option>
                        <option value="4">4 rooms</option>
                        <option value="5+">5+ rooms</option>
                        <option value="Commercial">
                          Commercial / Large Area
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Tell Us More (optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any specific stains, problem areas, or questions? Let us know..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full bg-brand-500 text-white font-semibold py-4 rounded-lg hover:bg-brand-600 transition-all shadow-lg shadow-brand-500/25 hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2 text-lg cursor-pointer"
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

                  <p className="text-xs text-gray-400 text-center">
                    No spam, no obligation. Your details are safe with us.
                  </p>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
