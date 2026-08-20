const GROUPS = [
  {
    label: "Agentic AI & LLMs",
    items: ["LLMs", "RAG", "LangChain", "LangGraph", "Prompt Engineering", "AI Agents", "MCP", "Function Calling"],
  },
  {
    label: "Machine Learning",
    items: ["Transformers", "PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", "NLP", "OpenCV"],
  },
  {
    label: "Data & Retrieval",
    items: ["MongoDB", "PostgreSQL", "MySQL", "FAISS", "ChromaDB"],
  },
  {
    label: "Backend & APIs",
    items: ["FastAPI", "Flask", "REST APIs", "gRPC", "JWT Auth"],
  },
  {
    label: "Languages & Tools",
    items: ["Python", "SQL", "JavaScript", "Docker", "Git", "Postman", "Azure DevOps", "FFmpeg"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10">
      <div className="mb-10 border-b border-line pb-5">
        <p className="font-display text-[11px] font-medium tracking-[0.18em] text-copper">
          STACK
        </p>
        <h2 className="mt-2 font-display text-2xl font-bold text-text sm:text-3xl">
          What I build with
        </h2>
      </div>

      <div className="flex flex-col gap-5">
        {GROUPS.map((group) => (
          <div
            key={group.label}
            className="flex flex-col gap-3 border-b border-line/60 pb-5 last:border-0 sm:flex-row sm:items-baseline sm:gap-8"
          >
            <p className="w-44 shrink-0 font-display text-[11px] font-medium tracking-[0.14em] text-text-dim">
              {group.label.toUpperCase()}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded border border-line px-2.5 py-1 font-display text-[11px] tracking-wide text-text transition hover:border-copper-deep/50"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
