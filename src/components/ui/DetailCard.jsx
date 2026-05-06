import { palette, fonts } from "../../styles/tokens";

export default function DetailCard({ label, title, items, borderColor, labelColor }) {
  return (
    <div style={{
      flex: 1, minWidth: 200,
      border: `1px solid ${borderColor}`,
      borderRadius: 8, padding: "14px 16px",
      background: palette.surface,
    }}>
      <div style={{ fontSize: 9, fontFamily: fonts.mono, letterSpacing: 1.5, color: labelColor, fontWeight: 700, marginBottom: 6 }}>{label}</div>
      <div style={{ fontSize: 14, fontWeight: 700, color: palette.textPrimary, marginBottom: 10 }}>{title}</div>
      <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
        {items.map((item, i) => (
          <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 7, fontSize: 12, color: palette.textSecondary, marginBottom: 5 }}>
            <span style={{ color: labelColor, fontSize: 11, marginTop: 1, flexShrink: 0 }}>•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
