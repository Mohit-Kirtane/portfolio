import { ArrowUpRight } from "lucide-react";
import { GithubMark } from "./icons/GithubMark.jsx";

const SECONDARY_PROJECTS = [
  {
    title: "Multimodal Video Intelligence Platform",
    context: "Built at Actin Technologies",
    description:
      "A video intelligence platform spanning recorded footage and live streams: object detection, tracking, and a fine-tuned ArcFace model for identity-based search, combined with LLM-powered natural-language queries over video content.",
    tech: ["PyTorch", "OpenCV", "ArcFace", "gRPC", "FFmpeg", "LangChain"],
  },
  {
    title: "AI Data Annotation & Labeling Platform",
    context: "Built at Actin Technologies",
    description:
      "An AI-assisted annotation platform automating image and text labeling with YOLO and LLMs, with human-in-the-loop review so a person always signs off before an annotation reaches a training set.",
    tech: ["YOLO", "PyTorch", "FastAPI", "MongoDB", "LLMs"],
  },
];

function SecondaryCard({ project }) {
  return (
    <div className="flex h-full flex-col rounded-lg border border-line bg-surface p-6">
      <p className="font-display text-[10px] font-medium tracking-[0.14em] text-text-dim">
        {project.context.toUpperCase()}
      </p>
      <h3 className="mt-3 font-display text-base font-semibold text-text">{project.title}</h3>
      <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-text-dim">
        {project.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded border border-line px-2 py-0.5 font-display text-[10px] tracking-wide text-text-dim"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="work" className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10">
      <div className="mb-10 border-b border-line pb-5">
        <p className="font-display text-[11px] font-medium tracking-[0.18em] text-copper">WORK</p>
        <h2 className="mt-2 font-display text-2xl font-bold text-text sm:text-3xl">
          Systems I've built and shipped
        </h2>
      </div>

      <div className="rounded-lg border border-copper-deep/50 bg-surface p-7 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <span className="flex items-center gap-1.5 rounded-full border border-copper-deep/40 bg-copper/10 px-2.5 py-1 font-display text-[10px] font-medium tracking-wide text-copper">
              <span className="node-pulse h-1.5 w-1.5 rounded-full bg-copper" />
              LIVE
            </span>
            <h3 className="mt-3 font-display text-xl font-bold text-text sm:text-2xl">
              Dossier — Enterprise Knowledge Copilot
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://dossier-8myp.onrender.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-md bg-copper px-4 py-2 font-display text-[12px] font-medium tracking-wide text-bg transition hover:bg-copper-deep"
            >
              OPEN LIVE
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://github.com/Mohit-Kirtane/dossier"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-md border border-line px-4 py-2 font-display text-[12px] font-medium tracking-wide text-text transition hover:border-copper-deep hover:text-copper"
            >
              <GithubMark className="h-3.5 w-3.5" />
              VIEW CODE
            </a>
          </div>
        </div>

        <p className="mt-4 max-w-3xl font-body text-[15px] leading-relaxed text-text-dim">
          A unified enterprise AI platform with three production workflows: document intelligence
          with cited retrieval, natural-language-to-SQL over a live Postgres database, and
          RBAC-aware policy retrieval that enforces role permissions before an answer is ever
          generated. Deployed and live, with real account authentication, Google sign-in, and an
          admin activity ledger.
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {["LangChain", "LangGraph", "FastAPI", "PostgreSQL", "FAISS", "React"].map((t) => (
            <span
              key={t}
              className="rounded border border-line px-2 py-0.5 font-display text-[10px] tracking-wide text-text-dim"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {SECONDARY_PROJECTS.map((project) => (
          <SecondaryCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
