import React from "react";
import Link from "next/link";
import { site } from "@/lib/site-config";
import { ArrowUpRight, Zap, MessageCircle } from "lucide-react";

export const CtaBand: React.FC = () => {
  return (
    <section className="bg-ink text-paper-card py-20 lg:py-24 border-b border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <span className="micro-label text-lime text-xs tracking-widest font-mono">
            SEASON 26 IS IN MOTION
          </span>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-[-0.03em] leading-tight">
            Don&apos;t lurk the ecosystem.
            <br />
            <span className="text-lime">Enter it.</span>
          </h2>

          <p className="text-base sm:text-lg text-paper-sunken/80 max-w-xl leading-relaxed">
            Whether you have an unhinged ML thesis at 2 AM or want to build production systems with our founder squad, the door to the E Cell Bay is unlocked.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              href="/idea"
              className="bg-lime hover:bg-lime-hover text-ink font-bold text-sm sm:text-base px-6 py-3.5 rounded-[4px] border border-[#A6E000] inline-flex items-center gap-2 active:scale-98 transition-transform"
            >
              <span>Submit your idea</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href={site.links.whatsappCommunity}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-[4px] inline-flex items-center gap-2 shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Join WhatsApp Group</span>
            </a>

            <Link
              href="/join"
              className="bg-transparent hover:bg-white/10 text-paper-card font-mono text-sm px-5 py-3.5 rounded-[4px] border border-paper-sunken/30 inline-flex items-center gap-2 transition-colors"
            >
              <span>Join Core Team</span>
            </Link>

            <Link
              href="/arena"
              className="text-xs sm:text-sm font-mono text-lime hover:underline underline-offset-4 flex items-center gap-1.5 py-2 sm:ml-2"
            >
              <Zap className="w-3.5 h-3.5 fill-lime" />
              <span>Enter The Arena &rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
