type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  align?: 'left' | 'center';
};

export function SectionTitle({ eyebrow, title, align = 'left' }: SectionTitleProps) {
  return (
    <div className={`section-title ${align}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
    </div>
  );
}
