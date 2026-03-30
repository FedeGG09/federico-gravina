import { portfolioData } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";
import { FadeIn } from "./FadeIn";

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <SectionHeader label="Sobre mí" title="Perfil Ejecutivo" />
        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {portfolioData.about}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
