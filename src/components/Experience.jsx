const ROLES = [
  {
    company: "Actin Technologies",
    role: "AI Engineer",
    period: "Jul 2025 — Present",
    location: "Pune, India",
    current: true,
    bullets: [
      "Engineered Dossier, a production enterprise AI platform spanning document intelligence, SQL chat, RBAC policy retrieval, and invoice extraction, using LangChain, LangGraph, FastAPI, MongoDB, and PostgreSQL.",
      "Built a vision AI platform for facial recognition, object detection, and conversational search across recorded footage and live streams.",
      "Designed an AI-assisted data annotation platform combining computer vision and LLMs, with human-in-the-loop validation.",
      "Fine-tuned and deployed a facial recognition model for reliable real-time inference in production.",
    ],
  },
  {
    company: "Atomic Loops",
    role: "Frontend Development Intern",
    period: "Jan 2024 — Apr 2024",
    location: "Pune, India",
    bullets: [
      "Built responsive web applications with React, JavaScript, and Tailwind CSS, improving usability and frontend performance.",
      "Integrated REST APIs with backend teams and shipped production-ready features in an agile workflow.",
    ],
  },
  {
    company: "Elite Software",
    role: "Web Development Intern",
    period: "Nov 2022 — Mar 2023",
    location: "Pune, India",
    bullets: [
      "Built full-stack applications with Python, Django, and MySQL for client-facing business requirements.",
      "Designed RESTful APIs and optimized database queries alongside cross-functional teams.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10">
      <div className="mb-10 border-b border-line pb-5">
        <p className="font-display text-[11px] font-medium tracking-[0.18em] text-copper">
          EXPERIENCE
        </p>
        <h2 className="mt-2 font-display text-2xl font-bold text-text sm:text-3xl">
          A short, connected trace
        </h2>
      </div>

      <div className="relative pl-7">
        <div className="absolute top-2 bottom-2 left-[7px] w-px bg-line" />
        <div className="flex flex-col gap-10">
          {ROLES.map((job) => (
            <div key={job.company} className="relative">
              <span
                className={`absolute -left-7 top-1.5 h-3.5 w-3.5 rounded-full border-2 ${
                  job.current ? "border-copper bg-copper/30" : "border-line bg-surface"
                }`}
              />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-base font-semibold text-text">
                  {job.role} <span className="text-text-dim">· {job.company}</span>
                </h3>
                <p className="font-display text-[11px] tracking-wide text-text-dim">
                  {job.period.toUpperCase()} · {job.location.toUpperCase()}
                </p>
              </div>
              <ul className="mt-3 flex flex-col gap-1.5">
                {job.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="font-body text-sm leading-relaxed text-text-dim before:mr-2 before:text-copper before:content-['—']"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
