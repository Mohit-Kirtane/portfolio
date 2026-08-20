import { NodeMark } from "./icons/NodeMark.jsx";

const NAV = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-bg/85 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#top" className="flex items-center gap-2.5 text-text transition hover:text-copper">
          <NodeMark className="h-7 w-7 shrink-0" />
          <span className="font-display text-[13px] font-medium tracking-[0.1em]">MOHIT KIRTANE</span>
        </a>

        <nav className="hidden items-center gap-7 font-display text-[12px] tracking-wide text-text-dim md:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-text">
              {item.label.toUpperCase()}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
