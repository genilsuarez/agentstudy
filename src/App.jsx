import { useState } from "react";
import Navigation from "./components/Navigation";
import ContextEngineeringPage from "./pages/ContextEngineeringPage";
import SDDHarnessPage from "./pages/SDDHarnessPage";
import AgenticGlossaryPage from "./pages/AgenticGlossaryPage";
import WorkflowRulesPage from "./pages/WorkflowRulesPage";
import TokenTaxPage from "./pages/TokenTaxPage";
import { pages } from "./data/content";
import { palette, fonts, slideDownKeyframes } from "./styles/tokens";

function Logo({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="28" height="28" rx="7" fill="url(#logoGrad)" />
      <rect x="8" y="10" width="16" height="13" rx="3" fill="#f0f4ff" />
      <line x1="16" y1="10" x2="16" y2="6" stroke="#f0f4ff" strokeWidth="2" strokeLinecap="round" />
      <circle cx="16" cy="5" r="2" fill="#fbbf24" />
      <circle cx="12.5" cy="16" r="2.2" fill="#1e293b" />
      <circle cx="19.5" cy="16" r="2.2" fill="#1e293b" />
      <circle cx="13" cy="15.3" r="0.7" fill="#60a5fa" />
      <circle cx="20" cy="15.3" r="0.7" fill="#60a5fa" />
      <rect x="12" y="20" width="8" height="1.5" rx="0.75" fill="#1e293b" />
      <circle cx="7" cy="16" r="1.5" fill="#f0f4ff" />
      <circle cx="25" cy="16" r="1.5" fill="#f0f4ff" />
    </svg>
  );
}

export default function App() {
  const [activePage, setActivePage] = useState(0);
  const page = pages[activePage];

  return (
    <>
      <style>{slideDownKeyframes}</style>

      {/* Outer wrapper — full viewport, centers the card */}
      <div style={{
        height: "100vh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: "16px 12px",
      }}>

        {/* Card container — fixed height, internal scroll */}
        <div style={{
          width: "100%", maxWidth: 880,
          height: "calc(100vh - 32px)",
          background: "linear-gradient(145deg, #111827 0%, #0f172a 50%, #0c1222 100%)",
          border: `1px solid ${palette.border}`,
          borderRadius: 14,
          boxShadow: "0 8px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(59,130,246,0.08) inset, 0 0 80px rgba(96,165,250,0.03)",
          display: "flex", flexDirection: "column", overflow: "hidden",
        }}>

          {/* Fixed header — never scrolls */}
          <div style={{
            flexShrink: 0,
            background: "linear-gradient(135deg, #1e3a5f 0%, #1e1b4b 50%, #1a1040 100%)",
            borderBottom: `1px solid ${palette.borderStrong}`,
            boxShadow: "0 2px 16px rgba(0,0,0,0.5)",
            padding: "10px 16px",
            display: "flex", alignItems: "center", gap: 10,
          }}>
            {/* Hamburger menu */}
            <Navigation activePage={activePage} onPageChange={setActivePage} />

            {/* Logo */}
            <div style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
              <Logo size={30} />
            </div>

            {/* Title + subtitle */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <h1 style={{
                fontSize: "clamp(13px, 2.5vw, 18px)", fontWeight: 800, lineHeight: 1.1,
                letterSpacing: -0.5, margin: 0,
                background: "linear-gradient(135deg, #f0f0ff 0%, #60a5fa 45%, #a78bfa 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
              }}>{page.label}</h1>
              <p style={{ fontSize: 10, color: palette.textMuted, margin: "2px 0 0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {page.subtitle}
              </p>
            </div>

            {/* Tags — visible on ≥600px */}
            <div style={{ display: "flex", gap: 4, flexWrap: "wrap", justifyContent: "flex-end", flexShrink: 0 }}>
              {page.tags.map(label => (
                <span key={label} className="header-tag" style={{
                  fontSize: 9, fontWeight: 700, padding: "2px 7px", borderRadius: 9999,
                  background: "rgba(59,130,246,0.12)", color: palette.accent,
                  border: `1px solid ${palette.border}`,
                  fontFamily: fonts.mono, letterSpacing: 0.5,
                  display: "none",
                }}>{label}</span>
              ))}
            </div>
          </div>

          {/* Scrollable content — only this area scrolls */}
          <div style={{
            flex: 1, overflowY: "auto", padding: "16px 18px",
            scrollbarWidth: "thin", scrollbarColor: "rgba(59,130,246,0.3) transparent",
          }}>
            {activePage === 0 && <ContextEngineeringPage />}
            {activePage === 1 && <SDDHarnessPage />}
            {activePage === 2 && <AgenticGlossaryPage />}
            {activePage === 3 && <WorkflowRulesPage />}
            {activePage === 4 && <TokenTaxPage />}
          </div>

          {/* Footer */}
          <div style={{
            flexShrink: 0,
            borderTop: `1px solid ${palette.borderLight}`,
            padding: "6px 16px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            background: "rgba(0,0,0,0.2)",
          }}>
            <span style={{ fontSize: 9, color: palette.textDim, fontFamily: fonts.mono }}>
              AgentStudy v0.1
            </span>
            <span style={{ fontSize: 9, color: palette.textDim }}>
              Ingeniería Agéntica · Guía Visual
            </span>
          </div>

        </div>{/* end card */}
      </div>{/* end outer */}
    </>
  );
}
