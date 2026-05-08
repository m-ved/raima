import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};

type PageNavProps = {
  prev?: NavItem;
  next?: NavItem;
};

export function PageNav({ prev, next }: PageNavProps) {
  return (
    <nav className="running-meta mt-12 flex items-center justify-between gap-4 normal-case tracking-[0.08em]">
      <div>{prev ? <Link href={prev.href}>← {prev.label}</Link> : <span />}</div>
      <div>{next ? <Link href={next.href}>Next: {next.label} →</Link> : <span />}</div>
    </nav>
  );
}
