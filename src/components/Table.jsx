import Tag from "./ui/Tag";

export default function Table({ headers, rows, tagColors = [] }) {
  return (
    <div style={{ overflowX: "auto", margin: "6px 0" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, minWidth: 480 }}>
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i} style={{
                textAlign: "left", padding: "5px 10px",
                fontFamily: "'JetBrains Mono',monospace", fontSize: 9,
                letterSpacing: 1, textTransform: "uppercase", color: "#6b7280",
                borderBottom: "1px solid rgba(59,130,246,0.2)", fontWeight: 700,
              }}>
                {i > 0 && tagColors[i - 1] ? <Tag type={tagColors[i - 1]} /> : h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} style={{ background: ri % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)" }}>
              {row.map((cell, ci) => (
                <td key={ci} style={{
                  padding: "5px 10px",
                  borderBottom: ri < rows.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  color: ci === 0 ? "#f3f4f6" : "#9ca3af",
                  fontWeight: ci === 0 ? 600 : 400, verticalAlign: "top",
                }} colSpan={ci === 1 && !row[2] ? 2 : 1}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
