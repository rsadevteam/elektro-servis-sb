import type { Metadata } from "next";
import { Oswald, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Elektro Servis SB — Tu smo kad struje nema.",
  description:
    "Profesionalne električne usluge u Laktašima i okolini. Dostupni 24/7. Brzo, kvalitetno, povoljno.",
  keywords: [
    "elektricar",
    "elektricne instalacije",
    "Laktasi",
    "hitne intervencije",
  ],
  openGraph: {
    title: "Elektro Servis SB — Tu smo kad struje nema.",
    description:
      "Elektricar u Laktašima. Sitni i srednji elektro radovi, brzo i povoljno.",
    locale: "bs_BA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bs"
      className={`${oswald.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-[#0D0D0D] text-[#E8E8E8] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
