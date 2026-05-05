import { useState } from "react";

// ─── SDD + Harness Engineer page ───────────────────────────────────────────

function RoleCard({ label, title, subtitle, borderColor, labelColor }) {
  return (
    <div style={{
      flex: 1, border: `1px solid ${borderColor}`,
      borderTop: `3px solid ${borderColor}`,
      borderRadius: 8, padding: "12px 14px",
      background: "rgba(0,0,0,0.25)",
    }}>
      <div style={{ fontSize: 9, fontFamily: "'JetBrains Mono',monospace", letterSpacing: 1.5, color: labelColor, fontWeight: 700, marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: 15, fontWeight: 700, color: "#f3f4f6", marginBottom: 2 }}>{title}</div>
      <div style={{ fontSize: 11, color: "#6b7280" }}>{subtitle}</div>
    </div>
  );
}

function ProblemBadge({ children }) {
  return (
    <span style={{
      fontSize: 11, padding: "4px 10px", borderRadius: 4,
      background: "rgba(239,68,68,0.1)", color: "#fca5a5",
      border: "1px solid rgba(239,68,68,0.2)", whiteSpace: "nowrap",
    }}>{children}</span>
  );
}

function DetailCard({ label, title, items, borderColor, labelColor }) {
  return (
    <div style={{
      flex: 1, border: `1px solid ${borderColor}`,
      borderRadius: 8, padding: "14px 16px",
      background: "rgba(0,0,0,0.2)",
    }}>
      <div style={{ fontSize: 9, fontFamily: "'JetBrains Mono',monospace", letterSpacing: 1.5, color: labelColor, fontWeight: 700, marginBottom: 6 }}>{label}</div>
      <div style={{ fontSize: 14, fontWeight: 700, color: "#f3f4f6", marginBottom: 10 }}>{title}</div>
      <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
        {items.map((item, i) => (
          <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 7, fontSize: 12, color: "#9ca3af", marginBottom: 5 }}>
            <span style={{ color: labelColor, fontSize: 11, marginTop: 1, flexShrink: 0 }}>•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FlowStep({ label, title, color, first }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      {!first && (
        <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth={2}>
          <polyline points="9 18 15 12 9 6" />
        </svg>
      )}
      <div style={{
        border: `1px solid rgba(255,255,255,0.12)`,
        borderRadius: 8, padding: "8px 14px", textAlign: "center",
        background: "rgba(0,0,0,0.3)",
      }}>
        <div style={{ fontSize: 9, fontFamily: "'JetBrains Mono',monospace", letterSpacing: 1.2, color: "#6b7280", marginBottom: 3, textTransform: "uppercase" }}>{label}</div>
        <div style={{ fontSize: 13, fontWeight: 700, color }}>{title}</div>
      </div>
    </div>
  );
}

function SDDHarnessPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

      {/* Roles */}
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <RoleCard label="ROL 1" title="SDD controla la entrada" subtitle="El contrato antes del código" borderColor="rgba(96,165,250,0.4)" labelColor="#60a5fa" />
        <RoleCard label="ROL 2" title="Harness controla la salida" subtitle="El arnés antes del deploy" borderColor="rgba(52,211,153,0.4)" labelColor="#34d399" />
      </div>

      {/* El problema */}
      <div style={{
        border: "1px solid rgba(239,68,68,0.3)",
        borderLeft: "3px solid #ef4444",
        borderRadius: "0 8px 8px 0",
        padding: "10px 14px",
        background: "rgba(239,68,68,0.05)",
        display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center",
      }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: "#f87171", flexShrink: 0 }}>⚠ El problema</span>
        <ProblemBadge>La IA escala errores, no solo velocidad</ProblemBadge>
        <ProblemBadge>Prompts ≠ contratos</ProblemBadge>
        <ProblemBadge>Deuda técnica acelerada</ProblemBadge>
      </div>

      {/* Detail cards */}
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <DetailCard
          label="SPEC-DRIVEN DEVELOPMENT"
          title="Contrato antes del código"
          borderColor="rgba(96,165,250,0.3)"
          labelColor="#60a5fa"
          items={[
            "Funcionalidad clara y acotada",
            "Casos de uso y edge cases",
            "Pre y postcondiciones",
            "Comportamiento ante errores",
          ]}
        />
        <DetailCard
          label="HARNESS ENGINEER"
          title="Arnés antes del deploy"
          borderColor="rgba(52,211,153,0.3)"
          labelColor="#34d399"
          items={[
            "Tests alineados a la spec",
            "Mocks y simulación",
            "Pipelines automáticos",
            "Criterios ejecutables, no narrativos",
          ]}
        />
      </div>

      {/* Flow */}
      <div style={{
        border: "1px solid rgba(59,130,246,0.2)",
        borderRadius: 8, padding: "14px 16px",
        background: "rgba(0,0,0,0.2)",
      }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 4, marginBottom: 10 }}>
          <FlowStep label="ENTRADA" title="Spec" color="#60a5fa" first />
          <FlowStep label="VALIDACIÓN" title="Harness" color="#34d399" />
          <FlowStep label="GENERACIÓN" title="IA" color="#c084fc" />
          <FlowStep label="SALIDA" title="Tests" color="#34d399" />
        </div>
        <p style={{ textAlign: "center", fontSize: 11, color: "#6b7280", margin: 0, fontFamily: "'JetBrains Mono',monospace" }}>
          Loop corto · <span style={{ color: "#60a5fa", fontWeight: 600 }}>feedback a la spec</span> · no waterfall
        </p>
      </div>

      {/* Bottom callout */}
      <div style={{
        border: "1px solid rgba(59,130,246,0.2)",
        borderRadius: 8, padding: "14px 16px",
        background: "rgba(0,0,0,0.2)",
        display: "flex", gap: 16, flexWrap: "wrap", alignItems: "flex-start",
      }}>
        <div style={{ flex: 1, minWidth: 200 }}>
          <p style={{ fontSize: 11, color: "#6b7280", margin: "0 0 4px" }}>La ventaja no es velocidad de generación</p>
          <p style={{ fontSize: 13, fontWeight: 700, margin: 0, lineHeight: 1.4 }}>
            <span style={{ color: "#60a5fa" }}>Calidad del contexto en la entrada</span>
            <br />
            <span style={{ color: "#9ca3af" }}>+</span>{" "}
            <span style={{ color: "#34d399" }}>robustez del arnés en la salida</span>
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {[
            { icon: "📋", q: "¿Tienes", highlight: "spec", rest: "antes de promptear?" },
            { icon: "🔧", q: "¿Tienes", highlight: "harness", rest: "antes de deployar?" },
          ].map(({ icon, q, highlight, rest }) => (
            <div key={highlight} style={{
              display: "flex", alignItems: "center", gap: 8,
              border: "1px solid rgba(59,130,246,0.2)", borderRadius: 6,
              padding: "7px 12px", background: "rgba(0,0,0,0.3)",
              fontSize: 12, color: "#9ca3af",
            }}>
              <span>{icon}</span>
              <span>{q}</span>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontWeight: 700, color: "#f3f4f6" }}>{highlight}</span>
              <span>{rest}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ textAlign: "center", marginTop: 4, paddingTop: 12, borderTop: "1px solid rgba(59,130,246,0.15)", fontSize: 12 }}>
        <span style={{ color: "#4b5563" }}>Guía por </span>
        <a href="https://www.linkedin.com/in/genil-alejandro-suarez/" target="_blank" rel="noopener"
          style={{ color: "#60a5fa", textDecoration: "none", fontWeight: 600 }}>Genil Suárez</a>
      </div>
    </div>
  );
}

// ─── Context Engineering data ──────────────────────────────────────────────

const data = {
  tree: [
    { name: "CLAUDE.md", type: "file", indent: 0, color: "blue", note: "Siempre cargado — identidad, restricciones, reglas globales" },
    { name: "CLAUDE.local.md", type: "file", indent: 0, color: "blue", note: "Overrides personales (git-ignored)" },
    { name: ".mcp.json", type: "file", indent: 0, color: "blue", note: "Registro de servidores MCP — qué existe y cómo conectarse" },
    { name: ".claude/", type: "folder", indent: 0, color: "amber", note: "" },
    { name: "settings.json", type: "file", indent: 1, color: "purple", note: "Comportamiento del agente — permisos, tools permitidas, modelo, hooks" },
    { name: "settings.local.json", type: "file", indent: 1, color: "purple", note: "Overrides personales" },
    { name: "rules/", type: "folder", indent: 1, color: "amber", note: "Reglas condicionales por path/tema — se cargan según contexto" },
    { name: "code-style.md", type: "file", indent: 2, color: "dim", note: "" },
    { name: "testing.md", type: "file", indent: 2, color: "dim", note: "" },
    { name: "hooks/", type: "folder", indent: 1, color: "rose", note: "Scripts deterministas — se ejecutan SIEMPRE en eventos del sistema" },
    { name: "pre-commit.sh", type: "file", indent: 2, color: "dim", note: "" },
    { name: "post-edit.sh", type: "file", indent: 2, color: "dim", note: "" },
    { name: "commands/", type: "folder", indent: 1, color: "amber", note: "Legacy → absorbido por Skills" },
    { name: "review.md", type: "file", indent: 2, color: "dim", note: "" },
    { name: "skills/", type: "folder", indent: 1, color: "amber", note: "Workflows on-demand — enseñan al LLM cómo hacer algo bien" },
    { name: "deploy/", type: "folder", indent: 2, color: "amber", note: "" },
    { name: "SKILL.md", type: "file", indent: 3, color: "green", note: "" },
    { name: "scripts/", type: "folder", indent: 3, color: "dim", note: "" },
    { name: "references/", type: "folder", indent: 3, color: "dim", note: "" },
    { name: "agents/", type: "folder", indent: 1, color: "amber", note: "Subagentes con contexto aislado — delegan trabajo pesado" },
    { name: "code-reviewer.md", type: "file", indent: 2, color: "dim", note: "" },
    { name: "security-auditor.md", type: "file", indent: 2, color: "dim", note: "" },
  ],
  versus: [
    {
      id: "skill-cmd",
      label: "Skill vs Command",
      intro: 'Los custom commands han sido fusionados con Skills. Un archivo en .claude/commands/deploy.md y una Skill en .claude/skills/deploy/SKILL.md crean el mismo /deploy.',
      rows: [
        ["Estructura", "Archivo .md suelto", "Carpeta: SKILL.md + soporte"],
        ["Invocación", "Solo manual: /nombre", "Manual + auto-activación"],
        ["Frontmatter", "Básico", "Completo: disable-model-invocation, allowed-tools, context:fork"],
        ["Archivos extras", "No", "scripts/, references/, assets/"],
        ["Progressive disclosure", "No — todo se carga", "3 niveles: frontmatter → body → archivos"],
        ["Subagente", "No nativo", "Sí, con context:fork"],
        ["Estado", "Compatibilidad mantenida", "Recomendado para todo nuevo"],
      ],
      headers: ["Aspecto", "Command", "Skill"],
      tagColors: ["cmd", "skill"],
      verdict: "Ninguno es malo. Commands siguen funcionando. Para todo nuevo, invierte en Skills. Si comparten nombre, la Skill gana.",
      verdictColor: "green",
    },
    {
      id: "skill-hook",
      label: "Skill vs Hook",
      intro: 'Ambos "hacen que algo pase", pero el mecanismo es completamente distinto.',
      rows: [
        ["¿Quién ejecuta?", "El LLM interpreta", "Un script directo"],
        ["¿Determinista?", "No — puede ignorarlo", "Sí — siempre, sin excepción"],
        ["¿Cuándo?", "Invocación o auto-detección", "Eventos: PreToolUse, PostToolUse, etc."],
        ["¿Dónde?", ".claude/skills/", "settings.json → hooks"],
        ["Ejemplo", '"Corre prettier después de editar"', '"Corre prettier en PostToolUse Edit|Write"'],
        ["Resultado", "Probablemente lo haga", "Siempre se ejecuta"],
      ],
      headers: ["Aspecto", "Skill", "Hook"],
      tagColors: ["skill", "hook"],
      verdict: "Si siempre debe pasar → Hook. Si el LLM necesita entender cómo → Skill.",
      verdictColor: "purple",
    },
    {
      id: "mcp-tools",
      label: "MCP vs Tools",
      intro: "Un Tool es una capacidad. Un MCP es el canal por donde llega al modelo.",
      rows: [
        ["¿Qué es?", "Función invocable", "Protocolo que expone tools"],
        ["Ejemplos", "create_file, bash", "GitHub MCP, Slack MCP"],
        ["¿Quién la ve?", "El modelo — invoca igual", "El sistema — transporte y auth"],
        ["Nativas", "Read, Write, Edit, Bash, Glob, Grep", "N/A"],
        ["Config", "Implícitas o vía MCP", ".mcp.json"],
        ["Overhead", "Cero — local", "Servidor + transporte + auth"],
      ],
      headers: ["Aspecto", "Tool", "MCP"],
      tagColors: ["tool", "mcp"],
      verdict: "MCP ⊃ Tools. Toda tool de MCP es una tool, pero no toda tool necesita MCP. Las nativas están built-in.",
      verdictColor: "green",
    },
    {
      id: "skill-mcp",
      label: "Skill vs MCP",
      intro: "Confundir estos dos es el error más caro en tokens y en arquitectura.",
      rows: [
        ["Función", "Enseña cómo hacer algo bien", "Da acceso a qué puede hacer"],
        ["Sin el otro", "Ejecuta sin best practices", "Tiene conocimiento pero no actúa en externos"],
        ["Token cost", "On-demand (progressive disclosure)", "Overhead por request/response"],
        ["Ejemplo", 'Skill Mermaid: "usa graph LR, colores"', "GitHub MCP: create_issue"],
        ["Juntos", "Skill de sprint + Linear MCP = sabe cómo y puede actuar", ""],
      ],
      headers: ["Aspecto", "Skill", "MCP"],
      tagColors: ["skill", "mcp"],
      verdict: "¿Datos de sistema externo? → MCP. ¿CLI local disponible? → Skill con scripts. ¿Ambos? → Skill que orquesta MCP.",
      verdictColor: "blue",
    },
    {
      id: "claude-skill",
      label: "CLAUDE.md vs Skill",
      intro: "",
      rows: [
        ["Carga", "Siempre, cada sesión", "Solo cuando es relevante"],
        ["Contenido", "Reglas para 90%+ de tareas", "Workflows específicos"],
        ["Costo", "Permanente — siempre consume tokens", "0 tokens hasta invocación"],
        ["Ejemplos", '"Prefija commits con feat:" / "No modifiques src/legacy/"', '"Flujo de PR con checklist" / "Deploy con gates"'],
      ],
      headers: ["Aspecto", "CLAUDE.md", "Skill"],
      tagColors: ["", "skill"],
      verdict: "Si aplica a casi toda tarea → CLAUDE.md. Si es workflow específico → Skill. Lo que sobra en CLAUDE.md es contexto desperdiciado.",
      verdictColor: "rose",
    },
    {
      id: "sub-skill",
      label: "Subagente vs Skill",
      intro: "",
      rows: [
        ["Contexto", "Comparte el principal", "Contexto propio aislado"],
        ["Propósito", "Enseñar cómo hacer algo", "Delegar trabajo pesado"],
        ["Invocación", "/nombre o auto", "@agent-name o delegación"],
        ["Retorno", "Enriquece la sesión", "Solo el resultado final"],
        ["Ejemplo", '"Cómo hacer code review"', '"Analiza 30 archivos, devuelve resumen"'],
        ["Juntos", "Subagente con Skills preloaded = aislamiento + expertise", ""],
      ],
      headers: ["Aspecto", "Skill", "Subagente"],
      tagColors: ["skill", ""],
      verdict: "Skill con context: fork corre en subagente automáticamente. Conocimiento portable + aislamiento en una sola primitiva.",
      verdictColor: "purple",
    },
  ],
  agentic: [
    ["Gestión", "El humano decide todo", "El agente co-gestiona"],
    ["Skills", "Instalas manualmente", "Se auto-activan por relevancia"],
    ["Subagentes", "No disponible", "Contextos paralelos aislados"],
    ["Hooks", "No disponible", "Enforcement determinista"],
    ["Loop", "Tú → Modelo → Tú", "Objetivo → Acción → Observación → Acción"],
    ["Compactación", "Automática, sin control", "Skills re-adjuntadas con budget de tokens"],
    ["Persistencia", "Por conversación", "CLAUDE.md + filesystem + memory"],
  ],
  surfaces: [
    ["System Prompt", "✅ Projects", "✅ CLAUDE.md", "✅", "✅"],
    ["Skills", "✅", "✅ full", "✅", "✅"],
    ["MCP", "✅", "✅", "✅", "✅"],
    ["Subagentes", "—", "✅", "—", "✅"],
    ["Agent Teams", "—", "✅", "—", "✅"],
    ["Hooks", "—", "✅", "—", "—"],
    ["Scheduled Tasks", "—", "✅", "✅", "—"],
    ["Memory", "✅", "✅", "✅", "—"],
  ],
};

const colors = {
  blue: "#7ab3ff", green: "#4de89e", amber: "#ffc55a",
  rose: "#ff7d96", purple: "#c4a8ff", cyan: "#34e4ff",
  dim: "#b8b8d8", muted: "#e0e0f8",
  skill: { bg: "#1e3a6e", text: "#a0ccff" },
  cmd: { bg: "#3d3a10", text: "#ffd060" },
  hook: { bg: "#3d1040", text: "#e8a8ff" },
  mcp: { bg: "#103d3d", text: "#60f0c0" },
  tool: { bg: "#3d1010", text: "#ffaaaa" },
};

const verdictBorders = { blue: "#7ab3ff", green: "#4de89e", amber: "#ffc55a", rose: "#ff7d96", purple: "#c4a8ff" };

const slideDown = `
@keyframes slideDown {
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
}
`;

function Tag({ type }) {
  if (!type || !colors[type]) return null;
  const labels = { skill: "Skill", cmd: "Command", hook: "Hook", mcp: "MCP", tool: "Tool" };
  return (
    <span style={{
      display: "inline-block", fontFamily: "'JetBrains Mono',monospace", fontSize: 10,
      fontWeight: 700, padding: "2px 8px", borderRadius: 4, letterSpacing: 0.5,
      background: colors[type].bg, color: colors[type].text,
    }}>{labels[type]}</span>
  );
}

function Verdict({ color, children }) {
  const border = verdictBorders[color] || verdictBorders.blue;
  const labels = { green: "Veredicto:", purple: "Regla simple:", rose: "La regla:", blue: "Cuándo usar qué:", amber: "Cuándo usar qué:" };
  return (
    <div style={{
      background: "rgba(59,130,246,0.06)", borderLeft: `3px solid ${border}`,
      borderRadius: "0 6px 6px 0", padding: "8px 12px", margin: "8px 0 0",
      fontSize: 12, color: "#d1d5db", lineHeight: 1.5,
    }}>
      <strong style={{ color: border }}>{labels[color] || "Cuándo usar qué:"}</strong>{" "}{children}
    </div>
  );
}

function Table({ headers, rows, tagColors = [] }) {
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

function Accordion({ icon, iconBg, iconColor, title, subtitle, children, defaultOpen = false }) {
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
          fontFamily: "'Outfit',system-ui,sans-serif", transition: "all 0.25s ease",
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

function TreeItem({ name, type, indent, color, note }) {
  const c = colors[color] || colors.dim;
  const icon = type === "folder" ? "📁" : "📄";
  return (
    <div style={{
      paddingLeft: indent * 18, display: "flex", alignItems: "baseline",
      gap: 5, fontFamily: "'JetBrains Mono',monospace", fontSize: 11, lineHeight: 1.4,
    }}>
      <span style={{ fontSize: 11 }}>{icon}</span>
      <span style={{ color: typeof c === "string" ? c : "#6b7280", fontWeight: type === "folder" ? 700 : 400 }}>{name}</span>
      {note && <span style={{ color: "#6b7280", fontSize: 10, fontStyle: "italic" }}>← {note}</span>}
    </div>
  );
}

function CodeBlock({ children }) {
  return (
    <pre style={{
      background: "rgba(0,0,0,0.4)", border: "1px solid rgba(59,130,246,0.2)", borderRadius: 6,
      padding: "10px 12px", margin: "6px 0", fontFamily: "'JetBrains Mono',monospace",
      fontSize: 11.5, lineHeight: 1.6, overflowX: "auto", whiteSpace: "pre", color: "#d1d5db",
    }}>{children}</pre>
  );
}

const pages = [
  {
    key: "context",
    label: "Context Engineering",
    subtitle: "Las primitivas, sus diferencias, y cuándo usar cada una.",
    tags: ["CLAUDE.md", "Skills", "Hooks", "MCP", "Agents"],
  },
  {
    key: "sdd",
    label: "SDD + Harness Engineer",
    subtitle: "La arquitectura real del desarrollo con IA.",
    tags: ["Spec", "Harness", "IA", "Tests"],
  },
];

export default function App() {
  const [activePage, setActivePage] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const page = pages[activePage];

  return (
    <>
      <style>{slideDown}</style>

      {/* Outer wrapper — full viewport */}
      <div style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        alignItems: "center", padding: "16px 12px 32px",
      }}>

        {/* Card container — FluentFlow style */}
        <div style={{
          width: "100%", maxWidth: 860,
          background: "linear-gradient(135deg, #111827 0%, #0f172a 100%)",
          border: "1px solid rgba(59,130,246,0.25)",
          borderRadius: 12,
          boxShadow: "0 4px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(59,130,246,0.08) inset",
          display: "flex", flexDirection: "column", overflow: "hidden",
        }}>

          {/* Sticky header */}
          <div style={{
            position: "sticky", top: 0, zIndex: 10,
            background: "linear-gradient(135deg, #1e3a5f 0%, #1e1b4b 100%)",
            borderBottom: "1px solid rgba(59,130,246,0.3)",
            boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
          }}>
            {/* Page tabs */}
            <div style={{
              display: "flex", borderBottom: "1px solid rgba(59,130,246,0.2)",
              background: "rgba(0,0,0,0.2)",
            }}>
              {pages.map((p, i) => (
                <button key={p.key} onClick={() => setActivePage(i)} style={{
                  padding: "9px 18px", background: "transparent", border: "none",
                  borderBottom: `2px solid ${activePage === i ? "#3b82f6" : "transparent"}`,
                  color: activePage === i ? "#60a5fa" : "#6b7280",
                  fontFamily: "'Outfit',system-ui,sans-serif", fontSize: 12, fontWeight: 600,
                  cursor: "pointer", whiteSpace: "nowrap", transition: "all 0.2s",
                }}>{p.label}</button>
              ))}
            </div>
            {/* Title row */}
            <div style={{ padding: "10px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
              <div>
                <h1 style={{
                  fontSize: "clamp(16px, 2.5vw, 22px)", fontWeight: 800, lineHeight: 1.1,
                  letterSpacing: -0.8, margin: 0,
                  background: "linear-gradient(135deg, #e8e8f0 0%, #60a5fa 50%, #a78bfa 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>{page.label}</h1>
                <p style={{ fontSize: 10, color: "#4b5563", margin: "2px 0 0" }}>{page.subtitle}</p>
              </div>
              <div style={{ display: "flex", gap: 4, flexWrap: "wrap", justifyContent: "flex-end" }}>
                {page.tags.map(label => (
                  <span key={label} style={{
                    fontSize: 9, fontWeight: 700, padding: "2px 7px", borderRadius: 9999,
                    background: "rgba(59,130,246,0.12)", color: "#60a5fa",
                    border: "1px solid rgba(59,130,246,0.25)",
                    fontFamily: "'JetBrains Mono',monospace", letterSpacing: 0.5,
                  }}>{label}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Scrollable content */}
          <div style={{
            flex: 1, overflowY: "auto", padding: "14px 16px",
            scrollbarWidth: "thin", scrollbarColor: "rgba(59,130,246,0.3) transparent",
          }}>

            {/* SDD + Harness page */}
            {activePage === 1 && <SDDHarnessPage />}

            {/* Context Engineering page */}
            {activePage === 0 && <>

            {/* Estructura */}
            <Accordion icon="📁" iconBg="#78350f" iconColor="#fbbf24" title="Estructura del proyecto" subtitle="Dónde vive cada archivo y qué hace">
              <div style={{ background: "rgba(0,0,0,0.3)", borderRadius: 6, padding: "10px 12px", marginBottom: 8 }}>
                {data.tree.map((item, i) => <TreeItem key={i} {...item} />)}
              </div>
              <Verdict color="amber">
                También existe <code style={{ background: "rgba(255,255,255,0.08)", padding: "1px 5px", borderRadius: 3, fontSize: 11 }}>~/.claude/</code> (directorio global). Skills y agents ahí aplican a todos tus proyectos.
              </Verdict>
            </Accordion>

            {/* No-agéntico vs Agéntico */}
            <Accordion icon="🔀" iconBg="#1e3a8a" iconColor="#60a5fa" title="¿Quién gestiona el contexto?" subtitle="La diferencia fundamental entre claude.ai y Claude Code">
              <p style={{ color: "#9ca3af", fontSize: 12, marginBottom: 8 }}>
                La diferencia no es "cuántas features tienes" sino{" "}
                <strong style={{ color: "#93c5fd" }}>quién decide qué contexto se carga y cuándo</strong>.
              </p>
              <Table headers={["Aspecto", "No-agéntico (claude.ai)", "Agéntico (Claude Code)"]} rows={data.agentic} />
              <Verdict color="blue">
                En claude.ai, tú eres el arquitecto de contexto. En Claude Code, el agente es co-arquitecto — carga Skills, delega a subagentes, y lee del filesystem sin preguntarte.
              </Verdict>
            </Accordion>

            {/* Versus */}
            <Accordion icon="⚔️" iconBg="#3b0764" iconColor="#c084fc" title="Comparaciones que importan" subtitle="Las confusiones más comunes — Skill, Command, Hook, MCP, Subagente">
              <div style={{ borderRadius: 6, overflow: "hidden", border: "1px solid rgba(59,130,246,0.15)" }}>
                <div style={{
                  display: "flex", overflowX: "auto", borderBottom: "1px solid rgba(59,130,246,0.2)",
                  background: "rgba(0,0,0,0.2)", scrollbarWidth: "none",
                }}>
                  {data.versus.map((v, i) => (
                    <button key={v.id} onClick={() => setActiveTab(i)} style={{
                      flexShrink: 0, padding: "8px 14px",
                      background: activeTab === i ? "rgba(59,130,246,0.12)" : "transparent",
                      border: "none", borderBottom: `2px solid ${activeTab === i ? "#3b82f6" : "transparent"}`,
                      color: activeTab === i ? "#60a5fa" : "#6b7280",
                      fontFamily: "'Outfit',system-ui,sans-serif", fontSize: 12, fontWeight: 500,
                      cursor: "pointer", whiteSpace: "nowrap", transition: "all 0.2s",
                    }}>{v.label}</button>
                  ))}
                </div>
                <div style={{ padding: "10px 12px" }}>
                  {data.versus.map((v, i) => activeTab === i && (
                    <div key={v.id}>
                      {v.intro && <p style={{ color: "#6b7280", fontSize: 12, marginBottom: 8, lineHeight: 1.5 }}>{v.intro}</p>}
                      <Table headers={v.headers} rows={v.rows} tagColors={v.tagColors} />
                      <Verdict color={v.verdictColor}>{v.verdict}</Verdict>
                    </div>
                  ))}
                </div>
              </div>
            </Accordion>

            {/* Stack */}
            <Accordion icon="📐" iconBg="#1e3a8a" iconColor="#60a5fa" title="Cómo encajan todas las piezas" subtitle="Arquitectura de 5 capas">
              <CodeBlock>
{``}<span style={{color:"#fbbf24"}}>CAPA 1 — Identidad</span>{` (siempre cargado)
  CLAUDE.md + CLAUDE.local.md + rules/
  → Qué soy, qué sé, qué restricciones tengo

`}<span style={{color:"#60a5fa"}}>CAPA 2 — Conocimiento</span>{` (on-demand)
  Skills (SKILL.md + scripts + references)
  → Cómo hago las cosas bien

`}<span style={{color:"#34d399"}}>CAPA 3 — Capacidades</span>{` (tools + MCP)
  Tools nativas + MCP servers
  → Qué puedo hacer y desde dónde

`}<span style={{color:"#c084fc"}}>CAPA 4 — Delegación</span>{` (subagentes)
  Subagentes + Agent Teams
  → Trabajo aislado sin contaminar contexto

`}<span style={{color:"#f87171"}}>CAPA 5 — Enforcement</span>{` (hooks)
  Scripts deterministas en eventos del sistema
  → Lo que SIEMPRE pasa, sin depender del LLM`}
              </CodeBlock>
              <p style={{ color: "#6b7280", fontSize: 12, margin: "8px 0" }}>
                Los problemas aparecen cuando mezclas capas: poner workflows en CLAUDE.md (capa 1 haciendo trabajo de capa 2), o esperar que una Skill garantice ejecución (capa 2 haciendo trabajo de capa 5).
              </p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", margin: "6px 0" }}>
                {[["#fbbf24","Identidad"],["#60a5fa","Conocimiento"],["#34d399","Capacidades"],["#c084fc","Delegación"],["#f87171","Enforcement"]].map(([c,l]) => (
                  <span key={l} style={{
                    display:"flex", alignItems:"center", gap:5, fontSize:10, color:"#9ca3af",
                    padding:"3px 10px", background:"rgba(255,255,255,0.04)", borderRadius:9999,
                    fontFamily:"'JetBrains Mono',monospace", border:"1px solid rgba(255,255,255,0.08)",
                  }}>
                    <span style={{width:5,height:5,borderRadius:"50%",background:c,flexShrink:0}} />{l}
                  </span>
                ))}
              </div>
              <Verdict color="blue">
                CLAUDE.md define reglas → Skill enseña el workflow → Tools/MCP ejecutan → Subagente aísla trabajo pesado → Hook valida que se cumplió.
              </Verdict>
            </Accordion>

            {/* Superficies */}
            <Accordion icon="🖥️" iconBg="#064e3b" iconColor="#34d399" title="Primitivas × Superficies" subtitle="Matriz de disponibilidad — qué existe en claude.ai, Claude Code, Cowork y API">
              <Table headers={["Primitiva", "claude.ai", "Claude Code", "Cowork", "API/SDK"]} rows={data.surfaces} />
              <Verdict color="green">Claude Code es la única superficie con el stack completo.</Verdict>
            </Accordion>

            {/* Decisión */}
            <Accordion icon="🧭" iconBg="#78350f" iconColor="#fbbf24" title="¿Dónde pongo esto?" subtitle="Árbol de decisión para elegir la primitiva correcta">
              <CodeBlock>
{``}<span style={{color:"#fbbf24"}}>¿Aplica al 90%+ de las tareas?</span>{`
  └─ SÍ → `}<span style={{color:"#34d399"}}>CLAUDE.md</span>{`

`}<span style={{color:"#fbbf24"}}>¿Es un workflow específico?</span>{`
  └─ SÍ → `}<span style={{color:"#60a5fa"}}>Skill</span>{`
      └─ `}<span style={{color:"#fbbf24"}}>¿Auto-activación?</span>{`
          ├─ SÍ → description con triggers claros
          └─ NO → `}<span style={{color:"#c084fc"}}>disable-model-invocation: true</span>{`

`}<span style={{color:"#fbbf24"}}>¿Datos de sistema externo?</span>{`
  └─ SÍ → `}<span style={{color:"#34d399"}}>MCP</span>{`
      └─ `}<span style={{color:"#fbbf24"}}>¿Existe CLI local?</span>{`
          └─ SÍ → Skill con scripts puede bastar

`}<span style={{color:"#fbbf24"}}>¿DEBE ejecutarse siempre?</span>{`
  └─ SÍ → `}<span style={{color:"#c084fc"}}>Hook</span>{` (enforcement determinista)

`}<span style={{color:"#fbbf24"}}>¿Trabajo pesado que contamina contexto?</span>{`
  └─ SÍ → `}<span style={{color:"#f87171"}}>Subagente</span>{`
      └─ `}<span style={{color:"#fbbf24"}}>¿Necesita expertise?</span>{`
          └─ SÍ → Subagente con Skills preloaded

`}<span style={{color:"#fbbf24"}}>¿Distribuir como paquete?</span>{`
  └─ SÍ → `}<span style={{color:"#60a5fa"}}>Plugin</span>{` (Skills + Agents + Commands)`}
              </CodeBlock>
            </Accordion>

            {/* Footer */}
            <div style={{ textAlign: "center", marginTop: 16, paddingTop: 12, borderTop: "1px solid rgba(59,130,246,0.15)", fontSize: 12 }}>
              <span style={{ color: "#4b5563" }}>Guía por </span>
              <a href="https://www.linkedin.com/in/genil-alejandro-suarez/" target="_blank" rel="noopener"
                style={{ color: "#60a5fa", textDecoration: "none", fontWeight: 600 }}>Genil Suárez</a>
            </div>

            </>}{/* end Context Engineering page */}

          </div>{/* end scrollable */}
        </div>{/* end card */}
      </div>{/* end outer */}
    </>
  );
}
