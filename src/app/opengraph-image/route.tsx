import { ImageResponse } from "next/og";
import { FACTS } from "@/lib/content";

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
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", right: -70, top: -70, width: 340, height: 340, transform: "rotate(45deg)", border: "2px solid rgba(29,99,216,0.16)", borderRadius: 30 }} />
      <div style={{ position: "absolute", right: 150, top: 92, width: 150, height: 2, background: "rgba(29,99,216,0.30)", transform: "rotate(24deg)" }} />
      <div style={{ position: "absolute", right: 128, top: 116, width: 14, height: 14, borderRadius: 14, background: "#1d63d8", opacity: 0.55 }} />
      <div style={{ position: "absolute", right: 286, top: 60, width: 11, height: 11, borderRadius: 11, background: "#e63a48", opacity: 0.6 }} />
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div style={{ width: 54, height: 6, background: "#1d63d8" }} />
        <div style={{ fontSize: 23, letterSpacing: 5, textTransform: "uppercase", color: "#405674" }}>
          {`${FACTS.durationMonths}-month Executive MBA · Malaysia`}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
        <div style={{ fontSize: 76, lineHeight: 1.03, fontWeight: 700, letterSpacing: -3 }}>
          Build the management capability for your next leadership role.
        </div>
        <div style={{ marginTop: 26, fontSize: 32, lineHeight: 1.3, color: "#405674" }}>
          {`${FACTS.trainingDays} training days, ${FACTS.liveSessions} scheduled sessions and an applied business project.`}
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
