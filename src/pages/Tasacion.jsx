import React from 'react';

const s = {
  page: { paddingTop: '100px', paddingBottom: '64px', background: '#fff', minHeight: '100vh' },
  wrapper: { maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' },
  layout: { display: 'flex', gap: '64px', alignItems: 'flex-start' },
  left: { flex: 1 },
  icon: { width: '72px', height: '72px', background: '#f5f5f7', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', marginBottom: '32px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' },
  h1: { fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: '#000', lineHeight: 1.1, marginBottom: '24px' },
  desc: { fontSize: '1.05rem', color: '#555', fontWeight: 300, lineHeight: 1.8 },
  right: { flex: 1 },
  card: { background: '#fff', padding: '48px', borderRadius: '28px', boxShadow: '0 4px 32px rgba(0,0,0,0.06)', border: '1px solid #ebebeb' },
  cardTitle: { fontSize: '1.3rem', fontWeight: 700, color: '#000', marginBottom: '28px' },
  row: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' },
  field: {},
  label: { display: 'block', fontSize: '0.82rem', fontWeight: 500, color: '#444', marginBottom: '6px' },
  input: { width: '100%', background: '#f5f5f7', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '12px 16px', outline: 'none', fontSize: '0.92rem', boxSizing: 'border-box', fontFamily: 'inherit' },
  textarea: { width: '100%', background: '#f5f5f7', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '12px 16px', outline: 'none', fontSize: '0.92rem', resize: 'none', boxSizing: 'border-box', fontFamily: 'inherit', minHeight: '110px' },
  btn: { width: '100%', background: '#000', color: '#fff', border: 'none', borderRadius: '14px', padding: '16px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', marginTop: '8px', transition: 'background 0.2s' },
};

export default function Tasacion() {
  return (
    <div style={s.page}>
      <div style={s.wrapper}>
        <div style={s.layout}>
          <div style={s.left}>
            <div style={s.icon}>🧮</div>
            <h1 style={s.h1}>Conocé el Valor Real<br/>de tu Propiedad</h1>
            <p style={s.desc}>
              Nuestro equipo de expertos realiza una evaluación exhaustiva del mercado, características de tu inmueble y tendencias actuales para entregarte una tasación precisa y profesional.
            </p>
          </div>
          <div style={s.right}>
            <div style={s.card}>
              <h2 style={s.cardTitle}>Solicitar Tasación</h2>
              <form>
                <div style={s.row}>
                  <div style={s.field}>
                    <label style={s.label}>Nombre Completo</label>
                    <input type="text" style={s.input} placeholder="Juan Pérez"/>
                  </div>
                  <div style={s.field}>
                    <label style={s.label}>Teléfono</label>
                    <input type="tel" style={s.input} placeholder="+54 9 11 0000-0000"/>
                  </div>
                </div>
                <div style={{marginBottom:'20px'}}>
                  <label style={s.label}>Dirección de la Propiedad</label>
                  <input type="text" style={s.input} placeholder="Av. del Libertador 1234, CABA"/>
                </div>
                <div style={{marginBottom:'20px'}}>
                  <label style={s.label}>Detalles Adicionales</label>
                  <textarea style={s.textarea} placeholder="Superficie, ambientes, estado..."></textarea>
                </div>
                <button type="button" style={s.btn}
                  onMouseEnter={e => e.currentTarget.style.background='#988864'}
                  onMouseLeave={e => e.currentTarget.style.background='#000'}
                >Solicitar Tasación</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
