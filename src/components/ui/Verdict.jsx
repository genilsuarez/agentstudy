import { verdictBorders } from "../../styles/tokens";

const labels = {
  green: "Veredicto:",
  purple: "Regla simple:",
  rose: "La regla:",
  blue: "Cuándo usar qué:",
  amber: "Cuándo usar qué:",
};

export default function Verdict({ color, children }) {
  const border = verdictBorders[color] || verdictBorders.blue;
  return (
    <div style={{
      background: "rgba(59,130,246,0.06)", borderLeft: `3px solid ${border}`,
      borderRadius: "0 6px 6px 0", padding: "8px 12px", margin: "8px 0 0",
      fontSize: 12, color: "#d1d5db", lineHeight: 1.5,
    }}>
      <strong style={{ color: border }}>{labels[color] || "Cuándo usar qué:"}</strong>{" "}{children}
    </div>
  );
}
