/**
 * Design tokens — colores, fuentes y constantes de estilo
 */

export const palette = {
  blue: "#7ab3ff",
  green: "#4de89e",
  amber: "#ffc55a",
  rose: "#ff7d96",
  purple: "#c4a8ff",
  cyan: "#34e4ff",
  dim: "#b8b8d8",
  muted: "#e0e0f8",

  // Semantic
  accent: "#60a5fa",
  accentHover: "#93c5fd",
  border: "rgba(59,130,246,0.25)",
  borderLight: "rgba(59,130,246,0.15)",
  borderMedium: "rgba(59,130,246,0.2)",
  borderStrong: "rgba(59,130,246,0.3)",
  surface: "rgba(0,0,0,0.2)",
  surfaceDeep: "rgba(0,0,0,0.3)",
  surfaceCard: "rgba(0,0,0,0.4)",
  textPrimary: "#f3f4f6",
  textSecondary: "#9ca3af",
  textMuted: "#6b7280",
  textDim: "#4b5563",
};

export const tagColors = {
  skill: { bg: "#1e3a6e", text: "#a0ccff" },
  cmd: { bg: "#3d3a10", text: "#ffd060" },
  hook: { bg: "#3d1040", text: "#e8a8ff" },
  mcp: { bg: "#103d3d", text: "#60f0c0" },
  tool: { bg: "#3d1010", text: "#ffaaaa" },
};

export const verdictBorders = {
  blue: "#7ab3ff",
  green: "#4de89e",
  amber: "#ffc55a",
  rose: "#ff7d96",
  purple: "#c4a8ff",
};

export const fonts = {
  sans: "'Outfit', system-ui, sans-serif",
  mono: "'JetBrains Mono', monospace",
};

export const slideDownKeyframes = `
@keyframes slideDown {
  from { opacity: 0; transform: translateY(-6px); }
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
`;
