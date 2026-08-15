import Image from "next/image";

// Right Dots Resources rocket logo, shown in a clean rounded chip.
export default function RdrMark({ size = 36 }: { size?: number }) {
  return (
    <span
      style={{
        width: size,
        height: size,
        borderRadius: Math.round(size * 0.22),
        background: "#fff",
        display: "grid",
        placeItems: "center",
        flex: "none",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,.14)",
      }}
    >
      <Image
        src="/brand/rdr-emblem.png"
        alt="Right Dots Resources"
        width={size}
        height={size}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        priority
      />
    </span>
  );
}
