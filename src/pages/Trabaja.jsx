import React from 'react';

const s = {
  page: { paddingTop: '140px', paddingBottom: '64px', background: '#fff', minHeight: '100vh' },
  wrapper: { maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' },
  icon: { width: '80px', height: '80px', background: '#f5f5f7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.2rem', margin: '0 auto 32px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' },
  h1: { fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#000', lineHeight: 1.1, marginBottom: '32px' },
  body: { fontSize: '1.05rem', color: '#555', fontWeight: 300, lineHeight: 1.85, marginBottom: '48px', maxWidth: '680px', margin: '0 auto 48px' },
  btn: { display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#000', color: '#fff', border: 'none', borderRadius: '14px', padding: '16px 36px', fontWeight: 600, fontSize: '1.05rem', cursor: 'pointer', textDecoration: 'none', transition: 'background 0.2s' },
  note: { marginTop: '20px', fontSize: '0.88rem', color: '#86868b' },
};

export default function Trabaja() {
  return (
    <div style={s.page}>
      <div style={s.wrapper}>
        <div style={s.icon}>💼</div>
        <h1 style={s.h1}>Formá parte de nuestro equipo</h1>
        <p style={s.body}>
          En Polanco Propiedades siempre estamos en la búsqueda de talento excepcional. Si tienes pasión por el sector inmobiliario, espíritu emprendedor y vocación de servicio, queremos conocerte.
          <br/><br/>
          Ofrecemos un ambiente de trabajo colaborativo, capacitación constante y las herramientas tecnológicas más avanzadas del mercado para potenciar tu desarrollo profesional.
        </p>
        <a
          href="mailto:info@polancopropiedades.com?subject=CV%20-%20Trabaj%C3%A1%20con%20nosotros"
          style={s.btn}
          onMouseEnter={e => e.currentTarget.style.background='#988864'}
          onMouseLeave={e => e.currentTarget.style.background='#000'}
        >
          ✉ Enviar mi CV
        </a>
        <p style={s.note}>
          Envíanos un email a <strong style={{color:'#000'}}>info@polancopropiedades.com</strong> adjuntando tu CV en formato PDF.
        </p>
      </div>
    </div>
  );
}
