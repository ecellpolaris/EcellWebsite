import React from "react";
import { HeroPoster } from "@/components/home/HeroPoster";
import { SpeakerMarquee } from "@/components/home/SpeakerMarquee";
import { ProofStrip } from "@/components/home/ProofStrip";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { OperatingLoop } from "@/components/home/OperatingLoop";
import { FlagshipGrid } from "@/components/home/FlagshipGrid";
import { StartupsPreview } from "@/components/home/StartupsPreview";
import { VoicesSection } from "@/components/home/VoicesSection";
import { PartnersLogoWall } from "@/components/home/PartnersLogoWall";
import { CtaBand } from "@/components/home/CtaBand";

export default function HomePage() {
  return (
    <div className="w-full">
      <HeroPoster />
      <SpeakerMarquee />
      <ProofStrip />
      <WhatWeDo />
      <OperatingLoop />
      <FlagshipGrid />
      <StartupsPreview />
      <PartnersLogoWall />
      <VoicesSection />
      <CtaBand />
    </div>
  );
}
