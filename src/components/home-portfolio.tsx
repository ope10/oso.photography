"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { PORTFOLIO_PROJECTS } from "@/data/portfolio-data";

export function HomePortfolio() {
  const allFeatured = [
    PORTFOLIO_PROJECTS.portraits[0],
    PORTFOLIO_PROJECTS.events[0],
    PORTFOLIO_PROJECTS.commercial[0],
    PORTFOLIO_PROJECTS.portraits[1],
    PORTFOLIO_PROJECTS.events[1],
    PORTFOLIO_PROJECTS.commercial[1],
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;
  const maxIndex = allFeatured.length - visibleCount;

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const visible = allFeatured.slice(startIndex, startIndex + visibleCount);

  return (
    <section className="py-16 md:py-24 border-t border-[var(--border-card)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between gap-4 mb-10 md:mb-14">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--text-muted)] font-semibold block mb-1">
              PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)] uppercase">
              EXPLORE MY PHOTOGRAPHY WORK.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                aria-label="Previous portfolio works"
                className="p-2.5 rounded-full border border-[var(--border-card)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next portfolio works"
                className="p-2.5 rounded-full border border-[var(--border-card)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <Link
              href="/portfolio"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold border border-[var(--border-card)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all"
            >
              <span>View All Works</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 3 Featured Cards Grid with Carousel State */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {visible.map((p, idx) => (
            <Link
              key={`${p.id}-${idx}`}
              href="/portfolio"
              className="group rounded-3xl overflow-hidden border border-[var(--border-card)] bg-[var(--bg-card)] p-4 flex flex-col justify-between hover:border-[var(--border-hover)] hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden mb-4 bg-[var(--bg-card-inner)]">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover  group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-2 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-[var(--text-primary)] group-hover:text-brand-purple transition-colors">
                    {p.title}
                  </h3>
                  <span className="text-xs text-[var(--text-muted)] block mt-0.5">
                    {p.categoryLabel} • {p.date}
                  </span>
                </div>

                <div className="p-2 rounded-full border border-[var(--border-card)] bg-[var(--bg-card-inner)] text-[var(--text-primary)] group-hover:bg-brand-purple group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
