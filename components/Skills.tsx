const skillGroups = [
  {
    title: "Data Science and ML",
    items: ["Python", "pandas", "NumPy", "scikit-learn", "XGBoost", "SQL"],
  },
  {
    title: "Research and Modeling",
    items: ["ECG", "PINNs", "signal analysis", "evaluation", "feature engineering"],
  },
  {
    title: "Security and Embedded",
    items: ["eCTF", "firmware", "UART", "debugging", "microcontrollers"],
  },
  {
    title: "Cloud and Delivery",
    items: ["Git", "Docker", "web apps", "basic cloud workflows", "APIs"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Skills</h2>
        <p className="mt-3 text-slate-600">
          I focus on practical technical work across research, engineering, and implementation.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700"
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