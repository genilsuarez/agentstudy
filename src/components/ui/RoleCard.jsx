import { palette, fonts } from "../../styles/tokens";

export default function RoleCard({ label, title, subtitle, borderColor, labelColor }) {
  return (
    <div style={{
      flex: 1, minWidth: 200,
      border: `1px solid ${borderColor}`,
      borderTop: `3px solid ${borderColor}`,
      borderRadius: 8, padding: "12px 14px",
      background: "rgba(0,0,0,0.25)",
    }}>
      <div style={{ fontSize: 9, fontFamily: fonts.mono, letterSpacing: 1.5, color: labelColor, fontWeight: 700, marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: 15, fontWeight: 700, color: palette.textPrimary, marginBottom: 2 }}>{title}</div>
      <div style={{ fontSize: 11, color: palette.textMuted }}>{subtitle}</div>
    </div>
  );
}
