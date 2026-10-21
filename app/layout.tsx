import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"], display: "swap" });

export const metadata: Metadata = {
  title: "Pattaradanai Prommanee — Full-Stack Developer",
  description: "Portfolio of Pattaradanai Prommanee, a full-stack developer working across web, mobile, APIs, databases, and deployment.",
  openGraph: {
    title: "Pattaradanai Prommanee — Full-Stack Developer",
    description: "Web and mobile engineering across frontend, backend, data, and deployment.",
    type: "website",
  },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${plexMono.variable}`}>{children}</body>
    </html>
  );
}
