import { MapPin } from "lucide-react";

const LOCATIONS = [
  "Laktaši",
  "Srbac",
  "Banja Luka",
  "Prnjavor",
  "Gradiška",
  "Čelinac",
];

export default function ServiceArea() {
  return (
    <section className="relative py-24 bg-[#111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#F5C400]" />
              <span className="text-[0.6rem] tracking-[0.35em] uppercase text-[#F5C400]">
                Pokrivenost terena
              </span>
            </div>
            <h2
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase text-white mb-6 leading-none"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Servisno{" "}
              <span className="text-[#F5C400]">područje</span>
            </h2>
            <p className="text-[0.85rem] text-[#606060] leading-relaxed mb-8 max-w-md">
              Pokrivamo Laktaše i okolinu u radijusu od 50 km. Za hitne
              intervencije, dolazak je garantovan bez obzira na lokaciju unutar
              zone.
            </p>
            <div className="flex items-center gap-3 p-4 border border-[#F5C400]/20 bg-[#F5C400]/5">
              <MapPin size={16} className="text-[#F5C400] shrink-0" />
              <div>
                <div
                  className="font-display text-xs font-semibold text-[#F5C400] uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  Sjedište
                </div>
                <div className="text-[0.75rem] text-[#808080]">
                  Laktaši, Republika Srpska, BiH
                </div>
              </div>
            </div>
          </div>

          {/* Right: location grid */}
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-[#F5C400]/8">
              {LOCATIONS.map((loc) => (
                <div
                  key={loc}
                  className="group px-5 py-4 bg-[#111] hover:bg-[#161616] transition-colors duration-150 flex items-center gap-2 cursor-default"
                >
                  <div className="w-1 h-1 rounded-full bg-[#F5C400]/40 group-hover:bg-[#F5C400] transition-colors duration-150" />
                  <span
                    className="font-display text-sm font-medium text-[#808080] group-hover:text-white transition-colors duration-150 uppercase tracking-wide"
                    style={{ fontFamily: "var(--font-oswald)" }}
                  >
                    {loc}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[0.65rem] text-[#404040] tracking-[0.15em]">
              * DOLAZAK IZVAN ZONE PO DOGOVORU
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
