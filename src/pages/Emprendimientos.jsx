import React from 'react';
import { Link } from 'react-router-dom';

const s = {
  page: { paddingTop: '100px', paddingBottom: '64px', background: '#f5f5f7', minHeight: '100vh' },
  wrapper: { maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' },
  header: { textAlign: 'center', marginBottom: '64px' },
  h1: { fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#000', marginBottom: '16px' },
  subtitle: { color: '#86868b', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', fontWeight: 300, lineHeight: 1.7 },
  list: { display: 'flex', flexDirection: 'column', gap: '32px' },
  card: { background: '#fff', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', border: '1px solid #e8e8e8', display: 'flex', minHeight: '380px', textDecoration: 'none', color: 'inherit', transition: 'box-shadow 0.3s' },
  cardReverse: { flexDirection: 'row-reverse' },
  imgWrap: { width: '42%', flexShrink: 0, position: 'relative', overflow: 'hidden' },
  img: { width: '100%', height: '100%', objectFit: 'cover' },
  statusBadge: { position: 'absolute', top: '16px', left: '16px', background: 'rgba(0,0,0,0.85)', color: '#fff', borderRadius: '999px', padding: '5px 14px', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em' },
  body: { padding: '40px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 },
  title: { fontSize: '2rem', fontWeight: 700, color: '#000', marginBottom: '8px' },
  meta: { display: 'flex', gap: '16px', marginBottom: '20px', flexWrap: 'wrap' },
  metaItem: { fontSize: '0.85rem', color: '#86868b', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '4px' },
  deliveryTag: { background: '#f0f0f0', color: '#000', borderRadius: '999px', padding: '3px 12px', fontSize: '0.82rem', fontWeight: 500 },
  desc: { fontSize: '0.98rem', color: '#555', lineHeight: 1.75, fontWeight: 300, marginBottom: '28px' },
  amenitiesTitle: { fontSize: '0.75rem', fontWeight: 700, color: '#000', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' },
  amenitiesGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '28px' },
  amenityItem: { display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#555' },
  checkIcon: { color: '#988864', flexShrink: 0 },
  cta: { display: 'inline-block', background: '#000', color: '#fff', borderRadius: '12px', padding: '12px 28px', fontWeight: 500, fontSize: '0.95rem', cursor: 'pointer', textDecoration: 'none' },
};

const emprendimientos = [
  { id: 1, title: 'BLACK LIBERTADOR', location: 'Nuñez, CABA', delivery: 'Diciembre 2026', status: 'EN CONSTRUCCIÓN', description: 'La redefinición del lujo en la Avenida Libertador. Unidades exclusivas con vistas panorámicas al río y a la ciudad. Diseño de vanguardia y amenities de categoría internacional.', amenities: ['Piscina Infinity en Rooftop', 'Gimnasio High-Tech', 'Spa & Wellness Center', 'Seguridad 24hs'], img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80' },
  { id: 2, title: 'BLACK SUCRE', location: 'Belgrano, CABA', delivery: 'Marzo 2027', status: 'EN POZO', description: 'Una obra maestra arquitectónica en el corazón de Belgrano. Residencias de amplias dimensiones diseñadas para el confort absoluto. Entorno arbolado y residencial.', amenities: ['Salón de Eventos', 'Piscina Climatizada In/Out', 'Business Center', 'Estacionamiento de Cortesía'], img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80' },
];

export default function Emprendimientos() {
  return (
    <div style={s.page}>
      <div style={s.wrapper}>
        <div style={s.header}>
          <h1 style={s.h1}>Emprendimientos</h1>
          <p style={s.subtitle}>Proyectos inmobiliarios de excelencia. Desarrollos pensados para superar las más altas expectativas.</p>
        </div>
        <div style={s.list}>
          {emprendimientos.map((emp, idx) => (
            <div key={emp.id} style={{...s.card, ...(idx % 2 !== 0 ? s.cardReverse : {})}}
              onMouseEnter={e => e.currentTarget.style.boxShadow='0 16px 40px rgba(0,0,0,0.10)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow='0 2px 12px rgba(0,0,0,0.05)'}
            >
              <div style={s.imgWrap}>
                <img src={emp.img} alt={emp.title} style={s.img}/>
                <span style={s.statusBadge}>{emp.status}</span>
              </div>
              <div style={s.body}>
                <h2 style={s.title}>{emp.title}</h2>
                <div style={s.meta}>
                  <span style={s.metaItem}>📍 {emp.location}</span>
                  <span style={s.deliveryTag}>Entrega: {emp.delivery}</span>
                </div>
                <p style={s.desc}>{emp.description}</p>
                <p style={s.amenitiesTitle}>Amenities Principales</p>
                <div style={s.amenitiesGrid}>
                  {emp.amenities.map((a, i) => (
                    <div key={i} style={s.amenityItem}>
                      <span style={s.checkIcon}>✔</span> {a}
                    </div>
                  ))}
                </div>
                <a href="#" style={s.cta}>Ver Proyecto Completo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
