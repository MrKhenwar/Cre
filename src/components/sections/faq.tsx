import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What's the difference between SEO and GEO?",
    answer:
      "SEO gets your site onto a list of ten blue links. GEO — Generative Engine Optimization — gets your business named inside the single answer ChatGPT, Perplexity, or Google's AI Overview gives. Same intent, different battlefield: you're competing to be the name the AI says out loud, not just a spot on page one.",
  },
  {
    question: "Do I need a local office for you to work with my business?",
    answer:
      "No. We work with businesses remotely, wherever they're based — India, the US, UK, and beyond. The GEO Visibility Tracker, schema work, and landing pages are all delivered through your dashboard regardless of location.",
  },
  {
    question: "What's included in the free first month?",
    answer:
      "A full GEO and SEO audit across Google, ChatGPT, Perplexity, and AI Overviews, plus a 90-day growth plan built around your business. No cost, no commitment, no card required.",
  },
  {
    question: "How is pricing decided after the free month?",
    answer:
      "There's no fixed public price list. After your free audit, we recommend a plan — GEO Audit, Growth System, or Full Marketing Takeover — priced around your business and what the audit finds.",
  },
  {
    question: "Do you handle paid ads too, or just SEO and GEO?",
    answer:
      "Our Full Marketing Takeover tier includes paid ad strategy and management across Meta, Google, and other platforms, alongside SEO, GEO, and landing pages. Ad spend is billed directly to your own ad accounts — our fee covers strategy and management.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Schema and technical fixes can go live within days. Meaningful movement in AI citations and rankings typically shows up within the first 90-day cycle, which is why the free month starts with a growth plan, not just an audit.",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export function Faq() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <SectionHeading
        eyebrow="Questions"
        title="Before you ask, we'll answer."
        className="mb-14"
      />

      <Reveal>
        <Accordion className="rounded-2xl border border-white/10 bg-card/40 px-6">
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.question} value={`faq-${i}`}>
              <AccordionTrigger className="py-5 text-base font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}
