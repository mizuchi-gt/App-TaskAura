
import React from 'react';
import { Link } from 'react-router-dom';
import { ICONS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center text-white overflow-hidden bg-[#1E3A8A]">
        <img 
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1920" 
          alt="Technology Hero" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30"
        />
        <div className="relative z-10 text-center px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 backdrop-blur-md rounded-full border border-white/10 mb-8">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest">Lanzamiento Proyectado 2026</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tighter leading-none">TASK<span className="text-[#3B82F6]">AURA</span></h1>
          <p className="text-xl md:text-2xl font-light mb-12 max-w-2xl mx-auto opacity-80 leading-relaxed">
            La plataforma inteligente de gestión de tareas diseñada por ingenieros para maximizar tu enfoque.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/demo" 
              className="bg-[#3B82F6] hover:bg-blue-400 text-white font-bold py-5 px-12 rounded-full transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3"
            >
              Ver Demo Interactiva {ICONS.Demo}
            </Link>
            <Link 
              to="/proyecto" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold py-5 px-12 rounded-full transition-all border border-white/20 flex items-center justify-center"
            >
              Documentación
            </Link>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div className="flex flex-col items-center group">
              <div className="mb-8 p-6 bg-blue-50 rounded-3xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">{ICONS.Organization}</div>
              <h3 className="text-2xl font-bold mb-4 text-[#1E3A8A]">Organización Inteligente</h3>
              <p className="text-gray-500 leading-relaxed">Sistemas adaptativos que aprenden de tu flujo de trabajo diario para priorizar lo que importa.</p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="mb-8 p-6 bg-blue-50 rounded-3xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">{ICONS.Productivity}</div>
              <h3 className="text-2xl font-bold mb-4 text-[#1E3A8A]">Productividad Digital</h3>
              <p className="text-gray-500 leading-relaxed">Interfaz minimalista de alta gama diseñada por Victor, Joshua y Miguel para eliminar el ruido digital.</p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="mb-8 p-6 bg-blue-50 rounded-3xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">{ICONS.Time}</div>
              <h3 className="text-2xl font-bold mb-4 text-[#1E3A8A]">Optimización Temporal</h3>
              <p className="text-gray-500 leading-relaxed">Gestión eficiente del tiempo basada en algoritmos de ingeniería en sistemas para un rendimiento del 100%.</p>
            </div>
          </div>

          <div className="mt-32 text-center max-w-4xl mx-auto bg-gray-50 p-16 rounded-[4rem] border border-gray-100 shadow-inner">
            <h2 className="text-4xl font-black mb-8 text-[#1E3A8A]">El Futuro de la Gestión</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              TaskAura es la respuesta de tres estudiantes de Ingeniería en Sistemas a la fragmentación operativa. 
              Buscamos democratizar la alta productividad con un modelo premium accesible de <strong>$7.99/mes</strong>.
            </p>
            <div className="flex items-center justify-center gap-6 grayscale opacity-50">
              <span className="font-bold text-[#1E3A8A]">Victor Mendoza</span>
              <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
              <span className="font-bold text-[#1E3A8A]">Joshua Mendez</span>
              <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
              <span className="font-bold text-[#1E3A8A]">Miguel Jaens</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-32 bg-[#1E3A8A] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white/5 backdrop-blur-xl p-12 rounded-[2.5rem] border border-white/10 hover:border-blue-400 transition-colors">
              <h3 className="text-2xl font-bold text-[#3B82F6] mb-6">Misión</h3>
              <p className="text-blue-50/70 italic text-lg leading-relaxed">
                Empoderar a profesionales mediante herramientas digitales de precisión que simplifiquen la 
                gestión operativa y potencien el rendimiento.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl p-12 rounded-[2.5rem] border border-white/10 hover:border-blue-400 transition-colors">
              <h3 className="text-2xl font-bold text-[#3B82F6] mb-6">Visión</h3>
              <p className="text-blue-50/70 italic text-lg leading-relaxed">
                Establecer el estándar de productividad inteligente para el año 2030, redefiniendo la eficiencia digital.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl p-12 rounded-[2.5rem] border border-white/10 hover:border-blue-400 transition-colors">
              <h3 className="text-2xl font-bold text-[#3B82F6] mb-6">Valores</h3>
              <ul className="text-blue-50/70 space-y-3 text-lg">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div> Innovación Técnica</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div> Integridad del Código</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div> UX Centrada en el Humano</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
