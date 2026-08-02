import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { PersonalizationProvider } from "@/components/providers/personalization-provider";
import { LoadingScreen } from "@/components/providers/loading-screen";
import { OnboardingModal } from "@/components/onboarding/onboarding-modal";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/footer";
import "./globals.css";

const SITE_URL = "https://crevis.agency";

const organizationLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
  name: "Crevis",
  url: SITE_URL,
  description:
    "Crevis builds GEO visibility tracking, automated schema injection, and conversion-tracked landing pages for businesses of any size, in any industry.",
  // Remote, service-area business — no fixed storefront, so areaServed
  // replaces a physical address rather than fabricating one.
  areaServed: "Worldwide",
  sameAs: ["https://twitter.com", "https://linkedin.com"],
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Crevis — Get cited in AI answers, not just ranked on Google",
  description:
    "Crevis builds the proprietary tooling — GEO visibility tracking, automated schema injection, and conversion-tracked landing pages — that gets any business cited in ChatGPT, Perplexity, and Google AI Overviews.",
  metadataBase: new URL("https://Crevis.agency"),
  openGraph: {
    title: "Crevis — Get cited in AI answers, not just ranked on Google",
    description:
      "GEO visibility tracking, automated schema injection, and conversion-tracked landing pages for any business, in any industry.",
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
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <SmoothScroll />
        <LoadingScreen />
        <PersonalizationProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
          <OnboardingModal />
        </PersonalizationProvider>
      </body>
    </html>
  );
}
