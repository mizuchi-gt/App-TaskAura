
import React from 'react';
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Legend,
  AreaChart,
  Area
} from 'recharts';

const dataRevenueProjection = [
  { year: '2026', ingresos: 95880, gastos: 8000 }, // 1000 users * $7.99 * 12 = $95,880
  { year: '2027', ingresos: 239700, gastos: 20000 }, // 2500 users
  { year: '2028', ingresos: 575280, gastos: 50000 }, // 6000 users
  { year: '2029', ingresos: 1150560, gastos: 120000 }, // 12000 users
  { year: '2030', ingresos: 1917600, gastos: 250000 }, // 20000 users
];

const FinancialPlan: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <h1 className="text-4xl md:text-5xl font-black text-[#1E3A8A] mb-16 text-center uppercase tracking-tight">
        Plan Financiero Consolidado
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <section className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          <h2 className="text-2xl font-bold text-[#1E3A8A] mb-6">Proyección de Ingresos</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 text-center">
              <p className="text-xs text-blue-600 font-bold uppercase tracking-wider mb-2">Precio Suscripción Premium</p>
              <p className="text-5xl font-black text-[#1E3A8A]">$7.99<span className="text-lg text-gray-400 font-normal"> /mes</span></p>
            </div>
            <table className="w-full text-sm">
              <tbody className="divide-y divide-gray-100">
                <tr className="py-3 flex justify-between"><td className="text-gray-500">Base Usuarios 2026 (Meta)</td><td className="font-bold text-[#1E3A8A]">1,000 usuarios</td></tr>
                <tr className="py-3 flex justify-between"><td className="text-gray-500">Ingreso Bruto Mensual</td><td className="font-bold text-[#3B82F6]">$7,990</td></tr>
                <tr className="py-3 flex justify-between"><td className="text-gray-500">Ingreso Bruto Anual (Año 1)</td><td className="font-bold text-green-600">$95,880</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="h-80 bg-gray-50 p-8 rounded-2xl border border-gray-100">
          <h3 className="text-center font-bold text-gray-400 mb-4 uppercase text-xs tracking-widest">Utilidad Proyectada 2026-2030</h3>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={dataRevenueProjection}>
              <defs>
                <linearGradient id="colorIngresos" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="year" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
              <Legend />
              <Area type="monotone" dataKey="ingresos" name="Ingresos Totales" stroke="#3B82F6" fillOpacity={1} fill="url(#colorIngresos)" />
              <Area type="monotone" dataKey="gastos" name="Costos Operativos" stroke="#1E3A8A" fill="#1E3A8A" fillOpacity={0.1} />
            </AreaChart>
          </ResponsiveContainer>
        </section>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-center">
        <div className="bg-[#1E3A8A] text-white p-8 rounded-2xl shadow-lg">
          <p className="text-xs uppercase tracking-widest opacity-70 mb-2">Punto de Equilibrio</p>
          <p className="text-3xl font-black">120 Usuarios</p>
        </div>
        <div className="bg-[#3B82F6] text-white p-8 rounded-2xl shadow-lg">
          <p className="text-xs uppercase tracking-widest opacity-70 mb-2">TIR (IRR) 5 Años</p>
          <p className="text-3xl font-black">42.5%</p>
        </div>
        <div className="bg-white border-2 border-[#3B82F6] text-[#3B82F6] p-8 rounded-2xl shadow-sm">
          <p className="text-xs uppercase tracking-widest opacity-60 mb-2">Inversión CapEx</p>
          <p className="text-3xl font-black">$435.00</p>
        </div>
      </div>

      <div className="bg-white p-10 border-2 border-gray-100 rounded-3xl overflow-hidden">
        <h3 className="text-xl font-bold text-[#1E3A8A] mb-8 text-center uppercase tracking-widest">Matriz de Crecimiento Financiero</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="bg-gray-50 text-gray-400">
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Concepto / Año</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">2026</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">2027</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">2028</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">2029</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">2030</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-6 py-4 font-bold text-[#1E3A8A]">Usuarios Premium</td>
                <td className="px-6 py-4">1,000</td>
                <td className="px-6 py-4">2,500</td>
                <td className="px-6 py-4">6,000</td>
                <td className="px-6 py-4">12,000</td>
                <td className="px-6 py-4">20,000</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-green-600">Ingresos ($7.99/u)</td>
                <td className="px-6 py-4">$95,880</td>
                <td className="px-6 py-4">$239,700</td>
                <td className="px-6 py-4">$575,280</td>
                <td className="px-6 py-4">$1,150,560</td>
                <td className="px-6 py-4">$1,917,600</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-red-500">Gastos Op.</td>
                <td className="px-6 py-4">$8,000</td>
                <td className="px-6 py-4">$20,000</td>
                <td className="px-6 py-4">$50,000</td>
                <td className="px-6 py-4">$120,000</td>
                <td className="px-6 py-4">$250,000</td>
              </tr>
              <tr className="bg-blue-50/50">
                <td className="px-6 py-4 font-black text-[#1E3A8A]">Resultado Neto</td>
                <td className="px-6 py-4 font-bold">$87,880</td>
                <td className="px-6 py-4 font-bold">$219,700</td>
                <td className="px-6 py-4 font-bold">$525,280</td>
                <td className="px-6 py-4 font-bold">$1,030,560</td>
                <td className="px-6 py-4 font-bold">$1,667,600</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FinancialPlan;
