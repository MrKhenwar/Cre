import type { TierId } from "@/lib/pricing-data";

export type Currency = "USD" | "GBP" | "EUR" | "CAD" | "AUD" | "INR" | "AED";

export type Country = {
  code: string;
  label: string;
  currency: Currency;
};

export const COUNTRIES: Country[] = [
  { code: "US", label: "United States", currency: "USD" },
  { code: "GB", label: "United Kingdom", currency: "GBP" },
  { code: "CA", label: "Canada", currency: "CAD" },
  { code: "AU", label: "Australia", currency: "AUD" },
  { code: "IN", label: "India", currency: "INR" },
  { code: "EU", label: "European Union", currency: "EUR" },
  { code: "AE", label: "United Arab Emirates", currency: "AED" },
  { code: "OTHER", label: "Somewhere else", currency: "USD" },
];

export const CURRENCY_INFO: Record<Currency, { symbol: string; rate: number }> = {
  USD: { symbol: "$", rate: 1 },
  GBP: { symbol: "£", rate: 0.79 },
  EUR: { symbol: "€", rate: 0.92 },
  CAD: { symbol: "CA$", rate: 1.37 },
  AUD: { symbol: "A$", rate: 1.53 },
  INR: { symbol: "₹", rate: 83 },
  AED: { symbol: "AED ", rate: 3.67 },
};

export function currencyForCountry(countryCode: string | null): Currency {
  return COUNTRIES.find((c) => c.code === countryCode)?.currency ?? "USD";
}

export function formatPrice(usd: number | null, currency: Currency): string {
  if (usd === null) return "Custom";
  const { symbol, rate } = CURRENCY_INFO[currency];
  const converted = usd * rate;
  const rounded =
    converted >= 1000
      ? Math.round(converted / 50) * 50
      : Math.round(converted / 5) * 5;
  return `${symbol}${rounded.toLocaleString("en-US")}`;
}

export type BusinessType = {
  id: string;
  label: string;
  example: string;
};

export const BUSINESS_TYPES: BusinessType[] = [
  {
    id: "home-services",
    label: "Home Services",
    example: "best emergency plumber near me",
  },
  {
    id: "legal",
    label: "Legal",
    example: "best personal injury lawyer in your city",
  },
  {
    id: "medical-wellness",
    label: "Medical & Wellness",
    example: "best med spa for Botox in your city",
  },
  {
    id: "real-estate",
    label: "Real Estate",
    example: "best realtor to sell a house in your city",
  },
  {
    id: "retail-ecommerce",
    label: "Retail & E-commerce",
    example: "best place to buy what you sell, online",
  },
  {
    id: "fitness",
    label: "Fitness & Studios",
    example: "best gym near me",
  },
  {
    id: "hospitality",
    label: "Restaurants & Hospitality",
    example: "best restaurant near me",
  },
  {
    id: "professional-services",
    label: "Professional Services",
    example: "best firm like yours in your city",
  },
  {
    id: "other",
    label: "Something else",
    example: "a business like yours, nearby",
  },
];

export type Pillar = "seo" | "geo" | "landing" | "unsure";

export type Challenge = {
  id: string;
  label: string;
  pillar: Pillar;
  recommendedTierId: TierId;
};

export const CHALLENGES: Challenge[] = [
  {
    id: "google",
    label: "We don't show up on Google for the searches that matter",
    pillar: "seo",
    recommendedTierId: "growth",
  },
  {
    id: "ai",
    label: "We're invisible in ChatGPT, Perplexity, and AI answers",
    pillar: "geo",
    recommendedTierId: "growth",
  },
  {
    id: "convert",
    label: "We get traffic, but it doesn't turn into leads or sales",
    pillar: "landing",
    recommendedTierId: "full-build",
  },
  {
    id: "unsure",
    label: "Not sure — we want a full audit first",
    pillar: "unsure",
    recommendedTierId: "audit",
  },
];

export function pillarPitch(pillar: Pillar): string {
  switch (pillar) {
    case "seo":
      return "That starts with the technical SEO and content work most sites get wrong, plus the schema that makes you easy for Google to trust.";
    case "geo":
      return "That's exactly what our GEO Visibility Tracker and automated schema injection are built for — getting you cited by name inside AI answers, not just ranked in a list.";
    case "landing":
      return "That's a conversion problem, not a traffic problem — our templated landing page system ships in days with conversion tracking wired in from visitor one.";
    case "unsure":
    default:
      return "That's exactly what the GEO Audit is for — a two-week diagnostic across SEO, GEO, and your landing pages, so you know precisely where you stand.";
  }
}

export type AdsStatus = {
  id: string;
  label: string;
  /** Signals that a fully managed, ads-inclusive package is worth surfacing. */
  upsell: boolean;
};

export const ADS_STATUS_OPTIONS: AdsStatus[] = [
  {
    id: "no-ads",
    label: "We're not running paid ads yet",
    upsell: true,
  },
  {
    id: "diy",
    label: "We manage them ourselves, in-house",
    upsell: false,
  },
  {
    id: "agency",
    label: "Another agency handles our ads",
    upsell: false,
  },
  {
    id: "want-managed",
    label: "No one really owns it — we'd want that handled for us",
    upsell: true,
  },
];

export const ADS_UPSELL_PITCH =
  "And since no one's fully owning your paid ads right now, that's exactly what our Full Marketing Takeover tier is for — we run your Meta and Google campaigns alongside SEO, GEO, and your landing pages, so one team owns the whole number, not just the traffic.";
