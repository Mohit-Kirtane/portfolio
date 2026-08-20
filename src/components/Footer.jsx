import { ArrowUpRight, Download, Mail } from "lucide-react";
import { GithubMark } from "./icons/GithubMark.jsx";
import { LinkedInMark } from "./icons/LinkedInMark.jsx";

export function Footer() {
  return (
    <footer id="contact" className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10">
      <div className="rounded-lg border border-line bg-surface px-7 py-10 text-center sm:px-10">
        <p className="font-display text-[11px] font-medium tracking-[0.18em] text-copper">
          CONTACT
        </p>
        <h2 className="mt-3 font-display text-2xl font-bold text-text sm:text-3xl">
          Open to new opportunities
        </h2>
        <p className="mx-auto mt-3 max-w-md font-body text-sm leading-relaxed text-text-dim">
          Reach out if you're hiring, or want to talk through a RAG pipeline, an agent design, or
          anything in between.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:mohit.kirtane@gmail.com"
            className="flex items-center gap-2 rounded-md bg-copper px-5 py-3 font-display text-[13px] font-medium tracking-wide text-bg transition hover:bg-copper-deep"
          >
            <Mail className="h-3.5 w-3.5" />
            EMAIL ME
          </a>
          <a
            href="https://www.linkedin.com/in/mohit-kirtane/?skipRedirect=true"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-md border border-line px-5 py-3 font-display text-[13px] font-medium tracking-wide text-text transition hover:border-copper-deep hover:text-copper"
          >
            <LinkedInMark className="h-3.5 w-3.5" />
            LINKEDIN
            <ArrowUpRight className="h-3 w-3" />
          </a>
          <a
            href="https://github.com/mohit-kirtane"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-md border border-line px-5 py-3 font-display text-[13px] font-medium tracking-wide text-text transition hover:border-copper-deep hover:text-copper"
          >
            <GithubMark className="h-3.5 w-3.5" />
            GITHUB
            <ArrowUpRight className="h-3 w-3" />
          </a>
          <a
            href="/Mohit-Kirtane-Resume.pdf"
            download
            className="flex items-center gap-2 rounded-md border border-line px-5 py-3 font-display text-[13px] font-medium tracking-wide text-text transition hover:border-copper-deep hover:text-copper"
          >
            <Download className="h-3.5 w-3.5" />
            RESUME
          </a>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center justify-between gap-3 font-display text-[11px] tracking-wide text-text-dim sm:flex-row">
        <p>© 2026 MOHIT KIRTANE</p>
        <p>PUNE, INDIA</p>
      </div>
    </footer>
  );
}
