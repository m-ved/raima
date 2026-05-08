import { PageNav } from "@/components/PageNav";
import { SectionLabel } from "@/components/SectionLabel";

export default function AppliedProjectPage() {
  return (
    <article className="py-10">
      <SectionLabel serial="03" label="APPLIED PROJECT" />
      <h1 className="display-title text-5xl font-semibold tracking-[-0.01em]">
        Applied Project (In Progress)
      </h1>
      <p className="mt-8 max-w-[36rem] text-[17px] italic text-[var(--muted)]">
        This page is a placeholder. The applied project content will be added here, with the same
        structure as the other pieces in this portfolio: a brief abstract, a structured summary of
        the work, and a downloadable artifact if applicable.
      </p>
      <div className="mt-8 max-w-[36rem] text-[17px] text-[var(--muted)]">
        <p>
          The final version will include an abstract, approach, findings or deliverable, and a
          short reflection.
        </p>
      </div>
      <PageNav
        prev={{ label: "Designing Equity at Pinterest", href: "/pinterest" }}
        next={{ label: "Yellowdig Posts", href: "/field-notes" }}
      />
    </article>
  );
}
