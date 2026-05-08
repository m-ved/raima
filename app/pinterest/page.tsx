import { AuthorsBlock } from "@/components/AuthorsBlock";
import { CourseAttribution } from "@/components/CourseAttribution";
import { PageNav } from "@/components/PageNav";
import { PageTitle } from "@/components/PageTitle";
import { Rule } from "@/components/Rule";

export default function PinterestPage() {
  return (
    <article className="py-10">
      <PageTitle
        serial="02"
        label="CASE ANALYSIS · TEAM PROJECT"
        title="Designing Equity at Pinterest"
        subtitle="A multilevel DEI intervention framework for structural organizational change."
      />

      <AuthorsBlock
        authors={["Raima Debnath", "Elena Delahera", "Dylan Naegele", "Sarah Zasso"]}
      />
      <CourseAttribution
        lines={[
          "PSYC 450 - Diversity, Equity, and Inclusion at Work",
          "Department of Industrial-Organizational Psychology",
          "Illinois Institute of Technology · Dr. Robert Keating",
          "April 2026",
        ]}
      />

      <Rule />

      <section className="content-prose">
        <p className="section-mono mb-4">§ ABSTRACT</p>
        <p>
          In summer 2020, Pinterest faced a public reckoning over racial discrimination,
          gender-based pay inequity, and a culture of executive exclusion that contradicted the
          company&apos;s outward-facing inclusion brand. This case analysis treats Pinterest&apos;s
          failures as structural rather than individual, and proposes a multilevel DEI intervention
          targeting compensation transparency, structured promotion processes, anti-retaliation
          protections, group-level inclusion practices, and behavior-based training. The
          intervention is paired with a mixed-methods evaluation framework - pre/post
          inclusion-climate surveys, demographic-disaggregated pulse surveys, third-party pay
          equity audits, and longitudinal qualitative focus groups - designed to measure whether
          structural change is translating into lived employee experience. Effective intervention is
          defined by the convergence of subjective inclusion gains and objective HR-metric movement,
          with particular attention to historically marginalized employees.
        </p>
      </section>

      <Rule />

      <section className="content-prose">
        <p className="section-mono mb-4">§ MY CONTRIBUTION</p>
        <p className="italic text-[var(--muted)]">
          Contribution details will be added here to document Raima Debnath&apos;s authored sections and
          analytical responsibilities within the team paper.
        </p>
      </section>

      <Rule />

      <section className="content-prose">
        <p className="section-mono mb-4">§ STRUCTURED SUMMARY</p>
        <h3 className="display-title text-2xl">Needs Analysis</h3>
        <h4 className="display-title mt-6 text-xl">Organizational Background</h4>
        <p>
          Pinterest entered 2020 with a strong public reputation for creativity and collaboration,
          a mostly-female user base, and a culture narrative anchored in values such as
          &quot;knitting.&quot; That external image set a high bar for internal equity practice.
        </p>
        <h4 className="display-title mt-6 text-xl">Pinterest&apos;s DEI Problem</h4>
        <p>
          Public allegations from Ifeoma Ozoma and Aerica Shimizu Banks described pay inequity,
          retaliation, and exclusion from executive decision-making. Francoise Brougher&apos;s lawsuit
          and her &quot;Cupcakes and Toxicity&quot; essay reinforced concerns about systemic bias, culminating
          in a $22.5M gender discrimination settlement, a stated $50M DEI commitment, and a
          236-employee virtual walkout.
        </p>

        <h3 className="display-title text-2xl">Investigation Plan</h3>
        <p>
          The team proposes a multimethod diagnostic phase that combines inclusion-climate surveys,
          demographic salary-distribution analysis, policy and document review, and qualitative
          interviews and focus groups segmented by identity. The goal is to surface both measurable
          disparities and lived experiences that formal systems can obscure.
        </p>

        <h3 className="display-title text-2xl">Intervention Overview</h3>
        <p>
          The intervention framework works across organizational, group/interpersonal, and training
          levels to align policy, manager behavior, and employee experience. Consistent with Shore
          et al. (2018) and Ferdman (2014), inclusion is defined as being valued, respected, and
          able to contribute meaningfully and influence decisions.
        </p>

        <h3 className="display-title text-2xl">Organizational-Level Interventions</h3>
        <h4 className="display-title mt-6 text-xl">Pay Transparency and Compensation Justice</h4>
        <p>
          The framework recommends a structured compensation philosophy grounded in job analysis and
          market benchmarking, with published salary bands and explicit documentation for
          exceptions. Third-party pay equity audits every 2–3 years provide independent
          accountability.
        </p>
        <h4 className="display-title mt-6 text-xl">Structured Promotion Process</h4>
        <p>
          Advancement systems should rely on standardized criteria, cross-team calibration, and
          written decision records to reduce discretionary bias. Transparency around expectations
          helps employees understand and prepare for promotion pathways.
        </p>
        <h4 className="display-title mt-6 text-xl">
          Formal Complaint and Anti-Retaliation Policy
        </h4>
        <p>
          Employees need anonymous reporting channels, clear investigation timelines, and
          well-communicated escalation pathways. Outcomes for reporters should be tracked to detect
          and address retaliation patterns quickly.
        </p>

        <h3 className="display-title text-2xl">Group & Interpersonal-Level DEI Practices</h3>
        <h4 className="display-title mt-6 text-xl">Employee Resource Groups (ERGs)</h4>
        <p>
          ERGs should be identity-aligned and supported through executive sponsorship, dedicated
          budgets, mentorship pipelines, and leadership visibility. This positions ERGs as
          organizational infrastructure rather than symbolic affinity spaces.
        </p>
        <h4 className="display-title mt-6 text-xl">Engagement Pulse Surveys</h4>
        <p>
          Quarterly, demographically segmented pulse surveys should track inclusion, psychological
          safety, fairness, and voice. High-level findings should be shared transparently to
          sustain trust and action.
        </p>
        <h4 className="display-title mt-6 text-xl">Structured 1:1 Check-In Policy</h4>
        <p>
          Biweekly or monthly manager check-ins should use a consistent developmental framework
          spanning workload, support, growth, and feedback. The format is intended to build
          relationship quality without becoming an evaluative compliance ritual.
        </p>

        <h3 className="display-title text-2xl">Training Programs</h3>
        <h4 className="display-title mt-6 text-xl">Training Philosophy</h4>
        <p>
          Training is framed as reinforcement for structural reforms, not a standalone fix.
          Interactive, scenario-based modules tied to Pinterest-specific contexts increase transfer
          from classroom concepts to day-to-day behavior.
        </p>
        <h4 className="display-title mt-6 text-xl">Inclusive Leadership Training</h4>
        <p>
          Manager and executive training targets concrete behaviors: recognizing exclusion, running
          inclusive meetings, and evaluating performance fairly. The focus is observable practice,
          not abstract intent.
        </p>
        <h4 className="display-title mt-6 text-xl">Bystander Intervention Training</h4>
        <p>
          Employees are equipped to respond safely and constructively to exclusionary behavior in
          real time. Training emphasizes speaking up, peer support, and effective challenge
          strategies.
        </p>

        <h3 className="display-title text-2xl">Evaluation Metrics</h3>
        <p>
          A mixed-methods evaluation model combines pre/post inclusion-climate surveys (Nishii,
          adapted) with a distinct psychological safety measure. Quarterly demographic pulse surveys
          target &lt;5% inclusion-score gaps across groups, while stay interviews, ERG feedback, and
          HR metrics track complaint trends, resolution times, audit outcomes, and retention.
          Longitudinal focus groups at 12 and 24 months assess whether formal changes alter lived
          experience. Effectiveness is defined as convergence between subjective inclusion gains and
          objective organizational movement, especially for historically marginalized employees.
        </p>

        <h3 className="display-title text-2xl">Conclusion</h3>
        <p>
          The paper argues that symbolic commitments without structural accountability often obscure
          inequity rather than resolve it. Its framework targets opaque pay systems, access-dependent
          promotion, and complaint environments where speaking up carried risk. While no framework
          guarantees culture change, structural redesign can reduce the conditions that allow inequity
          to persist.
        </p>
      </section>

      <Rule />

      <section className="content-prose text-[14px] text-[var(--muted)]">
        <p className="section-mono mb-4">§ THEORETICAL ANCHORS</p>
        <p>Shore, Cleveland, &amp; Sanchez (2018) - Inclusive workplaces: A review and model</p>
        <p>Ferdman (2014) - The practice of inclusion in diverse organizations</p>
        <p>
          Leslie (2019) - Diversity initiative effectiveness: A typological theory of unintended
          consequences
        </p>
        <p>Bohnet (2016) - What works: Gender equality by design</p>
        <p>Salas et al. (2012) - The science of training and development in organizations</p>
        <p>Bamberger &amp; Belogolovsky (2010) - The impact of pay secrecy on individual task performance</p>
        <p>
          Catalino et al. (2022) / McKay &amp; Avery (2015) / Miceli et al. (2008) /
          Ashburn-Nardo et al. (2008)
        </p>
      </section>

      <Rule />

      <section className="content-prose">
        <p className="section-mono mb-4">§ DOWNLOAD</p>
        <p>
          ↗ <a href="/DEI%20%26%20Pinterest.pdf">Read the full paper (PDF, 14 pages)</a>
        </p>
      </section>

      <Rule />

      <section className="references">
        <p className="section-mono mb-6">§ FULL REFERENCES</p>
        <p>Ashburn-Nardo, L., Morris, K. A., &amp; Goodwin, S. A. (2008). The confronting prejudiced responses (CPR) model: Applying CPR in organizations. <em>Academy of Management Learning &amp; Education</em>, 7(3), 332–342.</p>
        <p>Bamberger, P., &amp; Belogolovsky, E. (2010). The impact of pay secrecy on individual task performance. <em>Personnel Psychology</em>, 63, 965–996.</p>
        <p>Bohnet, I. (2016). <em>What works: Gender equality by design</em>. The Belknap Press of Harvard University Press.</p>
        <p>Brown, J., Ellsworth, D., Katen-Narvell, A., &amp; Maor, D. (2023, May 10). It&apos;s (past) time to get strategic about DEI. <em>McKinsey &amp; Company</em>.</p>
        <p>Catalino, N., Gardner, N., Goldstein, D., &amp; Wong, J. (2022). Effective employee resource groups are key to inclusion at work. Here&apos;s how to get them right. <em>McKinsey &amp; Company</em>.</p>
        <p>Conger, K. (2020, August 14). Pinterest employees walk out to protest treatment of minority workers. <em>The New York Times</em>.</p>
        <p>Conger, K. (2020, December 14). Pinterest settles gender discrimination lawsuit for $22.5 million. <em>The New York Times</em>.</p>
        <p>Cohen Milstein. (n.d.). In re Pinterest derivative litigation.</p>
        <p>Ferdman, B. M. (2014). The practice of inclusion in diverse organizations. In <em>Diversity at Work: The Practice of Inclusion</em> (pp. 3–54). Jossey-Bass/Wiley.</p>
        <p>Griffith, E. (2021, September 13). Pinterest accused of not paying female &apos;co-creator.&apos; <em>The New York Times</em>.</p>
        <p>Hinton, A., &amp; Lambert, W. M. (2022). Moving diversity, equity, and inclusion from opinion to evidence. <em>Cell Reports Medicine</em>, 3(4), 100619.</p>
        <p>Jones, K. P., &amp; King, E. B. (2013). Managing concealable stigmas at work. <em>Journal of Management</em>, 40(5), 1466–1494.</p>
        <p>Leslie, L. M. (2019). Diversity initiative effectiveness: A typological theory of unintended consequences. <em>Academy of Management Review</em>, 44(3), 538–563.</p>
        <p>McBride-Wright, M. (2023, June 13). Psychological safety in engineering starts with diversity, equity, and inclusion. <em>National Academies</em>.</p>
        <p>McNiel, P. (2025). How to use a climate survey to understand and nurture diversity, equity, and inclusion. <em>Affirmity</em>.</p>
        <p>Miceli, M. P., Near, J. P., &amp; Dworkin, T. M. (2008). <em>Whistle-blowing in organizations</em>. Routledge.</p>
        <p>McKay, P. F., &amp; Avery, D. R. (2015). Diversity climate in organizations: Current wisdom and domains of uncertainty. <em>Research in Personnel and Human Resources Management</em>, 33, 191–233.</p>
        <p>NBC News. (2021, November 25). Pinterest settles shareholder lawsuit over workplace culture.</p>
        <p>Pinterest. (2020, Q1). Quarterly earnings release [SEC filing].</p>
        <p>Salas, E., Tannenbaum, S. I., Kraiger, K., &amp; Smith-Jentsch, K. A. (2012). The science of training and development in organizations: What matters in practice. <em>Psychological Science in the Public Interest</em>, 13(2), 74–101.</p>
        <p>Sarangi, A. (2025). The art of inclusive leadership: Building high-performing diverse teams. <em>Society for Human Resource Management</em>.</p>
        <p>Shore, L. M., Cleveland, J. N., &amp; Sanchez, D. (2018). Inclusive workplaces: A review and model. <em>Human Resource Management Review</em>, 28(2), 176–189.</p>
        <p>Swisher, K. (2020, August 13). Pinterest has a &apos;mirror-tocracy&apos; problem. <em>The New York Times</em>.</p>
        <p>TechCrunch. (2020, December 15). Pinterest&apos;s $22.5M settlement highlights tech&apos;s inequities, say former employees who alleged discrimination.</p>
        <p>West, W. (2024, January 3). Stay interviews help keep employees happy and engaged. <em>The Diversity Movement</em>.</p>
        <p>Wittenberg-Cox, A. (2020, August 15). Pinterest pinned by sexism. <em>Forbes</em>.</p>
      </section>

      <PageNav
        prev={{ label: "DEI as practice", href: "/reflection" }}
        next={{ label: "Applied Project", href: "/applied-project" }}
      />
    </article>
  );
}
