import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Activity,
  ShieldCheck,
  Cpu,
  BarChart3,
} from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const capabilities = [
  "Reliability",
  "Forecasting",
  "Field Ops",
  "Compliance",
  "Observability",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/40 text-sm text-muted-foreground mb-8">
              <Activity size={14} className="text-primary" />
              Plataformas de IA para operaciones críticas y entornos industriales
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
              {portfolioData.headline}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground/85 max-w-2xl mb-10 leading-relaxed">
              {portfolioData.tagline}
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all"
              >
                Ver casos de estudio <ArrowRight size={18} />
              </a>

              <a
                href={portfolioData.cvUrl}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-border hover:bg-secondary transition-all"
              >
                <Download size={18} />
                Descargar CV
              </a>

              <a
                href={portfolioData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-border hover:bg-secondary"
              >
                <Github size={18} />
              </a>

              <a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-border hover:bg-secondary"
              >
                <Linkedin size={18} />
              </a>
            </div>

            {/* KPI GRID */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {portfolioData.heroMetrics.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                  className="card-surface p-5 text-center border border-border/50"
                >
                  <p className="text-2xl md:text-3xl font-bold text-primary font-mono">
                    {metric.value}
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-2 leading-tight">
                    {metric.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CAPABILITIES STRIP */}
            <div className="flex flex-wrap gap-3">
              {capabilities.map((cap) => (
                <span
                  key={cap}
                  className="px-3 py-1.5 rounded-full text-xs border border-primary/20 bg-primary/5 text-primary"
                >
                  {cap}
                </span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE COMMAND PANEL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative mx-auto w-fit">
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/30 to-primary/5 rounded-full blur-xl" />
              <img
                src={profilePhoto}
                alt={portfolioData.name}
                className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-full object-cover border-2 border-border shadow-2xl"
              />
            </div>

            <div className="card-surface p-6 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">System Status</span>
                <span className="text-primary font-medium">Production</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-secondary/50 p-4">
                  <ShieldCheck size={16} className="mb-2 text-primary" />
                  <p className="text-xs text-muted-foreground">Compliance</p>
                  <p className="font-semibold">Audit Ready</p>
                </div>

                <div className="rounded-xl bg-secondary/50 p-4">
                  <Cpu size={16} className="mb-2 text-primary" />
                  <p className="text-xs text-muted-foreground">Latency</p>
                  <p className="font-semibold">&lt; 4s</p>
                </div>

                <div className="rounded-xl bg-secondary/50 p-4">
                  <BarChart3 size={16} className="mb-2 text-primary" />
                  <p className="text-xs text-muted-foreground">Observability</p>
                  <p className="font-semibold">Enabled</p>
                </div>

                <div className="rounded-xl bg-secondary/50 p-4">
                  <Activity size={16} className="mb-2 text-primary" />
                  <p className="text-xs text-muted-foreground">SLA</p>
                  <p className="font-semibold">99.5%</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
