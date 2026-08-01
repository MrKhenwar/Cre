import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRight } from "lucide-react";

export function GeoExplainer() {
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
            when someone asks &ldquo;best emergency plumber in
            [city].&rdquo; Same intent, different battlefield: you&apos;re
            not competing for
            a spot on page one anymore — you&apos;re competing to be the name
            the AI says out loud.
          </>
        }
        className="mb-14"
      />

      <Reveal delay={0.1}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-card/40 p-7">
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground/70">
              Old search — what SEO was built for
            </p>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono">
                &ldquo;plumber near me&rdquo;
              </span>
              <ArrowRight className="h-4 w-4 shrink-0" />
              <span className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5">
                10 blue links
              </span>
              <ArrowRight className="h-4 w-4 shrink-0" />
              <span className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5">
                customer clicks around
              </span>
            </div>
          </div>

          <div className="glow-border relative rounded-2xl border border-violet/30 bg-violet/[0.06] p-7">
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-violet-soft">
              New search — what GEO is for
            </p>
            <div className="flex items-center gap-3 text-sm text-foreground/90">
              <span className="rounded-md border border-violet/25 bg-white/[0.03] px-3 py-1.5 font-mono">
                &ldquo;best emergency plumber?&rdquo;
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 text-violet-soft" />
              <span className="rounded-md border border-violet/25 bg-white/[0.03] px-3 py-1.5">
                one written answer
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 text-violet-soft" />
              <span className="rounded-md border border-violet/25 bg-white/[0.03] px-3 py-1.5">
                customer books the name given
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
