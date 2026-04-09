"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

const STATS = [
  { value: 200, suffix: "+", label: "Projekata", sub: "završenih" },
  { value: 10, suffix: "+", label: "Godina iskustva", sub: "u struci" },
  { value: 24, suffix: "/7", label: "Dostupnost", sub: "hitne intervencije" },
  { value: 100, suffix: "%", label: "Sigurnost", sub: "garantovana" },
];

function Counter({
  target,
  suffix,
  duration = 2000,
  started,
}: {
  target: number;
  suffix: string;
  duration?: number;
  started: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, target, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="relative py-24 bg-[#F5C400] overflow-hidden"
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 bg-dot-grid opacity-10" style={{
        backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.3) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }} />

      {/* Big decorative text */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-bold text-[30vw] leading-none text-[#0D0D0D]/[0.07] select-none pointer-events-none whitespace-nowrap"
        style={{ fontFamily: "var(--font-oswald)" }}
        aria-hidden
      >
        SB
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-[#0D0D0D]/15">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="px-6 py-8 text-center group"
            >
              <div
                className="font-display font-bold text-[3rem] sm:text-[4rem] md:text-[5rem] leading-none text-[#0D0D0D] mb-2"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                <Counter
                  target={stat.value}
                  suffix={stat.suffix}
                  started={inView}
                  duration={1800 + i * 200}
                />
              </div>
              <div className="font-display text-sm font-semibold tracking-[0.1em] uppercase text-[#0D0D0D] mb-1"
                style={{ fontFamily: "var(--font-oswald)" }}>
                {stat.label}
              </div>
              <div className="text-[0.65rem] tracking-[0.2em] uppercase text-[#0D0D0D]/50">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
