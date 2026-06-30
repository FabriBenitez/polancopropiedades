import React from 'react';
import { Link } from 'react-router-dom';

const s = {
  page: { paddingTop: '100px', paddingBottom: '64px', background: '#f5f5f7', minHeight: '100vh' },
  wrapper: { maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' },
  header: { marginBottom: '48px' },
  h1: { fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: '#000', marginBottom: '8px' },
  subtitle: { color: '#86868b', fontSize: '1.05rem' },
  layout: { display: 'flex', gap: '32px', alignItems: 'flex-start' },
  sidebar: { width: '260px', flexShrink: 0, background: '#fff', borderRadius: '20px', padding: '28px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', border: '1px solid #e8e8e8', position: 'sticky', top: '100px' },
  sidebarTitle: { fontWeight: 700, fontSize: '1rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px', color: '#000' },
  label: { display: 'block', fontSize: '0.85rem', fontWeight: 500, color: '#444', marginBottom: '6px' },
  select: { width: '100%', background: '#f5f5f7', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '10px 14px', outline: 'none', fontSize: '0.9rem', marginBottom: '20px', cursor: 'pointer' },
  btn: { width: '100%', background: '#000', color: '#fff', border: 'none', borderRadius: '12px', padding: '12px', fontWeight: 500, fontSize: '0.95rem', cursor: 'pointer' },
  grid: { flex: 1, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' },
  card: { background: '#fff', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', border: '1px solid #e8e8e8', display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit', transition: 'box-shadow 0.3s, transform 0.3s' },
  imgWrap: { position: 'relative', height: '220px', overflow: 'hidden' },
  img: { width: '100%', height: '100%', objectFit: 'cover' },
  badge: { position: 'absolute', top: '14px', right: '14px', background: 'rgba(255,255,255,0.92)', borderRadius: '999px', padding: '4px 12px', fontSize: '0.7rem', fontWeight: 700, color: '#000' },
  cardBody: { padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' },
  cardTitle: { fontSize: '1.1rem', fontWeight: 700, color: '#000', marginBottom: '4px' },
  cardLoc: { fontSize: '0.82rem', color: '#86868b', marginBottom: '16px' },
  price: { fontSize: '1.4rem', fontWeight: 700, color: '#000', marginBottom: '20px', letterSpacing: '-0.02em' },
  statsRow: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderTop: '1px solid #f0f0f0', paddingTop: '16px', marginTop: 'auto' },
  stat: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: '#666' },
};

const alquileres = [
  { id: 5, title: 'Oficina Premium en Puerto Madero', location: 'Puerto Madero, CABA', price: 'USD 2.500 / mes', beds: 0, baths: 2, sqm: 150, img: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=600&q=80' },
  { id: 6, title: 'Departamento Amoblado 2 Ambientes', location: 'Recoleta, CABA', price: 'USD 800 / mes', beds: 1, baths: 1, sqm: 55, img: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80' },
  { id: 7, title: 'Casa en Countries - Nordelta', location: 'Tigre, GBA Norte', price: 'USD 3.200 / mes', beds: 4, baths: 3, sqm: 320, img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80' },
];

export default function Alquiler() {
  return (
    <div style={s.page}>
      <div style={s.wrapper}>
        <div style={s.header}>
          <h1 style={s.h1}>Propiedades en Alquiler</h1>
          <p style={s.subtitle}>Encuentra el lugar perfecto para vivir o trabajar temporalmente.</p>
        </div>
        <div style={s.layout}>
          <aside style={s.sidebar}>
            <div style={s.sidebarTitle}>🔍 Filtros</div>
            <label style={s.label}>Moneda</label>
            <select style={s.select}><option>USD - Dólares</option><option>ARS - Pesos</option></select>
            <label style={s.label}>Tipo de Propiedad</label>
            <select style={s.select}><option>Todos</option><option>Departamentos</option><option>Casas</option><option>Oficinas</option></select>
            <button style={s.btn}>Aplicar Filtros</button>
          </aside>
          <div style={s.grid}>
            {alquileres.map(p => (
              <Link to={`/propiedad/${p.id}`} key={p.id} style={s.card}
                onMouseEnter={e => { e.currentTarget.style.boxShadow='0 12px 32px rgba(0,0,0,0.12)'; e.currentTarget.style.transform='translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow='0 2px 12px rgba(0,0,0,0.05)'; e.currentTarget.style.transform='translateY(0)'; }}
              >
                <div style={s.imgWrap}>
                  <img src={p.img} alt={p.title} style={s.img}/>
                  <span style={s.badge}>ALQUILER</span>
                </div>
                <div style={s.cardBody}>
                  <h3 style={s.cardTitle}>{p.title}</h3>
                  <p style={s.cardLoc}>📍 {p.location}</p>
                  <p style={s.price}>{p.price}</p>
                  <div style={s.statsRow}>
                    <div style={s.stat}><span style={{color:'#988864'}}>🛏</span>{p.beds} Dorm</div>
                    <div style={{...s.stat, borderLeft:'1px solid #f0f0f0', borderRight:'1px solid #f0f0f0'}}><span style={{color:'#988864'}}>🚿</span>{p.baths} Baños</div>
                    <div style={s.stat}><span style={{color:'#988864'}}>⬛</span>{p.sqm} m²</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
