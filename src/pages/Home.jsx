import React from 'react';
import Hero from '../components/Hero';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../data/mockProperties';
import { motion } from 'framer-motion';

export default function Home() {
  const highlightedProps = properties.filter(p => p.highlight);
  const recentProps = properties.filter(p => !p.highlight);

  return (
    <div>
      <Hero />
      
      <section className="section container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ marginBottom: '2rem' }}>Propiedades <span className="text-gradient">Destacadas</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
            {highlightedProps.map(prop => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>
        </motion.div>
      </section>

      <section className="section container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ marginBottom: '2rem' }}>Últimos <span className="text-gradient">Ingresos</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
            {recentProps.map(prop => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
