export type LocationLevel = "country" | "state" | "city";

export type Location = {
  slug: string;
  level: LocationLevel;
  name: string;
  /** Slug of the parent location, for breadcrumb + internal linking. */
  parentSlug: string | null;
  /** schema.org areaServed type. */
  schemaType: "Country" | "State" | "City";
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** Genuinely location-specific context — not a templated city-name swap. */
  intro: string;
  whyHere: string;
};

export const LOCATIONS: Location[] = [
  {
    slug: "india",
    level: "country",
    name: "India",
    parentSlug: null,
    schemaType: "Country",
    metaTitle: "SEO & GEO Services in India | AI Search Visibility — Crevis",
    metaDescription:
      "Crevis helps Indian businesses get found in Google and cited in ChatGPT, Perplexity, and AI Overviews — SEO, GEO, and conversion-tracked landing pages, priced in INR.",
    h1: "SEO & GEO for businesses across India.",
    intro:
      "India's search behavior is shifting faster than most agencies have caught up with — mobile-first, increasingly voice- and AI-assisted, and crowded with local competitors in every category from clinics to real estate to legal services. Most Indian businesses are still fighting over Google's ten blue links while their customers have already started asking ChatGPT and Google's AI Overview instead.",
    whyHere:
      "We work with businesses across India remotely — there's no requirement to be near a Crevis office, since the tracking, schema work, and landing pages are all delivered through your dashboard regardless of where you're based.",
  },
  {
    slug: "uttar-pradesh",
    level: "state",
    name: "Uttar Pradesh",
    parentSlug: "india",
    schemaType: "State",
    metaTitle:
      "SEO & GEO Services in Uttar Pradesh | Crevis",
    metaDescription:
      "Get found in Google and cited in AI answers across Uttar Pradesh. Crevis builds GEO tracking, schema, and landing pages for businesses in Agra, Lucknow, Kanpur, Noida, and beyond.",
    h1: "SEO & GEO for Uttar Pradesh businesses.",
    intro:
      "Uttar Pradesh is India's most populous state, which cuts both ways: a huge addressable market, and some of the most crowded local-search competition in the country — for clinics, legal services, real estate, and hospitality alike. That density is exactly where GEO matters most, because AI answers only have room to name a handful of businesses per query.",
    whyHere:
      "Our approach is the same across every UP city we work in — the GEO Visibility Tracker, schema, and landing page system don't change by location. What changes is the content and citation strategy, which we tailor to each market, starting with Agra, Lucknow, Kanpur, and the Noida/Delhi NCR corridor.",
  },
  {
    slug: "agra",
    level: "city",
    name: "Agra",
    parentSlug: "uttar-pradesh",
    schemaType: "City",
    metaTitle: "SEO & GEO Services in Agra, UP | Crevis",
    metaDescription:
      "Crevis helps Agra businesses — from hospitality and tour operators to clinics, legal firms, and retail — get found in Google and cited in ChatGPT and AI Overviews.",
    h1: "SEO & GEO for Agra businesses.",
    intro:
      "Agra has a search market most local-SEO templates aren't built for: a huge share of demand is tourism-driven — hotels, guides, and handicraft or leather retailers competing for travelers who ask AI for recommendations before they land, in both English and Hindi — sitting alongside the standard local-service businesses every city has. That mix is exactly what GEO was built for. A traveler asking ChatGPT \"best hotel near the Taj Mahal\" or \"reliable guide in Agra\" is having the same kind of AI-answer moment as someone asking for a plumber or a dentist — and right now, most Agra businesses aren't cited in either.",
    whyHere:
      "We haven't published local case studies for Agra yet — this market is new for us. What you get instead is the same system already running for clients elsewhere: live GEO tracking, automated schema, and landing pages, adapted to Agra's mix of tourism and local-service search demand.",
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}

export function getBreadcrumb(location: Location): Location[] {
  const chain: Location[] = [location];
  let current = location;
  while (current.parentSlug) {
    const parent = getLocationBySlug(current.parentSlug);
    if (!parent) break;
    chain.unshift(parent);
    current = parent;
  }
  return chain;
}
