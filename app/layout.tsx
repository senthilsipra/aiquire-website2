import type { Metadata } from "next";
import "./globals.css";
import { dmSans, jetbrainsMono, cabinetGrotesk } from "@/lib/fonts";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "AI consulting and custom AI software development. We combine management consulting rigor with production-grade AI engineering to deliver measurable business impact.",
  keywords: ["AI consulting", "machine learning", "AI strategy", "LLM solutions", "data engineering", "MLOps"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      "AI consulting and custom AI software development. We combine management consulting rigor with production-grade AI engineering.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: "AI consulting and custom AI software development.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

import { OrganizationJsonLd, ProfessionalServiceJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        cabinetGrotesk.variable,
        dmSans.variable,
        jetbrainsMono.variable
      )}
    >
      <body className="min-h-screen flex flex-col">
        {/* These are hidden on admin pages via CSS injected by admin layout */}
        <OrganizationJsonLd />
        <ProfessionalServiceJsonLd />
        <WebSiteJsonLd />
        <div id="public-nav"><Navigation /></div>
        <main className="flex-1">{children}</main>
        <div id="public-footer"><Footer /></div>
      </body>
    </html>
  );
}
