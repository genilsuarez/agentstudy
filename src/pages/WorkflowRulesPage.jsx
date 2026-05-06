import { palette, fonts } from "../styles/tokens";

const sections = [
  {
    id: "orchestration",
    icon: "🎯",
    title: "Orquestación del Workflow",
    intro: "El agente no es un chatbot — es un sistema que necesita estructura. Estas reglas definen cómo debe operar un agente bien configurado para producir resultados consistentes y de calidad.",
    subsections: [
      {
        num: 1,
        title: "Plan Node — Planificar primero",
        color: "#60a5fa",
        subtitle: "Nunca ejecutar sin un plan claro",
        points: [
          "Entrar en modo plan para CUALQUIER tarea no trivial (3+ pasos o decisiones arquitectónicas)",
          "Si algo sale mal, PARAR y re-planificar inmediatamente — no seguir empujando",
          "Usar modo plan también para pasos de verificación, no solo para construir",
          "Escribir specs detalladas por adelantado para reducir ambigüedad",
        ],
        insight: "Un agente sin plan es un generador de deuda técnica con velocidad turbo.",
      },
      {
        num: 2,
        title: "Estrategia de Subagentes",
        color: "#34d399",
        subtitle: "Delegar para mantener el contexto limpio",
        points: [
          "Usar subagentes liberalmente para mantener la ventana de contexto principal limpia",
          "Descargar investigación, exploración y análisis paralelo a subagentes",
          "Para problemas complejos, lanzar más cómputo vía subagentes",
          "Una tarea por subagente para ejecución enfocada",
        ],
        insight: "El contexto es tu recurso más escaso. Los subagentes son tu forma de escalarlo sin contaminarlo.",
      },
      {
        num: 3,
        title: "Loop de Auto-mejora",
        color: "#c084fc",
        subtitle: "Aprender de cada corrección",
        points: [
          "Después de CUALQUIER corrección del usuario: actualizar memory.md con el patrón",
          "Escribir reglas para ti mismo que prevengan el mismo error",
          "Iterar sin piedad sobre estas lecciones hasta que la tasa de error baje",
          "Revisar lecciones al inicio de sesión para el proyecto relevante",
        ],
        insight: "Un agente que repite errores no es un agente — es un autocompletado caro.",
      },
      {
        num: 4,
        title: "Verificación antes de cerrar",
        color: "#fbbf24",
        subtitle: "Nunca declarar victoria sin pruebas",
        points: [
          "Nunca marcar una tarea como completa sin demostrar que funciona",
          "Comparar comportamiento entre main y tus cambios cuando sea relevante",
          "Preguntarte: '¿Un staff engineer aprobaría esto?'",
          "Ejecutar tests, revisar logs, demostrar correctitud",
        ],
        insight: "El 'funciona en mi máquina' no existe en el mundo agéntico. Demuéstralo o no está hecho.",
      },
      {
        num: 5,
        title: "Exigir Elegancia (con balance)",
        color: "#f87171",
        subtitle: "Calidad sin sobre-ingeniería",
        points: [
          "Para cambios no triviales: pausar y preguntar '¿hay una forma más elegante?'",
          "Si un fix se siente hacky: reimplementar la solución elegante con todo el contexto",
          "Saltar esto para fixes simples y obvios — no sobre-ingenierizar",
          "Desafiar tu propio trabajo antes de presentarlo",
        ],
        insight: "La elegancia no es perfeccionismo — es la diferencia entre código que escala y código que explota.",
      },
      {
        num: 6,
        title: "Bug Fixing Autónomo",
        color: "#60a5fa",
        subtitle: "Resolver sin pedir de la mano",
        points: [
          "Cuando recibes un reporte de bug: simplemente arréglalo. No pidas que te guíen",
          "Apuntar a logs, errores, tests fallando — luego resolverlos",
          "Cero cambio de contexto requerido del usuario",
          "Ir a arreglar tests de CI fallando sin que te digan cómo",
        ],
        insight: "El valor del agente es que el humano dice 'está roto' y el agente dice 'ya está arreglado'.",
      },
    ],
  },
  {
    id: "task-mgmt",
    icon: "📋",
    title: "Gestión de Tareas",
    intro: "Un sistema simple pero riguroso para que el agente no pierda el hilo. Cada tarea tiene un ciclo de vida claro.",
    steps: [
      { num: 1, label: "Planificar", desc: "Escribir plan en todo.md con items chequeables", color: "#60a5fa" },
      { num: 2, label: "Verificar plan", desc: "Confirmar antes de empezar implementación", color: "#34d399" },
      { num: 3, label: "Trackear progreso", desc: "Marcar items completos conforme avanzas", color: "#c084fc" },
      { num: 4, label: "Explicar cambios", desc: "Resumen de alto nivel en cada paso", color: "#fbbf24" },
      { num: 5, label: "Documentar resultados", desc: "Agregar sección de review al todo.md", color: "#f87171" },
      { num: 6, label: "Capturar lecciones", desc: "Actualizar memory.md después de correcciones", color: "#60a5fa" },
    ],
  },
  {
    id: "principles",
    icon: "💎",
    title: "Principios Fundamentales",
    intro: "Tres reglas que aplican a TODO lo que hace el agente. Si alguna se viola, el resultado es inaceptable.",
    principles: [
      {
        title: "Simplicidad Primero",
        color: "#34d399",
        desc: "Cada cambio debe ser lo más simple posible. Impacto mínimo en el código. Si puedes resolver algo en 3 líneas, no escribas 30.",
      },
      {
        title: "Sin Pereza",
        color: "#f87171",
        desc: "Encontrar causas raíz. Nada de fixes temporales. Estándares de desarrollador senior. Si el fix es un parche, no es un fix.",
      },
      {
        title: "Impacto Mínimo",
        color: "#60a5fa",
        desc: "Los cambios solo deben tocar lo necesario. Evitar introducir bugs. Cada línea modificada es un riesgo — minimízalo.",
      },
    ],
  },
];

function SubsectionCard({ num, title, subtitle, color, points, insight }) {
  return (
    <div style={{
      border: "1px solid rgba(255,255,255,0.08)",
      borderLeft: `3px solid ${color}`,
      borderRadius: "0 8px 8px 0",
      padding: "14px 16px",
      background: palette.surface,
    }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
        <div style={{
          width: 26, height: 26, borderRadius: 6,
          background: `${color}15`, border: `1.5px solid ${color}40`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 11, fontWeight: 700, color, fontFamily: fonts.mono,
          flexShrink: 0,
        }}>{num}</div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: palette.textPrimary }}>{title}</div>
          <div style={{ fontSize: 10, color: palette.textMuted }}>{subtitle}</div>
        </div>
      </div>

      {/* Points */}
      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 5 }}>
        {points.map((point, i) => (
          <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 12, color: palette.textSecondary, lineHeight: 1.5 }}>
            <span style={{ color, fontSize: 10, marginTop: 3, flexShrink: 0 }}>▸</span>
            {point}
          </li>
        ))}
      </ul>

      {/* Insight */}
      {insight && (
        <div style={{
          marginTop: 10, padding: "8px 12px", borderRadius: 6,
          background: palette.surfaceDeep,
          borderLeft: `2px solid ${color}50`,
          fontSize: 11, color: palette.textMuted, fontStyle: "italic", lineHeight: 1.4,
        }}>
          <span style={{ fontStyle: "normal", fontWeight: 600, color }}>💡 </span>
          {insight}
        </div>
      )}
    </div>
  );
}

function StepFlow({ steps }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 8 }}>
      {steps.map(({ num, label, desc, color }) => (
        <div key={num} style={{
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 8, padding: "12px 14px",
          background: palette.surface,
          display: "flex", alignItems: "flex-start", gap: 10,
        }}>
          <div style={{
            width: 22, height: 22, borderRadius: "50%",
            background: `${color}20`, border: `1.5px solid ${color}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 10, fontWeight: 700, color, fontFamily: fonts.mono,
            flexShrink: 0,
          }}>{num}</div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: palette.textPrimary }}>{label}</div>
            <div style={{ fontSize: 11, color: palette.textMuted, marginTop: 2, lineHeight: 1.4 }}>{desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function PrincipleCard({ title, color, desc }) {
  return (
    <div style={{
      flex: 1, minWidth: 200,
      border: `1px solid ${color}30`,
      borderTop: `3px solid ${color}`,
      borderRadius: 8, padding: "14px 16px",
      background: palette.surface,
    }}>
      <div style={{ fontSize: 14, fontWeight: 700, color: palette.textPrimary, marginBottom: 6 }}>{title}</div>
      <p style={{ fontSize: 12, color: palette.textSecondary, lineHeight: 1.5, margin: 0 }}>{desc}</p>
    </div>
  );
}

export default function WorkflowRulesPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

      {/* Hero intro */}
      <div style={{
        border: `1px solid ${palette.borderMedium}`,
        borderRadius: 8, padding: "14px 18px",
        background: "linear-gradient(135deg, rgba(59,130,246,0.06) 0%, rgba(139,92,246,0.06) 100%)",
      }}>
        <h2 style={{
          fontSize: 16, fontWeight: 800, margin: "0 0 6px",
          background: "linear-gradient(135deg, #e8e8f0 0%, #60a5fa 50%, #a78bfa 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        }}>Reglas de Orquestación para Agentes de IA</h2>
        <p style={{ fontSize: 12, color: palette.textSecondary, margin: 0, lineHeight: 1.5 }}>
          Un agente sin reglas claras es un generador de código aleatorio con buena gramática.
          Estas directivas convierten a un LLM en un <strong style={{ color: palette.accentHover }}>ingeniero autónomo disciplinado</strong> —
          que planifica antes de actuar, verifica antes de cerrar, y aprende de cada error.
        </p>
      </div>

      {/* Section 1: Orchestration */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <span style={{ fontSize: 18 }}>{sections[0].icon}</span>
          <div>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: palette.textPrimary, margin: 0 }}>{sections[0].title}</h3>
            <p style={{ fontSize: 11, color: palette.textMuted, margin: "2px 0 0" }}>{sections[0].intro}</p>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {sections[0].subsections.map(sub => <SubsectionCard key={sub.num} {...sub} />)}
        </div>
      </div>

      {/* Section 2: Task Management */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <span style={{ fontSize: 18 }}>{sections[1].icon}</span>
          <div>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: palette.textPrimary, margin: 0 }}>{sections[1].title}</h3>
            <p style={{ fontSize: 11, color: palette.textMuted, margin: "2px 0 0" }}>{sections[1].intro}</p>
          </div>
        </div>
        <StepFlow steps={sections[1].steps} />
      </div>

      {/* Section 3: Principles */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <span style={{ fontSize: 18 }}>{sections[2].icon}</span>
          <div>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: palette.textPrimary, margin: 0 }}>{sections[2].title}</h3>
            <p style={{ fontSize: 11, color: palette.textMuted, margin: "2px 0 0" }}>{sections[2].intro}</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {sections[2].principles.map(p => <PrincipleCard key={p.title} {...p} />)}
        </div>
      </div>

      {/* Closing callout */}
      <div style={{
        border: `1px solid ${palette.borderMedium}`,
        borderRadius: 8, padding: "12px 16px",
        background: palette.surfaceDeep,
        textAlign: "center",
      }}>
        <p style={{ fontSize: 12, color: palette.textSecondary, margin: 0, lineHeight: 1.6 }}>
          Estas reglas no son sugerencias — son el <strong style={{ color: "#fbbf24" }}>contrato operativo</strong> entre tú y tu agente.
          <br />
          <span style={{ color: palette.textMuted, fontSize: 11 }}>
            Ponlas en tu CLAUDE.md, system prompt, o steering file. El agente que las sigue produce código de staff engineer.
          </span>
        </p>
      </div>

      {/* Footer */}
      <div style={{ textAlign: "center", marginTop: 4, paddingTop: 12, borderTop: `1px solid ${palette.borderLight}`, fontSize: 12 }}>
        <span style={{ color: palette.textDim }}>Guía por </span>
        <a href="https://www.linkedin.com/in/genil-alejandro-suarez/" target="_blank" rel="noopener noreferrer"
          style={{ color: palette.accent, textDecoration: "none", fontWeight: 600 }}>Genil Suárez</a>
      </div>
    </div>
  );
}
