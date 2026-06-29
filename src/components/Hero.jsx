import React from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-glow"></div>
      </div>
      
      <div className="container hero-content">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-title"
        >
          Encuentre su <br/><span className="text-gradient">Propiedad Ideal</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-subtitle"
        >
          Experiencia premium en bienes raíces. Descubra propiedades excepcionales con nuestro buscador avanzado.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="search-box glass-panel"
        >
          <div className="search-tabs">
            <button className="search-tab active">Venta</button>
            <button className="search-tab">Alquiler</button>
          </div>
          
          <div className="search-inputs">
            <select className="search-select">
              <option value="">Tipo de Propiedad</option>
              <option value="casa">Casa</option>
              <option value="departamento">Departamento</option>
              <option value="oficina">Oficina</option>
              <option value="terreno">Terreno</option>
            </select>
            
            <input type="text" className="search-input" placeholder="Ubicación o Barrio..." />
            
            <button className="btn btn-gradient search-btn">
              <Search size={20} />
              Buscar
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
