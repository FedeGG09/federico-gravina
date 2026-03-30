import { portfolioData } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";
import { FadeIn } from "./FadeIn";
import {
  Shield,
  TrendingUp,
  User,
  Layers,
  Activity,
  Clock3,
} from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <SectionHeader
          label="AI Control Modules"
          title="Plataformas, observabilidad y business impact"
        />

        <div className="grid gap-10">
          {portfolioData.projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.08}>
              <article className="card-surface overflow-hidden border border-border/60 hover:border-primary/30 transition-all">
                <div className="p-8 md:p-10">
                  {/* TOP BAR */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <div>
                      <p className="text-xs font-mono uppercase text-primary tracking-widest mb-2">
                        {project.client}
                      </p>
                      <h3 className="text-2xl font-semibold">
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex gap-3">
                      <div className="px-3 py-2 rounded-lg bg-primary/10 text-primary text-xs font-mono">
                        SLA 99%+
                      </div>
                      <div className="px-3 py-2 rounded-lg bg-secondary text-xs font-mono">
                        PROD ACTIVE
                      </div>
                    </div>
                  </div>

                  {/* KPI STRIP */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {project.kpis.map((kpi) => (
                      <div
                        key={kpi.label}
                        className="rounded-xl border border-border bg-secondary/30 p-4"
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

                  {/* EXEC GRID */}
                  <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-6">
                      <div>
                        <p className="text-xs font-mono uppercase text-primary mb-3 flex items-center gap-2">
                          <Activity size={14} />
                          Problem / Strategy
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                          {project.problem}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.approach}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-mono uppercase text-primary mb-3 flex items-center gap-2">
                          <Shield size={14} />
                          Architecture / Governance
                        </p>
                        <ul className="space-y-2">
                          {project.architecture.map((a) => (
                            <li key={a} className="text-sm text-muted-foreground">
                              • {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <p className="text-xs font-mono uppercase text-primary mb-3 flex items-center gap-2">
                          <TrendingUp size={14} />
                          Business Impact
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.results.map((r) => (
                            <span
                              key={r}
                              className="px-3 py-2 rounded-lg bg-primary/10 text-primary text-sm"
                            >
                              {r}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-xs font-mono uppercase text-primary mb-3 flex items-center gap-2">
                          <User size={14} />
                          Ownership
                        </p>
                        <ul className="space-y-2">
                          {project.ownership.map((o) => (
                            <li key={o} className="text-sm text-muted-foreground">
                              ✓ {o}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* FOOTER STACK */}
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-border">
                    <Clock3 size={14} className="text-primary mt-1" />
                    <Layers size={14} className="text-primary mt-1" />
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-md border border-border text-xs"
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
