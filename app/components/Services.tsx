"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  PlugZap,
  Lightbulb,
  Zap,
  ShieldAlert,
  Thermometer,
  Wrench,
} from "lucide-react";

const SERVICES = [
  {
    icon: PlugZap,
    title: "Zamjena utičnica i prekidača",
    desc: "Brza zamjena dotrajалих ili neispravnih utičnica i prekidača. Ugradnja novih, modernizacija starih instalacija.",
    spec: "Stambeni objekti",
  },
  {
    icon: Lightbulb,
    title: "Montaža i zamjena rasvjete",
    desc: "Ugradnja i zamjena svih vrsta rasvjete i lustera — od klasičnih do LED i ugradnih svjetiljki.",
    spec: "LED / Lusteri / Ugradna",
  },
  {
    icon: Zap,
    title: "Popravka kratkog spoja",
    desc: "Brzo lociranje i otklanjanje kratkog spoja. Dijagnoza na licu mjesta, bez dugog čekanja.",
    spec: "Hitna intervencija",
  },
  {
    icon: ShieldAlert,
    title: "Zamjena osigurača i sklopki",
    desc: "Zamjena starih osigurača i automatskih sklopki. Siguran rad vaše razvode table.",
    spec: "Automatske sklopke",
  },
  {
    icon: Thermometer,
    title: "Povezivanje šporeta, bojlera, veš mašine",
    desc: "Stručno i sigurno priključivanje kućanskih aparata na električnu mrežu, uz provjeru instalacije.",
    spec: "Kućanski aparati",
  },
  {
    icon: Wrench,
    title: "Sitne elektro intervencije",
    desc: "Sve vrste manjih elektro radova u stanu i kući. Brzo, kvalitetno, povoljno — uz besplatan dolazak.",
    spec: "Stan / Kuća",
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-28 bg-[#0D0D0D] bg-circuit"
    >
      {/* Diagonal top border */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-[#0D0D0D]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#F5C400]" />
            <span className="text-[0.6rem] tracking-[0.35em] uppercase text-[#F5C400]">
              Šta radimo
            </span>
          </div>
          <h2
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white uppercase leading-none"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Naše{" "}
            <span className="text-[#F5C400]">usluge</span>
          </h2>
          {/* Decorative large number */}
          <div
            className="absolute right-4 top-24 font-display font-bold text-[15vw] text-[#F5C400]/[0.04] select-none pointer-events-none leading-none"
            style={{ fontFamily: "var(--font-oswald)" }}
            aria-hidden
          >
            06
          </div>
        </motion.div>

        {/* Highlights strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap gap-3 mb-10"
        >
          <div className="flex items-center gap-2 bg-[#F5C400] text-[#0D0D0D] px-4 py-2">
            <span className="text-sm font-bold tracking-[0.15em] uppercase"
              style={{ fontFamily: "var(--font-oswald)" }}>
              ✔ Dolazak na adresu — BESPLATNO
            </span>
          </div>
          {["Brzo", "Kvalitetno", "Povoljno"].map((tag) => (
            <div key={tag} className="flex items-center gap-2 border border-[#F5C400]/30 px-4 py-2">
              <span className="text-sm text-[#F5C400] tracking-[0.15em] uppercase"
                style={{ fontFamily: "var(--font-oswald)" }}>
                ⚡ {tag}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#F5C400]/8">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
                className="group relative p-8 bg-[#0D0D0D] card-hover cursor-default"
              >
                {/* Icon */}
                <div className="mb-5 w-12 h-12 flex items-center justify-center border border-[#F5C400]/20 text-[#F5C400] transition-all duration-200 group-hover:scale-110 group-hover:border-[#F5C400]/60 group-hover:shadow-[0_0_20px_rgba(245,196,0,0.2)]">
                  <Icon size={22} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3
                  className="font-display text-xl font-semibold text-white mb-3 uppercase tracking-wide group-hover:text-[#F5C400] transition-colors"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[0.8rem] text-[#707070] leading-relaxed mb-5">
                  {service.desc}
                </p>

                {/* Spec tag */}
                <div className="flex items-center gap-2">
                  <div className="h-px flex-1 max-w-[24px] bg-[#F5C400]/30" />
                  <span className="text-[0.6rem] tracking-[0.25em] uppercase font-medium text-[#F5C400]/60">
                    {service.spec}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
