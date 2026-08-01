"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { usePersonalization } from "@/components/providers/personalization-provider";
import { BUSINESS_TYPES } from "@/lib/personalization";

const testimonials = [
  {
    businessTypeId: "home-services",
    quote:
      "We were ranking fine on Google and still invisible everywhere customers actually asked. Crevis got us cited in ChatGPT for emergency calls inside a quarter — we can see it happen in the dashboard now.",
    name: "Maya Ferro",
    title: "Owner, Northstar Plumbing & HVAC",
  },
  {
    businessTypeId: "medical-wellness",
    quote:
      "Nobody else on our shortlist could explain GEO, let alone show us proof it worked. The schema injection alone fixed things our old site had been getting wrong for years.",
    name: "Ravi Shenoy",
    title: "Owner, Halcyon Med Spa",
  },
  {
    businessTypeId: "retail-ecommerce",
    quote:
      "The landing page system was live in four days and started tracking conversions immediately. We finally know which channels are actually driving sales, not just traffic.",
    name: "Elena Kovacs",
    title: "Founder, Solstice Boutique",
  },
  {
    businessTypeId: "legal",
    quote:
      "Personal injury leads used to come from billboards and luck. Now when someone asks ChatGPT who handles a case like theirs nearby, we're the name it gives — and the page it lands on actually turns that into a signed client.",
    name: "David Okafor",
    title: "Partner, Fenwick & Rowe Law",
  },
  {
    businessTypeId: "real-estate",
    quote:
      "Buyers ask AI for a realtor before they ever open a listings site now. Crevis got us cited for neighborhoods we used to lose every single one of those searches in.",
    name: "Priya Anand",
    title: "Broker, Origami Realty",
  },
  {
    businessTypeId: "fitness",
    quote:
      "We were spending on ads that brought browsers, not members. The landing page rebuild alone cut our cost per trial membership in half, and we can watch it happen live.",
    name: "Marcus Webb",
    title: "Owner, Vantage Point Fitness",
  },
  {
    businessTypeId: "hospitality",
    quote:
      "Almost nobody in our category was optimizing for how people ask AI for a table on short notice. We show up now, and Saturday nights book out a week earlier than they used to.",
    name: "Sofia Marchetti",
    title: "Owner, The Amber Room",
  },
  {
    businessTypeId: "professional-services",
    quote:
      "Referrals are great until they dry up. Being cited when someone asks AI for a firm like ours nearby has become a real, repeatable channel — not a nice-to-have.",
    name: "Tom Reyes",
    title: "Managing Partner, Ledger & Finch Advisory",
  },
  {
    businessTypeId: "other",
    quote:
      "We didn't fit neatly into a category, which is exactly why most agencies didn't know what to do with us. Crevis just asked what we do and who we compete with, then built for that.",
    name: "Jordan Lee",
    title: "Founder, Kestrel Studio",
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
  const { businessTypeId, businessType } = usePersonalization();

  const matched = testimonials.find(
    (t) => t.businessTypeId === businessTypeId,
  );
  const rest = testimonials.filter((t) => t !== matched);
  const displayed = matched ? [matched, ...rest.slice(0, 2)] : rest.slice(0, 3);

  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="From the field"
        title={
          businessType
            ? `What ${businessType.label.toLowerCase()} businesses are saying.`
            : "Businesses that made the switch."
        }
        className="mb-16"
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {displayed.map((t, i) => {
          const industry = BUSINESS_TYPES.find(
            (b) => b.id === t.businessTypeId,
          );
          const Icon = industry?.icon;
          const isMatch = t === matched;

          return (
            <Reveal key={t.name} delay={i * 0.08} className="h-full">
              <figure
                className={cn(
                  "relative flex h-full flex-col justify-between gap-8 rounded-2xl border p-8",
                  isMatch
                    ? "glow-border border-violet/40 bg-violet/[0.06]"
                    : "border-white/10 bg-card/60",
                )}
              >
                {isMatch && (
                  <span className="absolute -top-3 left-8 rounded-full bg-violet px-3 py-1 text-xs font-medium text-primary-foreground">
                    Business like yours
                  </span>
                )}
                <blockquote className="text-balance text-base leading-relaxed text-foreground/90">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <div className="relative shrink-0">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-violet/15 text-sm font-medium text-violet-soft">
                      {initials(t.name)}
                    </span>
                    {Icon && (
                      <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-card bg-violet text-primary-foreground">
                        <Icon className="h-3 w-3" strokeWidth={2.5} />
                      </span>
                    )}
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-foreground">
                      {t.name}
                    </div>
                    <div className="text-muted-foreground">{t.title}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
