"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/data/portfolio-data";
import { cn } from "@/lib/utils";

export function Faq() {
  const [openIds, setOpenIds] = useState<{ [key: string]: boolean }>({
    "faq-1": true,
  });

  const toggle = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const half = Math.ceil(FAQS.length / 2);
  const col1 = FAQS.slice(0, half);
  const col2 = FAQS.slice(half);

  const renderColumn = (items: typeof FAQS) => (
    <div className="space-y-4">
      {items.map((faq) => {
        const isOpen = !!openIds[faq.id];
        return (
          <div
            key={faq.id}
            className="rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] p-6 transition-all"
          >
            <button
              onClick={() => toggle(faq.id)}
              className="w-full flex items-center justify-between text-left group"
              aria-expanded={isOpen}
            >
              <span className="text-sm sm:text-base font-bold text-[var(--text-primary)] group-hover:text-brand-purple transition-colors pr-4">
                {faq.question}
              </span>
              <div
                className={cn(
                  "p-1.5 rounded-full border border-[var(--border-card)] shrink-0 transition-colors",
                  isOpen ? "bg-brand-purple text-white border-brand-purple" : "bg-[var(--bg-card-inner)] text-[var(--text-primary)]"
                )}
              >
                {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
              </div>
            </button>

            {isOpen && (
              <p className="mt-4 text-xs sm:text-sm text-[var(--text-sub)] leading-relaxed pt-4 border-t border-[var(--border-card)] animate-in fade-in duration-200">
                {faq.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <section className="py-16 md:py-24 border-t border-[var(--border-card)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 md:mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--text-muted)] font-semibold block mb-1">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)] uppercase">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        {/* 2-Column Accordion Layout matching Figma Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {renderColumn(col1)}
          {renderColumn(col2)}
        </div>
      </div>
    </section>
  );
}
