import { palette, fonts } from "../../styles/tokens";

export default function FlowStep({ label, title, color, first }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      {!first && (
        <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke={palette.textMuted} strokeWidth={2}>
          <polyline points="9 18 15 12 9 6" />
        </svg>
      )}
      <div style={{
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: 8, padding: "8px 14px", textAlign: "center",
        background: palette.surfaceDeep,
      }}>
        <div style={{ fontSize: 9, fontFamily: fonts.mono, letterSpacing: 1.2, color: palette.textMuted, marginBottom: 3, textTransform: "uppercase" }}>{label}</div>
        <div style={{ fontSize: 13, fontWeight: 700, color }}>{title}</div>
      </div>
    </div>
  );
}
