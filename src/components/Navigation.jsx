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
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
              <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <defs>
                  <linearGradient id="navLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="28" height="28" rx="7" fill="url(#navLogoGrad)" />
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
              <div style={{ fontSize: 15, fontWeight: 800, background: "linear-gradient(135deg, #f0f0ff 0%, #60a5fa 50%, #a78bfa 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                AgentStudy
              </div>
            </div>
            <div style={{ fontSize: 11, color: palette.textMuted, lineHeight: 1.4 }}>
              Guía de Ingeniería Agéntica
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
