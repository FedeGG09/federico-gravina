import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Activity,
  ShieldCheck,
  Database,
  Gauge,
} from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const telemetry = [
  { icon: Activity, label: "Live pipelines", value: "120+" },
  { icon: ShieldCheck, label: "Compliance SLA", value: "99.5%" },
  { icon: Database, label: "LLM req/day", value: "80K+" },
  { icon: Gauge, label: "Latency p95", value: "<2s" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-xs font-mono uppercase tracking-[0.2em] text-primary mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              AI Industrial Command Center
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
              {portfolioData.headline}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl leading-relaxed mb-10">
              {portfolioData.tagline}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all"
              >
                Ver control modules <ArrowRight size={18} />
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
                <Github size={20} />
              </a>

              <a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-border hover:bg-secondary"
              >
                <Linkedin size={20} />
              </a>
            </div>

            {/* Executive KPI Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {portfolioData.heroMetrics.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="card-surface p-5"
                >
                  <p className="text-2xl md:text-3xl font-bold text-primary font-mono">
                    {metric.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 leading-snug">
                    {metric.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT PANEL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="card-surface p-6">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={profilePhoto}
                  alt={portfolioData.name}
                  className="w-20 h-20 rounded-2xl object-cover border border-border"
                />
                <div>
                  <p className="font-semibold text-lg">{portfolioData.name}</p>
                  <p className="text-sm text-muted-foreground">
                    AI Platforms · Data Engineering · Industrial Ops
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {telemetry.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="rounded-xl border border-border bg-secondary/30 p-4"
                    >
                      <Icon size={16} className="text-primary mb-2" />
                      <p className="text-xl font-bold font-mono">{item.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {item.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
