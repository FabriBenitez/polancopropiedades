import { Link } from 'react-router-dom';
import { Search, MapPin, BedDouble, Bath, Square } from 'lucide-react';

const s = {
  page: { paddingTop: '140px', paddingBottom: '64px', background: '#f5f5f7', minHeight: '100vh' },
  wrapper: { maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' },
  header: { marginBottom: '48px' },
  h1: { fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: '#000', marginBottom: '8px' },
  subtitle: { color: '#86868b', fontSize: '1.05rem' },
  layout: { display: 'flex', gap: '32px', alignItems: 'flex-start' },
  sidebar: { width: '260px', flexShrink: 0, background: '#fff', borderRadius: '20px', padding: '28px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', border: '1px solid #e8e8e8', position: 'sticky', top: '100px' },
  sidebarTitle: { fontWeight: 700, fontSize: '1rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px', color: '#000' },
  label: { display: 'block', fontSize: '0.85rem', fontWeight: 500, color: '#444', marginBottom: '6px' },
  select: { width: '100%', background: '#f5f5f7', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '10px 14px', outline: 'none', fontSize: '0.9rem', marginBottom: '20px', cursor: 'pointer' },
  checkRow: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px', cursor: 'pointer' },
  btn: { width: '100%', background: '#000', color: '#fff', border: 'none', borderRadius: '12px', padding: '12px', fontWeight: 500, fontSize: '0.95rem', cursor: 'pointer' },
  grid: { flex: 1, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' },
  card: { background: '#fff', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', border: '1px solid #e8e8e8', display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit', transition: 'box-shadow 0.3s, transform 0.3s' },
  imgWrap: { position: 'relative', height: '220px', overflow: 'hidden' },
  img: { width: '100%', height: '100%', objectFit: 'cover' },
  badge: { position: 'absolute', top: '14px', right: '14px', background: 'rgba(255,255,255,0.92)', borderRadius: '999px', padding: '4px 12px', fontSize: '0.7rem', fontWeight: 700, color: '#000' },
  cardBody: { padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' },
  cardTitle: { fontSize: '1.1rem', fontWeight: 700, color: '#000', marginBottom: '4px' },
  cardLoc: { fontSize: '0.82rem', color: '#86868b', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '4px' },
  price: { fontSize: '1.4rem', fontWeight: 700, color: '#000', marginBottom: '20px', letterSpacing: '-0.02em' },
  statsRow: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderTop: '1px solid #f0f0f0', paddingTop: '16px', marginTop: 'auto' },
  stat: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: '#666' },
  statIcon: { color: '#988864', fontSize: '1rem', marginBottom: '2px' },
};

const propiedades = [
  { id: 1, title: 'Penthouse de Lujo en Palermo', location: 'Palermo, CABA', price: 'USD 450.000', beds: 4, baths: 3, sqm: 180, img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80' },
  { id: 2, title: 'Departamento a estrenar en Belgrano', location: 'Belgrano, CABA', price: 'USD 280.000', beds: 3, baths: 2, sqm: 120, img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80' },
  { id: 3, title: 'Casa moderna en San Isidro', location: 'San Isidro, GBA Norte', price: 'USD 850.000', beds: 5, baths: 4, sqm: 450, img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80' },
  { id: 4, title: 'Loft Industrial en Palermo Soho', location: 'Palermo, CABA', price: 'USD 195.000', beds: 1, baths: 1, sqm: 65, img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=600&q=80' },
];

export default function Venta() {
  return (
    <div style={s.page}>
      <div style={s.wrapper}>
        <div style={s.header}>
          <h1 style={s.h1}>Propiedades en Venta</h1>
          <p style={s.subtitle}>Encuentra tu próximo hogar o inversión.</p>
        </div>
        <div style={s.layout}>
          <aside style={s.sidebar}>
            <div style={s.sidebarTitle}><Search size={18} /> Filtros</div>
            <label style={s.label}>Moneda</label>
            <select style={s.select}><option>USD - Dólares</option><option>ARS - Pesos</option></select>
            <label style={s.label}>Tipo de Propiedad</label>
            <select style={s.select}><option>Todos</option><option>Departamentos</option><option>Casas</option><option>Lotes</option></select>
            <label style={s.checkRow}>
              <input type="checkbox" style={{width:'18px',height:'18px'}}/>
              <span style={{fontSize:'0.88rem',fontWeight:500,color:'#444'}}>Apto Crédito</span>
            </label>
            <button style={s.btn}>Aplicar Filtros</button>
          </aside>
          <div style={s.grid}>
            {propiedades.map(p => (
              <Link to={`/propiedad/${p.id}`} key={p.id} style={s.card}
                onMouseEnter={e => { e.currentTarget.style.boxShadow='0 12px 32px rgba(0,0,0,0.12)'; e.currentTarget.style.transform='translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow='0 2px 12px rgba(0,0,0,0.05)'; e.currentTarget.style.transform='translateY(0)'; }}
              >
                <div style={s.imgWrap}>
                  <img src={p.img} alt={p.title} style={s.img}/>
                  <span style={s.badge}>VENTA</span>
                </div>
                <div style={s.cardBody}>
                  <h3 style={s.cardTitle}>{p.title}</h3>
                  <p style={s.cardLoc}><MapPin size={14} style={{color: '#988864'}} /> {p.location}</p>
                  <p style={s.price}>{p.price}</p>
                  <div style={s.statsRow}>
                    <div style={s.stat}><BedDouble size={16} style={{color:'#988864'}}/>{p.beds} Dorm</div>
                    <div style={{...s.stat, borderLeft:'1px solid #f0f0f0', borderRight:'1px solid #f0f0f0'}}><Bath size={16} style={{color:'#988864'}}/>{p.baths} Baños</div>
                    <div style={s.stat}><Square size={16} style={{color:'#988864'}}/>{p.sqm} m²</div>
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
