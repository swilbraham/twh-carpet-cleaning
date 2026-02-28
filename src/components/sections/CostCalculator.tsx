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
  Sparkles,
  Star,
  Crown,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const FORMSUBMIT_URL =
  "https://formsubmit.co/ajax/Twhcarpetcleaning@outlook.com";

/* ── Room types ─────────────────────────────────── */
const roomTypes = [
  { id: "living", label: "Living Room" },
  { id: "bedroom", label: "Bedroom" },
  { id: "dining", label: "Dining Room" },
  { id: "hallway", label: "Hallway" },
  { id: "stairs", label: "Stairs & Landing" },
  { id: "kitchen", label: "Kitchen" },
  { id: "conservatory", label: "Conservatory" },
  { id: "other", label: "Other" },
];

/* ── Upholstery options ─────────────────────────── */
const upholsteryOptions = [
  { id: "2seat", label: "2 Seater", price: 80 },
  { id: "3seat", label: "3 Seater", price: 120 },
  { id: "4seat", label: "4 Seater", price: 160 },
  { id: "5seat", label: "5 Seater", price: 200 },
];

/* ── Package tiers ──────────────────────────────── */
type PackageTier = "essential" | "signature" | "premium";

const packages: {
  id: PackageTier;
  label: string;
  tagline: string;
  icon: typeof Sparkles;
}[] = [
  { id: "essential", label: "Essential Clean", tagline: "Freshen & Reset", icon: Sparkles },
  { id: "signature", label: "Signature Clean", tagline: "Deep Clean + Freshness Boost", icon: Star },
  { id: "premium", label: "Premium Protection", tagline: "Full Restoration & Protect", icon: Crown },
];

/* ── Carpet pricing (Essential base) ────────────── */
const carpetPrices = [0, 79, 99, 119, 139, 159, 179, 199];

function getCarpetTotal(totalRooms: number): number {
  if (totalRooms <= 0) return 0;
  if (totalRooms < carpetPrices.length) return carpetPrices[totalRooms];
  // Beyond 7 rooms: £199 + £20 per extra room
  return 199 + (totalRooms - 7) * 20;
}

type FormStatus = "idle" | "booking" | "submitting" | "success" | "error";

export default function CostCalculator() {
  const [tier, setTier] = useState<PackageTier>("essential");
  const [rooms, setRooms] = useState<Record<string, number>>({});
  const [upholstery, setUpholstery] = useState<Record<string, number>>({});
  const [deodoriser, setDeodoriser] = useState(false);
  const [stainGuard, setStainGuard] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  /* ── Calculations ──────────────────────────── */
  const totalRooms = Object.values(rooms).reduce((s, q) => s + q, 0);
  const carpetBase = getCarpetTotal(totalRooms);

  const upholsteryTotal = upholsteryOptions.reduce((sum, opt) => {
    const qty = upholstery[opt.id] || 0;
    return sum + opt.price * qty;
  }, 0);

  const cleanSubtotal = carpetBase + upholsteryTotal;

  // Signature = Essential + £30 deodoriser included
  // Premium  = Signature + stain guard (half clean price) included
  let packageExtra = 0;
  if (tier === "signature") packageExtra = 30;
  if (tier === "premium") packageExtra = 30 + Math.round(cleanSubtotal / 2);

  const addOnDeodoriser =
    tier === "essential" && deodoriser ? 30 : 0;
  const addOnStainGuard =
    tier === "essential" && stainGuard
      ? Math.round(cleanSubtotal / 2)
      : tier === "signature" && stainGuard
        ? Math.round(cleanSubtotal / 2)
        : 0;

  const total = cleanSubtotal + packageExtra + addOnDeodoriser + addOnStainGuard;

  const hasSelection =
    totalRooms > 0 ||
    Object.values(upholstery).some((q) => q > 0);

  /* ── Helpers ───────────────────────────────── */
  const updateCount = (
    setter: React.Dispatch<React.SetStateAction<Record<string, number>>>,
    id: string,
    delta: number
  ) => {
    setter((prev) => {
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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const getSummary = (): string => {
    const parts: string[] = [];
    const roomSummary = roomTypes
      .filter((r) => (rooms[r.id] || 0) > 0)
      .map((r) => {
        const qty = rooms[r.id];
        return qty > 1 ? `${r.label} x${qty}` : r.label;
      });
    if (roomSummary.length) parts.push(`Rooms: ${roomSummary.join(", ")}`);

    const uphSummary = upholsteryOptions
      .filter((o) => (upholstery[o.id] || 0) > 0)
      .map((o) => {
        const qty = upholstery[o.id];
        return qty > 1 ? `${o.label} x${qty}` : o.label;
      });
    if (uphSummary.length) parts.push(`Upholstery: ${uphSummary.join(", ")}`);

    return parts.join(" | ");
  };

  const getAddOnsSummary = (): string => {
    const parts: string[] = [];
    if (tier === "essential" && deodoriser) parts.push("Deodoriser (+£30)");
    if ((tier === "essential" || tier === "signature") && stainGuard)
      parts.push(`Stain Guard (+£${addOnStainGuard})`);
    return parts.join(", ");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    try {
      const tierLabel = packages.find((p) => p.id === tier)?.label || tier;
      const res = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          package: tierLabel,
          selections: getSummary(),
          add_ons: getAddOnsSummary() || "None",
          estimated_price: `£${total}`,
          _subject: `${tierLabel} Booking — ${formData.name} — £${total}`,
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
          preferredDate: "",
          preferredTime: "",
          message: "",
        });
    } catch {
      setFormStatus("error");
    }
  };

  /* ── Shared counter row ────────────────────── */
  const CounterRow = ({
    label,
    qty,
    onMinus,
    onPlus,
  }: {
    label: string;
    qty: number;
    onMinus: () => void;
    onPlus: () => void;
  }) => (
    <div
      className={`flex items-center justify-between rounded-xl px-4 py-3 border transition-colors ${
        qty > 0 ? "bg-brand-50 border-brand-200" : "bg-white border-gray-200"
      }`}
    >
      <span
        className={`font-medium text-sm ${
          qty > 0 ? "text-brand-700" : "text-gray-700"
        }`}
      >
        {label}
      </span>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMinus}
          disabled={qty === 0}
          className="w-8 h-8 rounded-lg flex items-center justify-center border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
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
          onClick={onPlus}
          className="w-8 h-8 rounded-lg flex items-center justify-center border border-brand-300 bg-brand-500 text-white hover:bg-brand-600 transition-colors cursor-pointer"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

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
            Choose your package, select what you need cleaned, and get an
            instant price.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
            <div className="p-6 md:p-8 space-y-8">
              {/* ── 1. Package selector ────────────────── */}
              <div>
                <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">
                  1. Choose Your Package
                </h3>
                <div className="grid sm:grid-cols-3 gap-3">
                  {packages.map((pkg) => {
                    const active = tier === pkg.id;
                    return (
                      <button
                        key={pkg.id}
                        type="button"
                        onClick={() => {
                          setTier(pkg.id);
                          // Reset add-ons that are included in higher tiers
                          if (pkg.id === "signature") setDeodoriser(false);
                          if (pkg.id === "premium") {
                            setDeodoriser(false);
                            setStainGuard(false);
                          }
                        }}
                        className={`rounded-xl p-4 border-2 text-left transition-all cursor-pointer ${
                          active
                            ? "border-brand-500 bg-brand-50"
                            : "border-gray-200 bg-white hover:border-gray-300"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <pkg.icon
                            className={`w-4 h-4 ${
                              active ? "text-brand-500" : "text-gray-400"
                            }`}
                          />
                          <span
                            className={`font-bold text-sm ${
                              active ? "text-brand-700" : "text-gray-900"
                            }`}
                          >
                            {pkg.label}
                          </span>
                        </div>
                        <span
                          className={`text-xs ${
                            active ? "text-brand-500" : "text-gray-500"
                          }`}
                        >
                          {pkg.tagline}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ── 2. Carpet rooms ─────────────────────── */}
              <div>
                <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">
                  2. Carpet Cleaning — Select Rooms
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {roomTypes.map((room) => (
                    <CounterRow
                      key={room.id}
                      label={room.label}
                      qty={rooms[room.id] || 0}
                      onMinus={() => updateCount(setRooms, room.id, -1)}
                      onPlus={() => updateCount(setRooms, room.id, 1)}
                    />
                  ))}
                </div>
              </div>

              {/* ── 3. Upholstery ──────────────────────── */}
              <div>
                <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">
                  3. Upholstery Cleaning
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {upholsteryOptions.map((opt) => (
                    <CounterRow
                      key={opt.id}
                      label={`${opt.label} (£${opt.price})`}
                      qty={upholstery[opt.id] || 0}
                      onMinus={() => updateCount(setUpholstery, opt.id, -1)}
                      onPlus={() => updateCount(setUpholstery, opt.id, 1)}
                    />
                  ))}
                </div>
              </div>

              {/* ── 4. Add-ons (only if not already included) ── */}
              {tier !== "premium" && (
                <div>
                  <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">
                    4. Optional Add-Ons
                  </h3>
                  <div className="space-y-3">
                    {tier === "essential" && (
                      <label
                        className={`flex items-center gap-3 rounded-xl px-4 py-3 border cursor-pointer transition-colors ${
                          deodoriser
                            ? "bg-brand-50 border-brand-200"
                            : "bg-white border-gray-200"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={deodoriser}
                          onChange={(e) => setDeodoriser(e.target.checked)}
                          className="w-4 h-4 rounded border-gray-300 text-brand-500 focus:ring-brand-500 cursor-pointer"
                        />
                        <div>
                          <span className="font-medium text-sm text-gray-700">
                            Specialist Deodoriser
                          </span>
                          <span className="text-sm text-gray-500 ml-2">
                            +&pound;30
                          </span>
                        </div>
                      </label>
                    )}
                    {(tier === "essential" || tier === "signature") && (
                      <label
                        className={`flex items-center gap-3 rounded-xl px-4 py-3 border cursor-pointer transition-colors ${
                          stainGuard
                            ? "bg-brand-50 border-brand-200"
                            : "bg-white border-gray-200"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={stainGuard}
                          onChange={(e) => setStainGuard(e.target.checked)}
                          className="w-4 h-4 rounded border-gray-300 text-brand-500 focus:ring-brand-500 cursor-pointer"
                        />
                        <div>
                          <span className="font-medium text-sm text-gray-700">
                            Stain Guard Protection
                          </span>
                          <span className="text-sm text-gray-500 ml-2">
                            +half the clean price
                            {cleanSubtotal > 0 && (
                              <> (&pound;{Math.round(cleanSubtotal / 2)})</>
                            )}
                          </span>
                        </div>
                      </label>
                    )}
                    {tier === "signature" && (
                      <p className="text-xs text-gray-400 italic">
                        Deodoriser is already included in the Signature Clean.
                      </p>
                    )}
                  </div>
                </div>
              )}
              {tier === "premium" && (
                <div>
                  <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">
                    4. Add-Ons
                  </h3>
                  <p className="text-sm text-gray-500 italic">
                    Deodoriser and Stain Guard are both included in the
                    Premium Protection package.
                  </p>
                </div>
              )}

              {/* ── Total & booking ─────────────────────── */}
              <div className="pt-6 border-t border-gray-200">
                {hasSelection ? (
                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-1">
                      <span className="font-semibold text-gray-700">
                        {packages.find((p) => p.id === tier)?.label}
                      </span>{" "}
                      — estimated total
                    </p>
                    <p className="text-5xl font-extrabold text-brand-500 mb-6">
                      &pound;{total}
                    </p>

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
                        <div className="grid sm:grid-cols-2 gap-3">
                          <div className="relative">
                            <input
                              type="date"
                              name="preferredDate"
                              value={formData.preferredDate}
                              onChange={handleChange}
                              className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-sm ${
                                !formData.preferredDate
                                  ? "text-transparent"
                                  : ""
                              } focus:text-gray-900`}
                            />
                            {!formData.preferredDate && (
                              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 pointer-events-none">
                                Preferred Date
                              </span>
                            )}
                          </div>
                          <select
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-sm bg-white"
                          >
                            <option value="">Preferred Time</option>
                            <option value="A.M.">A.M.</option>
                            <option value="P.M.">P.M.</option>
                          </select>
                        </div>
                        <textarea
                          name="message"
                          rows={2}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Any details? (stains, access...)"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-sm resize-none"
                        />

                        {/* Summary */}
                        <div className="bg-brand-50 border border-brand-200 rounded-lg p-3 text-sm text-brand-700 space-y-1">
                          <p>
                            <span className="font-semibold">Package:</span>{" "}
                            {packages.find((p) => p.id === tier)?.label}
                          </p>
                          <p>
                            <span className="font-semibold">Items:</span>{" "}
                            {getSummary()}
                          </p>
                          {getAddOnsSummary() && (
                            <p>
                              <span className="font-semibold">Add-ons:</span>{" "}
                              {getAddOnsSummary()}
                            </p>
                          )}
                          <p className="font-bold">
                            Estimated: &pound;{total}
                          </p>
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
                      Select rooms or upholstery above to see your price
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
