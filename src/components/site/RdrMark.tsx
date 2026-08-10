// Right Dot Resources lettermark. Rendered as text (not an image) so it is
// always crisp and correctly centred. The "D" is crimson — a nod to "Dot".
export default function RdrMark({ size = 36 }: { size?: number }) {
  return (
    <span
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        borderRadius: Math.round(size * 0.24),
        background: "#0B1524",
        border: "1px solid rgba(255,255,255,.12)",
        display: "grid",
        placeItems: "center",
        flex: "none",
        fontFamily: "var(--font-archivo), Arial, Helvetica, sans-serif",
        fontWeight: 800,
        fontSize: Math.round(size * 0.4),
        letterSpacing: "0.005em",
        lineHeight: 1,
        userSelect: "none",
      }}
    >
      <span>
        <span style={{ color: "#F3F6FB" }}>R</span>
        <span style={{ color: "#E63A48" }}>D</span>
        <span style={{ color: "#F3F6FB" }}>R</span>
      </span>
    </span>
  );
}
