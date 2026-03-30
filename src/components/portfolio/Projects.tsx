import { portfolioData } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";
import { FadeIn } from "./FadeIn";
import { Shield, TrendingUp, User, Layers } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <SectionHeader label="Proyectos" title="Casos de Estudio" />
        <div className="grid gap-10">
          {portfolioData.projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.08}>
              <article
                className={`card-surface overflow-hidden hover:glow-sm transition-all group ${
                  project.isHero ? "border-primary/20" : ""
                }`}
              >
                {project.isHero && (
                  <div className="bg-primary/10 border-b border-primary/20 px-8 py-2">
                    <span className="text-xs font-mono uppercase text-primary tracking-widest">
                      Proyecto destacado
                    </span>
                  </div>
                )}

                <div className="p-8 md:p-10">
                  {/* Header */}
                  <div className="mb-6">
                    <p className="text-xs font-mono uppercase text-primary tracking-wider mb-2">
                      {project.client}
                    </p>
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Problem → Approach → Decision */}
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div>
                      <p className="text-xs font-mono uppercase text-primary mb-2 tracking-wide">Problema</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-mono uppercase text-primary mb-2 tracking-wide">Enfoque</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.approach}</p>
                    </div>
                    <div>
                      <p className="text-xs font-mono uppercase text-primary mb-2 tracking-wide">Decisión técnica</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.technicalDecision}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-8">
                    <p className="text-xs font-mono uppercase text-primary mb-3 tracking-wide flex items-center gap-2">
                      <TrendingUp size={14} /> Resultado
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.results.map((r) => (
                        <span
                          key={r}
                          className="px-3 py-1.5 text-sm rounded-md bg-primary/10 text-primary border border-primary/20"
                        >
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* KPIs */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                    {project.kpis.map((kpi) => (
                      <div
                        key={kpi.label}
                        className="bg-secondary/50 rounded-lg p-4 text-center"
                      >
                        <p className="text-xl md:text-2xl font-bold text-primary font-mono">{kpi.value}</p>
                        <p className="text-xs text-muted-foreground mt-1">{kpi.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Architecture & Ownership */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-xs font-mono uppercase text-muted-foreground mb-3 tracking-wide flex items-center gap-2">
                        <Shield size={14} /> Arquitectura / Seguridad / SLA
                      </p>
                      <ul className="space-y-1.5">
                        {project.architecture.map((a) => (
                          <li key={a} className="text-sm text-muted-foreground flex gap-2">
                            <span className="text-primary shrink-0">›</span> {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-mono uppercase text-muted-foreground mb-3 tracking-wide flex items-center gap-2">
                        <User size={14} /> Ownership
                      </p>
                      <ul className="space-y-1.5">
                        {project.ownership.map((o) => (
                          <li key={o} className="text-sm text-muted-foreground flex gap-2">
                            <span className="text-primary shrink-0">✓</span> {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    <Layers size={14} className="text-muted-foreground mt-0.5" />
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded-md border border-border text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
