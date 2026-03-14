'use client';

import { useState } from 'react';
import Link from 'next/link';

const researchItems = [
  {
    id: 1,
    title: 'Physics-Informed Neural Networks (PINNs) for Scientific Modeling',
    description: 'Developed advanced PINN architectures for solving differential equations in biomedical systems, specifically ECG-based cardiac modeling.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    details:
      'This research focuses on integrating physical constraints (differential equations) into neural networks. By embedding the laws of physics into the loss function, the model achieves higher accuracy in predicting cardiac conditions from sparse ECG data.',
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'Scientific Computing', 'Deep Learning'],
    publications: 'PINN Thesis Research - Hybrid HDC-PINN Model for ECG Authentication',
    link: 'https://github.com/aerofa45/PINN_Thesis/blob/main/Thesis%20(1).pdf',
  },
  {
    id: 2,
    title: 'Best Approximation in Soft Metric Spaces',
    description: 'Extending classical approximation theory to soft metric spaces to model uncertain and imprecise data.',
    image: 'https://images.pexels.com/photos/6239190/pexels-photo-6239190.jpeg',
    details:
      'Established theorems under soft contractive and cyclic contractive mappings. Applications include store-customer models and blood diagnostics case studies where optimal solutions are required under parameterized uncertainty.',
    technologies: ['Pure Mathematics', 'Topology', 'Soft Set Theory', 'Fixed Point Theory'],
    publications: 'Best Approximation in Soft Metric Spaces - 2025 Publication',
    link: 'https://scholar.google.com/citations?hl=en&user=xvsTrZgAAAAJ',
  },
  {
    id: 3,
    title: 'Medical Image Analysis using CNNs',
    description: 'Convolutional Neural Network (CNN) approaches for automated pneumonia diagnosis from clinical imaging.',
    image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg',
    details:
      'Developed and optimized CNN architectures using PyRadiomics for feature extraction and Scikit-learn for handling high-dimensional, imbalanced diagnostic data.',
    technologies: ['CNN', 'Medical Imaging', 'PyRadiomics', 'Image Processing', 'Scikit-learn'],
    publications: 'CNN for Diagnosis - Pneumonia Detection System',
    link: 'https://github.com/aerofa45/CNN-for-Diagnosis_Pneumonia/blob/main/Ongoing%20research%20thesis.pdf',
  },
];

export default function ResearchPage() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mb-16">
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-slate-500">
            Portfolio
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">
            Research & Scientific Work
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Bridging the gap between theoretical mathematics, physics-informed AI, and clinical diagnostics.
          </p>
        </div>

        <div className="space-y-8">
          {researchItems.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-shadow"
            >
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-slate-600">
                    {item.description}
                  </p>
                  <div className="mt-6 flex gap-4">
                    <button
                      onClick={() =>
                        setActiveId(activeId === item.id ? null : item.id)
                      }
                      className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
                    >
                      {activeId === item.id ? 'Hide Abstract' : 'Read Abstract'}
                    </button>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      View Source
                    </a>
                  </div>
                </div>
              </div>

              {activeId === item.id && (
                <div className="border-t bg-slate-50 p-8 animate-in fade-in slide-in-from-top-4 duration-300">
                  <div className="max-w-3xl">
                    <h4 className="font-semibold text-slate-900 mb-2">Technical Overview</h4>
                    <p className="text-slate-700 leading-relaxed">{item.details}</p>

                    <div className="mt-6">
                      <h4 className="font-semibold text-slate-900 mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-white border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <p className="text-sm text-slate-500">
                        <strong className="text-slate-900">Project Citation:</strong> {item.publications}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 border-t pt-8">
          <Link href="/" className="inline-flex items-center text-slate-900 font-medium hover:underline">
            ← Back to Home Portfolio
          </Link>
        </div>
      </section>
    </main>
  );
}
