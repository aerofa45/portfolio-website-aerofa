import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="mt-3 text-slate-600">
          Selected work from my public GitHub portfolio.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="mt-4 leading-7 text-slate-600">{project.summary}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white"
              >
                View Repo
              </a>

              {'demo' in project && project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
