'use client';

import { useState } from 'react';
import Link from 'next/link';

// Minimalist icons for a professional research look
const PinnsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-slate-500" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 1v22M17 5l-10 14M7 5l10 14M2 12h20" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="3" fill="white" strokeWidth="2"/>
  </svg>
);

const TopologyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-slate-500" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/>
    <path d="M12 6a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4z"/>
    <circle cx="12" cy="12" r="1" fill="currentColor"/>
  </svg>
);

const CnnIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-slate-500" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="2" width="20" height="20" rx="2"/>
    <path d="M7 7h10v10H7zM12 7v10M7 12h10" strokeLinecap="round"/>
  </svg>
);

const researchItems = [
  {
    id: 1,
    title: 'Physics-Informed Neural Networks (PINNs)',
    description: 'Developed advanced PINN architectures for solving differential equations in biomedical systems.',
    icon: PinnsIcon,
    details:
      'Embedded laws of physics directly into neural network loss functions. Developed hybrid HDC-PINN models to achieve high-accuracy predictions in ECG-based cardiac modeling and signal processing.',
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'Scientific Computing', 'Differential Equations'],
    publications: 'Thesis: Hybrid HDC-PINN Model for ECG Authentication',
    link: 'https://github.com/aerofa45/PINN_Thesis/blob/main/Thesis%20(1).pdf',
  },
  {
    id: 2,
    title: 'Pure Math: Soft Metric Spaces',
    description: 'Extending approximation theory to model uncertain data under parameterized uncertainty.',
    icon: TopologyIcon,
    details:
      'Examined best approximation within soft metric spaces. Extended classical theory, defining soft best approximation distance and established theorems for soft contractive mappings. Applications demonstrated in blood diagnostics case studies.',
    technologies: ['Topology', 'Mathematical Modeling', 'Fixed Point Theory', 'Soft Set Theory'],
    publications: '2025 Publication: Best Approximation in Soft Metric Spaces',
    link: 'https://scholar.google.com/citations?hl=en&user=xvsTrZgAAAAJ',
  },
  {
    id: 3,
    title: 'Medical Image Analysis using CNNs',
    description: 'CNN-based diagnostic systems optimized for automated pneumonia detection.',
    icon: CnnIcon,
    details:
      'Developed convolutional neural networks focused on diagnostic accuracy. Used PyRadiomics for feature extraction and optimized classification pipelines for clinical relevance and imbalanced data handling.',
    technologies: ['CNN', 'Medical Imaging', 'Image Processing', 'Scikit-learn', 'Feature Engineering'],
    publications: 'Thesis: CNN for Diagnosis - Pneumonia Detection System',
    link: 'https://github.com/aerofa45/CNN-for-Diagnosis_Pneumonia/blob/main/Ongoing%20research%20thesis.pdf',
  },
];

export default function ResearchPage() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mb-20 border-b pb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Scientific Portfolio
          </p>
          <h1 className="text-4xl font-extrabold md:text-5xl tracking-tight">
            Research & Publications
          </h1>
          <p className="mt-5 max-w-3xl text-xl text-slate-600 leading-relaxed">
            bridging theoretical mathematics with physics-informed artificial intelligence and clinical diagnostics.
          </p>
        </div>

        <div className="space-y-12">
          {researchItems.map((item) => (
            <div key={item.id} className="grid md:grid-cols-[1fr,2fr] gap-10 items-start">
              
              <div className="flex items-center gap-6 border-b md:border-none pb-6 md:pb-0">
                <div className="bg-slate-100 p-4 rounded-xl shadow-inner">
                  <item.icon />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">
                  {item.title}
                </h3>
              </div>

              <div className="space-y-4">
                <p className="text-lg text-slate-700">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.technologies.map((tech) => (
                    <span key={tech} className="rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-6 flex flex-col sm:flex-row gap-4">
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors">
                    View Full Publication
                  </a>
                  <button onClick={() => setActiveId(activeId === item.id ? null : item.id)} className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
                    {activeId === item.id ? 'Hide Abstract' : 'Read Abstract'}
                  </button>
                </div>

                {activeId === item.id && (
                  <div className="mt-6 border-l-4 border-slate-300 pl-6 py-2 animate-in fade-in slide-in-from-left-4 duration-300">
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {item.details}
                    </p>
                    <p className="mt-4 text-xs italic text-slate-500">
                      Citation: {item.publications}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 border-t pt-10">
          <Link href="/" className="group inline-flex items-center text-slate-900 font-semibold">
            <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span>
            Back to Home Portfolio
          </Link>
        </div>
      </section>
    </main>
  );
}
