import React from "react";
import Link from "next/link";
import { LIVE_NOTICES } from "@/lib/data/arena-data";
import { ArrowUpRight } from "lucide-react";

export const LiveNotices: React.FC = () => {
  return (
    <div className="bg-paper-card border border-paper-border rounded-[4px] p-6 sm:p-7 shadow-card space-y-5">
      <div className="flex items-center justify-between border-b border-paper-border pb-4">
        <div>
          <span className="micro-label text-ink-muted text-xs font-mono tracking-widest block">
            CAMPUS DISPATCH
          </span>
          <h3 className="font-display font-bold text-2xl text-ink">
            Live Notices.
          </h3>
        </div>
        <span className="w-2.5 h-2.5 rounded-full bg-heat animate-pulse" />
      </div>

      <div className="divide-y divide-paper-border/60">
        {LIVE_NOTICES.map((notice) => (
          <div key={notice.id} className="py-3.5 space-y-1">
            <div className="flex items-center justify-between gap-2 text-xs font-mono">
              <span className="font-bold text-heat uppercase">
                [{notice.tag}]
              </span>
              <span className="text-ink-muted">{notice.timestamp}</span>
            </div>
            <p className="text-sm text-ink leading-relaxed font-sans">
              {notice.title}
            </p>
            {notice.linkUrl && (
              notice.linkUrl.startsWith("http") ? (
                <a
                  href={notice.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#128C7E] dark:text-[#25D366] underline underline-offset-2 hover:opacity-80 pt-1"
                >
                  <span>{notice.linkText || "View details"}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              ) : (
                <Link
                  href={notice.linkUrl}
                  className="inline-flex items-center gap-1 text-xs font-mono font-bold text-ink underline underline-offset-2 hover:text-ink-muted pt-1"
                >
                  <span>{notice.linkText || "View details"}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
