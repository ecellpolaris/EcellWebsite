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
    { name: "Saahi Dubey", role: "President, E Cell PST · Founder, Sharesaathi" },
    { name: "Krishiv Agarwal", role: "Head of Tech · Co-founder, EliteFolks" },
    { name: "Siddhartha Singh", role: "Co-founder, EliteFolks" },
    { name: "Sarthak Basu", role: "Head of Incubation, E Cell PST" },
    { name: "Sakshi Kasat", role: "Head of Outreach & Alliances" },
    { name: "Priyanka Potlia", role: "Head of Brand & Design" },
    { name: "Kulratan Thapar", role: "Head of Treasury, E Cell PST" },
    { name: "Manav Nayak", role: "Lead Engineer · Founder, ParkCity" },
    { name: "Coder's OG", role: "Founder, MergeShip" },
    { name: "Rajdeep Singh", role: "Founder, NestHealth" },
    { name: "Priyanshu Gupta", role: "Head of WebOps & Infra" },
    { name: "Garvit & Anurag", role: "Founders, Ejected Q" },
    { name: "Shreyas & Utkarsh", role: "Founders, Nova Accounts" },
    { name: "Manav & Harshita", role: "Founders, Verity" },
    { name: "Avinash Ramakant", role: "Dean & Faculty Advisor, E Cell PST" },
    { name: "Mukul Rustagi", role: "Founder, Classplus & Polaris" },
  ];

  return (
    <div className="py-4 border-b border-paper-border bg-paper-sunken overflow-hidden select-none">
      {/* Top Track: Verbs Loop */}
      <div className="flex overflow-hidden whitespace-nowrap mb-2.5">
        <div className="flex items-center gap-8 animate-marquee hover:[animation-play-state:paused] font-mono text-xs font-bold text-ink tracking-[0.2em] cursor-default">
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
        <div className="flex items-center gap-6 animate-marquee-reverse hover:[animation-play-state:paused] text-xs text-ink-muted cursor-default">
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
