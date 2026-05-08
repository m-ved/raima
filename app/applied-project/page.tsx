import Image from "next/image";
import { PageNav } from "@/components/PageNav";
import { SectionLabel } from "@/components/SectionLabel";

export default function AppliedProjectPage() {
  return (
    <article className="py-10">
      <SectionLabel serial="03" label="APPLIED PROJECT" />
      <h1 className="display-title text-5xl font-semibold tracking-[-0.01em]">
        Applied Project
      </h1>
      <figure className="mt-10 max-w-[42rem]">
        <Image
          src="/DEI Infographic (1).png"
          alt="DEI hiring infographic"
          width={1024}
          height={576}
          className="h-auto w-full border border-[var(--rule)]"
        />
        <figcaption className="running-meta mt-3 normal-case tracking-[0.08em]">
          DEI infographic artifact
        </figcaption>
      </figure>
      <PageNav
        prev={{ label: "Designing Equity at Pinterest", href: "/pinterest" }}
        next={{ label: "Yellowdig Posts", href: "/field-notes" }}
      />
    </article>
  );
}
