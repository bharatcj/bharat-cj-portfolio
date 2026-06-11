import { ImageResponse } from "next/og";

export const alt = "Bharat CJ — Team Lead · Full-Stack & AI Engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a0a0f 0%, #16121f 60%, #1d1430 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: 26,
            color: "#a78bfa",
            letterSpacing: "4px",
          }}
        >
          TEAM LEAD · FULL-STACK · AI
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: "-2px",
          }}
        >
          Bharat CJ
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 34,
            color: "#d4d4d8",
            maxWidth: 900,
          }}
        >
          I build &amp; lead teams that ship entire platforms.
        </div>
        <div
          style={{
            marginTop: 48,
            display: "flex",
            gap: "40px",
            fontSize: 26,
            color: "#a1a1aa",
          }}
        >
          <span style={{ color: "#e879f9" }}>1,186 commits / 4 months</span>
          <span>·</span>
          <span style={{ color: "#a78bfa" }}>87% of core backend</span>
          <span>·</span>
          <span style={{ color: "#fbbf24" }}>5 AI surfaces</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
