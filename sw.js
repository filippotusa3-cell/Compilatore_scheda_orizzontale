const CACHE_NAME = 'euroledwall-pwa-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './LOGO.png',
  './STRUTTURA.png',
  './ESEMPIO1.png',
  './ESEMPIO2.png',
  './ESEMPIO1.jpg',
  './ESEMPIO2.jpg'
];

// Evento di Installazione: salva i file principali in cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Caching asset principali');
        // Usiamo addAll ignorando singoli errori su estensioni non presenti
        return Promise.allSettled(
          ASSETS_TO_CACHE.map(url => cache.add(url).catch(e => console.warn(`Impossibile cachare ${url}:`, e)))
        );
      })
      .then(() => self.skipWaiting())
  );
});

// Evento di Attivazione: elimina le vecchie cache se si aggiorna la versione
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(key => {
          if (key !== CACHE_NAME) {
            console.log('[Service Worker] Rimozione vecchia cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Evento di Fetch: Network First con Fallback su Cache per massima affidabilità e aggiornamento
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Se la chiamata va a buon fine, salviamo una copia aggiornata in cache
        if (event.request.method === 'GET' && response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // Se si è offline, restituisci dalla cache
        return caches.match(event.request);
      })
  );
});
