
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Project from './pages/Project';
import MarketStudy from './pages/MarketStudy';
import ProductionPlan from './pages/ProductionPlan';
import Management from './pages/Management';
import FinancialPlan from './pages/FinancialPlan';
import Results from './pages/Results';
import Conclusions from './pages/Conclusions';
import Bibliography from './pages/Bibliography';
import Annexes from './pages/Annexes';
import AppDemo from './pages/AppDemo';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demo" element={<AppDemo />} />
            <Route path="/proyecto" element={<Project />} />
            <Route path="/mercado" element={<MarketStudy />} />
            <Route path="/produccion" element={<ProductionPlan />} />
            <Route path="/gestion" element={<Management />} />
            <Route path="/financiero" element={<FinancialPlan />} />
            <Route path="/resultados" element={<Results />} />
            <Route path="/conclusiones" element={<Conclusions />} />
            <Route path="/bibliografia" element={<Bibliography />} />
            <Route path="/anexos" element={<Annexes />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
