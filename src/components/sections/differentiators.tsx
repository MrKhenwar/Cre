import { Radar, Code2, LayoutTemplate } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { BentoGrid } from "@/components/ui/bento-grid";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { TiltCard } from "@/components/ui/tilt-card";
import { Reveal } from "@/components/ui/reveal";

const tools = [
  {
    icon: Radar,
    name: "GEO Visibility Tracker",
    tagline: "A live trend, not a one-time audit.",
    detail:
      "Most agencies run a one-time AI-visibility “audit” and call it a strategy. Ours tracks your citations in ChatGPT, Perplexity, and Google AI Overviews continuously, so you see the trend — up or down — live in your dashboard, not a screenshot from six weeks ago.",
  },
  {
    icon: Code2,
    name: "Automated Schema Injection",
    tagline: "Machine-readable, not just human-readable.",
    detail:
      "AI can’t cite what it can’t parse. We built tooling that injects and maintains the structured data that makes your site machine-readable, so the same information a human reads is something an AI model can actually pull into an answer.",
  },
  {
    icon: LayoutTemplate,
    name: "Templated Landing Pages",
    tagline: "Live in days, with conversion tracking built in.",
    detail:
      "Other agencies quote six weeks for a landing page. Ours is a pre-tested system that works for any business — live in days, with conversion tracking wired in from visitor one, not bolted on after.",
  },
];

export function Differentiators() {
  return (
    <section id="pillars" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Why us, not another agency"
        title="We didn't hire a bigger team. We built better tools."
        description="Everything below lives in one white-labeled dashboard your team can check any time — not a PDF that shows up once a month."
        className="mb-16"
      />

      <BentoGrid>
        {tools.map((tool, i) => (
          <Reveal key={tool.name} delay={i * 0.08} className="h-full">
            <TiltCard className="h-full">
              <SpotlightCard className="h-full">
                <div className="flex h-full flex-col gap-5 p-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-violet/25 bg-violet/10 text-violet-soft">
                    <tool.icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">
                      {tool.name}
                    </h3>
                    <p className="mt-1.5 text-sm font-medium text-violet-soft">
                      {tool.tagline}
                    </p>
                  </div>
                  <p className="mt-auto text-sm leading-relaxed text-muted-foreground">
                    {tool.detail}
                  </p>
                </div>
              </SpotlightCard>
            </TiltCard>
          </Reveal>
        ))}
      </BentoGrid>
    </section>
  );
}
