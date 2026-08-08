"use client";

import { useEffect, useRef, useState } from "react";
import {
  Plus,
  Minus,
  Calculator,
  Send,
  Loader2,
  CheckCircle,
  Lock,
  PawPrint,
  History,
  ReceiptText,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const WEB3FORMS_KEY = "e8b4dd99-992e-4928-8e30-99af9daf2b32";

/* ── Carpet pricing ─────────────────────────────── */
// First room £99, each additional £40. Hallways & landings £20 each.
// Minimum charge £99 on any booking.
const FIRST_ROOM = 99;
const EXTRA_ROOM = 40;
const HALLWAY = 20;
const MINIMUM_CHARGE = 99;

function getCarpetRoomsTotal(roomCount: number): number {
  if (roomCount <= 0) return 0;
  return FIRST_ROOM + (roomCount - 1) * EXTRA_ROOM;
}

/* ── Upholstery options ─────────────────────────── */
const upholsteryOptions = [
  { id: "pouffe", label: "Pouffe", price: 35 },
  { id: "armchair", label: "Armchair", price: 55 },
  { id: "loveseat", label: "Love / Cuddle Seat", price: 82.5 },
  { id: "2seat", label: "2-Seater", price: 90 },
  { id: "3seat", label: "3-Seater (or oversized 2-seater)", price: 125 },
  { id: "4seat", label: "4-Seater / Corner", price: 160 },
];

const CUSTOM_SEAT = 35;
const CUSTOM_ARM = 10;

/* ── Add-ons ────────────────────────────────────── */
const SAME_DAY = 50;
const SPOT_STAIN = 9.99;

/* ── Availability days ──────────────────────────── */
const allDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const weekdayDefaults = ["Mon", "Tue", "Wed", "Thu", "Fri"];

const fmt = (n: number): string =>
  n % 1 === 0 ? `£${n}` : `£${n.toFixed(2)}`;

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function BookingCalculator() {
  const [roomCount, setRoomCount] = useState(0);
  const [hallwayCount, setHallwayCount] = useState(0);
  const [upholstery, setUpholstery] = useState<Record<string, number>>({});
  const [customSeats, setCustomSeats] = useState(0);
  const [customArms, setCustomArms] = useState(0);
  const [sameDay, setSameDay] = useState(false);
  const [spotStain, setSpotStain] = useState(false);
  const [days, setDays] = useState<string[]>(weekdayDefaults);
  const [bankHoliday, setBankHoliday] = useState(false);
  const [petAccidents, setPetAccidents] = useState(false);
  const [previousAttempts, setPreviousAttempts] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [barVisible, setBarVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  useEffect(() => {
    if (formStatus === "success" && successRef.current) {
      successRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [formStatus]);

  /* Mobile price bar — only while the calculator is on screen */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setBarVisible(entry.isIntersecting),
      { rootMargin: "-80px 0px -80px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* ── Calculations ──────────────────────────── */
  const carpetTotal =
    getCarpetRoomsTotal(roomCount) + hallwayCount * HALLWAY;

  const upholsteryItemsTotal = upholsteryOptions.reduce((sum, opt) => {
    const qty = upholstery[opt.id] || 0;
    return sum + opt.price * qty;
  }, 0);

  const customTotal = customSeats * CUSTOM_SEAT + customArms * CUSTOM_ARM;
  const upholsteryTotal = upholsteryItemsTotal + customTotal;

  const cleanSubtotal = carpetTotal + upholsteryTotal;
  const hasSelection = cleanSubtotal > 0;

  // Minimum charge £99 applies to any booking
  const minimumTopUp = hasSelection
    ? Math.max(0, MINIMUM_CHARGE - cleanSubtotal)
    : 0;

  const addOnsTotal =
    (hasSelection && sameDay ? SAME_DAY : 0) +
    (hasSelection && spotStain ? SPOT_STAIN : 0);

  const preSurcharge = cleanSubtotal + minimumTopUp + addOnsTotal;

  // Weekend-only availability (Sat/Sun only) +25%; bank holiday +50%
  const weekendOnly =
    days.length > 0 && days.every((d) => d === "Sat" || d === "Sun");
  const surchargeRate = bankHoliday ? 0.5 : weekendOnly ? 0.25 : 0;
  const surcharge =
    hasSelection && surchargeRate > 0
      ? Math.round(preSurcharge * surchargeRate * 100) / 100
      : 0;

  const total = Math.round((preSurcharge + surcharge) * 100) / 100;

  /* ── Breakdown lines for the live panel ─────── */
  const breakdown: { label: string; amount: number }[] = [];
  if (roomCount > 0) {
    breakdown.push({
      label: `Rooms & stairs ×${roomCount}`,
      amount: getCarpetRoomsTotal(roomCount),
    });
  }
  if (hallwayCount > 0) {
    breakdown.push({
      label: `Hallways & landings ×${hallwayCount}`,
      amount: hallwayCount * HALLWAY,
    });
  }
  upholsteryOptions.forEach((opt) => {
    const qty = upholstery[opt.id] || 0;
    if (qty > 0) {
      breakdown.push({
        label: qty > 1 ? `${opt.label} ×${qty}` : opt.label,
        amount: opt.price * qty,
      });
    }
  });
  if (customTotal > 0) {
    breakdown.push({
      label: `Custom sofa (${customSeats} seat${customSeats !== 1 ? "s" : ""}, ${customArms} arm${customArms !== 1 ? "s" : ""})`,
      amount: customTotal,
    });
  }
  if (minimumTopUp > 0) {
    breakdown.push({
      label: `Minimum charge (£${MINIMUM_CHARGE})`,
      amount: minimumTopUp,
    });
  }
  if (hasSelection && sameDay) {
    breakdown.push({ label: "Same day call out", amount: SAME_DAY });
  }
  if (hasSelection && spotStain) {
    breakdown.push({ label: "Spot & stain remover", amount: SPOT_STAIN });
  }
  if (surcharge > 0) {
    breakdown.push({
      label: bankHoliday ? "Bank holiday rate +50%" : "Weekend rate +25%",
      amount: surcharge,
    });
  }

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

  const toggleDay = (day: string) => {
    setDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const scrollToDetails = () => {
    document
      .getElementById("booking-details")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const getSummary = (): string => {
    const parts: string[] = [];
    if (roomCount > 0) parts.push(`Rooms & stairs x${roomCount}`);
    if (hallwayCount > 0) parts.push(`Hallways & landings x${hallwayCount}`);
    const uphSummary = upholsteryOptions
      .filter((o) => (upholstery[o.id] || 0) > 0)
      .map((o) => {
        const qty = upholstery[o.id];
        return qty > 1 ? `${o.label} x${qty}` : o.label;
      });
    if (uphSummary.length) parts.push(`Upholstery: ${uphSummary.join(", ")}`);
    if (customTotal > 0)
      parts.push(`Custom sofa: ${customSeats} seats, ${customArms} arms`);
    return parts.join(" | ");
  };

  const getAddOnsSummary = (): string => {
    const parts: string[] = [];
    if (hasSelection && sameDay) parts.push(`Same day call out (+£${SAME_DAY})`);
    if (hasSelection && spotStain)
      parts.push(`Spot & stain remover (+£${SPOT_STAIN})`);
    if (surcharge > 0)
      parts.push(
        bankHoliday
          ? `Bank holiday rate +50% (+${fmt(surcharge)})`
          : `Weekend rate +25% (+${fmt(surcharge)})`
      );
    return parts.join(", ");
  };

  const getJobNotes = (): string => {
    const parts: string[] = [];
    if (petAccidents) parts.push("Pet accidents / urine");
    if (previousAttempts) parts.push("Previous cleaning attempts (DIY/rental/other cleaner)");
    return parts.join(", ");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot — silently drop bot submissions
    const honey = (e.currentTarget.elements.namedItem("_honey") as HTMLInputElement | null)?.value;
    if (honey) { setFormStatus("success"); return; }

    setFormStatus("submitting");
    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          selections: getSummary(),
          add_ons: getAddOnsSummary() || "None",
          available_days: days.length ? days.join(", ") : "Not specified",
          bank_holiday_requested: bankHoliday ? "Yes" : "No",
          about_the_job: getJobNotes() || "None",
          estimated_price: fmt(total),
          access_key: WEB3FORMS_KEY,
          subject: `Booking — ${formData.name} — ${fmt(total)}`,
          from_name: "TWH Carpet Cleaning Website",
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
    sublabel,
    qty,
    onMinus,
    onPlus,
  }: {
    label: string;
    sublabel?: string;
    qty: number;
    onMinus: () => void;
    onPlus: () => void;
  }) => (
    <div
      className={`flex items-center justify-between gap-3 rounded-xl px-4 py-3 border transition-colors ${
        qty > 0 ? "bg-brand-50 border-brand-200" : "bg-white border-gray-200"
      }`}
    >
      <div className="min-w-0">
        <span
          className={`font-medium text-sm block ${
            qty > 0 ? "text-brand-700" : "text-gray-700"
          }`}
        >
          {label}
        </span>
        {sublabel && (
          <span className="text-xs text-gray-400">{sublabel}</span>
        )}
      </div>
      <div className="flex items-center gap-3 flex-shrink-0">
        <button
          type="button"
          onClick={onMinus}
          disabled={qty === 0}
          aria-label={`Remove ${label}`}
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
          aria-label={`Add ${label}`}
          className="w-8 h-8 rounded-lg flex items-center justify-center border border-brand-300 bg-brand-500 text-white hover:bg-brand-600 transition-colors cursor-pointer"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  /* ── Live price panel (shared desktop/mobile) ── */
  const PricePanel = () => (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
      <div className="bg-brand-600 px-5 py-4">
        <p className="text-white/70 text-xs font-semibold uppercase tracking-wider flex items-center gap-2">
          <ReceiptText className="w-4 h-4" />
          Estimated Price
        </p>
        <p className="text-white text-4xl font-extrabold mt-1 tabular-nums">
          {fmt(total)}
        </p>
        <p className="text-white/60 text-xs mt-1">
          Updates live as you choose
        </p>
      </div>
      <div className="p-5">
        {hasSelection ? (
          <>
            <ul className="space-y-2 mb-4">
              {breakdown.map((line) => (
                <li
                  key={line.label}
                  className="flex items-baseline justify-between gap-3 text-sm"
                >
                  <span className="text-gray-600">{line.label}</span>
                  <span className="font-semibold text-gray-900 tabular-nums whitespace-nowrap">
                    {fmt(line.amount)}
                  </span>
                </li>
              ))}
              <li className="flex items-baseline justify-between gap-3 text-sm pt-2 border-t border-gray-200">
                <span className="font-bold text-gray-900">Total estimate</span>
                <span className="font-extrabold text-brand-600 tabular-nums">
                  {fmt(total)}
                </span>
              </li>
            </ul>
            <button
              type="button"
              onClick={scrollToDetails}
              className="w-full bg-brand-500 text-white font-bold py-3.5 rounded-lg hover:bg-brand-600 transition-all shadow-lg shadow-brand-500/25 flex items-center justify-center gap-2 cursor-pointer"
            >
              Book This Clean
              <Send className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-gray-400 text-center mt-3 leading-relaxed">
              Instant guide price — final price confirmed before any work
              starts, never after. No payment due now.
            </p>
          </>
        ) : (
          <p className="text-sm text-gray-400 text-center py-4">
            Make a selection to see your live breakdown.
          </p>
        )}
      </div>
    </div>
  );

  return (
    <section
      id="calculator"
      ref={sectionRef}
      className="py-20 md:py-28 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-brand-500 font-semibold text-sm uppercase tracking-wider">
            Free Instant Quote
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
            <Calculator className="inline-block w-8 h-8 md:w-10 md:h-10 text-brand-500 mr-2 -mt-1" />
            Your Price, <span className="text-brand-500">In 60 Seconds</span>
          </h2>
          <p className="text-lg text-gray-600">
            Tell us what you&apos;d like cleaned and watch your price update
            live. Instant guide price now — final price confirmed before any
            work starts. No haggling, no surprises.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-start">
            {/* ══ LEFT — selections ══ */}
            <div className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
              <div className="p-6 md:p-8 space-y-10">
                {/* 1. Carpet */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm uppercase tracking-wider">
                    1. Carpet Cleaning
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    First room &pound;{FIRST_ROOM}, each additional &pound;
                    {EXTRA_ROOM}. A single set of stairs counts as one room.
                  </p>
                  <div className="space-y-3">
                    <CounterRow
                      label="Standard Rooms & Stairs"
                      sublabel={`First room £${FIRST_ROOM}, each additional £${EXTRA_ROOM}`}
                      qty={roomCount}
                      onMinus={() => setRoomCount((q) => Math.max(0, q - 1))}
                      onPlus={() => setRoomCount((q) => q + 1)}
                    />
                    <CounterRow
                      label="Hallways & Landings"
                      sublabel={`£${HALLWAY} per hallway`}
                      qty={hallwayCount}
                      onMinus={() => setHallwayCount((q) => Math.max(0, q - 1))}
                      onPlus={() => setHallwayCount((q) => q + 1)}
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-3">
                    Minimum charge &pound;{MINIMUM_CHARGE} — applies to any
                    booking.
                  </p>
                </div>

                {/* 2. Upholstery */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm uppercase tracking-wider">
                    2. Upholstery Cleaning
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Pick the items that match your sofas and chairs.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {upholsteryOptions.map((opt) => (
                      <CounterRow
                        key={opt.id}
                        label={opt.label}
                        sublabel={`${fmt(opt.price)} each`}
                        qty={upholstery[opt.id] || 0}
                        onMinus={() => updateCount(setUpholstery, opt.id, -1)}
                        onPlus={() => updateCount(setUpholstery, opt.id, 1)}
                      />
                    ))}
                  </div>

                  {/* Custom configuration */}
                  <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4">
                    <p className="font-medium text-sm text-gray-700 mb-1">
                      Custom Configuration
                    </p>
                    <p className="text-xs text-gray-400 mb-3">
                      &pound;{CUSTOM_SEAT} per seat, &pound;{CUSTOM_ARM} per
                      arm — for unusual layouts.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <CounterRow
                        label="Seats"
                        qty={customSeats}
                        onMinus={() => setCustomSeats((q) => Math.max(0, q - 1))}
                        onPlus={() => setCustomSeats((q) => q + 1)}
                      />
                      <CounterRow
                        label="Arms"
                        qty={customArms}
                        onMinus={() => setCustomArms((q) => Math.max(0, q - 1))}
                        onPlus={() => setCustomArms((q) => q + 1)}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-3 tabular-nums">
                      ({customSeats} seats &times; &pound;{CUSTOM_SEAT}) + (
                      {customArms} arms &times; &pound;{CUSTOM_ARM}) ={" "}
                      {fmt(customTotal)}
                    </p>
                  </div>
                </div>

                {/* 3. Add-ons */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm uppercase tracking-wider">
                    3. Add-Ons &amp; Specialist Treatments
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {hasSelection
                      ? "Optional extras for your clean."
                      : "Available once you've added carpet or sofa cleaning above."}
                  </p>
                  <div className="space-y-3">
                    <label
                      className={`flex items-center gap-3 rounded-xl px-4 py-3 border transition-colors ${
                        !hasSelection
                          ? "bg-gray-100 border-gray-200 cursor-not-allowed opacity-60"
                          : sameDay
                            ? "bg-brand-50 border-brand-200 cursor-pointer"
                            : "bg-white border-gray-200 cursor-pointer"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={sameDay}
                        disabled={!hasSelection}
                        onChange={(e) => setSameDay(e.target.checked)}
                        className="w-4 h-4 rounded border-gray-300 text-brand-500 focus:ring-brand-500 cursor-pointer disabled:cursor-not-allowed"
                      />
                      <div className="flex items-center gap-2 flex-wrap">
                        {!hasSelection && (
                          <Lock className="w-3.5 h-3.5 text-gray-400" />
                        )}
                        <span className="font-medium text-sm text-gray-700">
                          Same Day Call Out
                        </span>
                        <span className="text-sm text-gray-500">
                          +&pound;{SAME_DAY}
                        </span>
                      </div>
                    </label>
                    <label
                      className={`flex items-center gap-3 rounded-xl px-4 py-3 border transition-colors ${
                        !hasSelection
                          ? "bg-gray-100 border-gray-200 cursor-not-allowed opacity-60"
                          : spotStain
                            ? "bg-brand-50 border-brand-200 cursor-pointer"
                            : "bg-white border-gray-200 cursor-pointer"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={spotStain}
                        disabled={!hasSelection}
                        onChange={(e) => setSpotStain(e.target.checked)}
                        className="w-4 h-4 rounded border-gray-300 text-brand-500 focus:ring-brand-500 cursor-pointer disabled:cursor-not-allowed"
                      />
                      <div className="flex items-center gap-2 flex-wrap">
                        {!hasSelection && (
                          <Lock className="w-3.5 h-3.5 text-gray-400" />
                        )}
                        <span className="font-medium text-sm text-gray-700">
                          Spot &amp; Stain Remover
                        </span>
                        <span className="text-sm text-gray-500">
                          +&pound;{SPOT_STAIN}
                        </span>
                      </div>
                    </label>
                    <div className="flex items-center gap-3 rounded-xl px-4 py-3 border bg-white border-gray-200">
                      <span className="font-medium text-sm text-gray-700">
                        Rug Cleaning
                      </span>
                      <span className="text-sm text-gray-500">
                        Specialist rugs are priced individually — POA
                      </span>
                    </div>
                  </div>
                </div>

                {/* 4. Availability */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm uppercase tracking-wider">
                    4. When Works For You?
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Tick the days you&apos;re available — we&apos;ll work
                    around your schedule. Mon&ndash;Fri is selected by default.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {allDays.map((day) => {
                      const active = days.includes(day);
                      return (
                        <button
                          key={day}
                          type="button"
                          onClick={() => toggleDay(day)}
                          className={`px-4 py-2.5 rounded-xl border-2 font-semibold text-sm transition-all cursor-pointer ${
                            active
                              ? "border-brand-500 bg-brand-50 text-brand-700"
                              : "border-gray-200 bg-white text-gray-500 hover:border-gray-300"
                          }`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-xs text-gray-400 mt-3">
                    {weekendOnly
                      ? "Weekend-only bookings (Sat/Sun) carry a +25% rate."
                      : "Weekday rate — standard pricing. Weekend-only bookings (Sat/Sun) carry a +25% rate."}
                  </p>
                  <label
                    className={`mt-3 flex items-center gap-3 rounded-xl px-4 py-3 border cursor-pointer transition-colors ${
                      bankHoliday
                        ? "bg-brand-50 border-brand-200"
                        : "bg-white border-gray-200"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={bankHoliday}
                      onChange={(e) => setBankHoliday(e.target.checked)}
                      className="w-4 h-4 rounded border-gray-300 text-brand-500 focus:ring-brand-500 cursor-pointer"
                    />
                    <div>
                      <span className="font-medium text-sm text-gray-700 block">
                        Specifically need a Bank Holiday slot?
                      </span>
                      <span className="text-xs text-gray-400">
                        Bank holiday bookings are charged at +50%.
                      </span>
                    </div>
                  </label>
                </div>

                {/* 5. About the job */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm uppercase tracking-wider">
                    5. About The Job{" "}
                    <span className="text-gray-400 font-normal normal-case">
                      (optional)
                    </span>
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Tick anything that applies so we arrive prepared.
                  </p>
                  <div className="space-y-3">
                    <label
                      className={`flex items-center gap-3 rounded-xl px-4 py-3 border cursor-pointer transition-colors ${
                        petAccidents
                          ? "bg-brand-50 border-brand-200"
                          : "bg-white border-gray-200"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={petAccidents}
                        onChange={(e) => setPetAccidents(e.target.checked)}
                        className="w-4 h-4 rounded border-gray-300 text-brand-500 focus:ring-brand-500 cursor-pointer"
                      />
                      <PawPrint className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-sm text-gray-700 block">
                          Pet accidents / urine
                        </span>
                        <span className="text-xs text-gray-400">
                          We&apos;ll bring extra UV detection and neutraliser.
                        </span>
                      </div>
                    </label>
                    <label
                      className={`flex items-center gap-3 rounded-xl px-4 py-3 border cursor-pointer transition-colors ${
                        previousAttempts
                          ? "bg-brand-50 border-brand-200"
                          : "bg-white border-gray-200"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={previousAttempts}
                        onChange={(e) => setPreviousAttempts(e.target.checked)}
                        className="w-4 h-4 rounded border-gray-300 text-brand-500 focus:ring-brand-500 cursor-pointer"
                      />
                      <History className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-sm text-gray-700 block">
                          Previous cleaning attempts
                        </span>
                        <span className="text-xs text-gray-400">
                          Rental machine, DIY attempt, or another cleaner had a
                          go first.
                        </span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* 6. Details + submit */}
                <div id="booking-details" className="scroll-mt-28">
                  <h3 className="font-bold text-gray-900 mb-1 text-sm uppercase tracking-wider">
                    6. Your Details
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Where to send the quote and how to reach you.
                  </p>

                  {formStatus === "success" ? (
                    <div ref={successRef} className="py-6 text-center scroll-mt-24">
                      <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <CheckCircle className="w-7 h-7 text-green-600" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">
                        Booking Request Sent!
                      </h4>
                      <p className="text-gray-600 text-sm">
                        We&apos;ll get back to you within 2 hours to confirm.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3">
                      {/* Honeypot — bots fill this; humans never see it */}
                      <input
                        type="text"
                        name="_honey"
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                        style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0 }}
                      />
                      <div className="grid sm:grid-cols-2 gap-3">
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Full Name *"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-sm bg-white"
                        />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email *"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-sm bg-white"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-sm bg-white"
                        />
                        <input
                          type="text"
                          name="postcode"
                          value={formData.postcode}
                          onChange={handleChange}
                          placeholder="Postcode"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-sm bg-white"
                        />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div className="relative">
                          <input
                            type="date"
                            name="preferredDate"
                            value={formData.preferredDate}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-sm bg-white ${
                              !formData.preferredDate ? "text-transparent" : ""
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
                        placeholder="Anything else we should know? (stains, parking, access...)"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-sm resize-none bg-white"
                      />

                      <button
                        type="submit"
                        disabled={formStatus === "submitting" || !hasSelection}
                        className="w-full bg-brand-500 text-white font-bold py-4 rounded-lg hover:bg-brand-600 transition-all shadow-lg shadow-brand-500/25 hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2 text-lg cursor-pointer"
                      >
                        {formStatus === "submitting" ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            {hasSelection
                              ? `Book Now — ${fmt(total)}`
                              : "Make a selection above to book"}
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
                  )}
                </div>
              </div>
            </div>

            {/* ══ RIGHT — live price panel (desktop) ══ */}
            <div className="hidden lg:block lg:sticky lg:top-24">
              <PricePanel />
            </div>

            {/* Mobile — panel inline after selections */}
            <div className="lg:hidden">
              <PricePanel />
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Mobile live price bar — visible while calculator is on screen */}
      {barVisible && hasSelection && formStatus !== "success" && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-brand-500 shadow-[0_-4px_20px_rgba(0,0,0,0.12)]">
          <div className="flex items-center justify-between px-4 py-3 gap-3">
            <div>
              <p className="text-[11px] text-gray-500 uppercase tracking-wider font-semibold">
                Estimated price
              </p>
              <p className="text-2xl font-extrabold text-brand-600 tabular-nums leading-none">
                {fmt(total)}
              </p>
            </div>
            <button
              type="button"
              onClick={scrollToDetails}
              className="bg-brand-500 text-white font-bold text-sm px-5 py-3 rounded-lg flex items-center gap-2 hover:bg-brand-600 transition-colors cursor-pointer"
            >
              Book This Clean
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
