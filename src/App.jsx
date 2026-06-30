import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PropertyDetail from './pages/PropertyDetail';
import Empresa from './pages/Empresa';
import Venta from './pages/Venta';
import Alquiler from './pages/Alquiler';
import Emprendimientos from './pages/Emprendimientos';
import Tasacion from './pages/Tasacion';
import Trabaja from './pages/Trabaja';
import Contacto from './pages/Contacto';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="propiedad/:id" element={<PropertyDetail />} />
          <Route path="empresa" element={<Empresa />} />
          <Route path="venta" element={<Venta />} />
          <Route path="alquiler" element={<Alquiler />} />
          <Route path="emprendimientos" element={<Emprendimientos />} />
          <Route path="tasacion" element={<Tasacion />} />
          <Route path="trabaja" element={<Trabaja />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
