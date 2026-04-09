import { Phone, Mail, MapPin, Zap } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080808] border-t border-[#F5C400]/10">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Zap size={20} className="text-[#F5C400]" strokeWidth={2.5} />
              <span
                className="font-display text-xl font-bold tracking-[0.15em] text-white uppercase"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                ELEKTRO <span className="text-[#F5C400]">SERVIS SB</span>
              </span>
            </div>
            <p className="text-[0.75rem] text-[#F5C400]/60 tracking-widest uppercase mb-1">
              Siniša Babić — ovlašteni elektricar
            </p>
            <p className="text-[0.8rem] text-[#555] leading-relaxed mb-6 max-w-xs">
              Profesionalne električne usluge u Laktašima i okolini.
              Licencirani majstor, brza reakcija, garancija na rad.
            </p>
            <div
              className="font-display text-lg text-[#A0A0A0] italic tracking-wider"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              &ldquo;Tu smo kad struje nema.&rdquo;
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="font-display text-xs font-semibold tracking-[0.25em] uppercase text-[#F5C400] mb-5"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Navigacija
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Usluge", href: "#usluge" },
                { label: "Zašto mi", href: "#zasto" },
                { label: "Proces rada", href: "#proces" },
                { label: "Kontakt", href: "#kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[0.8rem] text-[#555] hover:text-[#F5C400] transition-colors duration-150 tracking-wide"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-display text-xs font-semibold tracking-[0.25em] uppercase text-[#F5C400] mb-5"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Kontakt
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+38766167566"
                  className="flex items-center gap-2 text-[0.8rem] text-[#555] hover:text-[#F5C400] transition-colors"
                >
                  <Phone size={13} className="text-[#F5C400]/50 shrink-0" />
                  +387 66 167 566
                </a>
              </li>
              <li>
                <a
                  href="mailto:borkab819@gmail.com"
                  className="flex items-center gap-2 text-[0.8rem] text-[#555] hover:text-[#F5C400] transition-colors"
                >
                  <Mail size={13} className="text-[#F5C400]/50 shrink-0" />
                  borkab819@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-[0.8rem] text-[#555]">
                <MapPin size={13} className="text-[#F5C400]/50 shrink-0 mt-0.5" />
                Nikole Matavulja bb, Laktaši, RS
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#F5C400]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
          <p className="text-[0.6rem] tracking-[0.15em] text-[#383838]">
            &copy; {currentYear} Elektro Servis SB. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
}
