export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="mb-6 text-4xl font-bold">About Me</h1>

      <p className="mb-6 leading-7 text-slate-700">
        I am a graduate student with interests in data science, machine
        learning, scientific modeling, and security-oriented technical work. My
        projects combine research-driven modeling with practical implementation,
        including physics-informed neural networks, biomedical AI, analytics,
        and software tools.
      </p>

      <p className="mb-6 leading-7 text-slate-700">
        I enjoy problems that need both analytical thinking and actual building.
        My work spans ML experiments, automation, data tools, research
        workflows, and technical projects that are meant to be used, not just
        studied.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">Areas of Interest</h2>
      <ul className="ml-6 list-disc space-y-2 text-slate-700">
        <li>Data Science and Machine Learning</li>
        <li>Physics-Informed Neural Networks</li>
        <li>Biomedical and ECG-based modeling</li>
        <li>Analytics and automation</li>
        <li>Embedded security and technical systems</li>
      </ul>
    </main>
  );
}
