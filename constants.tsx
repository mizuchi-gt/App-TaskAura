
import React from 'react';
import { 
  Layout, 
  BarChart3, 
  Settings, 
  Users, 
  PieChart, 
  TrendingUp, 
  CheckCircle, 
  FileText, 
  Paperclip,
  Target,
  Zap,
  Clock,
  Play
} from 'lucide-react';

export const COLORS = {
  primary: '#1E3A8A',
  accent: '#3B82F6',
  background: '#FFFFFF',
  text: '#1F2937',
  gray: '#E5E7EB'
};

export const ROUTES = [
  { label: 'Inicio', path: '/' },
  { label: 'Demo App', path: '/demo' },
  { label: 'Proyecto', path: '/proyecto' },
  { label: 'Estudio de mercado', path: '/mercado' },
  { label: 'Plan de producción', path: '/produccion' },
  { label: 'Organización y gestión', path: '/gestion' },
  { label: 'Plan financiero', path: '/financiero' },
  { label: 'Resultados', path: '/resultados' },
  { label: 'Conclusiones', path: '/conclusiones' },
  { label: 'Anexos', path: '/anexos' }
];

export const ICONS = {
  Organization: <Zap className="w-12 h-12 text-blue-600" />,
  Productivity: <Layout className="w-12 h-12 text-blue-600" />,
  Time: <Clock className="w-12 h-12 text-blue-600" />,
  Problem: <Target className="w-6 h-6 text-blue-800" />,
  Goal: <CheckCircle className="w-6 h-6 text-blue-800" />,
  Demo: <Play className="w-5 h-5" />
};
