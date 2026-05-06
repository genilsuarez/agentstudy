import { fonts } from "../styles/tokens";

export default function CodeBlock({ children }) {
  return (
    <pre style={{
      background: "rgba(0,0,0,0.4)", border: "1px solid rgba(59,130,246,0.2)", borderRadius: 6,
      padding: "10px 12px", margin: "6px 0", fontFamily: fonts.mono,
      fontSize: 11.5, lineHeight: 1.6, overflowX: "auto", whiteSpace: "pre", color: "#d1d5db",
    }}>{children}</pre>
  );
}
