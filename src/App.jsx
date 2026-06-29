import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PropertyDetail from './pages/PropertyDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="propiedad/:id" element={<PropertyDetail />} />
          {/* Add more routes here later */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
