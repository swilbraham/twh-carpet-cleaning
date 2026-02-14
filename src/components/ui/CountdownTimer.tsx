"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  hours?: number;
  minutes?: number;
  seconds?: number;
  label?: string;
}

export default function CountdownTimer({
  hours = 2,
  minutes = 0,
  seconds = 0,
  label = "Offer expires in:",
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(
    hours * 3600 + minutes * 60 + seconds
  );

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const h = Math.floor(timeLeft / 3600);
  const m = Math.floor((timeLeft % 3600) / 60);
  const s = timeLeft % 60;

  return (
    <div className="inline-flex items-center gap-3 bg-red-50 border border-red-200 rounded-lg px-4 py-2">
      <span className="text-red-700 font-medium text-sm">{label}</span>
      <div className="flex items-center gap-1">
        <TimeBlock value={h} unit="h" />
        <span className="text-red-500 font-bold">:</span>
        <TimeBlock value={m} unit="m" />
        <span className="text-red-500 font-bold">:</span>
        <TimeBlock value={s} unit="s" />
      </div>
    </div>
  );
}

function TimeBlock({ value, unit }: { value: number; unit: string }) {
  return (
    <div className="flex items-center gap-0.5">
      <span className="bg-red-600 text-white font-bold rounded px-2 py-1 text-sm min-w-[32px] text-center tabular-nums">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-red-500 text-xs font-medium">{unit}</span>
    </div>
  );
}
