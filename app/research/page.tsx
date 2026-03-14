'use client';

import { useState } from 'react';
import Link from 'next/link';

const researchItems = [
  {
    id: 1,
    title: 'Physics-Informed Neural Networks (PINNs) for Scientific Modeling',
    description: 'Developed advanced PINN architectures for solving differential equations in biomedical and physical systems.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    details:
      'This research focuses on integrating physical constraints into neural networks to create more accurate scientific models. Applications include cardiac modeling, fluid dynamics, and material science.',
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'Scientific Computing', 'Deep Learning'],
    publications: 'PINN Thesis Research - Published findings on accuracy improvements',
  },
  {
    id: 2,
    title: 'ECG Signal Processing and Cardiac Modeling',
    description:
      'Advanced signal analysis and physics-based modeling of electrocardiographic data for diagnostic applications.',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg',
    details:
      'Combining signal processing techniques with machine learning to extract meaningful patterns from ECG signals and predict cardiac conditions.',
    technologies: ['Signal Processing', 'Medical AI', 'Deep Learning', 'Bioinformatics', 'Data Analysis'],
    publications: 'ECG-PINN Integration Research',
  },
  {
    id: 3,
    title: 'Medical Image Analysis using Deep Learning',
    description: 'CNN-based approaches for pneumonia diagnosis and medical image classification.',
    image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg',
    details:
      'Developed convolutional neural networks optimized for medical imaging, with focus on interpretability and clinical relevance.',
    technologies: ['CNN', 'Medical Imaging', 'TensorFlow', 'Image Processing', 'Classification'],
    publications: 'CNN for Diagnosis - Pneumonia Detection System',
  },
];

export default function ResearchPage() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">

        <div className="mb-16">
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-slate-500">
            Research
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            Research & Scientific Work
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Physics-informed neural networks, biomedical modeling, and scientific machine learning.
          </p>
        </div>

        <div className="space-y-8">
          {researchItems.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white hover:shadow-lg"
            >
              <div className="grid md:grid-cols-2">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />

                <div className="p-8">

                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-slate-600">
                    {item.description}
                  </p>

                  <button
                    onClick={() =>
                      setActiveId(activeId === item.id ? null : item.id)
                    }
                    className="mt-6 rounded-lg bg-slate-900 px-4 py-2 text-white"
                  >
                    {activeId === item.id ? 'Hide Details' : 'View Details'}
                  </button>

                </div>
              </div>

              {activeId === item.id && (
                <div className="border-t bg-slate-50 p-8">

                  <p>{item.details}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-200 px-3 py-1 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-sm">
                    <strong>Publication:</strong> {item.publications}
                  </p>

                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/" className="rounded-xl bg-slate-900 px-5 py-2 text-white">
            Back to Home
          </Link>
        </div>

      </section>
    </main>
  );
}