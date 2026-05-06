import { palette, fonts } from "../styles/tokens";

const terms = [
  {
    num: 1,
    title: "MCP",
    subtitle: "PROTOCOLO DE CONTEXTO DE MODELO",
    color: "#60a5fa",
    description: "Estándar abierto que permite a los agentes de IA conectarse con herramientas, APIs y fuentes de datos a través de una interfaz unificada.",
    example: "Claude se conecta a GitHub vía MCP para leer y escribir código de forma autónoma.",
  },
  {
    num: 2,
    title: "Agent Loop",
    subtitle: "PERCIBIR → PLANEAR → ACTUAR → OBSERVAR",
    color: "#34d399",
    description: "El ciclo continuo de razonamiento que ejecuta un agente de IA — percibir entrada, formar un plan, ejecutar acciones y observar resultados.",
    example: "Un agente lee un log de errores, planea un fix, ejecuta el código y verifica que los tests pasen.",
  },
  {
    num: 3,
    title: "Tool Use",
    subtitle: "CAPACIDADES DEL AGENTE",
    color: "#c084fc",
    description: "La capacidad de un modelo de IA para invocar funciones externas — APIs, ejecutores de código, navegadores — para actuar en el mundo real.",
    example: "Un agente llama a una API del clima a mitad de conversación para responder '¿Debería volar a NYC mañana?'",
  },
  {
    num: 4,
    title: "Orquestador",
    subtitle: "GESTOR DE AGENTES",
    color: "#fbbf24",
    description: "El agente de nivel superior que descompone objetivos en subtareas y las delega a subagentes especializados.",
    example: "Un orquestador de código despacha un agente de tests, un agente de lint y un agente de deploy en paralelo.",
  },
  {
    num: 5,
    title: "Subagente",
    subtitle: "TRABAJADOR ESPECIALIZADO",
    color: "#f87171",
    description: "Un agente de IA enfocado que ejecuta una tarea específica dentro de un pipeline multi-agente más grande.",
    example: "Un subagente 'resumidor' condensa 50 papers de investigación antes de que el agente principal sintetice insights.",
  },
  {
    num: 6,
    title: "Memoria",
    subtitle: "CORTO Y LARGO PLAZO",
    color: "#60a5fa",
    description: "Cómo los agentes retienen y recuperan información — en contexto (temporal) o vía almacenes externos (persistente).",
    example: "El agente recuerda tu estilo de código de una sesión previa almacenada en una base de datos vectorial.",
  },
  {
    num: 7,
    title: "Grounding",
    subtitle: "ANCLAJE A LA REALIDAD",
    color: "#34d399",
    description: "Conectar las salidas de la IA con fuentes de datos verificadas para reducir alucinaciones y mejorar la precisión.",
    example: "El agente cita precios de acciones en vivo desde la API de Bloomberg en vez de generar números de sus datos de entrenamiento.",
  },
  {
    num: 8,
    title: "Guardrails",
    subtitle: "CAPA DE SEGURIDAD",
    color: "#c084fc",
    description: "Reglas y restricciones que previenen que los agentes tomen acciones dañinas, no autorizadas o fuera de alcance.",
    example: "El agente tiene bloqueado eliminar bases de datos de producción incluso si se le instruye 'limpia todo'.",
  },
  {
    num: 9,
    title: "Sandboxing",
    subtitle: "EJECUCIÓN SEGURA",
    color: "#fbbf24",
    description: "Entorno aislado donde los agentes ejecutan código sin riesgo de afectar el sistema host o producción.",
    example: "Claude Code ejecuta scripts del usuario en un contenedor Docker antes de aplicar cambios al repo real.",
  },
  {
    num: 10,
    title: "Human-in-the-Loop",
    subtitle: "PUERTA DE APROBACIÓN",
    color: "#f87171",
    description: "Patrón de diseño donde los agentes pausan y solicitan confirmación humana antes de ejecutar acciones de alto riesgo.",
    example: "El agente redacta un email al cliente pero espera tu aprobación antes de enviarlo.",
  },
  {
    num: 11,
    title: "Context Window",
    subtitle: "LÍMITE DE MEMORIA DE TRABAJO",
    color: "#60a5fa",
    description: "La cantidad máxima de texto que un agente puede leer y razonar en una sola interacción — su capacidad de atención.",
    example: "Una ventana de 200K tokens permite al agente leer un codebase entero antes de escribir una sola línea.",
  },
  {
    num: 12,
    title: "Multi-Agent",
    subtitle: "INTELIGENCIA COLABORATIVA",
    color: "#34d399",
    description: "Sistema donde múltiples agentes de IA especializados colaboran, cada uno manejando diferentes tareas para resolver objetivos complejos más rápido y de forma más confiable.",
    example: "Un agente investiga, otro escribe, otro verifica hechos — todos coordinados por un orquestador.",
  },
];

function TermCard({ num, title, subtitle, color, description, example }) {
  return (
    <div style={{
      border: `1px solid rgba(255,255,255,0.08)`,
      borderTop: `3px solid ${color}`,
      borderRadius: 8,
      padding: "14px 16px",
      background: palette.surface,
      display: "flex", flexDirection: "column", gap: 8,
    }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 28, height: 28, borderRadius: "50%",
          background: `${color}20`, border: `1.5px solid ${color}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 12, fontWeight: 700, color, fontFamily: fonts.mono,
          flexShrink: 0,
        }}>{num}</div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: palette.textPrimary }}>{title}</div>
          <div style={{ fontSize: 9, fontFamily: fonts.mono, letterSpacing: 1.2, color, fontWeight: 600, textTransform: "uppercase" }}>{subtitle}</div>
        </div>
      </div>

      {/* Description */}
      <p style={{ fontSize: 12, color: palette.textSecondary, lineHeight: 1.5, margin: 0 }}>
        {description}
      </p>

      {/* Example */}
      <div style={{
        fontSize: 11, color: palette.textMuted, fontStyle: "italic",
        padding: "8px 10px", borderRadius: 6,
        background: palette.surfaceDeep,
        borderLeft: `2px solid ${color}40`,
        lineHeight: 1.4,
      }}>
        <span style={{ fontStyle: "normal", fontWeight: 600, color: palette.textSecondary }}>Ej. </span>
        {example}
      </div>
    </div>
  );
}

export default function AgenticGlossaryPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>

      {/* Intro */}
      <div style={{
        border: `1px solid ${palette.borderMedium}`,
        borderRadius: 8, padding: "12px 16px",
        background: "linear-gradient(135deg, rgba(59,130,246,0.06) 0%, rgba(139,92,246,0.06) 100%)",
        textAlign: "center",
      }}>
        <h2 style={{
          fontSize: 16, fontWeight: 800, margin: "0 0 4px",
          background: "linear-gradient(135deg, #e8e8f0 0%, #60a5fa 50%, #a78bfa 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        }}>12 Términos Esenciales de IA Agéntica</h2>
        <p style={{ fontSize: 11, color: palette.textMuted, margin: 0 }}>
          Conceptos fundamentales para entender el desarrollo con agentes de IA
        </p>
      </div>

      {/* Grid of terms */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: 10,
      }}>
        {terms.map(term => <TermCard key={term.num} {...term} />)}
      </div>

      {/* Attribution */}
      <div style={{
        textAlign: "center", marginTop: 8, paddingTop: 12,
        borderTop: `1px solid ${palette.borderLight}`, fontSize: 11,
        color: palette.textDim,
      }}>
        <span>Basado en </span>
        <span style={{ color: palette.textSecondary, fontWeight: 600 }}>"12 Must-Know Agentic AI Terms"</span>
        <span> por Brij Kishore Pandey · Adaptado al español por </span>
        <a href="https://www.linkedin.com/in/genil-alejandro-suarez/" target="_blank" rel="noopener noreferrer"
          style={{ color: palette.accent, textDecoration: "none", fontWeight: 600 }}>Genil Suárez</a>
      </div>
    </div>
  );
}
