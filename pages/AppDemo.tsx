
import React, { useState, useRef, useEffect } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Clock, 
  LayoutDashboard, 
  ListTodo, 
  Calendar, 
  Settings, 
  Plus, 
  Search, 
  Bell, 
  Zap, 
  ArrowUpRight,
  User,
  MoreVertical,
  MessageSquare,
  Send,
  X,
  Bot,
  Sparkles
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface Task {
  id: number;
  title: string;
  category: string;
  priority: 'High' | 'Medium' | 'Low';
  completed: boolean;
  dueDate: string;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const AppDemo: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Optimizar arquitectura de microservicios', category: 'Backend', priority: 'High', completed: false, dueDate: 'Hoy' },
    { id: 2, title: 'Revisar KPI del Plan Financiero 2026', category: 'Gestión', priority: 'Medium', completed: true, dueDate: 'Ayer' },
    { id: 3, title: 'Diseñar interfaz de usuario minimalista', category: 'UI/UX', priority: 'High', completed: false, dueDate: 'Mañana' },
    { id: 4, title: 'Actualizar documentación técnica', category: 'Docs', priority: 'Low', completed: false, dueDate: 'Próxima semana' },
    { id: 5, title: 'Reunión con Victor, Joshua y Miguel', category: 'Equipo', priority: 'High', completed: false, dueDate: '14:00 PM' },
  ]);

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: '¡Hola! Soy Aura AI. Estoy aquí para ayudarte a optimizar tu productividad en TaskAura. ¿En qué puedo apoyarte hoy?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const handleSendMessage = async () => {
    if (!chatInput.trim()) return;

    const userMsg = chatInput;
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setChatInput('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages.map(m => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.content }]
        })), { role: 'user', parts: [{ text: userMsg }] }],
        config: {
          systemInstruction: `Eres Aura AI, el asistente inteligente de TaskAura. 
          TaskAura es una plataforma de gestión de tareas creada por los ingenieros Victor Mendoza, Joshua Mendez y Miguel Jaens.
          Tu tono es profesional, motivador y tecnológico. Ayudas a los usuarios a organizar sus tareas, 
          darles consejos de productividad (Pomodoro, Time Blocking, etc.) y responder dudas sobre la plataforma.
          Conoces la lista de tareas actual del usuario: ${tasks.map(t => t.title).join(', ')}.
          Responde de forma concisa y útil en español.`,
        },
      });

      const aiText = response.text || 'Lo siento, tuve un problema procesando tu solicitud.';
      setMessages(prev => [...prev, { role: 'assistant', content: aiText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Ocurrió un error al conectar con mi cerebro digital. Por favor, intenta de nuevo.' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans relative">
      {/* Sidebar Mockup */}
      <aside className="w-64 bg-[#1E3A8A] text-white hidden lg:flex flex-col p-6 shrink-0 h-screen sticky top-0">
        <div className="mb-10 flex items-center gap-2">
          <div className="bg-[#3B82F6] p-1.5 rounded-lg">
            <Zap size={20} fill="white" />
          </div>
          <span className="text-xl font-bold tracking-tight">TASK<span className="text-[#3B82F6]">AURA</span></span>
        </div>

        <nav className="flex-grow space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-[#3B82F6] rounded-xl text-sm font-semibold">
            <LayoutDashboard size={18} /> Panel de Control
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-900/50 rounded-xl text-sm font-medium transition-colors">
            <ListTodo size={18} /> Mis Tareas
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-900/50 rounded-xl text-sm font-medium transition-colors">
            <Calendar size={18} /> Calendario
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-900/50 rounded-xl text-sm font-medium transition-colors">
            <Settings size={18} /> Configuración
          </button>
        </nav>

        <div className="mt-auto pt-6 border-t border-blue-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center font-bold">V</div>
            <div>
              <p className="text-xs font-bold">Victor Mendoza</p>
              <p className="text-[10px] opacity-60 italic">Plan Premium</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col min-h-screen overflow-x-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-8 shrink-0 sticky top-0 z-20">
          <div className="relative w-96 hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Buscar tareas, proyectos..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-full text-sm border-none focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
              <Bell size={20} />
            </button>
            <button className="bg-[#1E3A8A] text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-blue-800 transition-all shadow-md">
              <Plus size={16} /> Nueva Tarea
            </button>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-grow p-8 space-y-8 max-w-7xl mx-auto w-full">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black text-[#1E3A8A]">Hola, Victor 👋</h1>
              <p className="text-gray-500">Aquí tienes un resumen de tu productividad para hoy.</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Aura Score</p>
              <p className="text-4xl font-black text-[#3B82F6]">92%</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-xl"><CheckCircle2 size={24}/></div>
                <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded-full">+12%</span>
              </div>
              <p className="text-3xl font-black text-[#1E3A8A]">24</p>
              <p className="text-sm text-gray-500">Tareas Completadas</p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-orange-50 text-orange-600 rounded-xl"><Clock size={24}/></div>
              </div>
              <p className="text-3xl font-black text-[#1E3A8A]">08</p>
              <p className="text-sm text-gray-500">Tareas Pendientes</p>
            </div>
            <div className="bg-[#1E3A8A] p-6 rounded-3xl shadow-lg text-white relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-sm font-bold opacity-70 mb-2 uppercase tracking-widest">Siguiente Hito</p>
                <p className="text-xl font-bold">Lanzamiento TaskAura v1.0</p>
                <div className="mt-4 flex items-center gap-2 text-xs">
                  <span className="bg-white/20 px-2 py-1 rounded">Enero 2026</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>
              <Zap className="absolute -right-4 -bottom-4 w-24 h-24 text-white/10" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-20">
            {/* Task List */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-[#1E3A8A]">Tareas Prioritarias</h2>
                <button className="text-sm text-blue-600 font-bold hover:underline">Ver todas</button>
              </div>
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                {tasks.map(task => (
                  <div key={task.id} className="group p-5 border-b border-gray-50 flex items-center justify-between hover:bg-gray-50 transition-all">
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={() => toggleTask(task.id)}
                        className={`transition-colors ${task.completed ? 'text-green-500' : 'text-gray-300 hover:text-blue-500'}`}
                      >
                        {task.completed ? <CheckCircle2 size={24} /> : <Circle size={24} />}
                      </button>
                      <div>
                        <p className={`font-semibold text-sm ${task.completed ? 'text-gray-400 line-through' : 'text-[#1E3A8A]'}`}>
                          {task.title}
                        </p>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full font-bold uppercase tracking-wider">{task.category}</span>
                          <span className={`text-[10px] font-bold ${
                            task.priority === 'High' ? 'text-red-500' : 
                            task.priority === 'Medium' ? 'text-orange-500' : 'text-blue-500'
                          }`}>
                            {task.priority}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-gray-400 font-medium">{task.dueDate}</span>
                      <button className="p-1.5 text-gray-300 hover:text-gray-600 rounded-lg">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Smart Aura Panel */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-[#1E3A8A]">Sugerencias Inteligentes</h2>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl border border-blue-100 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600 mb-6">
                    <Zap size={24} fill="currentColor" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1E3A8A] mb-2">Enfoque IA</h3>
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                    Aura AI detecta que tienes 3 tareas de alta prioridad. ¿Deseas que organice tu calendario de hoy automáticamente?
                  </p>
                  <button 
                    onClick={() => setIsChatOpen(true)}
                    className="w-full bg-[#1E3A8A] text-white font-bold py-3 rounded-2xl shadow-sm hover:shadow-md transition-all text-sm flex items-center justify-center gap-2"
                  >
                    <Sparkles size={16} /> Consultar a Aura AI
                  </button>
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-widest">Colaboradores</h3>
                <div className="flex -space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-500 flex items-center justify-center text-white font-bold text-xs" title="Victor">V</div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-green-500 flex items-center justify-center text-white font-bold text-xs" title="Joshua">J</div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-orange-500 flex items-center justify-center text-white font-bold text-xs" title="Miguel">M</div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-gray-400 text-xs"><Plus size={16}/></div>
                </div>
                <p className="text-xs text-gray-500">3 ingenieros activos en este espacio.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating AI Button */}
      {!isChatOpen && (
        <button 
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-8 right-8 w-16 h-16 bg-[#3B82F6] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 group"
        >
          <div className="absolute -top-12 right-0 bg-[#1E3A8A] text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            ¿Necesitas ayuda? Soy Aura
          </div>
          <MessageSquare size={28} />
          <span className="absolute top-0 right-0 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></span>
        </button>
      )}

      {/* AI Assistant Sidebar/Drawer */}
      {isChatOpen && (
        <div className="fixed inset-y-0 right-0 w-full sm:w-96 bg-white shadow-2xl z-[100] flex flex-col animate-slide-left border-l border-gray-100">
          {/* AI Header */}
          <div className="p-6 bg-[#1E3A8A] text-white flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#3B82F6] rounded-xl flex items-center justify-center">
                <Bot size={24} />
              </div>
              <div>
                <h3 className="font-bold">Aura AI</h3>
                <p className="text-[10px] opacity-70 uppercase tracking-widest font-semibold">Online • Smart Assistant</p>
              </div>
            </div>
            <button 
              onClick={() => setIsChatOpen(false)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-grow overflow-y-auto p-6 space-y-4 bg-gray-50/50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm ${
                  msg.role === 'user' 
                  ? 'bg-[#3B82F6] text-white rounded-tr-none' 
                  : 'bg-white text-gray-700 shadow-sm border border-gray-100 rounded-tl-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 flex gap-1">
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Chat Input */}
          <div className="p-6 bg-white border-t border-gray-100">
            <div className="relative">
              <input 
                type="text" 
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Escribe un mensaje..."
                className="w-full pl-4 pr-12 py-3 bg-gray-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-blue-100 transition-all"
              />
              <button 
                onClick={handleSendMessage}
                disabled={!chatInput.trim() || isTyping}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#3B82F6] text-white rounded-xl hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[10px] text-gray-400 text-center mt-4">
              Impulsado por Gemini 3 • Diseñado por Victor, Joshua y Miguel
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slide-left {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-left {
          animation: slide-left 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  );
};

export default AppDemo;
