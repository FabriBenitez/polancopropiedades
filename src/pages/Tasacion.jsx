import React from 'react';
import { Calculator } from 'lucide-react';

export default function Tasacion() {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2 animate-fade-in-up">
            <div className="bg-brand-gray w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
              <Calculator size={40} className="text-brand-accent"/>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight mb-6 text-balance">
              Conocé el Valor Real de tu Propiedad
            </h1>
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
              Nuestro equipo de expertos realiza una evaluación exhaustiva del mercado, características de tu inmueble y tendencias actuales para entregarte una tasación precisa y profesional.
            </p>
          </div>

          <div className="lg:w-1/2 w-full animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-100">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:bg-white focus:border-brand-accent transition-colors"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                    <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:bg-white focus:border-brand-accent transition-colors"/>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Dirección de la Propiedad</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:bg-white focus:border-brand-accent transition-colors"/>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Detalles Adicionales</label>
                  <textarea rows="4" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:bg-white focus:border-brand-accent transition-colors resize-none"></textarea>
                </div>
                
                <button type="button" className="w-full bg-brand-dark text-white font-medium py-4 rounded-xl hover:bg-brand-accent transition-all transform hover:-translate-y-1 shadow-lg text-lg">
                  Solicitar Tasación
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
