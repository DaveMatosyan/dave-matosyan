import { ImageResponse } from "next/og";

export const alt = "David Matosyan — Backend Engineer × AI-Native Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0b",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#9b9b94",
            fontSize: 24,
            letterSpacing: 4,
          }}
        >
          <span>BACKEND ENGINEER × AI-NATIVE BUILDER</span>
          <span>YEREVAN</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#f4f4f0",
            fontSize: 130,
            fontWeight: 800,
            lineHeight: 1.02,
            letterSpacing: -4,
          }}
        >
          <span>DAVID</span>
          <span>MATOSYAN</span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ color: "#9b9b94", fontSize: 26 }}>
            Claude writes most of my code. I do the parts AI can&apos;t.
          </span>
          <span
            style={{
              background: "#d6ff3f",
              color: "#1a2000",
              borderRadius: 999,
              padding: "12px 28px",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            Open to new roles
          </span>
        </div>
      </div>
    ),
    size,
  );
}
