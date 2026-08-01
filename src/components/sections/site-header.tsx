"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePersonalization } from "@/components/providers/personalization-provider";
import { CURRENCY_INFO } from "@/lib/personalization";

const navItems = [
  { label: "Services", href: "#pillars" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#proof" },
  { label: "Pricing", href: "#pricing" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const { isPersonalized, currency, openModal } = usePersonalization();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-white/10 bg-background/80 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="#top" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-violet text-sm font-bold text-primary-foreground">
            C
          </span>
          <span className="text-base font-semibold tracking-tight">
            Crevix
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={openModal}
            className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-violet/40 hover:text-foreground sm:flex"
          >
            <Globe className="h-3.5 w-3.5" />
            {isPersonalized ? CURRENCY_INFO[currency].symbol.trim() : "Personalize"}
          </button>
          <Button
            size="sm"
            nativeButton={false}
            className="bg-violet text-primary-foreground hover:bg-violet/90"
            render={<a href="#cta">Book a call</a>}
          />
        </div>
      </div>
    </header>
  );
}
