import React from 'react';
import { MapPin, BedDouble, Bath, Square, Car } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './PropertyCard.css';

export default function PropertyCard({ property }) {
  return (
    <div className="property-card glass-panel">
      <Link to={`/propiedad/${property.id}`} className="property-image-wrapper">
        <img src={property.images[0]} alt={property.title} className="property-image" />
        <div className="property-badges">
          <span className="badge badge-op">{property.operation}</span>
          {property.highlight && <span className="badge badge-highlight">Destacado</span>}
        </div>
        <div className="property-price">{property.price}</div>
      </Link>
      
      <div className="property-content">
        <div className="property-type">{property.type}</div>
        <Link to={`/propiedad/${property.id}`}><h3 className="property-title">{property.title}</h3></Link>
        <p className="property-address"><MapPin size={16} /> {property.address}, {property.neighborhood}</p>
        
        <div className="property-features">
          <div className="feature"><BedDouble size={18} /> <span>{property.features.rooms} Amb.</span></div>
          <div className="feature"><Bath size={18} /> <span>{property.features.bathrooms} Baños</span></div>
          <div className="feature"><Square size={18} /> <span>{property.features.area}</span></div>
          {property.features.parking > 0 && <div className="feature"><Car size={18} /> <span>{property.features.parking} Coch.</span></div>}
        </div>
      </div>
    </div>
  );
}
