"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRight } from "lucide-react";
import { usePersonalization } from "@/components/providers/personalization-provider";

export function GeoExplainer() {
  const { businessType } = usePersonalization();
  const example = businessType?.example ?? "best emergency plumber in [city]";
  const shortExample = businessType?.example ?? "best emergency plumber";
  const oldSearchTerm = businessType
    ? businessType.label.toLowerCase()
    : "plumber near me";

  return (
    <section className="mx-auto max-w-5xl px-6 py-28">
      <SectionHeading
        eyebrow="New term, quick explanation"
        title="What is GEO, actually?"
        description={
          <>
            GEO — Generative Engine Optimization — is SEO&apos;s counterpart
            for AI answers. Old SEO gets your site onto a list of ten blue
            links. GEO gets your business{" "}
            <span className="text-foreground">named</span> inside the one
            answer ChatGPT, Perplexity, or Google&apos;s AI Overview gives
            when someone asks &ldquo;{example}.&rdquo; Same intent, different
            battlefield: you&apos;re not competing for a spot on page one
            anymore — you&apos;re competing to be the name the AI says out
            loud.
          </>
        }
        className="mb-14"
      />

      <Reveal delay={0.1}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-card/40 p-5 sm:p-7">
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground/70">
              Old search — what SEO was built for
            </p>
            <div className="flex flex-col items-stretch gap-2 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
              <span className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-center font-mono sm:text-left">
                &ldquo;{oldSearchTerm} near me&rdquo;
              </span>
              <ArrowRight className="mx-auto h-4 w-4 shrink-0 rotate-90 sm:mx-0 sm:rotate-0" />
              <span className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-center sm:text-left">
                10 blue links
              </span>
              <ArrowRight className="mx-auto h-4 w-4 shrink-0 rotate-90 sm:mx-0 sm:rotate-0" />
              <span className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-center sm:text-left">
                customer clicks around
              </span>
            </div>
          </div>

          <div className="glow-border relative rounded-2xl border border-violet/30 bg-violet/[0.06] p-5 sm:p-7">
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-violet-soft">
              New search — what GEO is for
            </p>
            <div className="flex flex-col items-stretch gap-2 text-sm text-foreground/90 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
              <span className="rounded-md border border-violet/25 bg-white/[0.03] px-3 py-2 text-center font-mono sm:text-left">
                &ldquo;{shortExample}?&rdquo;
              </span>
              <ArrowRight className="mx-auto h-4 w-4 shrink-0 rotate-90 text-violet-soft sm:mx-0 sm:rotate-0" />
              <span className="rounded-md border border-violet/25 bg-white/[0.03] px-3 py-2 text-center sm:text-left">
                one written answer
              </span>
              <ArrowRight className="mx-auto h-4 w-4 shrink-0 rotate-90 text-violet-soft sm:mx-0 sm:rotate-0" />
              <span className="rounded-md border border-violet/25 bg-white/[0.03] px-3 py-2 text-center sm:text-left">
                customer books the name given
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
