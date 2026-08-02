import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { ProblemReframe } from "@/components/sections/problem-reframe";
import { GeoExplainer } from "@/components/sections/geo-explainer";
import { Differentiators } from "@/components/sections/differentiators";
import { Process } from "@/components/sections/process";
import { Proof } from "@/components/sections/proof";
import { Testimonials } from "@/components/sections/testimonials";
import { RevenueCalculator } from "@/components/sections/revenue-calculator";
import { FreeMonthOffer } from "@/components/sections/free-month-offer";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <TrustBar />
      <ProblemReframe />
      <GeoExplainer />
      <Differentiators />
      <Process />
      <Proof />
      <Testimonials />
      <RevenueCalculator />
      <FreeMonthOffer />
      <FinalCta />
    </main>
  );
}
