import Projects from '@/components/Projects';

export default function ReposPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="text-4xl font-bold mb-6">All GitHub Repositories</h1>
        <Projects />
      </div>
    </main>
  );
}
