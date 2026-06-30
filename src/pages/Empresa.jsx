import React from 'react';

const styles = {
  page: { paddingTop: '100px', paddingBottom: '64px', background: '#fff', minHeight: '100vh' },
  wrapper: { maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' },
  hero: { textAlign: 'center', marginBottom: '80px' },
  heroTitle: { fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, color: '#000', marginBottom: '24px', lineHeight: 1.1 },
  heroSub: { fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: '#86868b', fontWeight: 300, maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' },
  textBlock: { display: 'flex', flexDirection: 'column', gap: '48px' },
  sectionTitle: { fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#000', marginBottom: '16px' },
  sectionText: { fontSize: '1.05rem', color: '#555', fontWeight: 300, lineHeight: 1.8 },
  image: { width: '100%', height: '580px', objectFit: 'cover', borderRadius: '24px', boxShadow: '0 20px 60px rgba(0,0,0,0.10)' },
};

export default function Empresa() {
  return (
    <div style={styles.page}>
      <div style={styles.wrapper}>
        <div style={styles.hero}>
          <h1 style={styles.heroTitle}>Somos <span style={{fontWeight:300}}>Polanco Propiedades</span></h1>
          <p style={styles.heroSub}>
            Expertos inmobiliarios apasionados por el servicio. Te acompañamos de principio a fin, cuidando tus intereses con honestidad y profesionalismo.
          </p>
        </div>
        <div style={styles.grid}>
          <div style={styles.textBlock}>
            <div>
              <h2 style={styles.sectionTitle}>Nuestra Misión</h2>
              <p style={styles.sectionText}>
                En Polanco nos especializamos en la gestión integral de propiedades, ofreciendo asesoramiento estratégico tanto a compradores como a vendedores, comprometidos con la excelencia y la transparencia.<br/><br/>
                Nuestra misión es maximizar el valor de tu inversión a través de un servicio profesional, tecnología de punta y un profundo conocimiento del mercado inmobiliario actual.
              </p>
            </div>
            <div>
              <h2 style={styles.sectionTitle}>Nuestra Visión</h2>
              <p style={styles.sectionText}>
                Nos destacamos por nuestra ética, capacidad de negociación y por ser el puente entre el patrimonio de nuestros clientes y el dinamismo del mercado.
                Brindamos un servicio cálido y humano porque entendemos que detrás de cada propiedad hay una historia, una familia y un futuro.
              </p>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
            alt="Oficina Polanco"
            style={styles.image}
          />
        </div>
      </div>
    </div>
  );
}
