export function HeroPortrait() {
  return (
    <div className="relative w-full max-w-sm">
      <div className="relative rounded-lg border border-line bg-surface p-3">
        <img
          src="/mohit-kirtane.jpg"
          alt="Mohit Kirtane"
          className="aspect-[7/9] w-full rounded-md object-cover"
        />
        <span className="absolute top-0 left-0 h-5 w-5 border-t-2 border-l-2 border-copper" />
        <span className="absolute top-0 right-0 h-5 w-5 border-t-2 border-r-2 border-copper" />
        <span className="absolute bottom-0 left-0 h-5 w-5 border-b-2 border-l-2 border-copper" />
        <span className="absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-copper" />
      </div>
      <span className="absolute -bottom-3 left-3 flex items-center gap-1.5 rounded-full border border-line bg-bg px-2.5 py-1 font-display text-[10px] font-medium tracking-wide text-copper">
        <span className="node-pulse h-1.5 w-1.5 rounded-full bg-copper" />
        ONLINE
      </span>
    </div>
  );
}
