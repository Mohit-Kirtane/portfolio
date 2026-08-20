const STEPS = [
  { label: "REQUEST", value: '"can the employee role see the compensation policy?"' },
  { label: "ROUTE", value: "agent selects policy_retrieval node" },
  { label: "RETRIEVE", value: "FAISS similarity search, role-filtered" },
  { label: "GUARD", value: "not permitted -> decline, 0 LLM calls" },
];

export function TraceDiagram() {
  return (
    <div className="relative w-full max-w-md rounded-lg border border-line bg-surface p-6">
      <div className="mb-5 flex items-center justify-between">
        <p className="font-display text-[11px] font-medium tracking-[0.18em] text-text-dim">
          LIVE AGENT TRACE
        </p>
        <span className="flex items-center gap-1.5 font-display text-[10px] font-medium tracking-wide text-copper">
          <span className="node-pulse h-1.5 w-1.5 rounded-full bg-copper" style={{ animationDelay: "0s" }} />
          RUNNING
        </span>
      </div>

      <div className="relative pl-5">
        <div className="absolute top-1 bottom-1 left-[3px] w-px bg-line" />
        <div className="flex flex-col gap-5">
          {STEPS.map((step, i) => (
            <div key={step.label} className="relative">
              <span
                className="node-pulse absolute -left-5 top-1 h-[7px] w-[7px] rounded-full bg-copper"
                style={{ animationDelay: `${i * 0.7}s` }}
              />
              <p className="font-display text-[11px] font-medium tracking-[0.14em] text-text-dim">
                {step.label}
              </p>
              <p className="mt-0.5 font-display text-[12.5px] leading-snug text-text">{step.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 border-t border-line pt-3">
        <p className="font-display text-[11px] tracking-wide text-text-dim">
          <span className="text-copper">RESULT</span> access outside role · answered honestly, not guessed
        </p>
      </div>
    </div>
  );
}
