"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const points = [8, 14, 12, 22, 19, 31, 28, 40, 37, 52, 61, 74];

function toPath(values: number[], width: number, height: number) {
  const max = Math.max(...values);
  const step = width / (values.length - 1);
  return values
    .map((v, i) => {
      const x = i * step;
      const y = height - (v / max) * height;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
}

export function DashboardMock() {
  const width = 320;
  const height = 96;
  const linePath = toPath(points, width, height);
  const areaPath = `${linePath} L${width},${height} L0,${height} Z`;

  return (
    <div className="rounded-2xl border border-white/10 bg-card/80 p-6 shadow-2xl shadow-black/40">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Live · GEO Visibility Tracker
          </span>
        </div>
        <span className="font-mono text-xs text-muted-foreground">
          your-business.com
        </span>
      </div>

      <div className="mb-6">
        <div className="mb-1 flex items-baseline justify-between">
          <span className="text-xs text-muted-foreground">
            AI citation rate, last 90 days
          </span>
          <span className="font-mono text-sm font-medium text-violet-soft">
            +312%
          </span>
        </div>
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="h-24 w-full overflow-visible"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="dashboard-area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--violet)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="var(--violet)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d={areaPath}
            fill="url(#dashboard-area)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <motion.path
            d={linePath}
            fill="none"
            stroke="var(--violet)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-5 sm:grid-cols-4">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
            Schema
          </div>
          <div className="mt-1 font-mono text-sm">Injected</div>
        </div>
        <div>
          <div className="text-xs text-muted-foreground">GEO score</div>
          <div className="mt-1 font-mono text-sm">82 / 100</div>
        </div>
        <div>
          <div className="text-xs text-muted-foreground">New leads (wk)</div>
          <div className="mt-1 font-mono text-sm">14</div>
        </div>
        <div>
          <div className="text-xs text-muted-foreground">Page conversion</div>
          <div className="mt-1 font-mono text-sm">3.8%</div>
        </div>
      </div>
    </div>
  );
}
