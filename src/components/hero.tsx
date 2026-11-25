import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/portfolio-data";

export function Hero() {
  return (
    <section className="relative w-full pt-10 pb-16 md:pt-16 md:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row matching Figma Hero */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 md:mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--text-muted)] font-semibold block mb-2">
              STUNNING PHOTOGRAPHY BY
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[var(--text-primary)] uppercase leading-none">
              {SITE_CONFIG.name}
            </h1>
          </div>

          <div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold bg-[var(--bg-card)] border border-[var(--border-card)] text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all shadow-md"
            >
              <span>LET&apos;S WORK TOGETHER</span>
              <span className="p-1 rounded-full bg-brand-purple text-white">
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </div>
        </div>

        {/* Bento Grid Layout — 5 user photos with proper object positioning */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {/* Column 1: Left 2 stacked images (4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-4 md:gap-5">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--border-card)] bg-[var(--bg-card)] group">
              <Image
                src="/images/hero/SaveClip.App_527451518_18052434743401908_6987643418513022816_n.jpg"
                alt="OSO Photography Fashion"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--border-card)] bg-[var(--bg-card)] group">
              <Image
                src="/images/hero/SaveClip.App_514398312_18049231736401908_8821894637533841440_n.jpg"
                alt="OSO Photography Portrait"
                fill
                className="object-cover  group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* Column 2: Center Feature (4 cols) — tall portrait slot */}
          <div className="md:col-span-4 flex flex-col gap-4 md:gap-5">
            <div className="relative aspect-[3/4] md:h-full rounded-2xl overflow-hidden border border-[var(--border-card)] bg-[var(--bg-card)] group">
              <Image
                src="/images/hero/SaveClip.App_573236255_18062381198401908_6215469938716719068_n.jpg"
                alt="OSO Photography Studio"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
          </div>

          {/* Column 3: Right 2 stacked images (4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-4 md:gap-5">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--border-card)] bg-[var(--bg-card)] group">
              <Image
                src="/images/hero/SaveClip.App_741215343_18087030419401908_8371472296920723934_n.jpg"
                alt="OSO Photography Editorial"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--border-card)] bg-[var(--bg-card)] group">
              <Image
                src="/images/hero/SaveClip.App_911030353_18100673156401908_4239367514244820466_n.jpg"
                alt="OSO Photography Urban"
                fill
                className="object-cover  group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
