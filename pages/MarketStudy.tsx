
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';

const dataMarket = [
  { name: 'Competidores Tradicionales', value: 45 },
  { name: 'Apps de Notas Básicas', value: 25 },
  { name: 'Herramientas Enterprise', value: 20 },
  { name: 'TaskAura (Nicho)', value: 10 },
];

const dataDemand = [
  { year: '2026', value: 1000 },
  { year: '2027', value: 2500 },
  { year: '2028', value: 6000 },
  { year: '2029', value: 12000 },
  { year: '2030', value: 20000 },
];

const COLORS_CHART = ['#1E3A8A', '#3B82F6', '#93C5FD', '#BFDBFE'];

const MarketStudy: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <h1 className="text-4xl md:text-5xl font-black text-[#1E3A8A] mb-16 text-center uppercase tracking-tight">
        Estudio de Mercado
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-3">Mercado objetivo</h2>
            <p className="text-gray-600">Enfoque estratégico en estudiantes de Ingeniería en Sistemas y jóvenes desarrolladores que requieren una organización técnica rigurosa pero accesible.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-3">Perfil de clientes</h2>
            <p className="text-gray-600">Nativos digitales, early adopters de entre 18 y 30 años, con alta sensibilidad al precio pero exigentes en cuanto a la calidad de la UI/UX.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-3">Necesidad del mercado</h2>
            <p className="text-gray-600">Demanda insatisfecha de una herramienta que combine simplicidad con integraciones de código. TaskAura se posiciona con un precio disruptivo de $7.99/mes.</p>
          </div>
        </section>

        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 h-80">
          <h3 className="text-center font-bold text-gray-400 mb-4 uppercase text-xs tracking-widest">Participación de Mercado Proyectada</h3>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={dataMarket}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {dataMarket.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS_CHART[index % COLORS_CHART.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 h-80">
          <h3 className="text-center font-bold text-[#1E3A8A] mb-4 uppercase text-xs tracking-widest">Demanda Realista: Usuarios Premium (2026-2030)</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dataDemand}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="year" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip 
                cursor={{fill: '#f8fafc'}}
                contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
              />
              <Bar dataKey="value" fill="#3B82F6" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-3">Ventaja Competitiva</h2>
            <p className="text-gray-600">Desarrollado localmente por Victor, Joshua y Miguel, el sistema ofrece latencia mínima y soporte personalizado que las grandes corporaciones no pueden igualar.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-3">Plan de Captación 2026</h2>
            <p className="text-gray-600">Meta inicial: 1,000 usuarios premium mediante referidos directos en facultades de ingeniería y comunidades de desarrolladores locales.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MarketStudy;
