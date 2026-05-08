import type { ReactNode } from "react";

type Citation = {
  author: string;
  title: string;
  venue: string;
  url: string;
};

type FieldNoteBlockProps = {
  date: string;
  source: string;
  title: string;
  citation: Citation;
  children: ReactNode;
};

export function FieldNoteBlock({
  date,
  source,
  title,
  citation,
  children,
}: FieldNoteBlockProps) {
  return (
    <article className="my-12 border-l-2 border-[var(--rule)] pl-6">
      <p className="running-meta mb-5">
        {date} · {source}
      </p>
      <h2 className="display-title mb-6 text-[24px] font-medium tracking-[-0.01em]">{title}</h2>
      <div className="text-[15px] leading-[1.5] [&>p]:mb-4">{children}</div>
      <div className="mt-8 border-t border-[var(--rule)] pt-4 text-[13px] leading-[1.5] text-[var(--muted)]">
        <p className="m-0">
          Source - {citation.author}, &quot;{citation.title},&quot; {citation.venue}.
        </p>
        <p className="m-0">
          ↗ <a href={citation.url}>{citation.url.replace(/^https?:\/\//, "")}</a>
        </p>
      </div>
    </article>
  );
}
