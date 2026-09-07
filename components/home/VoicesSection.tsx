"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/lib/data/testimonials";

export const VoicesSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const total = TESTIMONIALS.length;

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % total);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [total, isTransitioning]);

  const goToPrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [total, isTransitioning]);

  const selectIndex = (index: number) => {
    if (index === currentIndex || isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  // Auto-advance every 7 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      goToNext();
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused, goToNext]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev]);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28 bg-[#0B0F12] border-b border-paper-border/60 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading - Matching Reference Design */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#C9A86A] tracking-[0.22em] uppercase">
            TESTIMONIAL
          </h2>
          <div className="w-16 h-0.5 bg-[#C9A86A]/40 mx-auto mt-3 rounded-full" />
        </div>

        {/* Carousel Container with Side Controls */}
        <div className="relative max-w-4xl mx-auto">
          {/* Left Arrow Button */}
          <button
            onClick={goToPrev}
            aria-label="Previous Testimonial"
            className="absolute -left-3 sm:-left-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-stone-400 hover:text-[#C9A86A] transition-all duration-200 group focus:outline-none"
          >
            <span className="text-2xl sm:text-3xl font-light select-none transform group-hover:-translate-x-1 transition-transform">
              ‹
            </span>
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={goToNext}
            aria-label="Next Testimonial"
            className="absolute -right-3 sm:-right-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-stone-400 hover:text-[#C9A86A] transition-all duration-200 group focus:outline-none"
          >
            <span className="text-2xl sm:text-3xl font-light select-none transform group-hover:translate-x-1 transition-transform">
              ›
            </span>
          </button>

          {/* Main Testimonial Card */}
          <div className="bg-[#172127] border border-[#27353F] rounded-[22px] sm:rounded-[26px] p-6 sm:p-10 md:p-14 shadow-2xl shadow-black/60 relative overflow-hidden">
            {/* Card Background Accents */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

            <div
              className={`transition-all duration-300 transform ${
                isTransitioning ? "opacity-0 scale-[0.98]" : "opacity-100 scale-100"
              }`}
            >
              {/* Circular Avatar */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-[#C9A86A]/60 shadow-xl ring-4 ring-[#C9A86A]/10 shrink-0 bg-[#0E151A] mb-4 sm:mb-5">
                  <Image
                    src={current.avatar}
                    alt={current.author}
                    fill
                    sizes="(max-width: 768px) 112px, 128px"
                    className="object-cover rounded-full"
                    priority
                  />
                </div>

                {/* Name */}
                <h3 className="font-display font-bold text-lg sm:text-xl md:text-2xl text-[#E5B56A] tracking-wide">
                  {current.author}
                </h3>

                {/* Role / Designation */}
                <p className="text-xs sm:text-sm text-stone-400 font-medium mt-1 tracking-wide">
                  {current.role}
                </p>
              </div>

              {/* Quote Body with Quotes */}
              <div className="relative max-w-2xl mx-auto mt-6 sm:mt-8 px-2 sm:px-6">
                <span className="text-[#C9A86A] text-2xl sm:text-3xl font-serif font-black select-none block leading-none mb-1">
                  &ldquo;
                </span>

                <blockquote className="text-stone-200 text-sm sm:text-base md:text-[15px] leading-relaxed text-center font-normal tracking-wide px-2 sm:px-4">
                  {current.quote}
                </blockquote>

                <span className="text-[#C9A86A] text-2xl sm:text-3xl font-serif font-black select-none block leading-none mt-2 text-right">
                  &rdquo;
                </span>
              </div>
            </div>

            {/* Indicator Dots / Tabs */}
            <div className="flex items-center justify-center gap-3 mt-8 pt-4 border-t border-white/5">
              {TESTIMONIALS.map((t, index) => {
                const isActive = index === currentIndex;
                return (
                  <button
                    key={t.id}
                    onClick={() => selectIndex(index)}
                    aria-label={`Go to testimonial by ${t.author}`}
                    className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                      isActive
                        ? "w-8 bg-[#C9A86A] shadow-md shadow-[#C9A86A]/40"
                        : "w-2.5 bg-stone-700 hover:bg-stone-500"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Thumbnail Selector for Direct Switch */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {TESTIMONIALS.map((t, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={t.id}
                onClick={() => selectIndex(index)}
                className={`flex items-center gap-2.5 px-3 py-1.5 rounded-full border transition-all text-xs font-mono ${
                  isActive
                    ? "bg-[#C9A86A]/10 border-[#C9A86A] text-[#E5B56A]"
                    : "bg-stone-900/60 border-stone-800 text-stone-400 hover:border-stone-700 hover:text-stone-200"
                }`}
              >
                <div className="relative w-5 h-5 rounded-full overflow-hidden border border-white/20">
                  <Image src={t.avatar} alt={t.author} fill className="object-cover" />
                </div>
                <span>{t.author.split(" ")[t.author.split(" ").length - 1]}</span>
                <span className="text-[10px] opacity-60">({t.tag})</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
