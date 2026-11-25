"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight, Check } from "lucide-react";

const SLIDES = [
  {
    category: "EVENTS",
    title: "EVENTS PHOTOGRAPHY",
    description:
      "Our event photography service is dedicated to capturing the magic of your special occasions. Whether it's a wedding, corporate gala, or milestone celebration, we blend candid observation with artistic composition.",
    image: "/images/portfolio/events/SaveClip.App_912686907_18100961393401908_7928819583661249058_n.jpg",
    highlights: [
      "Coverage for weddings, parties, and corporate functions",
      "High-resolution digital and print-ready options",
      "Fast turnaround for event highlights and sneak peeks",
      "Custom packages tailored to event scope",
    ],
  },
  {
    category: "COMMERCIAL",
    title: "COMMERCIAL PHOTOGRAPHY",
    description:
      "Elevating your brand identity through striking product display, architectural environments, and editorial campaign imagery crafted for international multi-channel reach.",
    image: "/images/portfolio/commercials/SaveClip.App_825352143_18095548679401908_6986020635914512600_n.jpg",
    highlights: [
      "Art directed tabletop and product studio setups",
      "High-end commercial color grading and skin retouching",
      "Full commercial usage rights across global platforms",
      "Tethered live review during productions",
    ],
  },
  {
    category: "PORTRAITS",
    title: "PORTRAIT PHOTOGRAPHY",
    description:
      "Evocative character studies, executive portraits, and personal branding sessions utilizing dramatic chiaroscuro and authentic natural lighting.",
    image: "/images/portfolio/portraits/SaveClip.App_842005568_18096561902401908_3276479837191798604_n.jpg",
    highlights: [
      "Studio or environmental location sessions",
      "Personal wardrobe and creative direction guidance",
      "Private proofing gallery with collaborative review",
      "15 meticulously retouched master deliverables",
    ],
  },
];

export function HomeServices() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? SLIDES.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === SLIDES.length - 1 ? 0 : c + 1));

  const slide = SLIDES[current];

  return (
    <section className="py-16 md:py-24 border-t border-[var(--border-card)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between gap-4 mb-10 md:mb-14">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--text-muted)] font-semibold block mb-1">
              SERVICES
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)] uppercase">
              MY PHOTOGRAPHY SERVICES
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <button
                onClick={prev}
                aria-label="Previous service"
                className="p-2.5 rounded-full border border-[var(--border-card)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                aria-label="Next service"
                className="p-2.5 rounded-full border border-[var(--border-card)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <Link
              href="/services"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold border border-[var(--border-card)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all"
            >
              <span>View All Services</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Featured Service Card matching Figma */}
        <div className="rounded-3xl border border-[var(--border-card)] bg-[var(--bg-card)] p-6 sm:p-10 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Info Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple text-white text-xs font-bold uppercase tracking-wider">
              <span>{slide.category}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>

            <p className="text-sm md:text-base text-[var(--text-sub)] leading-relaxed">
              {slide.description}
            </p>

            {/* Highlights */}
            <div className="pt-4 border-t border-[var(--border-card)] space-y-3">
              <span className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-bold block mb-2">
                Service Highlights
              </span>
              {slide.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text-sub)]">
                  <span className="p-0.5 rounded-full bg-brand-purple/20 text-brand-purple mt-0.5">
                    <Check className="w-3 h-3 text-brand-purple" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[var(--text-primary)] hover:text-brand-purple transition-colors"
              >
                <span>Explore Package Pricing & Details</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Image Feature */}
          <div className="lg:col-span-6 relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-[var(--border-card)] bg-[var(--bg-card-inner)] group">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover  group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
