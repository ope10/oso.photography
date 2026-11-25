import React from "react";
import { SITE_CONFIG } from "@/data/portfolio-data";

export function WatermarkOso() {
  return (
    <div className="w-full py-6 md:py-12 overflow-hidden flex items-center justify-center select-none pointer-events-none px-4">
      <svg
        viewBox="0 0 1400 130"
        className="w-full max-w-7xl h-auto select-none pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="central"
          className="font-black uppercase tracking-[0.12em] fill-current text-dark-100/5 dark:text-white/[0.04] text-zinc-950/[0.06] transition-colors"
          style={{ fontSize: "96px", fontWeight: 900 }}
        >
          {SITE_CONFIG.name}
        </text>
      </svg>
    </div>
  );
}

// Backward compatibility alias
export const WatermarkDamien = WatermarkOso;
