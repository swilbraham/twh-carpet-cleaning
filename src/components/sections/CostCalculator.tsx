"use client";

import { useState } from "react";
import { Plus, Minus, Calculator, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

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

function getPriceBreakdown(totalRooms: number): string[] {
  const breakdown: string[] = [];
  if (totalRooms >= 1) breakdown.push("1st room: £69");
  if (totalRooms >= 2) breakdown.push("2nd room: £30");
  if (totalRooms >= 3) {
    const extra = totalRooms - 2;
    breakdown.push(
      `${extra} additional room${extra > 1 ? "s" : ""}: £${extra * 20}`
    );
  }
  return breakdown;
}

export default function CostCalculator() {
  const [rooms, setRooms] = useState<Record<string, number>>({});

  const totalRooms = Object.values(rooms).reduce((sum, qty) => sum + qty, 0);
  const total = calculateTotal(totalRooms);
  const breakdown = getPriceBreakdown(totalRooms);

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
            {/* Pricing info bar */}
            <div className="bg-brand-500 text-white px-6 py-4 text-center">
              <p className="text-sm font-medium">
                1st room <span className="font-bold">&pound;69</span>
                <span className="mx-2 text-white/50">|</span>
                2nd room <span className="font-bold">&pound;30</span>
                <span className="mx-2 text-white/50">|</span>
                Additional rooms <span className="font-bold">&pound;20 each</span>
              </p>
            </div>

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

              {/* Total & breakdown */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                {totalRooms > 0 ? (
                  <div className="text-center">
                    {/* Breakdown */}
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mb-4">
                      {breakdown.map((line) => (
                        <span
                          key={line}
                          className="text-sm text-gray-500"
                        >
                          {line}
                        </span>
                      ))}
                    </div>

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

                    <a
                      href="#quote"
                      className="inline-flex items-center gap-2 bg-brand-500 text-white font-semibold rounded-lg px-8 py-4 text-lg hover:bg-brand-600 transition-all shadow-lg shadow-brand-500/25 hover:-translate-y-0.5"
                    >
                      Book Now
                      <ArrowRight className="w-5 h-5" />
                    </a>

                    <p className="text-xs text-gray-400 mt-4">
                      This is an estimate. Final price confirmed after
                      assessment. No hidden fees.
                    </p>
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
