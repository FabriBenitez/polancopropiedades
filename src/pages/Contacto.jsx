import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const s = {
  page: { paddingTop: '140px', paddingBottom: '64px', background: '#f5f5f7', minHeight: '100vh' },
  wrapper: { maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' },
  layout: { display: 'flex', gap: '64px', alignItems: 'flex-start' },
  left: { width: '300px', flexShrink: 0 },
  h1: { fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: '#000', lineHeight: 1.1, marginBottom: '40px' },
  infoBlock: { display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '28px' },
  infoIcon: { width: '48px', height: '48px', background: '#fff', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', flexShrink: 0 },
  infoLabel: { fontWeight: 700, color: '#000', marginBottom: '4px', fontSize: '0.95rem' },
  infoText: { color: '#86868b', fontSize: '0.88rem', lineHeight: 1.6 },
  right: { flex: 1 },
  card: { background: '#fff', padding: '48px', borderRadius: '28px', boxShadow: '0 4px 32px rgba(0,0,0,0.06)', border: '1px solid #ebebeb' },
  cardTitle: { fontSize: '1.3rem', fontWeight: 700, color: '#000', marginBottom: '28px' },
  row: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' },
  label: { display: 'block', fontSize: '0.82rem', fontWeight: 500, color: '#444', marginBottom: '6px' },
  input: { width: '100%', background: '#f5f5f7', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '12px 16px', outline: 'none', fontSize: '0.92rem', boxSizing: 'border-box', fontFamily: 'inherit' },
  textarea: { width: '100%', background: '#f5f5f7', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '12px 16px', outline: 'none', fontSize: '0.92rem', resize: 'none', boxSizing: 'border-box', fontFamily: 'inherit', minHeight: '130px' },
  btn: { background: '#000', color: '#fff', border: 'none', borderRadius: '14px', padding: '14px 36px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', transition: 'background 0.2s' },
};

export default function Contacto() {
  return (
    <div style={s.page}>
      <div style={s.wrapper}>
        <div style={s.layout}>
          <div style={s.left}>
            <h1 style={s.h1}>Estamos para escucharte</h1>
            <div style={s.infoBlock}>
              <div style={s.infoIcon}><MapPin size={24} color="#000" /></div>
              <div>
                <p style={s.infoLabel}>Nuestras Oficinas</p>
                <p style={s.infoText}>Av. del Libertador 1234, Piso 5<br/>C1428 CABA, Argentina</p>
              </div>
            </div>
            <div style={s.infoBlock}>
              <div style={s.infoIcon}><Phone size={24} color="#000" /></div>
              <div>
                <p style={s.infoLabel}>Teléfono</p>
                <p style={s.infoText}>+54 9 11 2626-8275</p>
              </div>
            </div>
            <div style={s.infoBlock}>
              <div style={s.infoIcon}><Mail size={24} color="#000" /></div>
              <div>
                <p style={s.infoLabel}>Email</p>
                <p style={s.infoText}>info@polancopropiedades.com</p>
              </div>
            </div>
          </div>
          <div style={s.right}>
            <div style={s.card}>
              <h2 style={s.cardTitle}>Envíanos un mensaje</h2>
              <form>
                <div style={s.row}>
                  <div>
                    <label style={s.label}>Nombre Completo</label>
                    <input type="text" style={s.input} placeholder="Juan Pérez"/>
                  </div>
                  <div>
                    <label style={s.label}>Email</label>
                    <input type="email" style={s.input} placeholder="juan@email.com"/>
                  </div>
                </div>
                <div style={{marginBottom:'20px'}}>
                  <label style={s.label}>Asunto</label>
                  <input type="text" style={s.input} placeholder="¿En qué podemos ayudarte?"/>
                </div>
                <div style={{marginBottom:'24px'}}>
                  <label style={s.label}>Mensaje</label>
                  <textarea style={s.textarea} placeholder="Escribí tu consulta..."></textarea>
                </div>
                <button type="button" style={s.btn}
                  onMouseEnter={e => e.currentTarget.style.background='#988864'}
                  onMouseLeave={e => e.currentTarget.style.background='#000'}
                >Enviar Mensaje</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
