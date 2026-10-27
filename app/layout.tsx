import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/ui";
import { profile, siteUrl } from "@/data/content";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const description = "Full-stack developer in Bangkok building web, mobile, and API features end to end. Projects, case studies, and experience.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${profile.name}, full-stack developer`, template: `%s · ${profile.name}` },
  description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: profile.name, title: `${profile.name}, full-stack developer`, description, url: "/" },
  twitter: { card: "summary_large_image" },
  authors: [{ name: profile.name, url: profile.github }],
};

export const viewport: Viewport = {
  themeColor: "#fafafa",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${mono.variable}`}>
      <body>
        <a className="skip-link" href="#content">Skip to content</a>
        <SiteHeader />
        <main id="content" className="wrap page">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
