import React from 'react';

export default function Empresa() {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-dark mb-6 tracking-tight">
            Somos <span className="font-light">Polanco Propiedades</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-textGray font-light max-w-3xl mx-auto leading-relaxed">
            Expertos inmobiliarios apasionados por el servicio. En Polanco, te acompañamos de principio a fin, cuidando tus intereses con honestidad y profesionalismo.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div>
              <h2 className="text-3xl font-bold text-brand-dark mb-4">Nuestra Misión</h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                En Polanco nos especializamos en la gestión integral de propiedades, ofreciendo asesoramiento estratégico tanto a compradores como a vendedores, comprometidos con la excelencia y la transparencia.
                <br/><br/>
                Nuestra misión es maximizar el valor de tu inversión a través de un servicio profesional, tecnología de punta y un profundo conocimiento del mercado inmobiliario actual.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-brand-dark mb-4">Nuestra Visión</h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                Nos destacamos por nuestra ética, capacidad de negociación y por ser el puente entre el patrimonio de nuestros clientes y el dinamismo del mercado.
                Brindamos un servicio cálido y humano porque entendemos que detrás de cada propiedad hay una historia, una familia y un futuro.
              </p>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80" 
              alt="Oficina Polanco" 
              className="rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] w-full h-[600px] object-cover"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
