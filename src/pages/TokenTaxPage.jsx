import { palette, fonts } from "../styles/tokens";

const languages = [
  { name: "Inglés", openai: 1.0, anthropic: 1.0, note: null, noteColor: "green", baseline: true },
  { name: "Español", openai: 1.2, anthropic: 1.62, note: "+35% vs OpenAI", noteColor: "red" },
  { name: "Chino", openai: 1.15, anthropic: 1.71, note: "+49% vs OpenAI", noteColor: "red" },
  { name: "Árabe", openai: 1.31, anthropic: 3.0, note: "⚠ 3 veces más", noteColor: "red" },
  { name: "Hindú", openai: 1.37, anthropic: 3.24, note: "⚠ 3.24 veces más", noteColor: "red" },
];

const whyReasons = [
  "Los tokenizadores se construyen optimizando para el idioma dominante en los datos de entrenamiento: el inglés.",
  "No es una decisión maliciosa — es un sesgo estructural en cómo se diseñan los vocabularios del tokenizador.",
  "Un texto en otro idioma se fragmenta en más piezas para representar el mismo contenido semántico.",
  "El español sale relativamente bien parado: es el 2do idioma con mejor ratio en modelos occidentales.",
];

const implications = [
  "Workloads con prompts en idioma no inglés pagan un sobrecosto silencioso en cada llamada.",
  "En arquitecturas multiagente o RAG, el multiplicador se amplifica con cada hop de contexto.",
  "El costo real no está solo en el modelo elegido, sino en cómo ese modelo tokeniza tu idioma.",
  "Para chino: los modelos nativos (Qwen, DeepSeek, Kimi) tienen tokenizadores optimizados — invierten la ventaja.",
];

const tactics = [
  {
    icon: "🇬🇧",
    title: "System prompts en inglés",
    desc: "Escribe instrucciones del sistema en inglés. Recibe respuestas en español. Obtienes lo mejor de ambos mundos sin sacrificar UX.",
    saving: "↓ 20–40% tokens en instrucciones",
    color: "#00C6FF",
  },
  {
    icon: "🪨",
    title: 'Estilo "Hombre de las cavernas"',
    desc: "Instruye al modelo a responder sin palabras innecesarias, omitiendo preámbulos y postámbulos. Cada token cuenta en volumen.",
    saving: "↓ hasta 75% en verbosidad",
    color: "#4de89e",
  },
  {
    icon: "🐉",
    title: "Modelo nativo para el idioma",
    desc: "Para chino, usa Qwen o DeepSeek. Sus tokenizadores están optimizados para ese idioma. La elección del modelo importa tanto como el precio.",
    saving: "ratio <1.1x en modelos nativos",
    color: "#ff7d96",
  },
];

const MAX_VALUE = 3.3;

function BarChart() {
  const barHeight = 18;
  const openaiColor = "rgba(123,189,212,0.4)";
  const openaiBorder = "rgba(123,189,212,0.6)";
  const anthropicColor = "rgba(255,107,107,0.35)";
  const anthropicBorder = "rgba(255,107,107,0.6)";
  const baselineColor = "rgba(77,232,158,0.35)";
  const baselineBorder = "rgba(77,232,158,0.6)";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {/* Legend */}
      <div style={{ display: "flex", gap: 20, alignItems: "center", marginBottom: 4 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 10, height: 10, borderRadius: 2, background: openaiBorder }} />
          <span style={{ fontSize: 10, color: palette.textMuted, fontFamily: fonts.mono }}>OpenAI</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 10, height: 10, borderRadius: 2, background: anthropicBorder }} />
          <span style={{ fontSize: 10, color: palette.textMuted, fontFamily: fonts.mono }}>Anthropic</span>
        </div>
      </div>

      {/* Scale */}
      <div style={{ display: "grid", gridTemplateColumns: "70px 1fr", gap: 12, alignItems: "center" }}>
        <div />
        <div>
          <div style={{ height: 1, background: "rgba(255,255,255,0.06)" }} />
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 3 }}>
            {["1.0x", "1.5x", "2.0x", "2.5x", "3.0x+"].map(t => (
              <span key={t} style={{ fontSize: 9, color: palette.textDim, fontFamily: fonts.mono }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Bars */}
      {languages.map(lang => (
        <div key={lang.name} style={{ display: "grid", gridTemplateColumns: "70px 1fr", gap: 12, alignItems: "center" }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: palette.textPrimary, textAlign: "right" }}>
            {lang.name}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {/* OpenAI bar */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, height: barHeight }}>
              <div style={{
                height: "100%", borderRadius: 2,
                width: `${(lang.openai / MAX_VALUE) * 100}%`,
                background: lang.baseline ? baselineColor : openaiColor,
                border: `1px solid ${lang.baseline ? baselineBorder : openaiBorder}`,
              }} />
              <span style={{ fontSize: 10, color: palette.textPrimary, fontFamily: fonts.mono, whiteSpace: "nowrap" }}>
                {lang.openai}x
              </span>
              {lang.baseline && (
                <span style={{ fontSize: 9, color: "#4de89e", fontFamily: fonts.mono }}>baseline</span>
              )}
            </div>
            {/* Anthropic bar */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, height: barHeight }}>
              <div style={{
                height: "100%", borderRadius: 2,
                width: `${(lang.anthropic / MAX_VALUE) * 100}%`,
                background: lang.baseline ? baselineColor : anthropicColor,
                border: `1px solid ${lang.baseline ? baselineBorder : anthropicBorder}`,
              }} />
              <span style={{ fontSize: 10, color: palette.textPrimary, fontFamily: fonts.mono, whiteSpace: "nowrap" }}>
                {lang.anthropic}x
              </span>
              {lang.note && (
                <span style={{ fontSize: 9, color: lang.noteColor === "red" ? "#ff7d96" : "#4de89e", fontFamily: fonts.mono }}>
                  {lang.note}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function TacticCard({ icon, title, desc, saving, color }) {
  return (
    <div style={{
      flex: "1 1 200px", minWidth: 180,
      border: `1px solid ${color}30`,
      borderTop: `3px solid ${color}`,
      borderRadius: 8, padding: "14px 16px",
      background: palette.surface,
    }}>
      <span style={{ fontSize: 22, display: "block", marginBottom: 8 }}>{icon}</span>
      <div style={{ fontSize: 12, fontWeight: 700, color: palette.textPrimary, marginBottom: 6, lineHeight: 1.3 }}>{title}</div>
      <p style={{ fontSize: 11, color: palette.textMuted, lineHeight: 1.5, margin: "0 0 10px" }}>{desc}</p>
      <span style={{
        display: "inline-block", fontSize: 10, fontFamily: fonts.mono,
        padding: "3px 8px", borderRadius: 4,
        color, background: `${color}15`,
      }}>{saving}</span>
    </div>
  );
}

function ListBlock({ title, items, color }) {
  return (
    <div style={{ flex: 1, minWidth: 240 }}>
      <h4 style={{ fontSize: 12, fontWeight: 700, color, letterSpacing: 0.5, textTransform: "uppercase", margin: "0 0 10px" }}>
        {title}
      </h4>
      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
        {items.map((item, i) => (
          <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 11, color: palette.textSecondary, lineHeight: 1.5 }}>
            <span style={{ color, fontSize: 9, marginTop: 3, flexShrink: 0 }}>▸</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TokenTaxPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

      {/* Hero */}
      <div style={{
        border: `1px solid ${palette.borderMedium}`,
        borderRadius: 8, padding: "14px 18px",
        background: "linear-gradient(135deg, rgba(0,198,255,0.06) 0%, rgba(0,229,160,0.04) 100%)",
      }}>
        <div style={{ fontSize: 9, fontFamily: fonts.mono, color: "#00C6FF", letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
          FinOps · LLMOps · Token Economics
        </div>
        <h2 style={{
          fontSize: 16, fontWeight: 800, margin: "0 0 6px", lineHeight: 1.2,
          background: "linear-gradient(135deg, #e8e8f0 0%, #00C6FF 50%, #00E5A0 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        }}>
          El impuesto oculto de la IA: ¿por qué hablar español te sale caro?
        </h2>
        <p style={{ fontSize: 11, color: palette.textMuted, margin: 0, fontFamily: fonts.mono }}>
          Multiplicador de tokens por idioma vs. baseline inglés (1.0x) — OpenAI vs. Anthropic
        </p>
      </div>

      {/* Insight box */}
      <div style={{
        borderLeft: "3px solid #00C6FF",
        borderRadius: "0 6px 6px 0",
        padding: "12px 16px",
        background: "rgba(0,198,255,0.05)",
      }}>
        <p style={{ fontSize: 12, color: palette.textSecondary, lineHeight: 1.6, margin: 0 }}>
          El precio que ves en la consola es solo la mitad de la historia. Hay un costo oculto que la mayoría ignora: el{" "}
          <strong style={{ color: "#00C6FF" }}>tokenizador</strong>. El mismo prompt en otro idioma puede costarte hasta 3x más tokens — sin cambiar modelo ni lógica.
        </p>
      </div>

      {/* Chart section */}
      <div>
        <div style={{ fontSize: 10, fontFamily: fonts.mono, color: palette.textMuted, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 12 }}>
          Multiplicador de costo por idioma (baseline inglés = 1.0x)
        </div>
        <div style={{
          border: `1px solid ${palette.borderLight}`,
          borderRadius: 8, padding: "16px 18px",
          background: palette.surface,
        }}>
          <BarChart />
        </div>
      </div>

      {/* Why + Implications */}
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        <ListBlock title="¿Por qué ocurre esto?" items={whyReasons} color="#00C6FF" />
        <ListBlock title="Implicaciones para FinOps & Plataforma" items={implications} color="#ff7d96" />
      </div>

      {/* Tactics */}
      <div>
        <div style={{ fontSize: 10, fontFamily: fonts.mono, color: palette.textMuted, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 12 }}>
          Tácticas para reducir costo de tokens
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {tactics.map(t => <TacticCard key={t.title} {...t} />)}
        </div>
      </div>

      {/* Key insight */}
      <div style={{
        border: "1px solid rgba(77,232,158,0.25)",
        borderRadius: 8, padding: "14px 18px",
        background: "rgba(77,232,158,0.04)",
        display: "flex", alignItems: "flex-start", gap: 12,
      }}>
        <span style={{ fontSize: 18, flexShrink: 0 }}>💡</span>
        <p style={{ fontSize: 11, color: palette.textSecondary, lineHeight: 1.6, margin: 0 }}>
          El pricing que aparece en la consola es el costo por millón de tokens. Pero si tu idioma necesita 1.6x más tokens para el mismo contenido, tu costo real es{" "}
          <strong style={{ color: "#4de89e" }}>1.6x mayor</strong> — invisible en el dashboard. En producción con alto volumen, ese delta es la diferencia entre un proyecto rentable y uno que no lo es.
        </p>
      </div>

      {/* Footer */}
      <div style={{
        textAlign: "center", marginTop: 4, paddingTop: 12,
        borderTop: `1px solid ${palette.borderLight}`, fontSize: 12,
      }}>
        <div style={{ fontSize: 9, color: palette.textDim, fontFamily: fonts.mono, marginBottom: 4 }}>
          #LLMOps · #FinOps · #PlatformEngineering · #GenerativeAI
        </div>
        <span style={{ color: palette.textDim }}>Guía por </span>
        <a href="https://www.linkedin.com/in/genil-alejandro-suarez/" target="_blank" rel="noopener noreferrer"
          style={{ color: palette.accent, textDecoration: "none", fontWeight: 600 }}>Genil Suárez</a>
      </div>
    </div>
  );
}
