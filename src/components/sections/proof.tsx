import { SectionHeading } from "@/components/ui/section-heading";
import { BentoGrid } from "@/components/ui/bento-grid";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { TiltCard } from "@/components/ui/tilt-card";
import { CountUp } from "@/components/ui/count-up";
import { Reveal } from "@/components/ui/reveal";
import { DashboardMock } from "@/components/ui/dashboard-mock";

const stats = [
  {
    value: 186,
    prefix: "+",
    suffix: "%",
    label: "Average traffic lift",
    context: "Organic + AI-referred traffic within 6 months of onboarding.",
  },
  {
    value: 4.2,
    suffix: "x",
    decimals: 1,
    label: "More AI-answer citations",
    context: "Mentions inside ChatGPT, Perplexity, and Google AI Overviews.",
  },
  {
    value: 3.8,
    suffix: "%",
    decimals: 1,
    label: "Landing page conversion rate",
    context: "Booked calls or purchases, up from a category average near 1.2%.",
  },
];

export function Proof() {
  return (
    <section id="proof" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Proof, not promises"
        title="What actually shows up in your dashboard."
        description="No monthly PDF. These numbers update live, and these are the three we're accountable for on every engagement."
        className="mb-16"
      />

      <Reveal className="mx-auto mb-16 max-w-2xl">
        <TiltCard max={5}>
          <DashboardMock />
        </TiltCard>
      </Reveal>

      <BentoGrid>
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08}>
            <SpotlightCard className="h-full">
              <div className="flex h-full flex-col gap-3 p-8">
                <div className="font-mono text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  <CountUp
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals ?? 0}
                    className="text-gradient-violet"
                  />
                </div>
                <h3 className="text-base font-medium">{stat.label}</h3>
                <p className="mt-auto text-sm text-muted-foreground">
                  {stat.context}
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </BentoGrid>
    </section>
  );
}
