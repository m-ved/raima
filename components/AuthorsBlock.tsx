type AuthorsBlockProps = {
  authors: string[];
};

export function AuthorsBlock({ authors }: AuthorsBlockProps) {
  return (
    <p className="mt-6 text-sm leading-relaxed text-[var(--muted)]">
      {authors.join(" · ")}
    </p>
  );
}
