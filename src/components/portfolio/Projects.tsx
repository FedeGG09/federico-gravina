import { portfolioData } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";
import { FadeIn } from "./FadeIn";
import {
  Shield,
  TrendingUp,
  User,
  Layers,
  Activity,
  CheckCircle2,
} from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <SectionHeader
          label="Proyectos"
          title="AI Platforms · Executive Case Studies"
        />

        <div className="grid gap-10">
          {portfolioData.projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.08}>
              <article
                className={`card-surface overflow-hidden border border-border/60 hover:border-primary/30 transition-all ${
                  project.isHero ? "ring-1 ring-primary/20" : ""
                }`}
              >
                {/* STATUS BAR */}
                <div className="px-8 py-3 border-b border-border bg-secondary/30 flex flex-wrap gap-3 text-[11px] uppercase tracking-wider">
                  <span className="text-primary flex items-center gap-1">
                    <CheckCircle2 size={12} /> Production
                  </span>
                  <span className="text-muted-foreground">99.5% SLA</span>
                  <span className="text-muted-foreground">RBAC</span>
                  <span className="text-muted-foreground">Audit Logs</span>
                  <span className="text-muted-foreground">Observability</span>
                </div>

                <div className="p-8 md:p-10">
                  <div className="mb-8">
                    <p className="text-xs font-mono uppercase text-primary tracking-widest mb-2">
                      {project.client}
                    </p>
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div>
                      <p className="text-xs uppercase text-primary mb-2">Problema</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase text-primary mb-2">Enfoque</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.approach}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase text-primary mb-2">
                        Decisión técnica
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.technicalDecision}
                      </p>
                    </div>
                  </div>

                  {/* KPI DASHBOARD */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {project.kpis.map((kpi) => (
                      <div
                        key={kpi.label}
                        className="rounded-xl border border-border bg-secondary/30 p-4 text-center"
                      >
                        <p className="text-2xl font-bold text-primary font-mono">
                          {kpi.value}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {kpi.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* RESULTS */}
                  <div className="mb-8">
                    <p className="text-xs uppercase text-primary mb-3 flex items-center gap-2">
                      <TrendingUp size={14} /> Business Impact
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.results.map((r) => (
                        <span
                          key={r}
                          className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm border border-primary/20"
                        >
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <p className="text-xs uppercase text-muted-foreground mb-3 flex items-center gap-2">
                        <Shield size={14} /> Architecture & Governance
                      </p>
                      <ul className="space-y-2">
                        {project.architecture.map((a) => (
                          <li key={a} className="text-sm text-muted-foreground flex gap-2">
                            <Activity size={14} className="text-primary mt-0.5" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-xs uppercase text-muted-foreground mb-3 flex items-center gap-2">
                        <User size={14} /> Ownership
                      </p>
                      <ul className="space-y-2">
                        {project.ownership.map((o) => (
                          <li key={o} className="text-sm text-muted-foreground flex gap-2">
                            <CheckCircle2
                              size={14}
                              className="text-primary mt-0.5"
                            />
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-5 border-t border-border">
                    <Layers size={14} className="text-muted-foreground mt-1" />
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs border border-border text-muted-foreground"
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
