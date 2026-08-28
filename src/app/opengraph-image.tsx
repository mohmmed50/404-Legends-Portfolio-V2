import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(1000px 500px at 20% -10%, #103fb0 0%, transparent 60%), #0a0a0c",
          color: "#f2f3f5",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 28,
            letterSpacing: "0.12em",
            color: "#7fa6f5",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#3d78ee",
            }}
          />
          Software Engineering Studio
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", gap: "24px" }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              maxWidth: 1000,
              fontSize: 78,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            <span style={{ display: "flex" }}>Where&nbsp;</span>
            <span style={{ display: "flex", color: "#5d94ff" }}>404&nbsp;</span>
            <span style={{ display: "flex" }}>Becomes&nbsp;</span>
            <span style={{ display: "flex", color: "#5d94ff" }}>Legend.</span>
          </div>
          <div style={{ display: "flex", fontSize: 34, color: "#9aa0ac" }}>
            We turn complex problems into reliable software systems.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
            color: "#9aa0ac",
          }}
        >
          <div style={{ display: "flex", fontWeight: 600, color: "#f2f3f5" }}>
            404&nbsp;<span style={{ color: "#3d78ee" }}>LEGENDS</span>
          </div>
          <div style={{ display: "flex" }}>{SITE.domain}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
