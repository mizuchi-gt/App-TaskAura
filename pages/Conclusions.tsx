
import React from 'react';

const Conclusions: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-4xl md:text-5xl font-black text-[#1E3A8A] mb-16 text-center uppercase tracking-tight">
        Conclusiones
      </h1>

      <div className="space-y-12">
        <section className="border-l-4 border-[#3B82F6] pl-8">
          <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">Viabilidad del Proyecto</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            El análisis financiero y de mercado demuestra una viabilidad técnica y económica sólida. Con un VAN positivo y un TIR superior a la tasa de descuento de la industria, TaskAura se presenta como una inversión segura con alto potencial de escalabilidad.
          </p>
        </section>

        <section className="border-l-4 border-[#3B82F6] pl-8">
          <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">Importancia del Servicio</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            En un mundo híper-conectado, la organización ya no es una opción, es una necesidad de supervivencia. TaskAura llena el vacío entre las herramientas complejas de nivel enterprise y las listas de tareas básicas e ineficientes.
          </p>
        </section>

        <section className="border-l-4 border-[#3B82F6] pl-8">
          <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">Proyección Futura</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            La hoja de ruta contempla la integración profunda con realidad aumentada y asistentes de voz IA, posicionando a TaskAura a la vanguardia de la próxima ola de interfaces de productividad.
          </p>
        </section>

        <div className="bg-[#1E3A8A] p-12 rounded-3xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Valor del Modelo Digital</h3>
          <p className="opacity-80 max-w-2xl mx-auto italic">
            "La tecnología de TaskAura no solo gestiona tareas, gestiona el recurso más valioso de la humanidad: el tiempo y la atención."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Conclusions;
