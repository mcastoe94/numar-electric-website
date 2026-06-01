import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
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
      className={`${inter.variable} ${libreBaskerville.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-brand-dark">{children}</body>
    </html>
  );
}
