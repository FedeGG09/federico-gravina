import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center section-padding pt-32">
      {/* Subtle glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl flex-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              Abierto a roles de innovación y liderazgo técnico
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              {portfolioData.headline}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground/80 max-w-xl mb-10 leading-relaxed">
              {portfolioData.tagline}
            </p>

            <div className="flex flex-wrap gap-4 mb-14">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all text-sm tracking-wide"
              >
                Ver casos de estudio <ArrowRight size={18} />
              </a>
              <a
                href={portfolioData.cvUrl}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-border text-foreground hover:bg-secondary transition-all text-sm font-medium"
              >
                <Download size={18} /> Descargar CV
              </a>
              <a
                href={portfolioData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>

            {/* Hero Metrics — enterprise KPIs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {portfolioData.heroMetrics.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className="card-surface p-4 text-center"
                >
                  <p className="text-2xl md:text-3xl font-bold text-primary font-mono">{metric.value}</p>
                  <p className="text-[11px] text-muted-foreground mt-1.5 leading-tight">{metric.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/40 to-primary/10 rounded-full blur-lg" />
              <img
                src={profilePhoto}
                alt={`Foto de ${portfolioData.name}`}
                width={280}
                height={280}
                className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full object-cover border-2 border-border shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
