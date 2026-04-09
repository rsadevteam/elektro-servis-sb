"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { PhoneCall, Zap } from "lucide-react";

export default function Hero() {
  const arcRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0D0D0D]">
      {/* Dot grid texture */}
      <div className="absolute inset-0 bg-dot-grid opacity-60" />

      {/* Giant decorative voltage numbers */}
      <div
        className="absolute top-1/2 -translate-y-1/2 right-[-2rem] font-display font-bold text-[22vw] leading-none text-[#F5C400]/[0.03] select-none pointer-events-none"
        style={{ fontFamily: "var(--font-oswald)" }}
        aria-hidden
      >
        220V
      </div>
      <div
        className="absolute bottom-[5%] left-[-1rem] font-display font-bold text-[10vw] leading-none text-[#F5C400]/[0.04] select-none pointer-events-none"
        style={{ fontFamily: "var(--font-oswald)" }}
        aria-hidden
      >
        380A
      </div>


      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-24">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-px w-12 bg-[#F5C400]" />
          <span className="text-[0.65rem] tracking-[0.35em] uppercase text-[#F5C400] font-medium">
            Laktaši, RS — Elektro usluge
          </span>
        </motion.div>

        {/* Wordmark */}
        <div className="mb-2">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold leading-[0.88] tracking-tight"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            <span className="block text-[13vw] sm:text-[11vw] md:text-[8vw] lg:text-[7rem] xl:text-[8rem] text-[#F5C400] animate-neon">
              ELEKTRO
            </span>
            <span className="block text-[8vw] sm:text-[6vw] md:text-[4.5vw] lg:text-[3.5rem] xl:text-[4rem] text-[#F5C400] tracking-[0.15em] mt-3 md:mt-5">
              SERVIS SB
            </span>
          </motion.h1>
        </div>

        {/* Electric arc */}
        <motion.div
          ref={arcRef}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="my-8 origin-left"
        >
          <div className="relative h-px w-full max-w-xl">
            {/* Base line */}
            <div className="absolute inset-0 bg-[#F5C400]/20" />
            {/* Animated arc */}
            <div
              ref={arcRef}
              className="absolute inset-0 bg-[#F5C400] animate-arc origin-left"
            />
            {/* Spark at end */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#F5C400] rounded-full animate-arc"
              style={{ animationDelay: "0.1s", filter: "blur(2px)" }} />
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="text-[1.2rem] sm:text-[1.5rem] md:text-[1.8rem] font-display font-light tracking-[0.08em] text-[#A0A0A0] mb-10 max-w-lg"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          &ldquo;Tu smo kad struje nema.&rdquo;
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 items-start"
        >
          <a
            href="#contact"
            className="btn-primary flex items-center gap-3 px-8 py-4 text-sm tracking-[0.15em]"
          >
            <PhoneCall size={18} />
            Zakažite servis
          </a>
        </motion.div>

        {/* Spec strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-16 flex flex-wrap gap-x-8 gap-y-3"
        >
          {[
            { label: "Napon", value: "220–380V" },
            { label: "Reakcija", value: "< 60 MIN" },
            { label: "Iskustvo", value: "10+ GOD." },
            { label: "Zona", value: "50 KM" },
          ].map((spec) => (
            <div key={spec.label} className="flex items-center gap-2">
              <span className="text-[0.6rem] tracking-[0.25em] uppercase text-[#555]">
                {spec.label}
              </span>
              <span className="text-xs font-bold text-[#F5C400] tracking-[0.15em]">
                {spec.value}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D0D0D] to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[0.55rem] tracking-[0.3em] uppercase text-[#444]">scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#F5C400]/40 to-transparent" />
      </motion.div>
    </section>
  );
}
