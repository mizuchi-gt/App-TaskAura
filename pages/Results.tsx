
import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';

const dataGrowthUsers = [
  { year: '2026', value: 1000 },
  { year: '2027', value: 2000 },
  { year: '2028', value: 5000 },
  { year: '2029', value: 10000 },
  { year: '2030', value: 16600 },
];

const Results: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <h1 className="text-4xl md:text-5xl font-black text-[#1E3A8A] mb-16 text-center uppercase tracking-tight">
        Resultados y Evaluación
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center">
        <section className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">Metas de Lanzamiento (2026)</h3>
            <p className="text-gray-600">TaskAura busca validar su propuesta de valor con un primer cohorte de 1,000 usuarios premium, enfocándose en la optimización de servidores y feedback directo de usuarios universitarios y freelance.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">Indicadores Clave de Desempeño</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <span className="block text-2xl font-black text-[#1E3A8A]">1,000</span>
                <span className="text-xs text-blue-600 font-bold uppercase">Usuarios Año 1</span>
              </div>
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <span className="block text-2xl font-black text-[#1E3A8A]">$7.99</span>
                <span className="text-xs text-blue-600 font-bold uppercase">Ticket Promedio</span>
              </div>
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <span className="block text-2xl font-black text-[#1E3A8A]">15%</span>
                <span className="text-xs text-blue-600 font-bold uppercase">Tasa de Conversión</span>
              </div>
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <span className="block text-2xl font-black text-[#1E3A8A]">24/7</span>
                <span className="text-xs text-blue-600 font-bold uppercase">Disponibilidad</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 h-[450px]">
          <h3 className="text-center font-bold text-gray-400 mb-6 uppercase tracking-widest text-sm">Escalabilidad de Usuarios Premium (2026-2030)</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dataGrowthUsers}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="year" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip 
                cursor={{fill: '#f8fafc'}}
                contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
              />
              <Bar dataKey="value" fill="#3B82F6" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </section>
      </div>

      <div className="bg-[#1E3A8A] p-12 rounded-3xl text-white shadow-2xl">
        <h3 className="text-2xl font-bold mb-6 text-center">Evaluación del Impacto en Ingeniería</h3>
        <p className="text-blue-100 leading-relaxed text-lg text-center max-w-4xl mx-auto">
          Como estudiantes de Ingeniería en Sistemas, Victor, Joshua y Miguel han diseñado una arquitectura que prioriza 
          la eficiencia del código y la automatización de procesos. TaskAura no solo representa un éxito comercial con 
          su modelo de $7.99/mes, sino que demuestra la capacidad de aplicar principios de ingeniería de software 
          moderna para resolver problemas de gestión de tiempo a escala global con costos operativos mínimos.
        </p>
      </div>
    </div>
  );
};

export default Results;
