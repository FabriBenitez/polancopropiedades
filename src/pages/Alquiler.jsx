import React from 'react';
import { Search, MapPin, BedDouble, Bath, Square } from 'lucide-react';
import { Link } from 'react-router-dom';

const alquileres = [
  {
    id: 4,
    title: "Oficina Premium en Puerto Madero",
    location: "Puerto Madero, CABA",
    price: "USD 2.500 / mes",
    beds: 0,
    baths: 2,
    sqm: 150,
    images: [
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=600&q=80",
    ]
  },
  {
    id: 5,
    title: "Departamento Amoblado 2 Ambientes",
    location: "Recoleta, CABA",
    price: "USD 800 / mes",
    beds: 1,
    baths: 1,
    sqm: 55,
    images: [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
    ]
  }
];

export default function Alquiler() {
  return (
    <div className="pt-24 pb-16 bg-brand-gray min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-brand-dark tracking-tight mb-4">Propiedades en Alquiler</h1>
          <p className="text-brand-textGray text-lg">Encuentra el lugar perfecto para vivir o trabajar temporalmente.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          <aside className="lg:w-1/4">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 sticky top-24">
              <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                <Search size={20} className="text-brand-accent"/> Filtros
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Moneda</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-brand-accent">
                    <option>USD - Dólares</option>
                    <option>ARS - Pesos</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Propiedad</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-brand-accent">
                    <option>Todos</option>
                    <option>Departamentos</option>
                    <option>Casas</option>
                    <option>Oficinas</option>
                  </select>
                </div>
                
                <button className="w-full bg-brand-dark text-white font-medium py-3 rounded-xl hover:bg-brand-accent transition-all mt-4">
                  Aplicar Filtros
                </button>
              </div>
            </div>
          </aside>

          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {alquileres.map(prop => (
                <Link to={`/propiedad/${prop.id}`} key={prop.id} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col">
                  
                  <div className="relative h-56 overflow-hidden">
                    <img src={prop.images[0]} alt={prop.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"/>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-brand-dark shadow-sm">
                      ALQUILER
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-brand-dark mb-1 group-hover:text-brand-accent transition-colors">{prop.title}</h3>
                    <p className="text-brand-textGray text-sm flex items-center gap-1 mb-4">
                      <MapPin size={14}/> {prop.location}
                    </p>
                    
                    <div className="text-2xl font-bold text-brand-dark mb-6 tracking-tight">
                      {prop.price}
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 border-t border-gray-100 pt-4 mt-auto">
                      <div className="flex flex-col items-center justify-center gap-1 text-gray-500">
                        <BedDouble size={18} className="text-brand-accent"/>
                        <span className="text-xs font-medium">{prop.beds} Dorm</span>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-1 text-gray-500 border-x border-gray-100">
                        <Bath size={18} className="text-brand-accent"/>
                        <span className="text-xs font-medium">{prop.baths} Baños</span>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-1 text-gray-500">
                        <Square size={18} className="text-brand-accent"/>
                        <span className="text-xs font-medium">{prop.sqm} m²</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
