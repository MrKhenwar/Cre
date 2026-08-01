import { Marquee } from "@/components/ui/marquee";
import { Reveal } from "@/components/ui/reveal";

const logos = [
  "Northstar Plumbing & HVAC",
  "Halcyon Med Spa",
  "Fenwick & Rowe Law",
  "Solstice Boutique",
  "Kestrel Auto Group",
  "Origami Realty",
  "Vantage Point Fitness",
  "Marrow Roofing Co.",
];

export function TrustBar() {
  return (
    <section className="relative border-y border-white/5 py-10">
      <Reveal>
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-wider text-muted-foreground/70">
          Trusted by businesses that got tired of monthly PDFs
        </p>
      </Reveal>
      <Marquee durationSeconds={36}>
        {logos.map((name) => (
          <span
            key={name}
            className="shrink-0 select-none whitespace-nowrap text-xl font-semibold tracking-tight text-muted-foreground/50 grayscale transition-colors duration-300 hover:text-foreground/80"
          >
            {name}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
