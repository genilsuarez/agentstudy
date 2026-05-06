import { useState } from "react";
import { fonts } from "../styles/tokens";

export default function Accordion({ icon, iconBg, iconColor, title, subtitle, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ marginBottom: 6 }}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: "100%", display: "flex", alignItems: "center", gap: 10,
          padding: "10px 14px",
          background: open
            ? "linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(139,92,246,0.12) 100%)"
            : "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
          border: `2px solid ${open ? "#3b82f6" : "rgba(59,130,246,0.2)"}`,
          borderRadius: open ? "8px 8px 0 0" : 8,
          borderBottomColor: open ? "transparent" : undefined,
          cursor: "pointer", textAlign: "left", color: "#f3f4f6",
          fontFamily: fonts.sans, transition: "all 0.25s ease",
          position: "relative", overflow: "hidden",
          boxShadow: open ? "0 2px 12px rgba(59,130,246,0.15)" : "0 1px 4px rgba(0,0,0,0.2)",
        }}
      >
        {/* left accent bar */}
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: open ? 4 : 3,
          background: open
            ? "linear-gradient(180deg,#3b82f6,#8b5cf6)"
            : "rgba(59,130,246,0.4)",
          transition: "width 0.25s ease",
        }} />
        <div style={{
          width: 28, height: 28, borderRadius: 6, display: "flex",
          alignItems: "center", justifyContent: "center", fontSize: 14,
          background: iconBg, color: iconColor, flexShrink: 0, marginLeft: 4,
        }}>{icon}</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: -0.2, color: open ? "#93c5fd" : "#f3f4f6" }}>{title}</div>
          <div style={{ fontSize: 11, color: "#6b7280", fontWeight: 400, marginTop: 1 }}>{subtitle}</div>
        </div>
        <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke={open ? "#60a5fa" : "#4b5563"} strokeWidth={2.5}
          style={{ transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)", transform: open ? "rotate(180deg)" : "rotate(0)", flexShrink: 0 }}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div style={{
          background: "rgba(17,24,39,0.6)", backdropFilter: "blur(4px)",
          border: "2px solid #3b82f6", borderTop: "none",
          borderRadius: "0 0 8px 8px", padding: "14px 16px",
          animation: "slideDown 0.3s cubic-bezier(0.4,0,0.2,1)",
        }}>{children}</div>
      )}
    </div>
  );
}
