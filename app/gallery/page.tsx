"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GALLERY_ITEMS, GalleryItem } from "@/lib/data/gallery";
import { Dialog } from "@/components/ui/Dialog";
import { Camera, MapPin, Calendar, Maximize2 } from "lucide-react";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const categories = ["All", "Summit", "Workshops", "Team", "Behind the scenes"];

  const filtered =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="py-12 lg:py-16 bg-paper min-h-screen corner-wash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-paper-border pb-8">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="stamp-tag bg-lime text-ink">
                DAYLIGHT PHOTO ARCHIVE
              </span>
              <span className="micro-label font-mono text-ink-muted text-xs">
                POLARIS CAMPUS &middot; BENGALURU
              </span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-ink tracking-tight">
              Visual Lore.
            </h1>
            <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
              No stock photography of young professionals smiling at blank laptops. Daylight prints, whiteboard schematics, midnight pizza boxes, and auditoriums.
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-mono px-3.5 py-1.5 rounded-[3px] border transition-colors ${
                activeCategory === cat
                  ? "bg-ink text-paper-card border-ink font-bold"
                  : "bg-paper-card text-ink-muted border-paper-border hover:border-ink"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-Style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="ticket-perforated bg-paper-card border border-paper-border rounded-[4px] p-4 shadow-card hover:border-ink/60 transition-all cursor-pointer group space-y-3"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] w-full rounded-[3px] overflow-hidden border border-paper-border bg-paper-sunken">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                />
                {item.stamped && (
                  <span className="absolute top-2 right-2 stamp-tag bg-paper-card/90 text-ink text-[9px] transform -rotate-3 border-ink">
                    {item.stamped}
                  </span>
                )}
                <span className="absolute bottom-2 right-2 p-1.5 rounded bg-ink/70 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Caption & Metadata */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs font-mono text-ink-muted">
                  <span>{item.category}</span>
                  <span>{item.date}</span>
                </div>

                <h3 className="font-display font-bold text-base text-ink group-hover:text-ink">
                  {item.title}
                </h3>

                <p className="text-xs text-ink-muted line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>

                <div className="pt-2 border-t border-paper-border/60 flex items-center gap-1.5 text-[11px] font-mono text-ink-muted">
                  <MapPin className="w-3 h-3 text-ink shrink-0" />
                  <span className="truncate">{item.venue}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <Dialog
          isOpen={!!selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
          title={selectedPhoto?.title}
          kicker={selectedPhoto ? `${selectedPhoto.category} · ${selectedPhoto.date}` : ""}
          maxWidth="lg"
        >
          {selectedPhoto && (
            <div className="space-y-4 pt-2">
              <div className="relative aspect-[16/10] w-full rounded-[4px] overflow-hidden border border-paper-border bg-paper-sunken">
                <Image
                  src={selectedPhoto.imageUrl}
                  alt={selectedPhoto.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-2 text-xs font-mono">
                <p className="text-sm font-sans text-ink leading-relaxed">
                  {selectedPhoto.caption}
                </p>
                <div className="pt-2 border-t border-paper-border flex items-center justify-between text-ink-muted">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-ink" />
                    <span>{selectedPhoto.venue}</span>
                  </div>
                  <span>Polaris School of Technology &middot; Season 26</span>
                </div>
              </div>
            </div>
          )}
        </Dialog>
      </div>
    </div>
  );
}
