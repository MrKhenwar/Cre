import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "We were ranking fine on Google and still invisible everywhere customers actually asked. Crevix got us cited in ChatGPT for emergency calls inside a quarter — we can see it happen in the dashboard now.",
    name: "Maya Ferro",
    title: "Owner, Northstar Plumbing & HVAC",
  },
  {
    quote:
      "Nobody else on our shortlist could explain GEO, let alone show us proof it worked. The schema injection alone fixed things our old site had been getting wrong for years.",
    name: "Ravi Shenoy",
    title: "Owner, Halcyon Med Spa",
  },
  {
    quote:
      "The landing page system was live in four days and started tracking conversions immediately. We finally know which channels are actually driving sales, not just traffic.",
    name: "Elena Kovacs",
    title: "Founder, Solstice Boutique",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .filter((part) => !part.endsWith("."))
    .map((part) => part[0])
    .join("");
}

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="From the field"
        title="Practices that made the switch."
        className="mb-16"
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08} className="h-full">
            <figure
              className={cn(
                "flex h-full flex-col justify-between gap-8 rounded-2xl border border-white/10 bg-card/60 p-8",
              )}
            >
              <blockquote className="text-balance text-base leading-relaxed text-foreground/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-violet/15 text-sm font-medium text-violet-soft">
                  {initials(t.name)}
                </span>
                <div className="text-sm">
                  <div className="font-medium text-foreground">{t.name}</div>
                  <div className="text-muted-foreground">{t.title}</div>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
