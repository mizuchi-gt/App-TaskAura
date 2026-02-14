
import React from 'react';

const Project: React.FC = () => {
  const sections = [
    {
      title: "Problema que resuelve",
      content: "La fragmentación de la información y la sobrecarga cognitiva en entornos laborales digitales. Los profesionales pierden en promedio el 20% de su tiempo buscando archivos o recordando tareas pendientes."
    },
    {
      title: "Objetivo general",
      content: "Desarrollar una plataforma integral de gestión de tareas basada en principios de diseño minimalista y motores de automatización para incrementar la eficiencia operativa en un 35%."
    },
    {
      title: "Objetivos específicos",
      content: "1. Reducir el tiempo de entrada de datos. 2. Centralizar la comunicación de equipos. 3. Proporcionar métricas de productividad en tiempo real. 4. Automatizar recordatorios basados en prioridad crítica."
    },
    {
      title: "Justificación",
      content: "La creciente demanda de soluciones de teletrabajo y la necesidad de optimización de recursos hacen que TaskAura no sea solo una herramienta, sino una ventaja competitiva esencial para las startups modernas."
    },
    {
      title: "Beneficios",
      content: "Aumento del enfoque, reducción del estrés laboral por desorganización, mejora en la trazabilidad de proyectos y una interfaz que prioriza el bienestar digital del usuario."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto py-20 px-6">
      <h1 className="text-4xl md:text-5xl font-black text-[#1E3A8A] mb-12 text-center uppercase tracking-tight">
        Descripción general del proyecto
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <img 
            src="https://picsum.photos/seed/productivity2/800/600" 
            alt="Productividad Digital" 
            className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
        <div className="space-y-8">
          {sections.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-xl font-bold text-[#3B82F6] mb-2">{section.title}</h2>
              <p className="text-gray-700 leading-relaxed border-l-4 border-blue-100 pl-4">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
