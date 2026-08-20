import { ArrowRight } from "lucide-react";
import { HeroPortrait } from "./HeroPortrait.jsx";
import { GithubMark } from "./icons/GithubMark.jsx";
import { LinkedInMark } from "./icons/LinkedInMark.jsx";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 pt-14 pb-24 sm:px-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:pt-20"
    >
      <div className="fade-up">
        <p className="font-display text-[11px] font-medium tracking-[0.18em] text-copper">
          AI ENGINEER · PUNE, INDIA
        </p>
        <h1 className="mt-5 font-display text-[2.4rem] font-bold leading-[1.12] text-text sm:text-[3rem]">
          Mohit Kirtane
        </h1>
        <p className="mt-4 max-w-lg font-body text-lg leading-relaxed text-text-dim">
          I build agentic AI systems — RAG pipelines, LangGraph workflows, and the production
          infrastructure underneath them.
        </p>
        <p className="mt-4 max-w-lg font-body text-[15px] leading-relaxed text-text-dim">
          Currently an AI Engineer at Actin Technologies, shipping enterprise AI platforms end to
          end: retrieval-augmented document intelligence, natural-language database access, and
          permission-aware knowledge retrieval — from the LangGraph state machine down to the
          FastAPI service and vector index underneath it.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="group flex items-center gap-2 rounded-md bg-copper px-5 py-3 font-display text-[13px] font-medium tracking-wide text-bg transition hover:bg-copper-deep"
          >
            VIEW WORK
            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
          </a>
          <a
            href="https://github.com/mohit-kirtane"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-text-dim transition hover:text-text"
          >
            <GithubMark className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohit-kirtane/?skipRedirect=true"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-text-dim transition hover:text-text"
          >
            <LinkedInMark className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="flex justify-center lg:justify-end">
        <HeroPortrait />
      </div>
    </section>
  );
}
