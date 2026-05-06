import { tagColors, fonts } from "../../styles/tokens";

const labels = { skill: "Skill", cmd: "Command", hook: "Hook", mcp: "MCP", tool: "Tool" };

export default function Tag({ type }) {
  if (!type || !tagColors[type]) return null;
  return (
    <span style={{
      display: "inline-block", fontFamily: fonts.mono, fontSize: 10,
      fontWeight: 700, padding: "2px 8px", borderRadius: 4, letterSpacing: 0.5,
      background: tagColors[type].bg, color: tagColors[type].text,
    }}>{labels[type]}</span>
  );
}
