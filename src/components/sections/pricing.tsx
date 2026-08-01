"use client";

import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePersonalization } from "@/components/providers/personalization-provider";
import { formatPrice } from "@/lib/personalization";
import { PRICING_TIERS } from "@/lib/pricing-data";

export function Pricing() {
  const { currency, recommendedTierId, isPersonalized, openModal } =
    usePersonalization();

  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Packages"
        title="Pick your entry point."
        description="Every engagement starts with the audit's findings — the retainer and full build just decide how fast you act on them."
        className="mb-6"
      />

      <div className="mb-10 flex justify-center">
        <button
          type="button"
          onClick={openModal}
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          {isPersonalized
            ? `Prices shown in ${currency}, based on your answers · Edit`
            : "Answer 4 quick questions to see prices in your currency"}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {PRICING_TIERS.map((tier, i) => {
          const highlighted = tier.id === recommendedTierId;
          const card = (
            <div
              className={cn(
                "relative flex h-full flex-col gap-6 rounded-2xl border p-8",
                highlighted
                  ? "glow-border border-violet/50 bg-gradient-to-b from-violet/[0.08] to-transparent"
                  : "border-white/10 bg-card/60",
              )}
            >
              {highlighted && (
                <span className="absolute -top-3 left-8 rounded-full bg-violet px-3 py-1 text-xs font-medium text-primary-foreground">
                  {isPersonalized ? "Recommended for you" : "Recommended"}
                </span>
              )}

              <div>
                <h3 className="text-lg font-semibold tracking-tight">
                  {tier.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {tier.description}
                </p>
              </div>

              <div className="flex items-baseline gap-1.5">
                <span className="text-4xl font-semibold tracking-tight">
                  {formatPrice(tier.priceUSD, currency)}
                </span>
                <span className="text-sm text-muted-foreground">
                  {tier.cadence}
                </span>
              </div>

              <ul className="flex flex-1 flex-col gap-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-foreground/80"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-violet-soft"
                      strokeWidth={2}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                nativeButton={false}
                variant={highlighted ? "default" : "outline"}
                className={cn(
                  "h-11 w-full",
                  highlighted
                    ? "bg-violet text-primary-foreground hover:bg-violet/90"
                    : "border-white/15 bg-white/[0.03] hover:bg-white/[0.06]",
                )}
                render={<a href="#cta">{tier.cta}</a>}
              />
            </div>
          );

          return (
            <Reveal key={tier.id} delay={i * 0.08} className="h-full">
              {highlighted ? (
                <TiltCard max={5} className="h-full">
                  {card}
                </TiltCard>
              ) : (
                card
              )}
            </Reveal>
          );
        })}
      </div>

      {currency !== "USD" && (
        <p className="mt-8 text-center text-xs text-muted-foreground">
          Estimated in {currency} for reference. All plans are billed in USD.
        </p>
      )}
    </section>
  );
}
