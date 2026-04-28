// On importe la config pour savoir quelles images charger
importScripts('./config.js');

const CACHE_NAME = 'podd-cache-full-v1';
const STATIC_ASSETS = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './config.js',
  './manifest.json'
];

// Fonction pour extraire toutes les images du fichier config
function getImagesFromConfig() {
    const images = [];
    for (const page in CONFIG_PODD) {
        CONFIG_PODD[page].boutons.forEach(b => {
            if (b.emoji && (b.emoji.includes('.') || b.emoji.includes('/'))) {
                images.push(`./images/${b.emoji}`);
            }
        });
    }
    return images;
}

self.addEventListener('install', event => {
    const allAssets = [...STATIC_ASSETS, ...getImagesFromConfig()];
    
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('Pré-chargement de tout le vocabulaire...');
            return cache.addAll(allAssets);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});