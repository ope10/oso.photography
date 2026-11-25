"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { SITE_CONFIG } from "@/data/portfolio-data";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--bg-main)]/90 backdrop-blur-md border-b border-[var(--border-card)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <span className="text-xl md:text-2xl font-black tracking-widest text-[var(--text-primary)] uppercase">
            {SITE_CONFIG.name}
          </span>
        </Link>

        {/* Center Navigation Pill */}
        <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full border border-[var(--border-card)] bg-[var(--bg-card)]/80 backdrop-blur-sm">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-full transition-all duration-200",
                  isActive
                    ? "bg-[var(--text-primary)] text-[var(--bg-main)] shadow-sm"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className={cn(
              "px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold border transition-all duration-200",
              pathname === "/contact"
                ? "bg-[var(--text-primary)] text-[var(--bg-main)] border-[var(--text-primary)]"
                : "border-[var(--border-card)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--text-primary)]"
            )}
          >
            Contact &amp; Book
          </Link>
        </div>

        {/* Mobile Menu & Theme Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="p-2.5 rounded-lg border border-[var(--border-card)] bg-[var(--bg-card)] text-[var(--text-primary)]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[var(--border-card)] bg-[var(--bg-main)] px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-xl text-sm uppercase tracking-wider font-semibold transition-colors",
                  pathname === link.href
                    ? "bg-[var(--bg-card)] text-[var(--text-primary)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-4 border-t border-[var(--border-card)]">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-3 rounded-full text-xs uppercase tracking-widest font-semibold bg-[var(--text-primary)] text-[var(--bg-main)]"
            >
              Contact &amp; Book
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
