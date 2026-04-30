const CACHE_NAME = 'podd-cache-full-v2';
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
            await cache.addAll(STATIC_ASSETS);
            
            try {
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
    // Force l'activation immédiate du nouveau SW
    self.skipWaiting(); 
});

// NOUVEAU : Nettoyage des anciens caches (v2, etc.)
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        console.log("Suppression de l'ancien cache :", cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
    // Force les pages ouvertes à utiliser immédiatement le nouveau SW
    return self.clients.claim(); 
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});