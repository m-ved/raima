type CourseAttributionProps = {
  lines: string[];
};

export function CourseAttribution({ lines }: CourseAttributionProps) {
  return (
    <div className="running-meta mt-6 space-y-1 normal-case tracking-[0.08em]">
      {lines.map((line) => (
        <p className="m-0" key={line}>
          {line}
        </p>
      ))}
    </div>
  );
}
