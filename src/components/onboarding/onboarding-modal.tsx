"use client";

import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { usePersonalization } from "@/components/providers/personalization-provider";
import {
  COUNTRIES,
  BUSINESS_TYPES,
  CHALLENGES,
  ADS_STATUS_OPTIONS,
  ADS_UPSELL_PITCH,
  formatPrice,
  pillarPitch,
} from "@/lib/personalization";
import { PRICING_TIERS } from "@/lib/pricing-data";
import { cn } from "@/lib/utils";

const STEP_COUNT = 5;

export function OnboardingModal() {
  const {
    modalOpen,
    activeStep: step,
    setStep,
    closeModal,
    dismiss,
    reset,
    setAnswers,
    currency,
    businessType,
    challenge,
    adsStatus,
    recommendedTierId,
  } = usePersonalization();

  const recommendedTier = PRICING_TIERS.find(
    (t) => t.id === recommendedTierId,
  );

  return (
    <Dialog
      open={modalOpen}
      onOpenChange={(open) => {
        if (!open) dismiss();
      }}
    >
      <DialogContent className="max-w-lg gap-6 border border-white/10 bg-card p-6 sm:max-w-lg sm:p-8">
        <DialogHeader className="gap-3">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-violet-soft">
            <Sparkles className="h-3.5 w-3.5" />
            Quick, personalized pitch
          </div>
          <Progress
            value={((step + 1) / STEP_COUNT) * 100}
            className="gap-0"
          />
          <DialogTitle className="sr-only">
            Personalize your Crevix recommendation
          </DialogTitle>
          <DialogDescription className="sr-only">
            Answer four quick questions to see localized pricing and a
            tailored growth recommendation.
          </DialogDescription>
        </DialogHeader>

        {step === 0 && (
          <div className="flex flex-col gap-5">
            <div>
              <h3 className="text-lg font-semibold tracking-tight">
                Where&apos;s your business based?
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                So we can show you pricing in your currency.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {COUNTRIES.map((country) => (
                <button
                  key={country.code}
                  type="button"
                  onClick={() => {
                    setAnswers({ countryCode: country.code });
                    setStep(1);
                  }}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-left text-sm transition-colors hover:border-violet/40 hover:bg-violet/[0.06]"
                >
                  {country.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="flex flex-col gap-5">
            <div>
              <h3 className="text-lg font-semibold tracking-tight">
                What kind of business is it?
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                We&apos;ll tailor the recommendation to your industry.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {BUSINESS_TYPES.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => {
                    setAnswers({ businessTypeId: type.id });
                    setStep(2);
                  }}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-left text-sm transition-colors hover:border-violet/40 hover:bg-violet/[0.06]"
                >
                  {type.label}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setStep(0)}
              className="inline-flex w-fit items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-3 w-3" />
              Back
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col gap-5">
            <div>
              <h3 className="text-lg font-semibold tracking-tight">
                What&apos;s the biggest problem right now?
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Be honest — this decides what we&apos;d recommend first.
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              {CHALLENGES.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => {
                    setAnswers({ challengeId: c.id });
                    setStep(3);
                  }}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-left text-sm transition-colors hover:border-violet/40 hover:bg-violet/[0.06]"
                >
                  {c.label}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="inline-flex w-fit items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-3 w-3" />
              Back
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="flex flex-col gap-5">
            <div>
              <h3 className="text-lg font-semibold tracking-tight">
                Does anyone currently manage your paid ads and marketing?
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                We also run Meta and Google ad campaigns on top of the
                landing pages we build — this tells us if that&apos;s worth
                mentioning.
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              {ADS_STATUS_OPTIONS.map((a) => (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => {
                    setAnswers({ adsStatusId: a.id, dismissed: true });
                    setStep(4);
                  }}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-left text-sm transition-colors hover:border-violet/40 hover:bg-violet/[0.06]"
                >
                  {a.label}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setStep(2)}
              className="inline-flex w-fit items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-3 w-3" />
              Back
            </button>
          </div>
        )}

        {step === 4 && businessType && challenge && recommendedTier && (
          <div className="flex flex-col gap-5">
            <div>
              <h3 className="text-lg font-semibold tracking-tight">
                Here&apos;s what we&apos;d build for you
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                For a{" "}
                <span className="text-foreground">{businessType.label}</span>{" "}
                business, when someone asks ChatGPT &ldquo;
                {businessType.example}&rdquo; — that&apos;s the moment you
                need to win. {pillarPitch(challenge.pillar)}{" "}
                {adsStatus?.upsell && ADS_UPSELL_PITCH}
              </p>
            </div>

            <div className="glow-border relative rounded-xl border border-violet/30 bg-violet/[0.06] p-5">
              <span className="mb-2 inline-flex items-center rounded-full bg-violet px-2.5 py-0.5 text-xs font-medium text-primary-foreground">
                Recommended for you
              </span>
              <div className="flex items-baseline justify-between">
                <h4 className="text-base font-semibold">
                  {recommendedTier.name}
                </h4>
                <div className="text-right">
                  <span className="font-mono text-xl font-semibold text-gradient-violet">
                    {formatPrice(recommendedTier.priceUSD, currency)}
                  </span>
                  <span className="ml-1 text-xs text-muted-foreground">
                    {recommendedTier.cadence}
                  </span>
                </div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {recommendedTier.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                nativeButton={false}
                className="h-11 flex-1 bg-violet text-primary-foreground hover:bg-violet/90"
                render={
                  <a href="#cta" onClick={closeModal}>
                    Book a call
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                }
              />
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                className="h-11 flex-1 border-white/15 bg-white/[0.03] hover:bg-white/[0.06]"
                render={
                  <a href="#pricing" onClick={closeModal}>
                    See full pricing
                  </a>
                }
              />
            </div>

            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>
                Estimated in {currency}. Billed in USD; shown for reference.
              </span>
              <button
                type="button"
                onClick={reset}
                className={cn("shrink-0 hover:text-foreground")}
              >
                Start over
              </button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
