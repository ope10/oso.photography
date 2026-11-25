import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/portfolio-data";

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 border-t border-[var(--border-card)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 md:mb-14">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--text-muted)] font-semibold block mb-1">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)] uppercase mb-2">
              WHAT MY CLIENTS SAY
            </h2>
            <span className="text-xs text-[var(--text-muted)] font-medium">
              Total Reviews: <strong className="text-[var(--text-primary)]">323</strong>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <button
                aria-label="Previous testimonials"
                className="p-2.5 rounded-full border border-[var(--border-card)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                aria-label="Next testimonials"
                className="p-2.5 rounded-full border border-[var(--border-card)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold border border-[var(--border-card)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all"
            >
              <span>View All Testimonials</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 3 Testimonial Cards matching Figma Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="rounded-3xl border border-[var(--border-card)] bg-[var(--bg-card)] p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                {/* Author row & Social Icons */}
                <div className="flex items-center justify-between pb-4 border-b border-[var(--border-card)] mb-6">
                  <div>
                    <h3 className="text-base font-bold text-[var(--text-primary)]">{t.name}</h3>
                    <span className="text-xs text-[var(--text-muted)]">{t.location}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {["fb", "tw", "in"].map((platform) => (
                      <span
                        key={platform}
                        className="p-1.5 rounded-full border border-[var(--border-card)] bg-[var(--bg-card-inner)] text-[10px] text-[var(--text-muted)]"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-[var(--text-sub)] leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
