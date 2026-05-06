import RoleCard from "../components/ui/RoleCard";
import ProblemBadge from "../components/ui/ProblemBadge";
import DetailCard from "../components/ui/DetailCard";
import FlowStep from "../components/ui/FlowStep";
import { palette, fonts } from "../styles/tokens";

export default function SDDHarnessPage() {
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
        border: `1px solid ${palette.borderMedium}`,
        borderRadius: 8, padding: "14px 16px",
        background: palette.surface,
      }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 4, marginBottom: 10 }}>
          <FlowStep label="ENTRADA" title="Spec" color="#60a5fa" first />
          <FlowStep label="VALIDACIÓN" title="Harness" color="#34d399" />
          <FlowStep label="GENERACIÓN" title="IA" color="#c084fc" />
          <FlowStep label="SALIDA" title="Tests" color="#34d399" />
        </div>
        <p style={{ textAlign: "center", fontSize: 11, color: palette.textMuted, margin: 0, fontFamily: fonts.mono }}>
          Loop corto · <span style={{ color: "#60a5fa", fontWeight: 600 }}>feedback a la spec</span> · no waterfall
        </p>
      </div>

      {/* Bottom callout */}
      <div style={{
        border: `1px solid ${palette.borderMedium}`,
        borderRadius: 8, padding: "14px 16px",
        background: palette.surface,
        display: "flex", gap: 16, flexWrap: "wrap", alignItems: "flex-start",
      }}>
        <div style={{ flex: 1, minWidth: 200 }}>
          <p style={{ fontSize: 11, color: palette.textMuted, margin: "0 0 4px" }}>La ventaja no es velocidad de generación</p>
          <p style={{ fontSize: 13, fontWeight: 700, margin: 0, lineHeight: 1.4 }}>
            <span style={{ color: "#60a5fa" }}>Calidad del contexto en la entrada</span>
            <br />
            <span style={{ color: palette.textSecondary }}>+</span>{" "}
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
              border: `1px solid ${palette.borderMedium}`, borderRadius: 6,
              padding: "7px 12px", background: palette.surfaceDeep,
              fontSize: 12, color: palette.textSecondary,
            }}>
              <span>{icon}</span>
              <span>{q}</span>
              <span style={{ fontFamily: fonts.mono, fontWeight: 700, color: palette.textPrimary }}>{highlight}</span>
              <span>{rest}</span>
            </div>
          ))}
        </div>
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
