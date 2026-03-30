import { portfolioData } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";
import { FadeIn } from "./FadeIn";

const tagColors: Record<string, string> = {
  "Arquitectura": "bg-primary/15 text-primary border-primary/25",
  "Producto": "bg-accent/15 text-accent border-accent/25",
  "Backend": "bg-primary/10 text-primary border-primary/20",
  "Métricas": "bg-primary/10 text-primary/80 border-primary/15",
  "Negocio": "bg-secondary text-secondary-foreground border-border",
  "Automatización": "bg-primary/15 text-primary border-primary/25",
  "Liderazgo técnico": "bg-primary/20 text-primary border-primary/30",
  "Docencia": "bg-secondary text-secondary-foreground border-border",
};

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <SectionHeader label="Trayectoria" title="Experiencia Profesional" />
        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="grid gap-12">
            {portfolioData.experience.map((exp, i) => (
              <FadeIn key={exp.period} delay={i * 0.1}>
                <div className="md:pl-20 relative">
                  <div className="absolute left-[29px] top-2 w-3 h-3 rounded-full bg-primary border-2 border-background hidden md:block" />

                  <div className="card-surface p-8 hover:glow-sm transition-all">
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-3 gap-2">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                        <p className="text-primary text-sm">{exp.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground font-mono shrink-0">{exp.period}</span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2.5 py-0.5 text-xs rounded-full border font-medium ${
                            tagColors[tag] || "bg-secondary text-secondary-foreground border-border"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {exp.summary}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
