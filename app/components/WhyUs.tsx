"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Timer, ShieldCheck, Receipt } from "lucide-react";

const REASONS = [
  {
    icon: Sparkles,
    title: "Urednost i čistoća",
    desc: "Nakon svakog posla ostavljamo prostor urednim kao što smo ga i zatekli. Radimo čisto, bez nepotrebnog nereda.",
    detail: "ČISTO RADIMO",
  },
  {
    icon: Timer,
    title: "Brza reakcija",
    desc: "Hitne intervencije unutar 60 minuta u Laktašima i okolini. Ne čekate — mi dolazimo.",
    detail: "< 60 MIN GARANTOVANO",
  },
  {
    icon: ShieldCheck,
    title: "Iskustvo i sigurnost",
    desc: "Višegodišnje iskustvo na terenu. Svaki kvar riješen temeljito — ne krpimo, nego rješavamo problem do kraja.",
    detail: "PROVJERENO",
  },
  {
    icon: Receipt,
    title: "Transparentne cijene",
    desc: "Bez skrivenih troškova. Predračun prije početka radova. Plaćate tačno ono što je dogovoreno.",
    detail: "FIKSNA CIJENA",
  },
];

export default function WhyUs() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="why-us"
      ref={ref}
      className="relative py-28 bg-[#0A0A0A]"
    >
      {/* Top diagonal */}
      <div
        className="absolute top-0 left-0 right-0 h-20 bg-[#0D0D0D]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: heading */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#F5C400]" />
              <span className="text-[0.6rem] tracking-[0.35em] uppercase text-[#F5C400]">
                Naše prednosti
              </span>
            </div>
            <h2
              className="font-display text-5xl sm:text-6xl md:text-7xl font-bold uppercase leading-none mb-8"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Zašto{" "}
              <span className="text-[#F5C400]">odabrati</span>{" "}
              <br />
              <span className="text-white">nas?</span>
            </h2>
            <p className="text-[0.85rem] text-[#606060] leading-relaxed max-w-sm">
              Električna energija nije za eksperimentisanje. Povjerite posao
              majstorima koji znaju šta rade — svaki put, bez izuzetka.
            </p>

            {/* Decorative circuit line */}
            <div className="mt-12 relative">
              <svg
                width="220"
                height="60"
                viewBox="0 0 220 60"
                fill="none"
                className="opacity-30"
              >
                <path
                  d="M0 30 H40 V10 H90 V50 H140 V30 H220"
                  stroke="#F5C400"
                  strokeWidth="1.5"
                  fill="none"
                  strokeDasharray="1000"
                  strokeDashoffset="1000"
                  style={{
                    animation: inView
                      ? "wire-draw 2s ease forwards 0.5s"
                      : "none",
                  }}
                />
                <circle cx="40" cy="30" r="3" fill="#F5C400" />
                <circle cx="90" cy="30" r="3" fill="#F5C400" />
                <circle cx="140" cy="30" r="3" fill="#F5C400" />
              </svg>
            </div>
          </motion.div>

          {/* Right: reason cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {REASONS.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
                  className="group p-6 bg-[#141414] border border-[#F5C400]/8 hover:border-[#F5C400]/40 hover:bg-[#161616] transition-all duration-200 cursor-default"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-[#F5C400]/10 group-hover:bg-[#F5C400]/20 transition-colors duration-200">
                      <Icon
                        size={18}
                        className="text-[#F5C400]"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <h3
                        className="font-display text-base font-semibold text-white uppercase tracking-wide mb-2"
                        style={{ fontFamily: "var(--font-oswald)" }}
                      >
                        {reason.title}
                      </h3>
                      <p className="text-[0.75rem] text-[#606060] leading-relaxed mb-3">
                        {reason.desc}
                      </p>
                      <span className="text-[0.55rem] tracking-[0.25em] uppercase text-[#F5C400]/50 font-medium">
                        {reason.detail}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
