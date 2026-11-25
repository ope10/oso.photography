import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-card)] bg-[var(--bg-main)] pt-14 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top CTA Row & Footer Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-[var(--border-card)]">
          {/* Left CTA Banner matching Figma */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--text-muted)] font-semibold block">
              {SITE_CONFIG.brandSubtitle}
            </span>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] hover:text-brand-purple transition-colors leading-none"
            >
              <span>LET&apos;S WORK TOGETHER</span>
              <span className="p-2 rounded-full bg-brand-purple text-white shrink-0">
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Link>
          </div>

          {/* Right 4 Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* HOME */}
            <div>
              <span className="text-xs uppercase tracking-widest text-[var(--text-primary)] font-bold block mb-4">
                HOME
              </span>
              <ul className="space-y-2.5 text-xs text-[var(--text-muted)]">
                <li>
                  <Link href="/about" className="hover:text-[var(--text-primary)] transition-colors">
                    ABOUT ME
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-[var(--text-primary)] transition-colors">
                    MY WORKS
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[var(--text-primary)] transition-colors">
                    APPOINTMENTS
                  </Link>
                </li>
              </ul>
            </div>

            {/* CLIENTS */}
            <div>
              <span className="text-xs uppercase tracking-widest text-[var(--text-primary)] font-bold block mb-4">
                CLIENTS
              </span>
              <ul className="space-y-2.5 text-xs text-[var(--text-muted)]">
                <li>KLOVESTO</li>
                <li>NUKEWAY</li>
                <li>CLOVEN&apos;S</li>
                <li>MEN&apos;VOL</li>
              </ul>
            </div>

            {/* PORTFOLIO */}
            <div>
              <span className="text-xs uppercase tracking-widest text-[var(--text-primary)] font-bold block mb-4">
                PORTFOLIO
              </span>
              <ul className="space-y-2.5 text-xs text-[var(--text-muted)]">
                <li>
                  <Link href="/portfolio" className="hover:text-[var(--text-primary)] transition-colors">
                    EVENTS
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-[var(--text-primary)] transition-colors">
                    PORTRAIT
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-[var(--text-primary)] transition-colors">
                    BRANDING
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-[var(--text-primary)] transition-colors">
                    COMMERCIAL
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-[var(--text-primary)] transition-colors">
                    WEDDING
                  </Link>
                </li>
              </ul>
            </div>

            {/* SERVICES */}
            <div>
              <span className="text-xs uppercase tracking-widest text-[var(--text-primary)] font-bold block mb-4">
                SERVICES
              </span>
              <ul className="space-y-2.5 text-xs text-[var(--text-muted)]">
                <li>
                  <Link href="/services" className="hover:text-[var(--text-primary)] transition-colors">
                    PORTRAITS
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-[var(--text-primary)] transition-colors">
                    EVENTS
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-[var(--text-primary)] transition-colors">
                    COMMERCIAL
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-[var(--text-primary)] transition-colors">
              Terms &amp; Conditions
            </Link>
            <span>|</span>
            <Link href="/" className="hover:text-[var(--text-primary)] transition-colors">
              Privacy Policy
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {SITE_CONFIG.socials.slice(0, 3).map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full border border-[var(--border-card)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-colors text-xs"
              >
                {s.name[0]}
              </a>
            ))}
          </div>

          <p>© 2026 {SITE_CONFIG.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
