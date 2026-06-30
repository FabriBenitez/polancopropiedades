import React from 'react';
import { Briefcase, TrendingUp, Users, Laptop, Send } from 'lucide-react';

const s = {
  page: { paddingTop: '140px', paddingBottom: '80px', background: '#fff', minHeight: '100vh' },
  wrapper: { maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' },
  layout: { display: 'flex', gap: '64px', alignItems: 'center' },
  left: { flex: 1 },
  right: { flex: 1, position: 'relative' },
  badge: { display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#f5f5f7', color: '#000', padding: '8px 16px', borderRadius: '999px', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '24px' },
  h1: { fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700, color: '#000', lineHeight: 1.1, marginBottom: '24px' },
  desc: { fontSize: '1.05rem', color: '#555', fontWeight: 300, lineHeight: 1.8, marginBottom: '40px' },
  featuresGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '48px' },
  feature: { display: 'flex', flexDirection: 'column', gap: '12px' },
  featureIcon: { width: '48px', height: '48px', background: '#f5f5f7', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000' },
  featureTitle: { fontSize: '1rem', fontWeight: 600, color: '#000' },
  featureDesc: { fontSize: '0.9rem', color: '#666', lineHeight: 1.6 },
  imageWrap: { position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' },
  image: { width: '100%', height: '600px', objectFit: 'cover', display: 'block' },
  ctaBox: { background: '#0a0a0a', borderRadius: '20px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start', marginTop: '32px' },
  ctaTitle: { color: '#fff', fontSize: '1.25rem', fontWeight: 600 },
  ctaDesc: { color: '#a0a0a0', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '8px' },
  btn: { display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#988864', color: '#fff', border: 'none', borderRadius: '12px', padding: '14px 28px', fontWeight: 600, fontSize: '0.95rem', cursor: 'pointer', textDecoration: 'none', transition: 'background 0.2s' },
};

export default function Trabaja() {
  return (
    <div style={s.page}>
      <div style={s.wrapper}>
        <div style={s.layout}>
          <div style={s.left}>
            <div style={s.badge}>
              <Briefcase size={16} /> Únete a Polanco
            </div>
            <h1 style={s.h1}>Formá parte de nuestro equipo</h1>
            <p style={s.desc}>
              En Polanco Propiedades siempre estamos en la búsqueda de talento excepcional. Si tienes pasión por el sector inmobiliario, espíritu emprendedor y vocación de servicio, queremos conocerte y potenciar tu carrera profesional.
            </p>
            
            <div style={s.featuresGrid}>
              <div style={s.feature}>
                <div style={s.featureIcon}><TrendingUp size={24} /></div>
                <h3 style={s.featureTitle}>Desarrollo Profesional</h3>
                <p style={s.featureDesc}>Capacitación constante y planes de carrera para alcanzar tus metas.</p>
              </div>
              <div style={s.feature}>
                <div style={s.featureIcon}><Users size={24} /></div>
                <h3 style={s.featureTitle}>Trabajo Colaborativo</h3>
                <p style={s.featureDesc}>Un ambiente humano, dinámico y respaldado por profesionales expertos.</p>
              </div>
              <div style={s.feature}>
                <div style={s.featureIcon}><Laptop size={24} /></div>
                <h3 style={s.featureTitle}>Herramientas Premium</h3>
                <p style={s.featureDesc}>Tecnología de punta y marketing de primer nivel para tus operaciones.</p>
              </div>
            </div>

            <div style={s.ctaBox}>
              <h3 style={s.ctaTitle}>¿Listo para dar el siguiente paso?</h3>
              <p style={s.ctaDesc}>Envíanos tu currículum actualizado en formato PDF indicando tus áreas de interés y disponibilidad.</p>
              <a 
                href="mailto:info@polancopropiedades.com?subject=CV%20-%20Trabaj%C3%A1%20con%20nosotros" 
                style={s.btn}
                onMouseEnter={e => e.currentTarget.style.background='#bdae8b'}
                onMouseLeave={e => e.currentTarget.style.background='#988864'}
              >
                <Send size={18} /> Enviar mi CV
              </a>
            </div>
          </div>
          
          <div style={s.right}>
            <div style={s.imageWrap}>
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80" 
                alt="Equipo Polanco" 
                style={s.image} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
