import { FieldNoteBlock } from "@/components/FieldNoteBlock";
import { PageNav } from "@/components/PageNav";
import { Rule } from "@/components/Rule";
import { SectionLabel } from "@/components/SectionLabel";

export default function FieldNotesPage() {
  return (
    <article className="mx-[-24px] bg-[var(--paper-alt)] px-6 py-10">
      <SectionLabel serial="04" label="YELLOWDIG POSTS" />
      <h1 className="display-title text-5xl font-semibold tracking-[-0.01em]">Yellowdig Posts</h1>
      <p className="display-title mt-4 text-[19px] italic text-[var(--muted)]">
        Three short posts from the PSYC 450 discussion forum.
      </p>

      <Rule />

      <FieldNoteBlock
        source="YELLOWDIG · PSYC 450"
        title="Color Blind or Color Brave"
        citation={{
          author: "Mellody Hobson",
          title: "Color Blind or Color Brave",
          venue: "TED",
          url: "https://www.ted.com/talks/mellody_hobson_color_blind_or_color_brave",
        }}
      >
        <p>POV: You walk into a room and you&apos;re the only one who looks like you.</p>
        <p>
          Do you:
          <br />
          A) Shrink and go quiet
          <br />
          B) Overcompensate by being VERY enthusiastic
          <br />
          C) Become the unofficial spokesperson for your entire identity
          <br />
          D) Eat your lunch and mind your business 😭
        </p>
        <p>If you picked C (like me) - you didn&apos;t choose it. It chose you.</p>
        <p>
          A lot of us have been taught that the polite thing to do is to not notice. Don&apos;t bring
          up race. Don&apos;t bring up gender. Don&apos;t make it awkward. Just treat everyone the same and
          it&apos;ll all work out.
        </p>
        <p>
          But here&apos;s what that actually looks like in practice - someone gets talked over in a
          meeting and nobody names it. Someone&apos;s idea gets credited to the wrong person and we all
          just move on. Someone walks into a room full of people who don&apos;t look like them, every
          single day, and we call that a coincidence.
        </p>
        <p>
          Pretending not to notice race - what researchers call &quot;color blindness&quot; - doesn&apos;t make
          things fair. It just makes the problem invisible. And you can&apos;t fix what you refuse to
          see.
        </p>
        <p>
          Finance executive Mellody Hobson had a better idea. Instead of being color blind, she
          says we should be color brave - willing to have the uncomfortable conversation, to
          actually look at the room and ask why it looks the way it does, and to say something when
          the numbers don&apos;t add up.
        </p>
        <p>
          Her case is simple: speaking openly about race and diversity in hiring makes for better
          businesses and a better society. Not just morally, but also strategically. The cure for
          smallpox came from a dairy farmer. The best ideas in any room rarely come from the most
          expected person.
        </p>
        <p>
          Inclusion isn&apos;t just about getting a seat at the table. It&apos;s about not having to perform
          once you&apos;re there. It&apos;s about the room feeling like it was built for you too - not just
          tolerating your presence, but actually being better because of it. 🙏
        </p>
        <p>We spend so much energy being comfortable. Maybe the braver thing is to just… not be.</p>
        <p>So has anyone ever been color brave for you in a room?</p>
      </FieldNoteBlock>

      <FieldNoteBlock
        source="YELLOWDIG · PSYC 450"
        title="Is it the policy or the people that make inclusion real?"
        citation={{
          author: "Janet Stovall",
          title: "How to get serious about diversity and inclusion in the workplace",
          venue: "TED",
          url: "https://www.ted.com/talks/janet_stovall_how_to_get_serious_about_diversity_and_inclusion_in_the_workplace",
        }}
      >
        <p>
          Something I didn&apos;t think about when searching for internships was whether the
          company&apos;s culture would actually make me feel like I belonged or just like I was there.
        </p>
        <p>
          Every company says the right things. The website looks great, they tick all the boxes at
          career fairs, and then you show up and realize the words were just… words. No real
          mentorship. No one in your corner. Just a diverse headcount on a slide deck somewhere.
        </p>
        <p>
          What actually changed things for me was having a female manager who genuinely had my back
          during my last internship. And I know how rare that sounds, because it is. But that one
          relationship made me feel like my ideas were worth saying out loud, like I didn&apos;t have to
          second-guess myself every time I spoke up in a room. It shifted everything.
        </p>
        <p>
          Research backs this up too - employees who feel included are 3× more likely to be engaged
          at work. But that inclusion doesn&apos;t come from a policy document. It comes from the people
          around you, especially the ones with power who choose to use it to lift others up.
        </p>
        <p>
          So when I&apos;m evaluating companies now, I&apos;m not just looking at the DEI page. I&apos;m asking:
          who would I be working with? Will someone actually see me? Because that, more than any
          program or initiative, is what makes the difference.
        </p>
      </FieldNoteBlock>

      <FieldNoteBlock
        source="YELLOWDIG · PSYC 450"
        title="Accent Switching"
        citation={{
          author: "Reel referenced from Instagram",
          title: "C48FtXmOIFv",
          venue: "Instagram",
          url: "https://www.instagram.com/reel/C48FtXmOIFv",
        }}
      >
        <blockquote className="display-title my-6 max-w-[32rem] border-l-2 border-[var(--rule)] pl-6 text-[16px] italic text-[var(--quote)]">
          &quot;I may, for example, be part of a work group in which I feel valued, heard, and treated
          as an equal, full, and important member, but to achieve this, perhaps I had to change
          important aspects of how I communicate to become more like other members of the group, or
          perhaps I decided to change my name so that it would be easier for my fellow group members
          to pronounce, or perhaps I am reluctant to reveal aspects of myself that are quite
          important to me but that I believe may be misunderstood or not valued by my colleagues.&quot;
          <br />
          <span className="block pt-3 text-right">- Ferdman (2014)</span>
        </blockquote>
        <p>
          This part of the Ferdman article really stood out to me because it challenges the
          assumption that belonging automatically means inclusion. As an international student in
          America, I&apos;ve become very aware of how often many of us &quot;accent switch&quot; in professional
          spaces. We consciously slow down our speech, adjust pronunciation, choose simpler words,
          or avoid culturally specific references so that we can be understood more easily or
          perceived as more competent. Sometimes it even means hesitating before speaking because we
          don&apos;t want to be asked to repeat ourselves. On the surface, we may feel included - our
          contributions are acknowledged, we&apos;re part of the group - but that inclusion often comes
          after we&apos;ve edited parts of ourselves to fit a dominant communication style.
        </p>
        <p>
          It made me think: if inclusion is real, it shouldn&apos;t require that extra mental step of
          adjusting how we naturally speak. It should feel easy and relaxed, not strategic.
        </p>
        <p>
          I&apos;m curious - have others experienced something similar, whether through accent switching,
          code-switching, or hiding parts of your identity to &quot;fit in&quot;?
        </p>
      </FieldNoteBlock>

      <PageNav
        prev={{ label: "Applied Project", href: "/applied-project" }}
        next={{ label: "DEI Engagement", href: "/engagement" }}
      />
    </article>
  );
}
