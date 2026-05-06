import { useState } from "react";
import Accordion from "../components/Accordion";
import Table from "../components/Table";
import CodeBlock from "../components/CodeBlock";
import Verdict from "../components/ui/Verdict";
import TreeItem from "../components/ui/TreeItem";
import { tree, versus, agentic, surfaces } from "../data/content";
import { palette, fonts } from "../styles/tokens";

export default function ContextEngineeringPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* Estructura */}
      <Accordion icon="📁" iconBg="#78350f" iconColor="#fbbf24" title="Estructura del proyecto" subtitle="Dónde vive cada archivo y qué hace">
        <div style={{ background: palette.surfaceDeep, borderRadius: 6, padding: "10px 12px", marginBottom: 8 }}>
          {tree.map((item, i) => <TreeItem key={i} {...item} />)}
        </div>
        <Verdict color="amber">
          También existe <code style={{ background: "rgba(255,255,255,0.08)", padding: "1px 5px", borderRadius: 3, fontSize: 11 }}>~/.claude/</code> (directorio global). Skills y agents ahí aplican a todos tus proyectos.
        </Verdict>
      </Accordion>

      {/* No-agéntico vs Agéntico */}
      <Accordion icon="🔀" iconBg="#1e3a8a" iconColor="#60a5fa" title="¿Quién gestiona el contexto?" subtitle="La diferencia fundamental entre claude.ai y Claude Code">
        <p style={{ color: palette.textSecondary, fontSize: 12, marginBottom: 8 }}>
          La diferencia no es "cuántas features tienes" sino{" "}
          <strong style={{ color: "#93c5fd" }}>quién decide qué contexto se carga y cuándo</strong>.
        </p>
        <Table headers={["Aspecto", "No-agéntico (claude.ai)", "Agéntico (Claude Code)"]} rows={agentic} />
        <Verdict color="blue">
          En claude.ai, tú eres el arquitecto de contexto. En Claude Code, el agente es co-arquitecto — carga Skills, delega a subagentes, y lee del filesystem sin preguntarte.
        </Verdict>
      </Accordion>

      {/* Versus */}
      <Accordion icon="⚔️" iconBg="#3b0764" iconColor="#c084fc" title="Comparaciones que importan" subtitle="Las confusiones más comunes — Skill, Command, Hook, MCP, Subagente">
        <div style={{ borderRadius: 6, overflow: "hidden", border: `1px solid ${palette.borderLight}` }}>
          <div style={{
            display: "flex", overflowX: "auto", borderBottom: `1px solid ${palette.borderMedium}`,
            background: palette.surface, scrollbarWidth: "none",
          }}>
            {versus.map((v, i) => (
              <button key={v.id} onClick={() => setActiveTab(i)} style={{
                flexShrink: 0, padding: "8px 14px",
                background: activeTab === i ? "rgba(59,130,246,0.12)" : "transparent",
                border: "none", borderBottom: `2px solid ${activeTab === i ? "#3b82f6" : "transparent"}`,
                color: activeTab === i ? "#60a5fa" : "#6b7280",
                fontFamily: fonts.sans, fontSize: 11, fontWeight: 600,
                cursor: "pointer", whiteSpace: "nowrap", transition: "all 0.2s",
              }}>{v.label}</button>
            ))}
          </div>
          <div style={{ padding: "10px 12px" }}>
            {versus.map((v, i) => activeTab === i && (
              <div key={v.id}>
                {v.intro && <p style={{ color: palette.textMuted, fontSize: 12, marginBottom: 8, lineHeight: 1.5 }}>{v.intro}</p>}
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
        <p style={{ color: palette.textMuted, fontSize: 12, margin: "8px 0" }}>
          Los problemas aparecen cuando mezclas capas: poner workflows en CLAUDE.md (capa 1 haciendo trabajo de capa 2), o esperar que una Skill garantice ejecución (capa 2 haciendo trabajo de capa 5).
        </p>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", margin: "6px 0" }}>
          {[["#fbbf24","Identidad"],["#60a5fa","Conocimiento"],["#34d399","Capacidades"],["#c084fc","Delegación"],["#f87171","Enforcement"]].map(([c,l]) => (
            <span key={l} style={{
              display:"flex", alignItems:"center", gap:5, fontSize:10, color: palette.textSecondary,
              padding:"3px 10px", background:"rgba(255,255,255,0.04)", borderRadius:9999,
              fontFamily: fonts.mono, border:"1px solid rgba(255,255,255,0.08)",
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
        <Table headers={["Primitiva", "claude.ai", "Claude Code", "Cowork", "API/SDK"]} rows={surfaces} />
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
      <div style={{ textAlign: "center", marginTop: 16, paddingTop: 12, borderTop: `1px solid ${palette.borderLight}`, fontSize: 12 }}>
        <span style={{ color: palette.textDim }}>Guía por </span>
        <a href="https://www.linkedin.com/in/genil-alejandro-suarez/" target="_blank" rel="noopener noreferrer"
          style={{ color: palette.accent, textDecoration: "none", fontWeight: 600 }}>Genil Suárez</a>
      </div>
    </>
  );
}
