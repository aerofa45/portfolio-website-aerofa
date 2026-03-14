import Link from 'next/link';

export default function Hero() {
  return (
    <>
      <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
          <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-slate-500 opacity-10 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-32 md:py-40">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="text-white">
              <p className="mb-4 text-sm uppercase tracking-[0.2em] text-blue-300">
                Portfolio
              </p>

              <h1 className="text-5xl font-bold leading-tight md:text-7xl">
                Data Science & Research Engineering
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                Specializing in machine learning, physics-informed neural networks, biomedical modeling, analytics, and practical software solutions.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white transition-all hover:bg-blue-700 hover:shadow-lg"
                >
                  View Projects
                </Link>

                <Link
                  href="/research"
                  className="rounded-2xl bg-slate-700 px-6 py-3 font-medium text-white transition-all hover:bg-slate-600"
                >
                  Research Work
                </Link>

                <Link
                  href="/contact"
                  className="rounded-2xl border border-slate-400 bg-transparent px-6 py-3 font-medium text-white transition-all hover:bg-slate-800"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="relative h-96 overflow-hidden rounded-3xl border border-slate-700 bg-gradient-to-br from-slate-700 to-slate-900 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
                alt="Research"
                className="h-full w-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:shadow-lg">
            <div className="text-3xl font-bold text-blue-600">ML & AI</div>
            <p className="mt-4 text-slate-600">
              Deep learning, neural networks, scientific modeling with PINNs and advanced algorithms.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:shadow-lg">
            <div className="text-3xl font-bold text-blue-600">Research</div>
            <p className="mt-4 text-slate-600">
              Biomedical applications, signal processing, physics-informed approaches to complex problems.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:shadow-lg">
            <div className="text-3xl font-bold text-blue-600">Engineering</div>
            <p className="mt-4 text-slate-600">
              Full-stack solutions, analytics dashboards, automation, and practical software delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-2 text-sm uppercase tracking-[0.2em] text-slate-500">
              Featured Areas
            </p>
            <h2 className="text-4xl font-bold text-slate-900">
              What I Do
            </h2>
          </div>

          <div className="space-y-12">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="relative h-72 overflow-hidden rounded-2xl border border-slate-200 shadow-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg"
                  alt="Biomedical Research"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-slate-900">
                  Biomedical & Medical AI
                </h3>
                <p className="mt-4 text-lg text-slate-600">
                  Applying deep learning to medical imaging, ECG analysis, and disease diagnosis. Combining signal processing with neural networks for clinical insights.
                </p>
                <Link
                  href="/research"
                  className="mt-6 w-fit text-blue-600 font-medium hover:text-blue-700"
                >
                  Explore Research →
                </Link>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="order-2 flex flex-col justify-center md:order-1">
                <h3 className="text-3xl font-bold text-slate-900">
                  Physics-Informed Neural Networks
                </h3>
                <p className="mt-4 text-lg text-slate-600">
                  Developing PINN architectures that integrate physical laws into machine learning models for accurate scientific prediction and modeling.
                </p>
                <Link
                  href="/research"
                  className="mt-6 w-fit text-blue-600 font-medium hover:text-blue-700"
                >
                  View Research →
                </Link>
              </div>
              <div className="order-1 relative h-72 overflow-hidden rounded-2xl border border-slate-200 shadow-md md:order-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg"
                  alt="Neural Networks"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="relative h-72 overflow-hidden rounded-2xl border border-slate-200 shadow-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg"
                  alt="Analytics"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-slate-900">
                  Analytics & Data Solutions
                </h3>
                <p className="mt-4 text-lg text-slate-600">
                  Building practical analytics dashboards, data pipelines, and web-based tools that deliver actionable insights and automate workflows.
                </p>
                <Link
                  href="/projects"
                  className="mt-6 w-fit text-blue-600 font-medium hover:text-blue-700"
                >
                  View Projects →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">
                Interested in Collaboration?
              </h2>
              <p className="mt-4 text-slate-300">
                Open to partnerships on ML research, biomedical projects, and innovative technical solutions.
              </p>
              <Link
                href="/collab"
                className="mt-6 inline-block rounded-2xl bg-blue-600 px-6 py-3 font-medium transition-colors hover:bg-blue-700"
              >
                Learn About Collaboration
              </Link>
            </div>

            <div className="relative h-64 overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
                alt="Collaboration"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
