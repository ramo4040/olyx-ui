import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string[] }> },
) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug ?? [];

  const title =
    slug.length > 0
      ? slug[slug.length - 1]
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" ")
      : "Documentation";

  const section =
    slug.length > 1
      ? slug[0].charAt(0).toUpperCase() + slug[0].slice(1)
      : "Docs";

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        backgroundColor: "#09090b",
        padding: "80px",
        fontFamily: "sans-serif",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        fill="#fff"
        width={52}
        height={52}
        style={{ marginBottom: "auto" }}
      >
        <path d="M100 136c11.046 0 20 8.954 20 20v100h-20C44.772 256 0 211.228 0 156v-20Zm156 120H136V156c0-11.046 8.954-20 20-20h100ZM120 100c0 11.046-8.954 20-20 20H0v-20C0 44.772 44.772 0 100 0h20ZM156 0c55.228 0 100 44.772 100 100v20H156c-11.046 0-20-8.954-20-20V0Z" />
      </svg>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "24px",
        }}
      >
        <div
          style={{
            padding: "6px 14px",
            borderRadius: "6px",
            backgroundColor: "#18181b",
            color: "#a1a1aa",
            fontSize: 18,
            border: "1px solid #27272a",
          }}
        >
          {section}
        </div>
      </div>
      <div
        style={{
          fontSize: 64,
          fontWeight: 700,
          color: "#ffffff",
          letterSpacing: "-1.5px",
          lineHeight: 1.1,
          maxWidth: "900px",
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: 24,
          color: "#71717a",
          marginTop: "20px",
        }}
      >
        Olyx UI
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
