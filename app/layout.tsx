import type { Metadata } from "next";
import { DM_Serif_Display, Geist } from "next/font/google";
import { ScrollToTop } from "@/components/ScrollToTop";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Numar Electric | Arizona Electrical Contractor",
  description:
    "Reliable residential and commercial electrical services across Arizona. Panel upgrades, EV chargers, lighting, repairs, and new construction wiring.",
  keywords: [
    "Arizona electrician",
    "electrical contractor",
    "Phoenix electrician",
    "Scottsdale electrical",
    "panel upgrade",
    "EV charger installation",
  ],
  icons: {
    icon: "/numar-electric-logo-green.png",
    apple: "/numar-electric-logo-green.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white font-sans text-brand-dark">
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
