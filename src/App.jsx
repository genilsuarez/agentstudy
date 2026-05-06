import { useState } from "react";
import Navigation from "./components/Navigation";
import ContextEngineeringPage from "./pages/ContextEngineeringPage";
import SDDHarnessPage from "./pages/SDDHarnessPage";
import { pages } from "./data/content";
import { palette, fonts, slideDownKeyframes } from "./styles/tokens";

export default function App() {
  const [activePage, setActivePage] = useState(0);
  const page = pages[activePage];

  return (
    <>
      <style>{slideDownKeyframes}</style>

      {/* Outer wrapper — full viewport */}
      <div style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        alignItems: "center", padding: "16px 12px 32px",
      }}>

        {/* Card container */}
        <div style={{
          width: "100%", maxWidth: 860,
          background: "linear-gradient(135deg, #111827 0%, #0f172a 100%)",
          border: `1px solid ${palette.border}`,
          borderRadius: 12,
          boxShadow: "0 4px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(59,130,246,0.08) inset",
          display: "flex", flexDirection: "column", overflow: "hidden",
        }}>

          {/* Sticky header */}
          <div style={{
            position: "sticky", top: 0, zIndex: 10,
            background: "linear-gradient(135deg, #1e3a5f 0%, #1e1b4b 100%)",
            borderBottom: `1px solid ${palette.borderStrong}`,
            boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
            padding: "10px 16px",
            display: "flex", alignItems: "center", gap: 12,
          }}>
            {/* Hamburger menu */}
            <Navigation activePage={activePage} onPageChange={setActivePage} />

            {/* Title + subtitle */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <h1 style={{
                fontSize: "clamp(14px, 2.5vw, 20px)", fontWeight: 800, lineHeight: 1.1,
                letterSpacing: -0.8, margin: 0,
                background: "linear-gradient(135deg, #e8e8f0 0%, #60a5fa 50%, #a78bfa 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
              }}>{page.label}</h1>
              <p style={{ fontSize: 10, color: palette.textDim, margin: "2px 0 0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
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

          {/* Scrollable content */}
          <div style={{
            flex: 1, overflowY: "auto", padding: "14px 16px",
            scrollbarWidth: "thin", scrollbarColor: "rgba(59,130,246,0.3) transparent",
          }}>
            {activePage === 0 && <ContextEngineeringPage />}
            {activePage === 1 && <SDDHarnessPage />}
          </div>

        </div>{/* end card */}
      </div>{/* end outer */}
    </>
  );
}
