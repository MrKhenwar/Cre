import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { LOCATIONS } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Locations we serve | Crevis",
  description:
    "Crevis helps businesses get found in Google and cited in AI answers across every market we serve, including India, Uttar Pradesh, and Agra.",
  alternates: {
    canonical: "https://crevis.agency/locations",
  },
};

export default function LocationsPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-4xl px-6 pt-32 pb-20 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet/25 bg-violet/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-violet-soft">
          <MapPin className="h-3.5 w-3.5" />
          Locations
        </span>
        <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Markets we serve.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground">
          The same GEO Visibility Tracker, schema injection, and landing page
          system, adapted to each market&apos;s search behavior — not a
          template with the city name swapped.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-28">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {LOCATIONS.map((location) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="group flex flex-col gap-2 rounded-2xl border border-white/10 bg-card/60 p-6 transition-colors hover:border-violet/40"
            >
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {location.level}
              </span>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold tracking-tight">
                  {location.name}
                </h2>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-violet-soft" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
