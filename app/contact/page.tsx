export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-4 text-4xl font-bold">Contact</h1>

      <p className="mb-10 text-slate-700 text-lg">
        Feel free to reach out for collaboration, research work, technical
        projects, or job opportunities.
      </p>

      <div className="space-y-6">
        {/* Email */}
        <div className="rounded-xl border border-slate-200 p-5 bg-white">
          <p className="font-semibold">Email</p>
          <p className="text-slate-700">aerofa45@email.com</p>
        </div>

        {/* GitHub */}
        <div className="rounded-xl border border-slate-200 p-5 bg-white">
          <p className="font-semibold mb-2">GitHub</p>

          <a
            href="https://github.com/aerofa45"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-800"
          >
            View GitHub Profile
          </a>
        </div>

        {/* LinkedIn */}
        <div className="rounded-xl border border-slate-200 p-5 bg-white">
          <p className="font-semibold mb-2">LinkedIn</p>

          <a
            href="https://linkedin.com/in/aman-chaudhary-4a9621163/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            View LinkedIn
          </a>
        </div>

        {/* Medium */}
        <div className="rounded-xl border border-slate-200 p-5 bg-white">
          <p className="font-semibold mb-2">Medium</p>

          <a
            href="https://medium.com/@aerofa45"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
          >
            Read Articles
          </a>
        </div>
      </div>
    </main>
  );
}
