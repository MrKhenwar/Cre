"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Globe, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePersonalization } from "@/components/providers/personalization-provider";
import { CURRENCY_INFO } from "@/lib/personalization";

const navItems = [
  { label: "Services", href: "/#pillars" },
  { label: "Process", href: "/#process" },
  { label: "Results", href: "/#proof" },
  { label: "Free Audit", href: "/#pricing" },
  { label: "Locations", href: "/locations" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isPersonalized, currency, openModal } = usePersonalization();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || menuOpen
          ? "border-b border-white/10 bg-background/80 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo-icon.png"
            alt=""
            width={28}
            height={17}
            priority
            className="h-6 w-auto"
          />
          <span className="text-base font-semibold tracking-tight">
            Crevis
          </span>
        </Link>

        <nav className="hidden items-center gap-5 md:flex lg:gap-8">
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

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={openModal}
            className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-muted-foreground transition-colors hover:border-violet/40 hover:text-foreground sm:flex"
          >
            <Globe className="h-3.5 w-3.5" />
            {isPersonalized
              ? CURRENCY_INFO[currency].symbol.trim()
              : "Personalize"}
          </button>
          <Button
            size="sm"
            nativeButton={false}
            className="h-10 bg-violet px-4 text-sm text-primary-foreground hover:bg-violet/90"
            render={<Link href="/#cta">Book a call</Link>}
          />
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-foreground md:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-white/10 bg-background/95 backdrop-blur-lg md:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-base text-foreground/90 transition-colors hover:bg-white/[0.04]"
                >
                  {item.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  openModal();
                }}
                className="flex items-center gap-2 rounded-lg px-3 py-3 text-left text-base text-foreground/90 transition-colors hover:bg-white/[0.04]"
              >
                <Globe className="h-4 w-4" />
                {isPersonalized
                  ? `Personalized · ${currency}`
                  : "Personalize pricing"}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
