import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getBreadcrumb, getLocationBySlug, LOCATIONS } from "@/lib/locations";
import { PRICING_TIERS } from "@/lib/pricing-data";
import { formatPrice } from "@/lib/personalization";

const SITE_URL = "https://crevis.agency";

export function generateStaticParams() {
  return LOCATIONS.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/locations/${location.slug}`,
    },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: `${SITE_URL}/locations/${location.slug}`,
      type: "website",
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const breadcrumb = getBreadcrumb(location);
  const children = LOCATIONS.filter((l) => l.parentSlug === location.slug);

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "SEO, GEO and landing page optimization",
    provider: {
      "@type": "Organization",
      name: "Crevis",
      url: SITE_URL,
    },
    areaServed: {
      "@type": location.schemaType,
      name: location.name,
    },
    url: `${SITE_URL}/locations/${location.slug}`,
  };

  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />

      <section className="mx-auto max-w-4xl px-6 pt-32 pb-20">
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground"
        >
          <Link href="/" className="hover:text-foreground">
            Crevis
          </Link>
          <span>/</span>
          <Link href="/locations" className="hover:text-foreground">
            Locations
          </Link>
          {breadcrumb.map((loc, i) => (
            <span key={loc.slug} className="flex items-center gap-1.5">
              <span>/</span>
              {i === breadcrumb.length - 1 ? (
                <span className="text-foreground">{loc.name}</span>
              ) : (
                <Link
                  href={`/locations/${loc.slug}`}
                  className="hover:text-foreground"
                >
                  {loc.name}
                </Link>
              )}
            </span>
          ))}
        </nav>

        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet/25 bg-violet/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-violet-soft">
          <MapPin className="h-3.5 w-3.5" />
          {location.name}
        </span>

        <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {location.h1}
        </h1>

        <p className="mt-6 max-w-2xl text-balance text-lg text-muted-foreground">
          {location.intro}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            size="lg"
            nativeButton={false}
            className="h-12 w-full bg-violet px-7 text-base text-primary-foreground shadow-[0_0_40px_-12px_var(--violet)] hover:bg-violet/90 sm:w-auto"
            render={
              <Link href="/#cta">
                Book a call
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            }
          />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="rounded-2xl border border-white/10 bg-card/60 p-8">
          <h2 className="text-xl font-semibold tracking-tight">
            Why {location.name}
          </h2>
          <p className="mt-3 text-muted-foreground">{location.whyHere}</p>
        </div>
      </section>

      {children.length > 0 && (
        <section className="mx-auto max-w-4xl px-6 pb-20">
          <h2 className="mb-5 text-xl font-semibold tracking-tight">
            Markets we serve in {location.name}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {children.map((child) => (
              <Link
                key={child.slug}
                href={`/locations/${child.slug}`}
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-card/40 p-5 transition-colors hover:border-violet/40"
              >
                <span className="font-medium">{child.name}</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-violet-soft" />
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-5xl px-6 pb-28">
        <h2 className="mb-5 text-xl font-semibold tracking-tight">
          Pricing in India, in ₹
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className="flex flex-col gap-4 rounded-xl border border-white/10 bg-card/40 p-6"
            >
              <h3 className="font-medium">{tier.name}</h3>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-semibold">
                  {formatPrice(tier.priceUSD, "INR")}
                </span>
                <span className="text-xs text-muted-foreground">
                  {tier.cadence}
                </span>
              </div>
              <ul className="flex flex-col gap-2">
                {tier.features.slice(0, 3).map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-xs text-muted-foreground"
                  >
                    <Check className="mt-0.5 h-3 w-3 shrink-0 text-violet-soft" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          Estimated in INR for reference. All plans are billed in USD.
        </p>
      </section>
    </main>
  );
}
