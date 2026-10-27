import { ImageResponse } from "next/og";
import { profile } from "@/data/content";

export const alt = `${profile.name}, full-stack developer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#f6f6f7", color: "#09090b" }}>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 96, fontWeight: 600, lineHeight: 1, letterSpacing: -3 }}>
          <span>Pattaradanai</span>
          <span>Prommanee</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 32, lineHeight: 1.4, color: "#52525b" }}>
          <span style={{ color: "#005236" }}>Full-stack developer, Bangkok</span>
          <span>Web, mobile, and API features, end to end</span>
        </div>
      </div>
    ),
    size,
  );
}
