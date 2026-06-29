import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled-nav' : ''}`}>
      <div className="container header-content">
        <Link to="/" className="logo">
          {/* Mockup del logo original para mantener estética */}
          <span className="logo-text">POLANCO <span style={{fontWeight: 300}}>PROPIEDADES</span></span>
        </Link>
        
        <nav className="desktop-nav">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/venta" className="nav-link">Venta</Link>
          <Link to="/alquiler" className="nav-link">Alquiler</Link>
          <Link to="/emprendimientos" className="nav-link">Emprendimientos</Link>
          <div className="contact-info">
            <span className="contact-item"><Phone size={14}/> 11 2626 8275</span>
            <span className="contact-item"><Mail size={14}/> info@polancopropiedades.com</span>
          </div>
        </nav>

        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-nav-inner">
          <Link to="/" onClick={() => setMobileOpen(false)}>Inicio</Link>
          <Link to="/venta" onClick={() => setMobileOpen(false)}>Venta</Link>
          <Link to="/alquiler" onClick={() => setMobileOpen(false)}>Alquiler</Link>
          <Link to="/emprendimientos" onClick={() => setMobileOpen(false)}>Emprendimientos</Link>
          <div className="mobile-contact">
            <a href="tel:1126268275"><Phone size={18}/> 11 2626 8275</a>
            <a href="mailto:info@polancopropiedades.com"><Mail size={18}/> info@polancopropiedades.com</a>
          </div>
        </div>
      </div>
    </header>
  );
}
