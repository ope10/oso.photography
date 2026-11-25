import React from "react";
import { MARQUEE_ITEMS } from "@/data/portfolio-data";

export function Marquee() {
  return (
    <div className="w-full overflow-hidden border-y border-[var(--border-card)] bg-[var(--bg-card)]/50 py-3.5 select-none transition-colors">
      <div className="flex w-max animate-marquee space-x-8">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => (
          <div key={index} className="flex items-center space-x-8">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-bold text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
              {item}
            </span>
            <span className="text-brand-purple text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
