import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        alquiler: resolve(__dirname, 'alquiler.html'),
        contacto: resolve(__dirname, 'contacto.html'),
        emprendimientos: resolve(__dirname, 'emprendimientos.html'),
        empresa: resolve(__dirname, 'empresa.html'),
        propiedad: resolve(__dirname, 'propiedad.html'),
        tasacion: resolve(__dirname, 'tasacion.html'),
        trabaja: resolve(__dirname, 'trabaja.html'),
        venta: resolve(__dirname, 'venta.html')
      }
    }
  }
});
