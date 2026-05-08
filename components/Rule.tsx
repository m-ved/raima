export function Rule({ className = "" }: { className?: string }) {
  return <hr className={`hairline ${className}`.trim()} />;
}
