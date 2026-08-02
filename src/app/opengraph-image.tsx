import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Crevis — Get cited in AI answers, not just ranked on Google";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/logo-icon.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0d0c12",
          backgroundImage:
            "radial-gradient(circle at 50% 30%, rgba(139,92,246,0.35), transparent 60%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <img src={logoSrc} width={72} height={44} alt="" />
          <div style={{ fontSize: 40, fontWeight: 600 }}>Crevis</div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 56,
            fontWeight: 700,
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.15,
          }}
        >
          Get cited in AI answers, not just ranked on Google
        </div>
      </div>
    ),
    { ...size },
  );
}
