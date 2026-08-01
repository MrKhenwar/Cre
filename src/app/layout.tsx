import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { PersonalizationProvider } from "@/components/providers/personalization-provider";
import { OnboardingModal } from "@/components/onboarding/onboarding-modal";
import "./globals.css";

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
        <SmoothScroll />
        <PersonalizationProvider>
          {children}
          <OnboardingModal />
        </PersonalizationProvider>
      </body>
    </html>
  );
}
