
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-2xl font-bold text-[#1E3A8A] mb-4">TASKAURA</p>
        <p className="text-gray-500 max-w-md mx-auto mb-8">
          Plataforma inteligente de gestión de tareas diseñada para maximizar la productividad en entornos digitales modernos.
        </p>
        <div className="border-t border-gray-200 pt-8 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} TaskAura Inc. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
