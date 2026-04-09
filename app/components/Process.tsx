"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Microscope, CheckCircle } from "lucide-react";

const STEPS = [
  {
    num: "01",
    icon: Phone,
    title: "Poziv",
    desc: "Zovite nas ili popunite formu. Odgovaramo odmah — 24 sata, 7 dana u sedmici.",
    detail: "< 5 min odgovor",
  },
  {
    num: "02",
    icon: Microscope,
    title: "Dijagnoza",
    desc: "Naš majstor dolazi, pregleda situaciju, dijagnosticira problem i daje fiksnu cijenu.",
    detail: "Besplatna procjena",
  },
  {
    num: "03",
    icon: CheckCircle,
    title: "Popravka",
    desc: "Radovi se izvode profesionalno i uredno. Po završetku dobijate pisanu garanciju.",
    detail: "Garancija na rad",
  },
];

export default function Process() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="process"
      ref={ref}
      className="relative py-28 bg-[#080808] bg-circuit overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#F5C400]" />
            <span className="text-[0.6rem] tracking-[0.35em] uppercase text-[#F5C400]">
              Kako radimo
            </span>
            <div className="h-px w-8 bg-[#F5C400]" />
          </div>
          <h2
            className="font-display text-5xl sm:text-6xl font-bold uppercase text-white"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Proces u <span className="text-[#F5C400]">3 koraka</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-[3.5rem] left-[16.7%] right-[16.7%] h-px">
            <div className="absolute inset-0 bg-[#F5C400]/15" />
            <motion.div
              className="absolute inset-0 bg-[#F5C400]/50 origin-left"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-0 lg:gap-px bg-transparent lg:bg-[#F5C400]/5">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                  className="relative p-8 lg:p-12 bg-[#080808] group"
                >
                  {/* Step number */}
                  <div className="relative mb-8">
                    <div
                      className="font-display text-[5rem] font-bold leading-none text-[#F5C400]/8 absolute -top-4 -left-2 select-none"
                      style={{ fontFamily: "var(--font-oswald)" }}
                      aria-hidden
                    >
                      {step.num}
                    </div>
                    <div className="relative z-10 w-14 h-14 border border-[#F5C400]/25 flex items-center justify-center group-hover:border-[#F5C400]/70 group-hover:shadow-[0_0_20px_rgba(245,196,0,0.15)] transition-all duration-300">
                      <Icon size={24} className="text-[#F5C400]" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Arrow (between steps on desktop) */}
                  {i < 2 && (
                    <div className="hidden lg:block absolute -right-3 top-[3.5rem] z-10 text-[#F5C400]/60">
                      <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                        <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}

                  <div
                    className="font-display text-2xl font-bold text-white uppercase mb-3 tracking-wide"
                    style={{ fontFamily: "var(--font-oswald)" }}
                  >
                    {step.title}
                  </div>
                  <p className="text-[0.8rem] text-[#606060] leading-relaxed mb-6">
                    {step.desc}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="h-px w-6 bg-[#F5C400]/40" />
                    <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[#F5C400]/50">
                      {step.detail}
                    </span>
                  </div>

                  {/* Mobile arrow */}
                  {i < 2 && (
                    <div className="lg:hidden mt-8 flex justify-center text-[#F5C400]/40">
                      <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                        <path d="M1 1L9 8L1 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
