import React from "react";
import Image from "next/image";
import { Sparkles, ArrowDown } from "lucide-react";
import { ABOUT_STATS, TIMELINE, SITE_CONFIG } from "@/data/portfolio-data";
import { Testimonials } from "@/components/testimonials";
import { WatermarkDamien } from "@/components/watermark";
import { Marquee } from "@/components/marquee";

export const metadata = {
  title: "About OSO.PHOTOGRAPHY — Vision & Timeline",
  description: "Learn about OSO.PHOTOGRAPHY's journey, milestones, awards, and artistic timeline.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-8 md:pt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Header Banner matching Screenshot */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10 md:mb-14">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--text-muted)] font-semibold block mb-2">
              ABOUT
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[var(--text-primary)] uppercase leading-none">
              ABOUT {SITE_CONFIG.name}
            </h1>
          </div>

          <div className="hidden lg:block relative w-72 h-16 rounded-2xl overflow-hidden border border-[var(--border-card)]">
            <Image
              src="/images/about/SaveClip.App_563920119_18059921396401908_2480025959293769118_n.jpg"
              alt="OSO Photography Studio"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* 6 Stats Row matching Screenshot */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-10 md:mb-14">
          {ABOUT_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] p-4 sm:p-5 flex flex-col justify-between text-left"
            >
              <span className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mb-1">
                {stat.value}
              </span>
              <span className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-semibold leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Hero Panorama Banner — portrait image, matched container */}
        <div className="relative w-full rounded-3xl overflow-hidden border border-[var(--border-card)] bg-[var(--bg-card)] mb-16 md:mb-24 group" style={{aspectRatio: "16/9"}}>
          <Image
            src="/images/about/SaveClip.App_563920119_18059921396401908_2480025959293769118_n.jpg"
            alt="OSO.PHOTOGRAPHY field vision"
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 1280px) 100vw, 1280px" 
            priority
          />
          {/* Bottom Left Star Emblem */}
          <div className="absolute bottom-6 left-6 p-3 rounded-full border border-[var(--border-card)] bg-[var(--bg-card)]/80 backdrop-blur-md text-[var(--text-primary)]">
            <Sparkles className="w-5 h-5 text-brand-purple" />
          </div>

          {/* Bottom Right Scroll Indicator */}
          <div className="absolute bottom-6 right-6 flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-card)] bg-[var(--bg-card)]/80 backdrop-blur-md text-[10px] sm:text-xs uppercase tracking-widest text-[var(--text-primary)] font-semibold">
            <span>SCROLL DOWN TO READ MY JOURNEY</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* MY BIOGRAPHY Section */}
        <div className="mb-16 md:mb-24 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--text-muted)] font-semibold block mb-2">
              BIOGRAPHY
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)] uppercase">
              MY BIOGRAPHY
            </h2>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-[var(--text-sub)] leading-relaxed max-w-5xl">
            <p>
              {SITE_CONFIG.name}&apos;s relationship with the lens began in teenage years, documenting the brutalist geometry, rolling fog, and raw street scenes of the Pacific coast with mechanical 35mm cameras. What commenced as pure curiosity developed into a rigorous fine-art discipline spanning more than fifteen years.
            </p>
            <p>
              Renowned for poetic mastery over chiaroscuro, natural shadow, and unforced human interaction, {SITE_CONFIG.name} strips away artificial noise to reveal the soul of each subject. Over the years, our studio has delivered major features for leading fashion houses, architectural journals, and private art patrons worldwide.
            </p>
            <p>
              Operating from our California flagship, we balance high-profile international commercial shoots with intimate portraiture sessions and limited-edition fine art gallery prints.
            </p>
          </div>
        </div>

        {/* OSO'S JOURNEY - A TIMELINE (6 Cards in 2 columns) */}
        <div className="mb-16 md:mb-24">
          <div className="mb-10 md:mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--text-muted)] font-semibold block mb-2">
              JOURNEY
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)] uppercase">
              OSO&apos;S JOURNEY - A TIMELINE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {TIMELINE.map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-[var(--border-card)] bg-[var(--bg-card)] p-8 sm:p-10 flex flex-col justify-between hover:border-[var(--border-hover)] transition-all"
              >
                <div>
                  <span className="text-sm sm:text-base font-extrabold uppercase tracking-widest text-[var(--text-primary)] block mb-3 font-mono">
                    {item.year}
                  </span>
                  <p className="text-xs sm:text-sm text-[var(--text-sub)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <Testimonials />

      {/* Watermark & Marquee */}
      <WatermarkDamien />
      <Marquee />
    </div>
  );
}
