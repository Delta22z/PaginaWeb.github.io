// service-worker.js

// Evento 'install': Se activa cuando se instala el Service Worker
self.addEventListener('install', function(event) {
    console.log('Service Worker instalado');
  });
  
  // Evento 'activate': Se activa cuando el Service Worker se activa
  self.addEventListener('activate', function(event) {
    console.log('Service Worker activado');
  });
  
  // Evento 'fetch': Se activa cuando el navegador solicita un recurso (como un archivo HTML, CSS, JS, imagen, etc.)
  self.addEventListener('fetch', function(event) {
    console.log('Se ha solicitado un recurso:', event.request.url);
    // Aquí puedes agregar lógica para manejar la solicitud, como almacenarla en caché o recuperarla del caché
  });
  