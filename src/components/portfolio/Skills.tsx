import { portfolioData } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";
import { FadeIn } from "./FadeIn";

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <SectionHeader label="Stack Técnico" title="Tecnologías & Dominio" />

        {/* Dominant Stacks */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {portfolioData.skillsDominant.map((group, i) => (
            <FadeIn key={group.category} delay={i * 0.08}>
              <div className="card-surface p-6 hover:border-primary/30 transition-colors h-full hover:glow-sm">
                <h3 className="text-sm font-semibold text-primary mb-5 font-mono tracking-wide uppercase">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-sm rounded-md bg-primary/10 text-primary border border-primary/20 font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Industrial / Business Domain */}
        <FadeIn delay={0.25}>
          <div className="card-surface p-6 mb-6">
            <h3 className="text-xs font-mono uppercase text-primary tracking-wide mb-4">
              Dominio Industrial & Negocio
            </h3>
            <div className="flex flex-wrap gap-2">
              {portfolioData.skillsIndustry.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 text-sm rounded-md bg-primary/8 text-primary/90 border border-primary/15 italic font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Secondary Technologies */}
        <FadeIn delay={0.35}>
          <div className="card-surface p-6">
            <h3 className="text-xs font-mono uppercase text-muted-foreground tracking-wide mb-4">
              Tecnologías complementarias
            </h3>
            <div className="flex flex-wrap gap-2">
              {portfolioData.skillsSecondary.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 text-sm rounded-md bg-secondary text-secondary-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
