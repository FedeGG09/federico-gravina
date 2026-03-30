interface SectionHeaderProps {
  label: string;
  title: string;
}

export function SectionHeader({ label, title }: SectionHeaderProps) {
  return (
    <div className="mb-12 md:mb-16">
      <p className="text-sm font-mono uppercase text-primary tracking-wider mb-3">{label}</p>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">{title}</h2>
    </div>
  );
}
