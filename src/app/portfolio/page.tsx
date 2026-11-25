"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight, ArrowDown } from "lucide-react";
import { PORTFOLIO_PROJECTS, SITE_CONFIG } from "@/data/portfolio-data";
import { Project } from "@/types";
import { Lightbox } from "@/components/lightbox";
import { Faq } from "@/components/faq";
import { Testimonials } from "@/components/testimonials";
import { WatermarkDamien } from "@/components/watermark";
import { Marquee } from "@/components/marquee";

interface CategoryCarouselProps {
  title: string;
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

function CategoryCarousel({ title, projects, onSelectProject }: CategoryCarouselProps) {
  // Carousel window state
  const [startIndex, setStartIndex] = useState(0);

  // Show 3 cards on desktop
  const visibleCount = 3;
  const maxIndex = Math.max(0, projects.length - visibleCount);

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Get current slice of visible projects with wrap-around support
  const visibleProjects = projects.slice(startIndex, startIndex + visibleCount);
  // If near the end and we have fewer than visibleCount, wrap around
  if (visibleProjects.length < visibleCount && projects.length >= visibleCount) {
    visibleProjects.push(...projects.slice(0, visibleCount - visibleProjects.length));
  }

  return (
    <div className="mb-16 md:mb-24">
      {/* Category Header with Working Navigation Arrows */}
      <div className="flex items-center justify-between pb-4 border-b border-[var(--border-card)] mb-8">
        <div className="flex items-center gap-4">
          <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-[var(--text-primary)]">
            {title}
          </h2>
          <span className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-mono hidden sm:inline-block">
            ({startIndex + 1} - {Math.min(startIndex + visibleCount, projects.length)} of {projects.length})
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Indicator dots */}
          <div className="hidden sm:flex items-center gap-1.5 mr-2">
            {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setStartIndex(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  startIndex === dotIdx
                    ? "w-6 bg-brand-purple"
                    : "w-1.5 bg-[var(--border-card)] hover:bg-[var(--text-muted)]"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handlePrev}
            aria-label={`Previous ${title} images`}
            className="p-2.5 rounded-full border border-[var(--border-card)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--text-primary)] hover:bg-[var(--bg-card-inner)] active:scale-95 transition-all shadow-sm"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            aria-label={`Next ${title} images`}
            className="p-2.5 rounded-full border border-[var(--border-card)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--text-primary)] hover:bg-[var(--bg-card-inner)] active:scale-95 transition-all shadow-sm"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Dynamic 3-Card Carousel Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {visibleProjects.map((p, idx) => (
          <div
            key={`${p.id}-${idx}`}
            onClick={() => onSelectProject(p)}
            className="group cursor-pointer rounded-3xl overflow-hidden border border-[var(--border-card)] bg-[var(--bg-card)] p-4 flex flex-col justify-between hover:border-[var(--border-hover)] hover:shadow-xl transition-all duration-300 animate-in fade-in"
          >
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden mb-4 bg-[var(--bg-card-inner)]">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider bg-black/60 text-white backdrop-blur-md border border-white/20">
                  {p.categoryLabel}
                </span>
              </div>
            </div>

            <div className="p-2 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-[var(--text-primary)] group-hover:text-brand-purple transition-colors">
                  {p.title}
                </h3>
                <span className="text-xs text-[var(--text-muted)] block mt-0.5">
                  {p.date}
                </span>
              </div>

              <div className="p-2 rounded-full border border-[var(--border-card)] bg-[var(--bg-card-inner)] text-[var(--text-primary)] group-hover:bg-brand-purple group-hover:text-white transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const allProjects = [
    ...PORTFOLIO_PROJECTS.portraits,
    ...PORTFOLIO_PROJECTS.events,
    ...PORTFOLIO_PROJECTS.commercial,
  ];

  return (
    <div className="flex flex-col min-h-screen pt-8 md:pt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Hero Banner matching Screenshot */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--text-muted)] font-semibold block mb-2">
              PORTFOLIO
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[var(--text-primary)] uppercase leading-none mb-4">
              VISUAL POETRY IN PIXELS
            </h1>
            <p className="text-xs sm:text-sm text-[var(--text-sub)] leading-relaxed">
              Step into a visual journey curated by {SITE_CONFIG.name} that encapsulates the beauty of fleeting moments, raw human emotion, and architectural stillness. Each series is captured with deliberate composition and emotional depth.
            </p>
          </div>

          <div className="relative w-full md:w-96 aspect-[16/9] rounded-2xl overflow-hidden border border-[var(--border-card)] bg-[var(--bg-card)]">
            <Image
              src="/images/portfolio/portraits/SaveClip.App_533822235_18053573957401908_7117940550953721696_n.jpg"
              alt="Visual Poetry"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--bg-card)]/80 backdrop-blur-md border border-[var(--border-card)] text-[10px] uppercase tracking-wider text-[var(--text-primary)]">
              <span>SCROLL DOWN</span>
              <ArrowDown className="w-3 h-3" />
            </div>
          </div>
        </div>

        {/* 3 Categories Sections with Functional Carousels */}
        <CategoryCarousel
          title="PORTRAITS PHOTOGRAPHY"
          projects={PORTFOLIO_PROJECTS.portraits}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />
        <CategoryCarousel
          title="EVENTS PHOTOGRAPHY"
          projects={PORTFOLIO_PROJECTS.events}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />
        <CategoryCarousel
          title="COMMERCIAL PHOTOGRAPHY"
          projects={PORTFOLIO_PROJECTS.commercial}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        project={selectedProject}
        projects={allProjects}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(proj) => setSelectedProject(proj)}
      />

      {/* FAQ & Testimonials */}
      <Faq />
      <Testimonials />

      {/* Watermark & Marquee */}
      <WatermarkDamien />
      <Marquee />
    </div>
  );
}
