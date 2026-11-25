import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/portfolio-data";

export function HomeAbout() {
  return (
    <section className="py-16 md:py-24 border-t border-[var(--border-card)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between gap-4 mb-10 md:mb-14">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--text-muted)] font-semibold block mb-1">
              ABOUT
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)] uppercase">
              I AM OSO
            </h2>
          </div>

          <Link
            href="/about"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold border border-[var(--border-card)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all"
          >
            <span>Know More</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* 2-Column Split matching Screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Photographer Image Card with curved corners */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-[var(--border-card)] bg-[var(--bg-card)] p-4 min-h-[420px] flex flex-col justify-between">
            <div className="relative w-full h-full min-h-[380px] rounded-2xl overflow-hidden">
              <Image
                src="/images/about/SaveClip.App_563920119_18059921396401908_2480025959293769118_n.jpg"
                alt="OSO Photographer Portrait"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Right: Bio & Contact Information Card */}
          <div className="lg:col-span-7 rounded-3xl border border-[var(--border-card)] bg-[var(--bg-card)] p-8 md:p-12 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold block mb-2">
                  ✦ Introduction
                </span>
                <p className="text-sm md:text-base text-[var(--text-sub)] leading-relaxed">
                  My journey as a visual storyteller has been a lifelong quest to capture the extraordinary in the ordinary. At {SITE_CONFIG.name}, every shot is an intentional dialogue between light, atmosphere, and human presence. Based in California, our studio operates globally across fashion editorials, landmark celebrations, and architectural monographs.
                </p>
              </div>

              {/* Contact Information Box */}
              <div className="pt-6 border-t border-[var(--border-card)]">
                <span className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold block mb-4">
                  ✦ Direct Contact Information
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-[var(--border-card)] bg-[var(--bg-card-inner)]">
                    <span className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] block mb-1">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-sm font-semibold text-[var(--text-primary)] hover:text-brand-purple transition-colors"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                  <div className="p-4 rounded-xl border border-[var(--border-card)] bg-[var(--bg-card-inner)]">
                    <span className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] block mb-1">
                      Phone Number
                    </span>
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="text-sm font-semibold text-[var(--text-primary)] hover:text-brand-purple transition-colors"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions Row: Socials & CTAs */}
            <div className="pt-8 mt-6 border-t border-[var(--border-card)] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {SITE_CONFIG.socials.slice(0, 3).map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full border border-[var(--border-card)] bg-[var(--bg-card-inner)] text-[var(--text-sub)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all text-xs"
                    title={s.name}
                  >
                    {s.name[0]}
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="/contact"
                  className="px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold border border-[var(--border-card)] bg-[var(--bg-card-inner)] text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all"
                >
                  Book Session
                </Link>
                <Link
                  href="/contact"
                  className="px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-[var(--text-primary)] text-[var(--bg-main)] hover:opacity-90 transition-opacity"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
