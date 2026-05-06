import { useState, useEffect } from "react";
import { pages } from "../data/content";
import { palette, fonts } from "../styles/tokens";

function HamburgerIcon({ open }) {
  const bar = {
    display: "block", width: 18, height: 2, borderRadius: 1,
    background: palette.accent, transition: "all 0.3s ease",
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 3, width: 18, height: 14, justifyContent: "center" }}>
      <span style={{ ...bar, transform: open ? "rotate(45deg) translate(3.5px, 3.5px)" : "none" }} />
      <span style={{ ...bar, opacity: open ? 0 : 1 }} />
      <span style={{ ...bar, transform: open ? "rotate(-45deg) translate(3.5px, -3.5px)" : "none" }} />
    </div>
  );
}

export default function Navigation({ activePage, onPageChange }) {
  const [open, setOpen] = useState(false);

  // Cerrar con Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  const handleSelect = (index) => {
    onPageChange(index);
    setOpen(false);
  };

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Menú de navegación"
        aria-expanded={open}
        style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          width: 36, height: 36, borderRadius: 8,
          background: open ? "rgba(59,130,246,0.15)" : "transparent",
          border: `1px solid ${open ? palette.borderStrong : "rgba(255,255,255,0.1)"}`,
          cursor: "pointer", transition: "all 0.2s",
          flexShrink: 0,
        }}
      >
        <HamburgerIcon open={open} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 90,
            background: "rgba(0,0,0,0.5)",
            animation: "fadeIn 0.2s ease",
          }}
        />
      )}

      {/* Sidebar menu */}
      {open && (
        <nav
          role="navigation"
          aria-label="Páginas"
          style={{
            position: "fixed", top: 0, left: 0, bottom: 0,
            width: "min(280px, 80vw)", zIndex: 100,
            background: "linear-gradient(180deg, #1e293b 0%, #0f172a 100%)",
            borderRight: `1px solid ${palette.borderStrong}`,
            boxShadow: "4px 0 24px rgba(0,0,0,0.6)",
            padding: "20px 0",
            animation: "slideIn 0.25s cubic-bezier(0.4,0,0.2,1)",
            display: "flex", flexDirection: "column",
          }}
        >
          {/* Header */}
          <div style={{ padding: "0 20px 16px", borderBottom: `1px solid ${palette.borderMedium}` }}>
            <div style={{ fontSize: 11, fontFamily: fonts.mono, color: palette.textMuted, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>
              AgentStudy
            </div>
            <div style={{ fontSize: 14, fontWeight: 700, color: palette.textPrimary }}>
              Guía Visual
            </div>
          </div>

          {/* Page list */}
          <div style={{ flex: 1, padding: "12px 10px", display: "flex", flexDirection: "column", gap: 4 }}>
            {pages.map((page, i) => (
              <button
                key={page.key}
                onClick={() => handleSelect(i)}
                aria-current={activePage === i ? "page" : undefined}
                style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "12px 14px", borderRadius: 8,
                  background: activePage === i
                    ? "linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(139,92,246,0.1) 100%)"
                    : "transparent",
                  border: activePage === i ? `1px solid ${palette.borderStrong}` : "1px solid transparent",
                  cursor: "pointer", textAlign: "left", width: "100%",
                  transition: "all 0.2s",
                  fontFamily: fonts.sans,
                }}
              >
                <span style={{ fontSize: 20 }}>{page.icon}</span>
                <div>
                  <div style={{
                    fontSize: 13, fontWeight: 600,
                    color: activePage === i ? palette.accentHover : palette.textPrimary,
                  }}>{page.label}</div>
                  <div style={{ fontSize: 10, color: palette.textMuted, marginTop: 2 }}>{page.subtitle}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Footer */}
          <div style={{ padding: "12px 20px", borderTop: `1px solid ${palette.borderMedium}`, fontSize: 10, color: palette.textDim }}>
            <a href="https://www.linkedin.com/in/genil-alejandro-suarez/" target="_blank" rel="noopener noreferrer"
              style={{ color: palette.accent, textDecoration: "none" }}>Genil Suárez</a>
          </div>
        </nav>
      )}
    </>
  );
}
