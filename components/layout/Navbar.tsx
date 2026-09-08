"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site-config";
import { Menu, X, ArrowUpRight, Instagram, Mail, MessageCircle } from "lucide-react";
import { clsx } from "clsx";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Scroll progress handler
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/events", label: "Events" },
    { href: "/startups", label: "Startups" },
    { href: "/arena", label: "Arena", isArena: true },
    { href: "/team", label: "Team" },
  ];

  const secondaryLinks = [
    { href: "/mentors", label: "Mentors" },
    { href: "/ambassadors", label: "Ambassadors" },
    { href: "/resources", label: "Resources" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-paper-card/90 backdrop-blur-md border-b border-paper-border transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Brand Lockup */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative w-8 h-8 rounded-[4px] overflow-hidden border border-paper-border bg-paper-sunken flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 shadow-sm">
              <Image
                src="/team/ecell-logo.jpeg"
                alt="E Cell PST Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-xl tracking-tight text-ink leading-none">
                {site.product}
              </span>
              <span className="micro-label text-[9px] text-ink-muted tracking-[0.18em] leading-tight font-bold">
                {site.brand}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "text-sm font-medium px-3 py-1.5 rounded-[4px] transition-colors relative flex items-center gap-1.5",
                    isActive
                      ? "text-ink font-semibold bg-paper-sunken border border-paper-border"
                      : "text-ink-muted hover:text-ink hover:bg-paper-sunken/60"
                  )}
                >
                  {link.isArena && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#007C86] animate-pulse" />
                  )}
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action Stack */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Submit Idea CTA */}
            <Link
              href="/idea"
              className="hidden sm:inline-flex items-center gap-1.5 bg-lime hover:bg-lime-hover text-ink font-semibold text-xs sm:text-sm px-3.5 py-2 rounded-[4px] border border-[#A6E000] shadow-sm transition-transform active:scale-95"
            >
              <span>Submit Idea</span>
            </Link>

            {/* Join secondary button */}
            <Link
              href="/join"
              className="hidden xl:inline-flex items-center text-xs font-medium text-ink px-3 py-2 border border-paper-border hover:border-ink rounded-[4px] bg-paper-card transition-colors"
            >
              <span>Join Core</span>
            </Link>

            {/* WhatsApp Group Link */}
            <a
              href={site.links.whatsappCommunity}
              target="_blank"
              rel="noopener noreferrer"
              title="Join Official E Cell WhatsApp Group"
              className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-[#EAFCC0] hover:bg-lime text-ink border border-paper-border hover:border-ink rounded-[4px] text-xs font-mono font-bold transition-all shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 text-ink fill-current" />
              <span>WhatsApp</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-[4px] border border-paper-border hover:border-ink text-ink bg-paper-card"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* 2px Lime Scroll Progress Line */}
        <div
          className="h-[2px] bg-lime transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />
      </header>

      {/* Full-Screen Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-paper flex flex-col overflow-y-auto animate-in slide-in-from-right duration-200">
          <div className="p-4 sm:p-6 min-h-full flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-paper-border">
                <div className="flex flex-col">
                  <span className="font-display font-extrabold text-2xl text-ink">
                    {site.product}
                  </span>
                  <span className="micro-label text-ink-muted text-xs">
                    {site.collegeName}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="p-2 border border-paper-border rounded-[4px]"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 text-ink" />
                </button>
              </div>

              {/* Primary Mobile Links */}
              <div className="flex flex-col gap-2">
                <span className="micro-label text-ink-muted text-[10px] tracking-widest font-mono">
                  NAVIGATION
                </span>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-display font-bold text-2xl sm:text-3xl text-ink hover:text-ink/70 py-1 transition-colors flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-5 h-5 text-ink-muted" />
                  </Link>
                ))}
              </div>

              {/* Secondary Overflow Links */}
              <div className="pt-4 border-t border-paper-border flex flex-col gap-2">
                <span className="micro-label text-ink-muted text-[10px] tracking-widest font-mono">
                  MORE INITIATIVES
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {secondaryLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm font-medium text-ink-muted hover:text-ink py-1.5"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Glued Bottom Action Area */}
            <div className="pt-6 border-t border-paper-border space-y-3">
              <Link
                href="/idea"
                className="w-full bg-lime text-ink font-bold text-base py-3.5 rounded-[4px] flex items-center justify-center gap-2 border border-[#A6E000] shadow-md"
              >
                <span>Submit Your Idea</span>
                <ArrowUpRight className="w-5 h-5" />
              </Link>
              <Link
                href="/join"
                className="w-full bg-paper-card text-ink font-semibold text-sm py-2.5 rounded-[4px] flex items-center justify-center border border-paper-border"
              >
                <span>Join E Cell Core Team</span>
              </Link>
              <a
                href={site.links.whatsappCommunity}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm py-3 rounded-[4px] flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Join Official WhatsApp Group</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* Instagram & Social Strip */}
              <div className="flex items-center justify-between pt-2 text-xs font-mono text-ink-muted">
                <a
                  href={site.links.whatsappCommunity}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-ink text-[#128C7E]"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-ink"
                >
                  <Instagram className="w-4 h-4" />
                  <span>{site.instagramHandle}</span>
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-1.5 hover:text-ink"
                >
                  <Mail className="w-4 h-4" />
                  <span>{site.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
