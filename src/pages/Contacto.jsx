import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contacto() {
  return (
    <div className="pt-24 pb-16 bg-brand-gray min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-1/3 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight mb-8">
              Estamos para escucharte
            </h1>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm">
                  <MapPin size={24} className="text-brand-accent"/>
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark mb-1">Nuestras Oficinas</h3>
                  <p className="text-brand-textGray text-sm">Av. del Libertador 1234, Piso 5<br/>C1428 CABA, Argentina</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm">
                  <Phone size={24} className="text-brand-accent"/>
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark mb-1">Teléfono</h3>
                  <p className="text-brand-textGray text-sm">+54 9 11 2626-8275</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm">
                  <Mail size={24} className="text-brand-accent"/>
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark mb-1">Email</h3>
                  <p className="text-brand-textGray text-sm">info@polancopropiedades.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 w-full animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-brand-dark mb-6">Envíanos un mensaje</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:bg-white focus:border-brand-accent transition-colors"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:bg-white focus:border-brand-accent transition-colors"/>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Asunto</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:bg-white focus:border-brand-accent transition-colors"/>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                  <textarea rows="5" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:bg-white focus:border-brand-accent transition-colors resize-none"></textarea>
                </div>
                
                <button type="button" className="bg-brand-dark text-white font-medium px-8 py-4 rounded-xl hover:bg-brand-accent transition-all transform hover:-translate-y-1 shadow-lg">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
