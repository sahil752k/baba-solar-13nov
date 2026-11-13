import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          about: path.resolve(__dirname, 'about.html'),
          contact: path.resolve(__dirname, 'contact.html'),
          feature: path.resolve(__dirname, 'feature.html'),
          franchise: path.resolve(__dirname, 'franchise.html'),
          ownerre: path.resolve(__dirname, 'ownerre.html'),
          product: path.resolve(__dirname, 'product.html'),
          project: path.resolve(__dirname, 'project.html'),
          service: path.resolve(__dirname, 'service.html'),
          solarcalculator: path.resolve(__dirname, 'solarcalculator.html'),
          team: path.resolve(__dirname, 'team.html'),
          testimonial: path.resolve(__dirname, 'testimonial.html'),
          error404: path.resolve(__dirname, '404.html'),
        },
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
