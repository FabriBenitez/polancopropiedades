import React from 'react';
import { Briefcase, Send } from 'lucide-react';

export default function Trabaja() {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 text-center animate-fade-in-up">
        
        <div className="inline-flex bg-brand-gray p-4 rounded-full mb-8">
          <Briefcase size={40} className="text-brand-accent"/>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight mb-8">
          Formá parte de nuestro equipo
        </h1>
        
        <div className="text-lg text-gray-600 font-light leading-relaxed space-y-6 mb-12">
          <p>
            En Polanco Propiedades siempre estamos en la búsqueda de talento excepcional. Si tienes pasión por el sector inmobiliario, espíritu emprendedor y vocación de servicio, queremos conocerte.
          </p>
          <p>
            Ofrecemos un ambiente de trabajo colaborativo, capacitación constante y las herramientas tecnológicas más avanzadas del mercado para potenciar tu desarrollo profesional.
          </p>
        </div>

        <a 
          href="mailto:info@polancopropiedades.com?subject=CV%20-%20Trabajá%20con%20nosotros" 
          className="inline-flex items-center gap-3 bg-brand-dark text-white font-medium px-8 py-4 rounded-xl hover:bg-brand-accent transition-all transform hover:-translate-y-1 shadow-lg text-lg"
        >
          <Send size={20}/>
          Enviar mi CV
        </a>
        
        <p className="mt-6 text-sm text-brand-textGray">
          Envíanos un email a <span className="font-semibold text-brand-dark">info@polancopropiedades.com</span> adjuntando tu CV en formato PDF.
        </p>

      </div>
    </div>
  );
}
