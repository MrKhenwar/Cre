import Link from "next/link";

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.3 2H21.5L14.6 10.1L22.7 21H16.3L11.3 14.4L5.6 21H2.4L9.7 12.3L1.9 2H8.5L13 8.1L18.3 2ZM17.2 19.1H19L7.5 3.8H5.6L17.2 19.1Z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48ZM13.32 8.48H9.5V21h3.78v-6.13c0-3.4 4.4-3.7 4.4 0V21H21v-7.93c0-6.17-6.87-5.94-7.68-2.9V8.48Z" />
    </svg>
  );
}

const columns = [
  {
    heading: "Services",
    links: [
      { label: "SEO", href: "#pillars" },
      { label: "GEO", href: "#pillars" },
      { label: "Landing Pages", href: "#pillars" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Process", href: "#process" },
      { label: "Results", href: "#proof" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div className="flex flex-col gap-4">
            <Link href="#top" className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-violet text-sm font-bold text-primary-foreground">
                C
              </span>
              <span className="text-base font-semibold tracking-tight">
                Crevis
              </span>
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              GEO tracking, automated schema, and conversion-tracked landing
              pages for any business, in any industry.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Crevis on X (Twitter)"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-violet/40 hover:text-foreground"
              >
                <XIcon className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Crevis on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-violet/40 hover:text-foreground"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            {columns.map((col) => (
              <div key={col.heading} className="flex flex-col gap-3">
                <h4 className="text-sm font-medium text-foreground">
                  {col.heading}
                </h4>
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Crevis. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
