export type TierId = "audit" | "growth" | "full-build";

export type PricingTier = {
  id: TierId;
  name: string;
  priceUSD: number | null;
  cadence: string;
  description: string;
  features: string[];
  cta: string;
};

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "audit",
    name: "GEO Audit",
    priceUSD: 2500,
    cadence: "one-time",
    description:
      "See exactly where you stand, today, in every AI answer that matters.",
    features: [
      "GEO Visibility Tracker snapshot across ChatGPT, Perplexity, Google AI Overviews",
      "Schema and structured-data audit",
      "Landing page conversion review",
      "Prioritized 90-day roadmap",
      "Delivered live in your dashboard, not a PDF",
    ],
    cta: "Get the audit",
  },
  {
    id: "growth",
    name: "Growth System",
    priceUSD: 6000,
    cadence: "/month",
    description:
      "Ongoing tracking, schema, and landing pages — the system runs, you watch the dashboard.",
    features: [
      "Everything in GEO Audit",
      "Continuous GEO Visibility Tracker monitoring",
      "Automated schema injection & maintenance",
      "Templated landing pages with conversion tracking",
      "Monthly strategy review with a dedicated strategist",
      "Full white-labeled dashboard access",
    ],
    cta: "Start the retainer",
  },
  {
    id: "full-build",
    name: "Full Marketing Takeover",
    priceUSD: null,
    cadence: "scoped + ad spend",
    description:
      "We take full ownership of your marketing and visibility — SEO, GEO, landing pages, and paid ads — so you get customers, not just traffic.",
    features: [
      "Everything in Growth System",
      "Paid ad strategy, setup, and management across Meta, Google, and other platforms",
      "Ad spend optimized against real conversion data, not just clicks",
      "One dashboard for organic and paid performance together",
      "Dedicated growth strategist owning the whole number",
      "Scales across every location or product line",
      "Ad spend billed directly to your accounts — our fee covers strategy and management",
    ],
    cta: "Talk to us",
  },
];
