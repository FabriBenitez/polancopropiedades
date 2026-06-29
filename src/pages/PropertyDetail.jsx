import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, BedDouble, Bath, Square, Car, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { properties } from '../data/mockProperties';
import { motion } from 'framer-motion';
import './PropertyDetail.css';

export default function PropertyDetail() {
  const { id } = useParams();
  const property = properties.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!property) return <div className="container" style={{paddingTop: '10rem'}}>Propiedad no encontrada.</div>;

  return (
    <div className="property-detail-page">
      {/* Hero Image Section */}
      <div className="detail-hero">
        <img src={property.images[0]} alt={property.title} className="detail-hero-bg" />
        <div className="detail-hero-overlay"></div>
        <div className="container detail-hero-content">
          <Link to="/" className="btn btn-outline back-btn"><ArrowLeft size={18} /> Volver</Link>
          <div className="detail-badges">
            <span className="badge badge-op">{property.operation}</span>
            <span className="badge badge-type">{property.type}</span>
          </div>
          <h1 className="detail-title">{property.title}</h1>
          <p className="detail-address"><MapPin size={20} /> {property.address}, {property.neighborhood}</p>
        </div>
      </div>

      <div className="container detail-grid">
        {/* Main Content */}
        <div className="detail-main">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel detail-section"
          >
            <h2>Características Principales</h2>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon"><BedDouble size={24} /></div>
                <div>
                  <span className="feature-label">Ambientes</span>
                  <span className="feature-value">{property.features.rooms}</span>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><Bath size={24} /></div>
                <div>
                  <span className="feature-label">Baños</span>
                  <span className="feature-value">{property.features.bathrooms}</span>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><Square size={24} /></div>
                <div>
                  <span className="feature-label">Superficie</span>
                  <span className="feature-value">{property.features.area}</span>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><Car size={24} /></div>
                <div>
                  <span className="feature-label">Cocheras</span>
                  <span className="feature-value">{property.features.parking}</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-panel detail-section"
          >
            <h2>Descripción</h2>
            <p className="detail-desc">
              Excepcional {property.type.toLowerCase()} ubicado en {property.neighborhood}.
              Con un diseño moderno y acabados de primera calidad, esta propiedad representa
              el estándar premium de Polanco Propiedades. Ideal para aquellos que buscan 
              confort, seguridad y estilo de vida.
            </p>
            <div className="amenities-list">
              <div className="amenity"><CheckCircle2 size={18} className="text-gradient" /> Seguridad 24hs</div>
              <div className="amenity"><CheckCircle2 size={18} className="text-gradient" /> SUM Exclusivo</div>
              <div className="amenity"><CheckCircle2 size={18} className="text-gradient" /> Piscina climatizada</div>
              <div className="amenity"><CheckCircle2 size={18} className="text-gradient" /> Gimnasio de última generación</div>
            </div>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="detail-sidebar">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-panel contact-card sticky-sidebar"
          >
            <div className="contact-price">{property.price}</div>
            <p className="contact-subtitle">¿Te interesa esta propiedad?</p>
            
            <form className="contact-form">
              <input type="text" placeholder="Tu Nombre" className="form-input" />
              <input type="email" placeholder="Tu Email" className="form-input" />
              <input type="tel" placeholder="Tu Teléfono" className="form-input" />
              <textarea placeholder="Mensaje..." className="form-input" rows="3"></textarea>
              <button type="button" className="btn btn-gradient full-width">Consultar Ahora</button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
