
import React from 'react';
import { ArrowRight, Server, Code, Layers, Users, Zap } from 'lucide-react';

const ProductionPlan: React.FC = () => {
  const steps = [
    { icon: <Zap />, text: "Registro de Usuario" },
    { icon: <Layers />, text: "Configuración de Espacios" },
    { icon: <Code />, text: "Integración con API Externas" },
    { icon: <Server />, text: "Sincronización Cloud" },
    { icon: <Users />, text: "Colaboración en Tiempo Real" }
  ];

  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <h1 className="text-4xl md:text-5xl font-black text-[#1E3A8A] mb-16 text-center uppercase tracking-tight">
        Plan de Producción
      </h1>

      <section className="mb-20">
        <h2 className="text-2xl font-bold text-[#1E3A8A] mb-10 text-center">Flujograma del Sistema</h2>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col items-center p-6 bg-white border-2 border-blue-50 rounded-2xl shadow-sm w-44">
                <div className="text-[#3B82F6] mb-3">{step.icon}</div>
                <span className="text-xs font-bold text-center uppercase tracking-wide text-gray-500">{step.text}</span>
              </div>
              {idx < steps.length - 1 && <ArrowRight className="hidden md:block text-gray-300" />}
            </React.Fragment>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h3 className="text-xl font-bold text-[#1E3A8A] mb-4">Equipos y activos tecnológicos</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Servidores en AWS (Cloud Computing)</li>
              <li>• Bases de datos PostgreSQL escalables</li>
              <li>• Entornos de desarrollo CI/CD</li>
              <li>• Herramientas de ciberseguridad avanzada</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h3 className="text-xl font-bold text-[#1E3A8A] mb-4">Mano de obra</h3>
            <p className="text-gray-600">Equipo de ingeniería de software, diseñadores UI/UX, especialistas en DevOps y soporte técnico 24/7.</p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h3 className="text-xl font-bold text-[#1E3A8A] mb-4">Capacidad operativa</h3>
            <p className="text-gray-600">Soporte inicial para 100,000 usuarios recurrentes con escalabilidad horizontal infinita mediante microservicios.</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h3 className="text-xl font-bold text-[#1E3A8A] mb-4">Ubicación del sistema</h3>
            <p className="text-gray-600">Estructura 100% remota con data centers distribuidos globalmente (Virginia, Dublín, Tokio) para baja latencia.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductionPlan;
