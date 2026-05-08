import Link from "next/link";
import { Rule } from "@/components/Rule";

export default function Home() {
  return (
    <article className="py-10">
      <div className="h-[120px]" />

      <section className="text-center">
        <h1 className="display-title text-[56px] font-semibold tracking-[-0.01em]">DEI Portfolio</h1>
        <p className="display-title mt-3 text-[18px] italic text-[var(--muted)]">
          Reflections, a case analysis, Yellowdig posts,
          <br />
          and engagement from PSYC 450.
        </p>
        <hr className="mx-auto mt-8 w-[200px] border-0 border-t border-[var(--rule)]" />
        <div className="mt-10">
          <h2 className="display-title text-[22px] font-medium">Raima Debnath</h2>
          <p className="mt-3 text-[14px] leading-[1.6] text-[var(--muted)]">
            Department of Industrial-Organizational Psychology
            <br />
            Illinois Institute of Technology
            <br />
            Dr. Robert Keating · Spring 2026
          </p>
        </div>
      </section>

      <section className="mt-20">
        <p className="section-mono mb-4">§ ABSTRACT</p>
        <div className="content-prose">
          <p>
            This portfolio collects work from a single semester spent thinking about how
            organizations claim to value diversity, equity, and inclusion - and what those claims
            look like when measured against the structures and decisions that actually shape
            employee experience. The argument running through these pieces is that DEI as a value
            depends on DEI as a practice, and that practice is structural, not rhetorical. The
            pieces are listed below in the order they were written.
          </p>
        </div>
      </section>

      <Rule />

      <section>
        <p className="section-mono mb-6">§ CONTENTS</p>
        <div className="grid grid-cols-[48px_1fr_auto] gap-x-4 gap-y-4 text-[16px]">
          <span className="running-meta text-[10px]">01</span>
          <span>DEI Reflection Statement</span>
          <Link className="text-[var(--muted)]" href="/reflection">
            → /reflection
          </Link>

          <span className="running-meta text-[10px]">02</span>
          <span>Designing Equity at Pinterest</span>
          <Link className="text-[var(--muted)]" href="/pinterest">
            → /pinterest
          </Link>

          <span className="running-meta text-[10px]">03</span>
          <span>Applied Project</span>
          <Link className="text-[var(--muted)]" href="/applied-project">
            → /applied-project
          </Link>

          <span className="running-meta text-[10px]">04</span>
          <span>Yellowdig Posts (PSYC 450 forum)</span>
          <Link className="text-[var(--muted)]" href="/field-notes">
            → /field-notes
          </Link>

          <span className="running-meta text-[10px]">05</span>
          <span>DEI Engagement</span>
          <Link className="text-[var(--muted)]" href="/engagement">
            → /engagement
          </Link>
        </div>
      </section>

      <p className="display-title mt-20 text-center text-[16px] italic text-[var(--muted)]">
        Submitted in partial fulfillment of PSYC 450 coursework, May 2026.
      </p>
    </article>
  );
}
