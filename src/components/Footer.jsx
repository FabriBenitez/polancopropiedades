import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <div className="logo-icon">
              <Home size={24} color="var(--bg-deep)" />
            </div>
            <span className="logo-text">POLANCO</span>
          </Link>
          <p className="footer-desc">
            Encuentre su propiedad ideal con nuestro servicio premium de bienes raíces.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon"><Facebook size={20} /></a>
            <a href="#" className="social-icon"><Instagram size={20} /></a>
          </div>
        </div>
        
        <div className="footer-links">
          <h3>Explorar</h3>
          <Link to="/venta">Venta</Link>
          <Link to="/alquiler">Alquiler</Link>
          <Link to="/emprendimientos">Emprendimientos</Link>
          <Link to="/tasacion">Tasación</Link>
        </div>

        <div className="footer-contact">
          <h3>Contacto</h3>
          <p><Phone size={16}/> 11 2626 8275</p>
          <p><Mail size={16}/> info@polancopropiedades.com</p>
          <p><MapPin size={16}/> Buenos Aires, Argentina</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Polanco Propiedades. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
