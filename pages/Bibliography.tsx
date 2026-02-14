
import React from 'react';

const Bibliography: React.FC = () => {
  const sources = [
    "Drucker, P. (2023). El ejecutivo eficaz: Guía definitiva para la productividad moderna.",
    "Osterwalder, A. (2020). Generación de modelos de negocio: Planificación estratégica digital.",
    "Kotler, P. (2021). Marketing 5.0: Tecnología para la humanidad.",
    "Graham, P. (2019). Hackers & Painters: Big Ideas from the Computer Age.",
    "Gartner (2024). Magic Quadrant for Work Management Solutions.",
    "The Lean Startup (2018). Eric Ries: Metodologías ágiles de negocio.",
    "SaaS Management Institute (2023). Reporte de Tendencias Globales de Productividad."
  ];

  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-4xl md:text-5xl font-black text-[#1E3A8A] mb-16 text-center uppercase tracking-tight">
        Bibliografía
      </h1>

      <div className="bg-gray-50 p-12 rounded-3xl border border-gray-100 shadow-sm">
        <ul className="space-y-6">
          {sources.map((source, idx) => (
            <li key={idx} className="flex gap-4 items-start text-gray-700">
              <span className="text-blue-500 font-bold">[{idx + 1}]</span>
              <p className="hover:text-blue-600 transition-colors cursor-default">{source}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Bibliography;
