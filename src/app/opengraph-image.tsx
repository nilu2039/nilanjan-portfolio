import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Nilanjan Mandal. Thoughtful code. Useful things. Full stack engineer.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const font = readFile(join(process.cwd(), "src/assets/fonts/geist-semibold.ttf"));

export default async function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 80, background: "#f8f9f4", color: "#202b25", fontFamily: "Geist", fontWeight: 600 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 30 }}>nm.</span>
        <span style={{ fontSize: 20, color: "#355843" }}>Web · Mobile · Systems</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 60, letterSpacing: "-0.05em" }}>
        <span>Thoughtful code.</span>
        <span style={{ color: "#355843" }}>Useful things.</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24 }}>
        <span>Nilanjan Mandal</span>
        <span style={{ color: "#5c675f" }}>Full stack engineer · India</span>
      </div>
    </div>,
    { ...size, fonts: [{ name: "Geist", data: await font, weight: 600, style: "normal" }] },
  );
}
