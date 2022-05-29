interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <header>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </header>
  )
}
