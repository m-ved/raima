import { SectionLabel } from "@/components/SectionLabel";

type PageTitleProps = {
  serial: string;
  label: string;
  title: string;
  subtitle?: string;
  date?: string;
};

export function PageTitle({ serial, label, title, subtitle, date }: PageTitleProps) {
  return (
    <section>
      <SectionLabel serial={serial} label={label} />
      <h1 className="display-title text-5xl font-semibold tracking-[-0.01em]">{title}</h1>
      {subtitle ? (
        <p className="display-title mt-4 max-w-[32rem] text-[19px] italic text-[var(--muted)]">
          {subtitle}
        </p>
      ) : null}
      {date ? <p className="running-meta mt-6">{date}</p> : null}
    </section>
  );
}
