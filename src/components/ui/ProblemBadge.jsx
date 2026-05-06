export default function ProblemBadge({ children }) {
  return (
    <span style={{
      fontSize: 11, padding: "4px 10px", borderRadius: 4,
      background: "rgba(239,68,68,0.1)", color: "#fca5a5",
      border: "1px solid rgba(239,68,68,0.2)", whiteSpace: "nowrap",
    }}>{children}</span>
  );
}
