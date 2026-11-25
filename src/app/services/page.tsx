import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowDown, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { SERVICES_PAGE_DATA } from "@/data/portfolio-data";
import { Faq } from "@/components/faq";
import { WatermarkDamien } from "@/components/watermark";
import { Marquee } from "@/components/marquee";

export const metadata = {
  title: "Services & Offerings — OSO.PHOTOGRAPHY",
  description: "Comprehensive photography packages for Portraits, Events, and Commercial productions.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-8 md:pt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Hero Banner matching Screenshot */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--text-muted)] font-semibold block mb-2">
              SERVICES
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[var(--text-primary)] uppercase leading-none mb-4">
              DIVERSE PHOTOGRAPHY OFFERINGS
            </h1>
            <p className="text-xs sm:text-sm text-[var(--text-sub)] leading-relaxed">
              Unlock the power of authentic visual storytelling with tailored packages designed for discerning individuals, landmark ceremonies, and visionary global brands.
            </p>
          </div>

          <div className="relative w-full md:w-96 aspect-[16/9] rounded-2xl overflow-hidden border border-[var(--border-card)] bg-[var(--bg-card)]">
            <Image
              src="/images/portfolio/events/SaveClip.App_916851972_18100963604401908_5957783898973844989_n.jpg"
              alt="Photography studio lights"
              fill
              className="object-cover object-top  "
            />
            <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--bg-card)]/80 backdrop-blur-md border border-[var(--border-card)] text-[10px] uppercase tracking-wider text-[var(--text-primary)]">
              <span>VIEW PACKAGES</span>
              <ArrowDown className="w-3 h-3" />
            </div>
          </div>
        </div>

        {/* 3 Photography Offerings Sections matching Screenshot */}
        <div className="space-y-16 md:space-y-24 mb-16 md:mb-24">
          {SERVICES_PAGE_DATA.map((service) => (
            <div key={service.id} className="space-y-8">
              {/* Service Category Header & Image Row */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-[var(--text-primary)]">
                    {service.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[var(--text-sub)] leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[var(--text-primary)] hover:text-brand-purple transition-colors pt-2"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="lg:col-span-7 relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-[var(--border-card)] bg-[var(--bg-card)] group">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5">
                    <button className="p-1.5 rounded-full border border-[var(--border-card)] bg-[var(--bg-card)]/80 text-[var(--text-primary)]">
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <button className="p-1.5 rounded-full border border-[var(--border-card)] bg-[var(--bg-card)]/80 text-[var(--text-primary)]">
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* 3 Sub-Packages Table/Cards matching Screenshot */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.subPackages.map((pkg, idx) => (
                  <div
                    key={idx}
                    className="rounded-3xl border border-[var(--border-card)] bg-[var(--bg-card)] p-6 sm:p-8 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold block mb-2">
                        {pkg.title}
                      </span>
                      <div className="flex items-baseline gap-1.5 mb-6">
                        <span className="text-3xl font-extrabold text-[var(--text-primary)]">
                          {pkg.price}
                        </span>
                        {pkg.unit && (
                          <span className="text-xs text-[var(--text-muted)] font-medium">
                            {pkg.unit}
                          </span>
                        )}
                      </div>

                      <div className="space-y-3 pt-6 border-t border-[var(--border-card)]">
                        {pkg.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[var(--text-sub)]">
                            <span className="p-0.5 rounded-full bg-brand-purple/20 text-brand-purple mt-0.5">
                              <Check className="w-3 h-3 text-brand-purple" />
                            </span>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-8">
                      <Link
                        href="/contact"
                        className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full text-xs uppercase tracking-wider font-bold border border-[var(--border-card)] bg-[var(--bg-card-inner)] text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all"
                      >
                        <span>Book Package</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <Faq />

      {/* Watermark & Marquee */}
      <WatermarkDamien />
      <Marquee />
    </div>
  );
}
