"use client";

import { FileSearch, TrendingUp, ShieldCheck, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { usePersonalization } from "@/components/providers/personalization-provider";

const included = [
  {
    icon: FileSearch,
    title: "Full GEO + SEO audit",
    detail:
      "Where you're cited (and where you're invisible) across Google, ChatGPT, Perplexity, and AI Overviews.",
  },
  {
    icon: TrendingUp,
    title: "A 90-day growth plan",
    detail:
      "Built around your business and your market, not a template — the roadmap we'd actually run.",
  },
  {
    icon: ShieldCheck,
    title: "No cost, no commitment",
    detail:
      "No card, no contract. If it's not worth continuing after month one, you owe nothing.",
  },
];

export function FreeMonthOffer() {
  const { openModal } = usePersonalization();

  return (
    <section id="pricing" className="mx-auto max-w-5xl px-6 py-28">
      <SectionHeading
        eyebrow="Start here"
        title="Your first month is on us."
        description="No fixed packages, no public price list. Every plan after your free month is built around your business and what the audit finds — you'll know exactly what you're paying for before you pay for anything."
        className="mb-14"
      />

      <Reveal>
        <div className="glow-border relative rounded-2xl border border-violet/30 bg-gradient-to-b from-violet/[0.08] to-transparent p-8 sm:p-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {included.map((item) => (
              <div key={item.title} className="flex flex-col gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-violet/25 bg-violet/10 text-violet-soft">
                  <item.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 border-t border-white/10 pt-8 text-center">
            <Button
              size="lg"
              onClick={openModal}
              className="group h-12 w-full max-w-xs bg-violet px-7 text-base text-primary-foreground shadow-[0_0_40px_-12px_var(--violet)] hover:bg-violet/90 sm:w-auto"
            >
              Claim your free month
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <p className="max-w-md text-xs text-muted-foreground">
              After your free month, we&apos;ll recommend a plan — GEO Audit,
              Growth System, or Full Marketing Takeover — priced around your
              business, not a public list.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
