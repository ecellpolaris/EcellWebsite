"use client";

import React from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundColor: "#F6F3EC",
          color: "#111114",
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          margin: 0,
          padding: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ padding: "20px", maxWidth: "480px", width: "100%" }}>
          <div
            style={{
              backgroundColor: "#FFFEFA",
              border: "2px solid #111114",
              borderRadius: "4px",
              padding: "32px 24px",
              textAlign: "center",
              boxShadow: "0 12px 32px rgba(17,17,20,0.08)",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                backgroundColor: "#FFEAE4",
                borderRadius: "50%",
                margin: "0 auto 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AlertTriangle style={{ width: "28px", height: "28px", color: "#FF4D1C" }} />
            </div>

            <span
              style={{
                display: "inline-block",
                backgroundColor: "#FF4D1C",
                color: "#FFFFFF",
                fontSize: "11px",
                fontWeight: "bold",
                padding: "2px 8px",
                borderRadius: "2px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontFamily: "monospace",
              }}
            >
              CRITICAL GATEWAY FAILURE
            </span>

            <h1
              style={{
                fontSize: "24px",
                fontWeight: 800,
                margin: "16px 0 8px",
                color: "#111114",
              }}
            >
              E Cell PST Safe Mode
            </h1>

            <p
              style={{
                fontSize: "13px",
                color: "#6F6B64",
                lineHeight: "1.5",
                margin: "0 0 20px",
              }}
            >
              A critical layout exception interrupted the application container. The root fallback was activated to protect state.
            </p>

            {error.digest && (
              <div
                style={{
                  backgroundColor: "#EFEAE0",
                  padding: "8px 12px",
                  borderRadius: "3px",
                  fontSize: "11px",
                  fontFamily: "monospace",
                  color: "#FF4D1C",
                  marginBottom: "20px",
                  wordBreak: "break-all",
                }}
              >
                Digest: {error.digest}
              </div>
            )}

            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <button
                type="button"
                onClick={() => reset()}
                style={{
                  backgroundColor: "#B6F000",
                  color: "#111114",
                  fontWeight: "bold",
                  border: "1px solid #9DD400",
                  padding: "10px 20px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "12px",
                  fontFamily: "monospace",
                }}
              >
                Reload Application
              </button>

              <a
                href="/"
                style={{
                  backgroundColor: "#FFFEFA",
                  color: "#111114",
                  border: "1px solid #E6E1D6",
                  padding: "10px 18px",
                  borderRadius: "4px",
                  textDecoration: "none",
                  fontSize: "12px",
                  fontFamily: "monospace",
                  fontWeight: 600,
                  display: "inline-block",
                }}
              >
                Home Safe Mode
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
