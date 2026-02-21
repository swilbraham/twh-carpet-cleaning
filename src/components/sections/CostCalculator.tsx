"use client";

import { useState } from "react";
import {
  Plus,
  Minus,
  Calculator,
  ArrowRight,
  Send,
  Loader2,
  CheckCircle,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const FORMSUBMIT_URL =
  "https://formsubmit.co/ajax/Twhcarpetcleaning@outlook.com";

const roomTypes = [
  { id: "living", label: "Living Room" },
  { id: "bedroom", label: "Bedroom" },
  { id: "dining", label: "Dining Room" },
  { id: "hallway", label: "Hallway" },
  { id: "stairs", label: "Stairs & Landing" },
  { id: "kitchen", label: "Kitchen" },
  { id: "bathroom", label: "Bathroom" },
  { id: "conservatory", label: "Conservatory" },
];

function calculateTotal(totalRooms: number): number {
  if (totalRooms <= 0) return 0;
  let total = 69; // First room
  if (totalRooms >= 2) total += 30; // Second room
  if (totalRooms >= 3) total += (totalRooms - 2) * 20; // £20 each after
  return total;
}

type FormStatus = "idle" | "booking" | "submitting" | "success" | "error";

export default function CostCalculator() {
  const [rooms, setRooms] = useState<Record<string, number>>({});
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    message: "",
  });

  const totalRooms = Object.values(rooms).reduce((sum, qty) => sum + qty, 0);
  const total = calculateTotal(totalRooms);

  const updateRoom = (id: string, delta: number) => {
    setRooms((prev) => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: next };
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Build a summary of selected rooms
  const getRoomSummary = (): string => {
    return roomTypes
      .filter((r) => (rooms[r.id] || 0) > 0)
      .map((r) => {
        const qty = rooms[r.id];
        return qty > 1 ? `${r.label} x${qty}` : r.label;
      })
      .join(", ");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    try {
      const res = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          rooms_selected: getRoomSummary(),
          total_rooms: totalRooms,
          estimated_price: `£${total}`,
          _subject: `Calculator Booking — ${formData.name} — £${total}`,
          _template: "table",
        }),
      });
      setFormStatus(res.ok ? "success" : "error");
      if (res.ok)
        setFormData({
          name: "",
          email: "",
          phone: "",
          postcode: "",
          message: "",
        });
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <section id="calculator" className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-brand-500 font-semibold text-sm uppercase tracking-wider">
            Instant Estimate
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
            <Calculator className="inline-block w-8 h-8 md:w-10 md:h-10 text-brand-500 mr-2 -mt-1" />
            Cost <span className="text-brand-500">Calculator</span>
          </h2>
          <p className="text-lg text-gray-600">
            Select the rooms you need cleaning to get an instant price estimate.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
            {/* Room selectors */}
            <div className="p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-3">
                {roomTypes.map((room) => {
                  const qty = rooms[room.id] || 0;
                  return (
                    <div
                      key={room.id}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 border transition-colors ${
                        qty > 0
                          ? "bg-brand-50 border-brand-200"
                          : "bg-white border-gray-200"
                      }`}
                    >
                      <span
                        className={`font-medium text-sm ${
                          qty > 0 ? "text-brand-700" : "text-gray-700"
                        }`}
                      >
                        {room.label}
                      </span>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => updateRoom(room.id, -1)}
                          disabled={qty === 0}
                          className="w-8 h-8 rounded-lg flex items-center justify-center border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                          aria-label={`Remove ${room.label}`}
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span
                          className={`w-6 text-center font-bold text-sm tabular-nums ${
                            qty > 0 ? "text-brand-600" : "text-gray-400"
                          }`}
                        >
                          {qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateRoom(room.id, 1)}
                          className="w-8 h-8 rounded-lg flex items-center justify-center border border-brand-300 bg-brand-500 text-white hover:bg-brand-600 transition-colors cursor-pointer"
                          aria-label={`Add ${room.label}`}
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Total & booking */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                {totalRooms > 0 ? (
                  <div className="text-center">
                    {/* Total */}
                    <div className="mb-6">
                      <p className="text-sm text-gray-500 mb-1">
                        Estimated total for{" "}
                        <span className="font-semibold text-gray-700">
                          {totalRooms} room{totalRooms !== 1 ? "s" : ""}
                        </span>
                      </p>
                      <p className="text-5xl font-extrabold text-brand-500">
                        &pound;{total}
                      </p>
                    </div>

                    {/* Booking form or button */}
                    {formStatus === "success" ? (
                      <div className="py-6">
                        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <CheckCircle className="w-7 h-7 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          Booking Request Sent!
                        </h3>
                        <p className="text-gray-600 text-sm">
                          We&apos;ll get back to you within 2 hours to confirm.
                        </p>
                      </div>
                    ) : formStatus === "booking" ||
                      formStatus === "submitting" ||
                      formStatus === "error" ? (
                      <form
                        onSubmit={handleSubmit}
                        className="max-w-md mx-auto space-y-3 text-left"
                      >
                        <p className="text-sm font-semibold text-gray-700 text-center mb-2">
                          Complete your details to book
                        </p>
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
                        <textarea
                          name="message"
                          rows={2}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Any details? (stains, access, preferred date...)"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-sm resize-none"
                        />

                        {/* Summary shown in form */}
                        <div className="bg-brand-50 border border-brand-200 rounded-lg p-3 text-sm text-brand-700">
                          <span className="font-semibold">Rooms:</span>{" "}
                          {getRoomSummary()} —{" "}
                          <span className="font-bold">&pound;{total}</span>{" "}
                          estimated
                        </div>

                        <button
                          type="submit"
                          disabled={formStatus === "submitting"}
                          className="w-full bg-brand-500 text-white font-bold py-4 rounded-lg hover:bg-brand-600 transition-all shadow-lg shadow-brand-500/25 hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg cursor-pointer"
                        >
                          {formStatus === "submitting" ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5" />
                              Submit Booking
                            </>
                          )}
                        </button>

                        {formStatus === "error" && (
                          <p className="text-red-600 text-sm text-center">
                            Something went wrong. Please try again or call us.
                          </p>
                        )}

                        <p className="text-xs text-gray-400 text-center">
                          No spam. No obligation. Your details are safe with us.
                        </p>
                      </form>
                    ) : (
                      <>
                        <button
                          type="button"
                          onClick={() => setFormStatus("booking")}
                          className="inline-flex items-center gap-2 bg-brand-500 text-white font-semibold rounded-lg px-8 py-4 text-lg hover:bg-brand-600 transition-all shadow-lg shadow-brand-500/25 hover:-translate-y-0.5 cursor-pointer"
                        >
                          Book Now
                          <ArrowRight className="w-5 h-5" />
                        </button>
                        <p className="text-xs text-gray-400 mt-4">
                          This is an estimate. Final price confirmed after
                          assessment. No hidden fees.
                        </p>
                      </>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <p className="text-gray-400 text-lg">
                      Select rooms above to see your price
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
