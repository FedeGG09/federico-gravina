import { portfolioData } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";
import { FadeIn } from "./FadeIn";
import { Mail, Github, Linkedin, Download } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <SectionHeader label="Contacto" title="Conversemos" />
        <FadeIn>
          <div className="max-w-2xl">
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              {portfolioData.contactClosing}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href={`mailto:${portfolioData.email}`}
                className="card-surface p-5 flex items-center gap-4 hover:border-primary/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-primary">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors">{portfolioData.email}</p>
                </div>
              </a>

              <a
                href={portfolioData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="card-surface p-5 flex items-center gap-4 hover:border-primary/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-primary">
                  <Github size={18} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors">Ver repositorios</p>
                </div>
              </a>

              <a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="card-surface p-5 flex items-center gap-4 hover:border-primary/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-primary">
                  <Linkedin size={18} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors">Conectar</p>
                </div>
              </a>

              <a
                href={portfolioData.cvUrl}
                className="card-surface p-5 flex items-center gap-4 hover:border-primary/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-primary">
                  <Download size={18} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">CV</p>
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors">Descargar PDF</p>
                </div>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
