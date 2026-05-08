import { PageNav } from "@/components/PageNav";
import { Rule } from "@/components/Rule";
import { SectionLabel } from "@/components/SectionLabel";

export default function EngagementPage() {
  return (
    <article className="py-10">
      <SectionLabel serial="05" label="ENGAGEMENT" />
      <h1 className="display-title text-5xl font-semibold tracking-[-0.01em]">DEI Engagement</h1>
      <p className="display-title mt-4 text-[19px] italic text-[var(--muted)]">
        Documentation of campus engagement during PSYC 450, Spring 2026.
      </p>

      <Rule />

      <section className="content-prose">
        <p className="section-mono mb-4">§ TITLE IX OFFICE · IIT · APRIL 2026</p>
        <p>
          Participated in initiatives organized by the IIT Title IX Office during Sexual Assault
          Awareness Month, including the institutional Sexual Misconduct Climate Survey and Denim
          Day on April 29th.
        </p>
        <p>
          The Climate Survey supports institutional efforts to better understand student experiences
          and helps the university develop safer, more supportive environments. Initiatives like
          these matter because they create channels for student voice and encourage conversations
          around accountability, safety, and inclusion within educational spaces.
        </p>
        <p>
          Denim Day serves as a visible reminder of the importance of supporting survivors of sexual
          violence, challenging harmful misconceptions, and promoting a culture rooted in respect and
          empathy. Engaging with these efforts beyond the classroom was a way to extend the work of
          the course into practice.
        </p>
      </section>

      <Rule />

      <section className="max-w-[28rem] text-[15px] italic leading-[1.5] text-[var(--muted)]">
        <p className="section-mono mb-4 not-italic">§ A SHORT REFLECTIVE NOTE</p>
        <p>
          The pieces in this portfolio argue that DEI is structural - that what matters is what an
          organization actually does, not what it claims to value. The same standard applies to the
          people inside organizations. Showing up to a Climate Survey, wearing denim on a particular
          day - these are small actions. The argument is that small actions, made consistently, are
          what culture is.
        </p>
      </section>

      <PageNav prev={{ label: "Yellowdig Posts", href: "/field-notes" }} />
    </article>
  );
}
