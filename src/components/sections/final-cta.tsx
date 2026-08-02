import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function FinalCta() {
  return (
    <section id="cta" className="relative overflow-hidden py-32">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, color-mix(in oklch, var(--violet) 30%, transparent), transparent 65%)",
        }}
      />
      <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,black_30%,transparent_100%)]" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 text-center">
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
            Your next customer already asked AI.
            <br />
            Find out what it said.
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="w-full max-w-xs sm:max-w-none sm:w-auto">
          <Button
            size="lg"
            nativeButton={false}
            className="group h-12 w-full bg-violet px-8 text-base text-primary-foreground shadow-[0_0_50px_-12px_var(--violet)] hover:bg-violet/90 sm:w-auto"
            render={
              <a href="mailto:viditkhenwar@gmail.com?subject=Book%20a%20call">
                Book a call
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            }
          />
        </Reveal>
      </div>
    </section>
  );
}
