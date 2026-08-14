import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Cormorant_Garamond, Outfit, Tiro_Devanagari_Hindi } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const tiro = Tiro_Devanagari_Hindi({
  variable: "--font-deva",
  subsets: ["devanagari", "latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Hindu temple Norval",
    "Radha Sarveshwar",
    "Halton Hills temple",
    "Sanatan Dharma Ontario",
    "Hindu heritage centre",
  ],
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_CA",
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${outfit.variable} ${tiro.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ivory text-ink">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
