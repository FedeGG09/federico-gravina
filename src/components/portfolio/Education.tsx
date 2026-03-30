import { portfolioData } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";
import { FadeIn } from "./FadeIn";
import { GraduationCap, Award, Globe } from "lucide-react";
import { useState } from "react";

export function Education() {
  const [showAllCerts, setShowAllCerts] = useState(false);
  const visibleCerts = showAllCerts ? portfolioData.certifications : portfolioData.certifications.slice(0, 6);

  return (
    <section id="education" className="section-padding">
      <div className="container">
        <SectionHeader label="Formación" title="Educación & Certificaciones" />

        <div className="grid md:grid-cols-3 gap-8">
          {/* Education */}
          <FadeIn>
            <div>
              <h3 className="flex items-center gap-2 text-sm font-mono uppercase text-primary tracking-wide mb-6">
                <GraduationCap size={16} /> Educación
              </h3>
              <div className="space-y-4">
                {portfolioData.education.map((edu) => (
                  <div key={edu.degree} className="card-surface p-5">
                    <p className="font-semibold text-foreground text-sm">{edu.degree}</p>
                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                    <p className="text-xs text-muted-foreground font-mono mt-1">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Certifications */}
          <FadeIn delay={0.1}>
            <div className="md:col-span-1">
              <h3 className="flex items-center gap-2 text-sm font-mono uppercase text-primary tracking-wide mb-6">
                <Award size={16} /> Certificaciones
                <span className="text-xs text-muted-foreground font-normal normal-case">
                  ({portfolioData.certifications.length})
                </span>
              </h3>
              <div className="card-surface p-6">
                <ul className="space-y-2.5">
                  {visibleCerts.map((cert) => (
                    <li key={cert} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary shrink-0">◆</span>
                      {cert}
                    </li>
                  ))}
                </ul>
                {portfolioData.certifications.length > 6 && (
                  <button
                    onClick={() => setShowAllCerts(!showAllCerts)}
                    className="mt-4 text-sm text-primary hover:text-primary/80 transition-colors font-mono"
                  >
                    {showAllCerts
                      ? "Ver menos"
                      : `Ver todas (${portfolioData.certifications.length})`}
                  </button>
                )}
              </div>
            </div>
          </FadeIn>

          {/* Languages */}
          <FadeIn delay={0.2}>
            <div>
              <h3 className="flex items-center gap-2 text-sm font-mono uppercase text-primary tracking-wide mb-6">
                <Globe size={16} /> Idiomas
              </h3>
              <div className="card-surface p-6">
                <ul className="space-y-3">
                  {portfolioData.languages.map((lang) => (
                    <li key={lang.language} className="text-sm text-muted-foreground flex justify-between">
                      <span className="text-foreground font-medium">{lang.language}</span>
                      <span className="font-mono text-xs text-primary">{lang.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
