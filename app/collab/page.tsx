export default function CollaboratePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="mb-6 text-4xl font-bold">Collaborate</h1>

      <p className="mb-6 leading-7 text-slate-700">
        I am open to collaboration on data science, machine learning, research
        engineering, biomedical modeling, analytics, and technical development
        projects.
      </p>

      <p className="mb-6 leading-7 text-slate-700">
        I enjoy working on projects that involve structured problem-solving,
        clear communication, experimentation, and practical implementation.
      </p>

      <h2 className="mb-4 mt-10 text-2xl font-semibold">
        Areas I can collaborate on
      </h2>

      <ul className="ml-6 list-disc space-y-2 text-slate-700">
        <li>Machine learning and data science projects</li>
        <li>PINNs and scientific modeling</li>
        <li>Biomedical or ECG-related research</li>
        <li>Analytics, dashboards, and automation tools</li>
        <li>Technical prototypes and engineering-oriented work</li>
      </ul>

      {/* Support Section */}

      <h2 className="mb-4 mt-12 text-2xl font-semibold">Support my work</h2>

      <p className="mb-6 text-slate-700">
        If you find my work useful, you can support me here.
      </p>

      <a
        href="https://ko-fi.com/aerofa"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-lg bg-[#29abe0] px-6 py-3 text-white font-semibold hover:opacity-90"
      >
        Support on Ko-fi ☕
      </a>
    </main>
  );
}
