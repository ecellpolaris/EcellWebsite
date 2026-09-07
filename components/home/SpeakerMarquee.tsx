import React from "react";

export const SpeakerMarquee: React.FC = () => {
  const steps = [
    "IDEATE",
    "VALIDATE",
    "PITCH",
    "BUILD",
    "SHIP",
    "RAISE",
    "REPEAT",
  ];

  const speakers = [
    { name: "Saahi Dubey", role: "President, E Cell PST" },
    { name: "Priya Sundaram", role: "Principal, ORR Seed Ventures" },
    { name: "Tanmay Sharma", role: "VP Engg, HyperScale Labs" },
    { name: "Rohit Krishnan", role: "Founder, NexusEval" },
    { name: "Mukul Rustagi", role: "Classplus & Polaris Founder" },
    { name: "Shreya Shenoy", role: "Founder, DormCart" },
    { name: "Neha Kulkarni", role: "Co Founder, D2C Collective" },
    { name: "Varun Hegde", role: "Co Founder, VoltLoop" },
    { name: "Zoya Khan", role: "Startup Attorney" },
  ];

  return (
    <div className="py-4 border-b border-paper-border bg-paper-sunken overflow-hidden select-none">
      {/* Top Track: Verbs Loop */}
      <div className="flex overflow-hidden whitespace-nowrap mb-2.5">
        <div className="flex items-center gap-8 animate-marquee font-mono text-xs font-bold text-ink tracking-[0.2em]">
          {[...steps, ...steps, ...steps, ...steps].map((item, idx) => (
            <span key={idx} className="flex items-center gap-8">
              <span>{item}</span>
              <span className="text-lime text-base">&bull;</span>
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Track: Names Ticker */}
      <div className="flex overflow-hidden whitespace-nowrap">
        <div className="flex items-center gap-6 animate-marquee-reverse text-xs text-ink-muted">
          {[...speakers, ...speakers, ...speakers].map((spk, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-3 py-1 bg-paper-card border border-paper-border rounded-[3px] shrink-0"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-lime" />
              <span className="font-semibold text-ink">{spk.name}</span>
              <span className="text-ink-muted font-mono text-[11px]">
                ({spk.role})
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
