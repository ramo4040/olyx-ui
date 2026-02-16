import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Olyx UI - Modern React Component Library";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#09090b",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-2px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            fill="#fff"
            width={70}
            height={70}
          >
            <path d="M100 136c11.046 0 20 8.954 20 20v100h-20C44.772 256 0 211.228 0 156v-20Zm156 120H136V156c0-11.046 8.954-20 20-20h100ZM120 100c0 11.046-8.954 20-20 20H0v-20C0 44.772 44.772 0 100 0h20ZM156 0c55.228 0 100 44.772 100 100v20H156c-11.046 0-20-8.954-20-20V0Z" />
          </svg>
          Olyx UI
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#a1a1aa",
            maxWidth: "700px",
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          Modern React Component Library Built on Base UI
        </div>
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "12px",
          }}
        >
          {["50+ Components", "Accessible", "Native CSS", "Open Source"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  padding: "8px 16px",
                  borderRadius: "8px",
                  backgroundColor: "#18181b",
                  color: "#e4e4e7",
                  fontSize: 16,
                  border: "1px solid #27272a",
                }}
              >
                {tag}
              </div>
            ),
          )}
        </div>
      </div>
    </div>,
    { ...size },
  );
}
