// On définit les ressources de base immédiatement
const CACHE_NAME = 'podd-cache-full-v3';
const STATIC_ASSETS = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './config.js',
  './manifest.json',
  './images/icon-192.png',
  './images/icon-512.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(async (cache) => {
            // 1. On charge d'abord les fichiers critiques
            await cache.addAll(STATIC_ASSETS);
            
            // 2. On essaie de charger les images de la config dynamiquement
            try {
                // On importe la config ici pour ne pas bloquer le démarrage
                importScripts('./config.js');
                if (typeof CONFIG_PODD !== 'undefined') {
                    const images = [];
                    for (const page in CONFIG_PODD) {
                        CONFIG_PODD[page].boutons.forEach(b => {
                            if (b.emoji && (b.emoji.includes('.') || b.emoji.includes('/'))) {
                                images.push(`./images/${b.emoji}`);
                            }
                        });
                    }
                    return cache.addAll(images);
                }
            } catch (err) {
                console.warn("Erreur de pré-chargement des images de config:", err);
            }
        })
    );
    self.skipWaiting(); // Force le nouveau SW à s'activer
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});