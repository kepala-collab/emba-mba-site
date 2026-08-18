import { ImageResponse } from "next/og";

const size = { width: 1200, height: 630 };

export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #f8fbff 0%, #eef6ff 55%, #dcecff 100%)",
        color: "#102747",
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
        <div style={{ width: 54, height: 6, background: "#1d63d8" }} />
        <div style={{ fontSize: 23, letterSpacing: 5, textTransform: "uppercase", color: "#405674" }}>
          Three-month Executive MBA · Malaysia
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
        <div style={{ fontSize: 76, lineHeight: 1.03, fontWeight: 700, letterSpacing: -3 }}>
          Build the management capability for your next leadership role.
        </div>
        <div style={{ marginTop: 26, fontSize: 32, lineHeight: 1.3, color: "#405674" }}>
          Six training days, an applied business project and Chartered Manager assessment preparation.
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#667891" }}>
        <span>Professional development · CMI-recognised programme certificate</span>
        <span>futurereadymba.com</span>
      </div>
    </div>,
    size,
  );
}
