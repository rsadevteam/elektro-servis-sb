"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Imao sam kvar u petak uveče. Nazvao sam i majstor je bio kod mene za 45 minuta. Profesionalan, uredan i fer cijena. Preporučujem svima.",
    name: "Dragan M.",
    role: "Vlasnik domaćinstva, Laktaši",
    stars: 5,
  },
  {
    quote:
      "Renovirali smo kafić i Elektro Servis SB su uradili kompletne instalacije. Rekli su termin, držali termin. Sve prošlo inspekciju bez problema.",
    name: "Jovana K.",
    role: "Poduzetnica, Banja Luka",
    stars: 5,
  },
  {
    quote:
      "Na gradilištu nam je pukla razvodna tabla. Reagisali su momentalno, sve popravili i nastavili smo raditi isti dan. Pravi profesionalci.",
    name: "Miloš T.",
    role: "Građevinac, Prnjavor",
    stars: 5,
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="relative py-28 bg-[#0D0D0D] overflow-hidden"
    >
      {/* Background large quote mark */}
      <div
        className="absolute top-8 left-6 font-display font-bold text-[20rem] leading-none text-[#F5C400]/[0.025] select-none pointer-events-none"
        style={{ fontFamily: "var(--font-oswald)" }}
        aria-hidden
      >
        &ldquo;
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#F5C400]" />
            <span className="text-[0.6rem] tracking-[0.35em] uppercase text-[#F5C400]">
              Klijenti govore
            </span>
            <div className="h-px w-8 bg-[#F5C400]" />
          </div>
          <h2
            className="font-display text-5xl sm:text-6xl font-bold uppercase text-white"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Šta kažu naši{" "}
            <span className="text-[#F5C400]">klijenti</span>
          </h2>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.5 }}
              className="group p-8 bg-[#111] border border-[#F5C400]/8 hover:border-[#F5C400]/30 transition-all duration-300 relative"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star
                    key={j}
                    size={12}
                    className="text-[#F5C400] fill-[#F5C400]"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-[0.85rem] text-[#808080] leading-relaxed mb-8 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#F5C400]/15 flex items-center justify-center text-[#F5C400] font-display font-bold text-sm"
                  style={{ fontFamily: "var(--font-oswald)" }}>
                  {t.name[0]}
                </div>
                <div>
                  <div
                    className="font-display text-sm font-semibold text-white uppercase tracking-wide"
                    style={{ fontFamily: "var(--font-oswald)" }}
                  >
                    {t.name}
                  </div>
                  <div className="text-[0.65rem] text-[#505050] tracking-wider">
                    {t.role}
                  </div>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5C400]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
