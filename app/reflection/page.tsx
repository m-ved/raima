import ReflectionEssay from "@/content/reflection.mdx";
import { PageNav } from "@/components/PageNav";
import { PageTitle } from "@/components/PageTitle";
import { Rule } from "@/components/Rule";

export default function ReflectionPage() {
  return (
    <article className="py-10">
      <div className="h-20" />
      <PageTitle
        serial="01"
        label="REFLECTION"
        title="DEI as practice"
        subtitle="Coming in expecting frameworks, leaving with skepticism - not of DEI as a value, but of how it gets used."
        date="May 2026"
      />
      <Rule />

      <div className="content-prose [&_p:first-of-type:first-letter]:display-title [&_p:first-of-type:first-letter]:float-left [&_p:first-of-type:first-letter]:mr-1 [&_p:first-of-type:first-letter]:text-[4em] [&_p:first-of-type:first-letter]:font-semibold [&_p:first-of-type:first-letter]:leading-[0.9]">
        <ReflectionEssay />
      </div>

      <Rule />
      <PageNav next={{ label: "Designing Equity at Pinterest", href: "/pinterest" }} />
    </article>
  );
}
