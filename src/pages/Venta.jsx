import React, { useState } from 'react';
import { Search, MapPin, BedDouble, Bath, Square, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const propiedades = [
  {
    id: 1,
    title: "Penthouse de Lujo en Palermo",
    location: "Palermo, CABA",
    price: "USD 450.000",
    beds: 4,
    baths: 3,
    sqm: 180,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: 2,
    title: "Departamento a estrenar en Belgrano",
    location: "Belgrano, CABA",
    price: "USD 280.000",
    beds: 3,
    baths: 2,
    sqm: 120,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: 3,
    title: "Casa moderna en San Isidro",
    location: "San Isidro, GBA Norte",
    price: "USD 850.000",
    beds: 5,
    baths: 4,
    sqm: 450,
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80"
    ]
  }
];

export default function Venta() {
  return (
    <div className="pt-24 pb-16 bg-brand-gray min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-brand-dark tracking-tight mb-4">Propiedades en Venta</h1>
          <p className="text-brand-textGray text-lg">Encuentra tu próximo hogar o inversión.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters */}
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
                    <option>Lotes</option>
                  </select>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-brand-accent focus:ring-brand-accent"/>
                    <span className="text-sm font-medium text-gray-700">Apto Crédito</span>
                  </label>
                </div>
                
                <button className="w-full bg-brand-dark text-white font-medium py-3 rounded-xl hover:bg-brand-accent transition-all mt-4">
                  Aplicar Filtros
                </button>
              </div>
            </div>
          </aside>

          {/* Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {propiedades.map(prop => (
                <Link to={`/propiedad/${prop.id}`} key={prop.id} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col">
                  
                  <div className="relative h-56 overflow-hidden">
                    <img src={prop.images[0]} alt={prop.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"/>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-brand-dark shadow-sm">
                      VENTA
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
