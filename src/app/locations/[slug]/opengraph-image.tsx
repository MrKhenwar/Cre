import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { getLocationBySlug, LOCATIONS } from "@/lib/locations";

export const alt = "Crevis — SEO & GEO services by location";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateImageMetadata() {
  return LOCATIONS.map((location) => ({
    id: location.slug,
  }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  const name = location?.name ?? "India";
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
            marginBottom: 32,
          }}
        >
          <img src={logoSrc} width={64} height={39} alt="" />
          <div style={{ fontSize: 34, fontWeight: 600 }}>Crevis</div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            fontWeight: 500,
            color: "#c4b5fd",
            marginBottom: 12,
          }}
        >
          {name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 52,
            fontWeight: 700,
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.15,
          }}
        >
          SEO & GEO services for {name}
        </div>
      </div>
    ),
    { ...size },
  );
}
