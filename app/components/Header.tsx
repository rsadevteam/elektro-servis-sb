"use client";

import { useEffect, useState } from "react";
import { Phone, Zap, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Usluge", href: "#services" },
    { label: "Zašto mi", href: "#why-us" },
    { label: "Proces", href: "#process" },
    { label: "Kontakt", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D0D0D]/95 backdrop-blur-md border-b border-[#F5C400]/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <Zap
              className="text-[#F5C400] group-hover:drop-shadow-[0_0_8px_rgba(245,196,0,0.9)] transition-all duration-200"
              size={22}
              strokeWidth={2.5}
            />
          </div>
          <span
            className="font-display text-xl font-bold tracking-[0.15em] text-white uppercase"
            style={{ fontFamily: "var(--font-oswald), sans-serif" }}
          >
            ELEKTRO{" "}
            <span className="text-[#F5C400]">SERVIS SB</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-[#A0A0A0] hover:text-[#F5C400] transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Phone CTA + badge */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+38766167566"
            className="flex items-center gap-2 text-[#F5C400] hover:text-white transition-colors group"
          >
            <Phone size={15} className="group-hover:animate-bounce" />
            <span className="font-display text-sm tracking-[0.1em] font-semibold" style={{ fontFamily: "var(--font-oswald)" }}>
              +387 66 167 566
            </span>
          </a>
          <div className="animate-badge-pulse flex items-center gap-1.5 bg-[#F5C400] text-[#0D0D0D] px-3 py-1.5 text-[0.65rem] font-bold tracking-[0.2em] uppercase"
            style={{ fontFamily: "var(--font-oswald)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D0D0D] animate-pulse" />
            Dostupni 24/7
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#F5C400] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#111]/98 backdrop-blur-md border-t border-[#F5C400]/20"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {/* Status badge */}
              <div className="inline-flex items-center gap-2 self-start bg-[#F5C400]/10 border border-[#F5C400]/25 px-3 py-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5C400] animate-pulse shrink-0" />
                <span className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#F5C400]"
                  style={{ fontFamily: "var(--font-oswald)" }}>
                  Dostupni 24/7
                </span>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-display tracking-[0.2em] uppercase text-[#A0A0A0] hover:text-[#F5C400] transition-colors"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t border-[#F5C400]/20 pt-5 flex flex-col gap-3">
                <a
                  href="tel:+38766167566"
                  className="flex items-center gap-2 text-[#F5C400] text-lg font-display font-bold"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  <Phone size={18} />
                  +387 66 167 566
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
