import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Source_Sans_3 } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/images/logo.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/images/logo.png",
  },
  keywords: [
    "Hindu temple Norval",
    "Radha Sarveshwar Heritage Centre",
    "Halton Hills temple",
    "Norval temple",
  ],
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_CA",
    type: "website",
    images: [{ url: "/images/logo.png", alt: site.name }],
  },
  twitter: {
    card: "summary",
    title: site.name,
    description: site.description,
    images: ["/images/logo.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sourceSans.variable} h-full antialiased`}>
      <body className={`${sourceSans.className} min-h-full bg-ivory text-ink`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
