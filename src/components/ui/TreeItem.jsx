import { palette, fonts } from "../../styles/tokens";

export default function TreeItem({ name, type, indent, color, note }) {
  const c = palette[color] || palette.dim;
  const icon = type === "folder" ? "📁" : "📄";
  return (
    <div style={{
      paddingLeft: indent * 18, display: "flex", alignItems: "baseline",
      gap: 5, fontFamily: fonts.mono, fontSize: 11, lineHeight: 1.4,
    }}>
      <span style={{ fontSize: 11 }}>{icon}</span>
      <span style={{ color: typeof c === "string" ? c : palette.textMuted, fontWeight: type === "folder" ? 700 : 400 }}>{name}</span>
      {note && <span style={{ color: palette.textMuted, fontSize: 10, fontStyle: "italic" }}>← {note}</span>}
    </div>
  );
}
