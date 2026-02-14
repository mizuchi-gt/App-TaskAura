
import React from 'react';
import { Download, FileText, BarChart, Map, Layout } from 'lucide-react';

const Annexes: React.FC = () => {
  const annexes = [
    { title: "Documento del proyecto", type: "PDF", icon: <FileText className="w-8 h-8"/>, size: "12.4 MB" },
    { title: "Tablas financieras detalladas", type: "XLSX", icon: <BarChart className="w-8 h-8"/>, size: "2.1 MB" },
    { title: "Diagramas de flujo", type: "JPG", icon: <Map className="w-8 h-8"/>, size: "4.5 MB" },
    { title: "Material complementario (UI Kit)", type: "FIGMA", icon: <Layout className="w-8 h-8"/>, size: "890 KB" }
  ];

  return (
    <div className="max-w-5xl mx-auto py-20 px-6">
      <h1 className="text-4xl md:text-5xl font-black text-[#1E3A8A] mb-16 text-center uppercase tracking-tight">
        Anexos
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {annexes.map((item, idx) => (
          <div 
            key={idx} 
            className="group bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-[#3B82F6] transition-all duration-300 flex items-center justify-between"
          >
            <div className="flex items-center gap-6">
              <div className="text-gray-400 group-hover:text-[#3B82F6] transition-colors">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-[#1E3A8A]">{item.title}</h3>
                <p className="text-xs text-gray-400 uppercase tracking-widest">{item.type} • {item.size}</p>
              </div>
            </div>
            <button className="p-3 bg-gray-50 rounded-full group-hover:bg-blue-50 text-gray-400 group-hover:text-[#3B82F6] transition-all">
              <Download className="w-5 h-5"/>
            </button>
          </div>
        ))}
      </div>

      <div className="mt-20 p-12 bg-gray-50 rounded-3xl text-center">
        <h3 className="text-xl font-bold text-gray-400 mb-4 italic">Vista Previa - Dashboard TaskAura</h3>
        <img 
            src="https://picsum.photos/seed/interface/1200/600" 
            alt="TaskAura Interface Preview" 
            className="rounded-xl shadow-xl grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
        />
      </div>
    </div>
  );
};

export default Annexes;
