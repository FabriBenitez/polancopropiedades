import React from 'react';
import { MapPin, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const emprendimientos = [
  {
    id: 1,
    title: "BLACK LIBERTADOR",
    location: "Nuñez, CABA",
    delivery: "Diciembre 2026",
    status: "En Construcción",
    description: "La redefinición del lujo en la Avenida Libertador. Unidades exclusivas con vistas panorámicas al río y a la ciudad. Diseño de vanguardia y amenities de categoría internacional.",
    amenities: ["Piscina Infinity en Rooftop", "Gimnasio High-Tech", "Spa & Wellness Center", "Seguridad 24hs"],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "BLACK SUCRE",
    location: "Belgrano, CABA",
    delivery: "Marzo 2027",
    status: "Pozo",
    description: "Una obra maestra arquitectónica en el corazón de Belgrano. Residencias de amplias dimensiones diseñadas para el confort absoluto. Entorno arbolado y residencial.",
    amenities: ["Salón de Eventos", "Piscina Climatizada In/Out", "Business Center", "Estacionamiento de Cortesía"],
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Emprendimientos() {
  return (
    <div className="pt-24 pb-16 bg-brand-gray min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight mb-4">Emprendimientos</h1>
          <p className="text-brand-textGray text-lg md:text-xl max-w-2xl mx-auto">
            Proyectos inmobiliarios de excelencia. Desarrollos pensados para superar las más altas expectativas.
          </p>
        </div>

        <div className="space-y-12">
          {emprendimientos.map((emp, idx) => (
            <div key={emp.id} className={`group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} min-h-[400px]`}>
              
              <div className="lg:w-2/5 h-64 lg:h-auto relative overflow-hidden">
                <img src={emp.image} alt={emp.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"/>
                <div className="absolute top-4 left-4 bg-brand-dark/90 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest shadow-lg">
                  {emp.status.toUpperCase()}
                </div>
              </div>
              
              <div className="lg:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-brand-dark mb-2">{emp.title}</h2>
                <div className="flex items-center gap-4 mb-6 text-sm text-brand-textGray font-medium">
                  <span className="flex items-center gap-1"><MapPin size={16}/> {emp.location}</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-brand-dark">Entrega: {emp.delivery}</span>
                </div>
                
                <p className="text-gray-600 font-light leading-relaxed mb-8">
                  {emp.description}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-brand-dark uppercase tracking-wider mb-3">Amenities Principales</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {emp.amenities.map((amenity, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 size={16} className="text-brand-accent"/> {amenity}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <Link to={`/emprendimiento/${emp.id}`} className="inline-block bg-brand-dark text-white px-8 py-3 rounded-xl font-medium hover:bg-brand-accent transition-colors">
                    Ver Proyecto Completo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
