const SCHOOLS = [
  {
    school: "Marathwada Mitra Mandal College of Engineering",
    credential: "B.E., Computer Engineering — CGPA 8.1/10",
    period: "2021 — 2025",
    location: "Pune, India",
  },
  {
    school: "Major Hemant Jakate School of Commerce & Science",
    credential: "Higher Secondary Certificate — 99%",
    period: "2019 — 2021",
    location: "Nagpur, India",
  },
  {
    school: "The Aditya Birla Public School",
    credential: "Secondary School Certificate — 95%",
    period: "2018",
    location: "Chandrapur, India",
  },
];

export function Education() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10">
      <div className="mb-10 border-b border-line pb-5">
        <p className="font-display text-[11px] font-medium tracking-[0.18em] text-copper">
          EDUCATION
        </p>
        <h2 className="mt-2 font-display text-2xl font-bold text-text sm:text-3xl">Background</h2>
      </div>

      <div className="flex flex-col divide-y divide-line/60">
        {SCHOOLS.map((s) => (
          <div key={s.school} className="flex flex-wrap items-baseline justify-between gap-2 py-3">
            <div>
              <p className="font-body text-sm font-medium text-text">{s.school}</p>
              <p className="font-body text-sm text-text-dim">{s.credential}</p>
            </div>
            <p className="font-display text-[11px] tracking-wide text-text-dim">
              {s.period.toUpperCase()} · {s.location.toUpperCase()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
