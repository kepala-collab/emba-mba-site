import { ImageResponse } from "next/og";

const size = { width: 1200, height: 630 };

export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #080b12 0%, #111827 58%, #290a12 100%)",
        color: "#f8fafc",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 78px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div style={{ width: 54, height: 6, background: "#cf2338" }} />
        <div style={{ fontSize: 23, letterSpacing: 5, textTransform: "uppercase", color: "#cbd5e1" }}>
          Recognised by CMI UK · Malaysia
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
        <div style={{ fontSize: 76, lineHeight: 1.03, fontWeight: 700, letterSpacing: -3 }}>
          Future Ready Executive MBA
        </div>
        <div style={{ marginTop: 26, fontSize: 32, lineHeight: 1.3, color: "#d7dde7" }}>
          Think better. Decide faster. Lead what comes next.
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#aeb8c7" }}>
        <span>Professional executive leadership programme</span>
        <span>futurereadymba.com</span>
      </div>
    </div>,
    size,
  );
}
