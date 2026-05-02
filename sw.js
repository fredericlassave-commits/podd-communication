// On importe le fichier de config pour lire la version centralisée
importScripts('./config.js');

// Création du nom du cache basé sur la version de la config
const VERSION = typeof CONFIG_VERSION !== 'undefined' ? CONFIG_VERSION : 'default';
const CACHE_NAME = 'podd-cache-full-' + VERSION;

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

// --- INSTALLATION ---
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(async (cache) => {
            // Force le rafraîchissement réseau pour éviter de mettre en cache une vieille version HTTP
            const requestOptions = { cache: 'reload' };
            
            await Promise.all(
                STATIC_ASSETS.map(url => {
                    return fetch(url, requestOptions)
                        .then(response => cache.put(url, response))
                        .catch(err => console.warn(`Échec du pré-chargement de ${url}:`, err));
                })
            );
            
            // Pré-chargement dynamique des images
            try {
                if (typeof CONFIG_PODD !== 'undefined') {
                    const images = [];
                    for (const page in CONFIG_PODD) {
                        CONFIG_PODD[page].boutons.forEach(b => {
                            if (b.emoji && (b.emoji.includes('.') || b.emoji.includes('/'))) {
                                images.push(`./images/${b.emoji}`);
                            }
                        });
                    }
                    return Promise.all(images.map(img => cache.add(img)));
                }
            } catch (err) {
                console.warn("Erreur de pré-chargement des images:", err);
            }
        })
    );
    self.skipWaiting(); 
});

// --- ACTIVATION (Nettoyage automatique) ---
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
    return self.clients.claim(); 
});

// --- STRATÉGIE DE RÉCUPÉRATION ---
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});