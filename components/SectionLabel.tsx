type SectionLabelProps = {
  serial: string;
  label: string;
};

export function SectionLabel({ serial, label }: SectionLabelProps) {
  return (
    <p className="section-mono mb-6">
      § {serial} - {label}
    </p>
  );
}
