"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-28 bg-[#0D0D0D] overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#F5C400]/[0.03] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#F5C400]" />
            <span className="text-[0.6rem] tracking-[0.35em] uppercase text-[#F5C400]">
              Stupite u kontakt
            </span>
          </div>
          <h2
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold uppercase text-white leading-none"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Kontaktirajte{" "}
            <span className="text-[#F5C400]">nas</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-8"
          >
            {/* Phone */}
            <div>
              <div className="text-[0.6rem] tracking-[0.3em] uppercase text-[#555] mb-2">
                Telefon
              </div>
              <a href="tel:+38766167566" className="group flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-[#F5C400]/25 group-hover:border-[#F5C400] group-hover:shadow-[0_0_25px_rgba(245,196,0,0.3)] transition-all duration-200">
                  <Phone size={20} className="text-[#F5C400]" strokeWidth={1.5} />
                </div>
                <span
                  className="font-display font-bold text-4xl sm:text-5xl text-white group-hover:text-[#F5C400] transition-colors duration-200 tracking-wide"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  +387 66 167 566
                </span>
              </a>
            </div>

            {/* Email + Adresa */}
            <div className="space-y-4">
              <a href="mailto:borkab819@gmail.com" className="flex items-center gap-4 group">
                <div className="w-10 h-10 flex items-center justify-center border border-[#F5C400]/15 group-hover:border-[#F5C400]/50 transition-colors">
                  <Mail size={16} className="text-[#F5C400]/60 group-hover:text-[#F5C400] transition-colors" strokeWidth={1.5} />
                </div>
                <span className="text-[0.85rem] text-[#707070] group-hover:text-[#F5C400] transition-colors">
                  borkab819@gmail.com
                </span>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-[#F5C400]/15">
                  <MapPin size={16} className="text-[#F5C400]/60" strokeWidth={1.5} />
                </div>
                <span className="text-[0.85rem] text-[#707070]">
                  Nikole Matavulja bb, Laktaši, RS
                </span>
              </div>
            </div>

            {/* Radno vrijeme */}
            <div className="border-t border-[#F5C400]/10 pt-6">
              <div className="text-[0.6rem] tracking-[0.3em] uppercase text-[#555] mb-3">
                Radno vrijeme
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[0.8rem]">
                  <span className="text-[#707070]">Pon–Pet</span>
                  <span className="text-white">07:00 – 20:00</span>
                </div>
                <div className="flex justify-between text-[0.8rem]">
                  <span className="text-[#707070]">Sub–Ned</span>
                  <span className="text-white">09:00 – 17:00</span>
                </div>
                <div className="flex justify-between text-[0.8rem]">
                  <span className="text-[#F5C400]">Hitne intervencije</span>
                  <span className="text-[#F5C400] font-bold">24/7</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative min-h-[400px] lg:min-h-0 border border-[#F5C400]/15 overflow-hidden"
          >
            {/* Yellow corner accent */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#F5C400] z-10 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#F5C400] z-10 pointer-events-none" />

            <iframe
              src="https://maps.google.com/maps?q=44.8872370,17.2778870&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{
                border: 0,
                minHeight: "400px",
                filter: "grayscale(100%) invert(90%) contrast(85%) brightness(0.9) hue-rotate(180deg)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Elektro Servis SB — Laktaši"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
