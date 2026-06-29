import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';

const images = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1600607687931-cebfad2114ce?auto=format&fit=crop&w=1920&q=80"
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <div className="hero-slider">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="hero-bg-img"
            alt="Polanco Propiedades Banner"
          />
        </AnimatePresence>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-content">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-title"
        >
          ENCUENTRE SU<br/><span className="text-gold">PROPIEDAD</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="search-box"
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
            
            <input type="text" className="search-input" placeholder="Buscar por calle o código" />
            
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
