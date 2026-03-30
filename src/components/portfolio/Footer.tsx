import { portfolioData } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} {portfolioData.name}</p>
        <p className="font-mono text-xs">Construido con código, datos y café ☕</p>
      </div>
    </footer>
  );
}
