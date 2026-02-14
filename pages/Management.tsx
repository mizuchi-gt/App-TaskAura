
import React from 'react';
import { User, ShieldCheck, Code } from 'lucide-react';

const Management: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <h1 className="text-4xl md:text-5xl font-black text-[#1E3A8A] mb-16 text-center uppercase tracking-tight">
        Organización y Gestión
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <section className="space-y-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-[#3B82F6] mb-3">Tipo de empresa</h3>
            <p className="text-gray-700">Startup Tecnológica Universitaria - Proyecto desarrollado por estudiantes de Ingeniería en Sistemas.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-[#3B82F6] mb-3">Filosofía de Gestión</h3>
            <p className="text-gray-700">Metodología Ágil (Scrum) con enfoque en desarrollo iterativo y bajo costo de mantenimiento.</p>
          </div>
        </section>

        <section className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
          <h3 className="text-xl font-bold text-[#1E3A8A] mb-8 text-center">Equipo Fundador</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-blue-50">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600"><User size={24}/></div>
              <div>
                <p className="font-bold text-[#1E3A8A]">Victor Mendoza</p>
                <p className="text-xs text-gray-500 uppercase">Project Manager / Lead Architect</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-blue-50">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600"><Code size={24}/></div>
              <div>
                <p className="font-bold text-[#1E3A8A]">Joshua Mendez</p>
                <p className="text-xs text-gray-500 uppercase">CTO / Fullstack Developer</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-blue-50">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600"><ShieldCheck size={24}/></div>
              <div>
                <p className="font-bold text-[#1E3A8A]">Miguel Jaens</p>
                <p className="text-xs text-gray-500 uppercase">Lead Security / QA Engineer</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <section>
          <h2 className="text-2xl font-bold text-[#1E3A8A] mb-6">Funciones Específicas</h2>
          <ul className="space-y-4 text-gray-600">
            <li><strong>Victor:</strong> Gestión de cronograma, documentación técnica y análisis de requerimientos.</li>
            <li><strong>Joshua:</strong> Implementación del núcleo del sistema, API REST y lógica de base de datos.</li>
            <li><strong>Miguel:</strong> Aseguramiento de la calidad, pruebas de penetración y despliegue en la nube.</li>
          </ul>
        </section>
        <section className="bg-blue-50 p-10 rounded-3xl">
          <h2 className="text-2xl font-bold text-[#1E3A8A] mb-6">Actividades y Costos Preoperativos (Realistas)</h2>
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-blue-200 text-blue-800 font-bold">
                <th className="py-2">Concepto</th>
                <th className="py-2 text-right">Costo Est.</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="py-2">Registro de Dominio (.com / .app)</td><td className="py-2 text-right">$15</td></tr>
              <tr><td className="py-2">Hosting Inicial (Tier Estudiante/Starter)</td><td className="py-2 text-right">$120</td></tr>
              <tr><td className="py-2">Marketing en Redes Sociales (Orgánico/Ads)</td><td className="py-2 text-right">$300</td></tr>
              <tr><td className="py-2">Certificaciones de Seguridad (SSL/OpenSource)</td><td className="py-2 text-right">$0</td></tr>
              <tr className="font-bold border-t border-blue-200">
                <td className="py-2">Total Inversión Fundadores</td>
                <td className="py-2 text-right">$435</td>
              </tr>
            </tbody>
          </table>
          <p className="text-[10px] text-gray-400 mt-4 italic text-center">*Basado en el uso de créditos de nube para estudiantes y herramientas de código abierto.</p>
        </section>
      </div>
    </div>
  );
};

export default Management;
