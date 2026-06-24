/**
 * Design tokens — unified "Signal" system
 * Aligned with genil-dev aesthetic: deep navy, azure blue, DM Serif Display + Manrope
 */

export const palette = {
  blue: "#4a9eff",
  green: "#34d399",
  amber: "#f5b942",
  rose: "#f87171",
  purple: "#a78bfa",
  cyan: "#22d3ee",
  dim: "#8d99a8",
  muted: "#cdd6e0",

  // Semantic
  accent: "#4a9eff",
  accentHover: "#74b5ff",
  border: "rgba(74, 158, 255, 0.15)",
  borderLight: "rgba(255, 255, 255, 0.07)",
  borderMedium: "rgba(74, 158, 255, 0.12)",
  borderStrong: "rgba(74, 158, 255, 0.25)",
  surface: "rgba(22, 29, 40, 0.6)",
  surfaceDeep: "rgba(12, 16, 24, 0.8)",
  surfaceCard: "#1a2232",
  textPrimary: "#edf2f7",
  textSecondary: "#8d99a8",
  textMuted: "#5c6a7a",
  textDim: "#3d4a58",
};

export const tagColors = {
  skill: { bg: "rgba(74, 158, 255, 0.1)", text: "#74b5ff" },
  cmd: { bg: "rgba(245, 185, 66, 0.1)", text: "#f5b942" },
  hook: { bg: "rgba(167, 139, 250, 0.1)", text: "#c4b5fd" },
  mcp: { bg: "rgba(52, 211, 153, 0.1)", text: "#34d399" },
  tool: { bg: "rgba(248, 113, 113, 0.1)", text: "#fca5a5" },
};

export const verdictBorders = {
  blue: "#4a9eff",
  green: "#34d399",
  amber: "#f5b942",
  rose: "#f87171",
  purple: "#a78bfa",
};

export const fonts = {
  display: "'DM Serif Display', Georgia, serif",
  sans: "'Manrope', -apple-system, 'Segoe UI', sans-serif",
  mono: "'JetBrains Mono', 'SF Mono', ui-monospace, monospace",
};

export const slideDownKeyframes = `
@keyframes slideDown {
  from { opacity: 0; transform: translateY(-8px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes slideIn {
  from { transform: translateX(-100%); }
  to   { transform: translateX(0); }
}
@keyframes reveal {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}
`;
