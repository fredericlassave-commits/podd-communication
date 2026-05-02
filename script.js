// 1. RÉCUPÉRATION DE LA VERSION ET RELOAD AUTOMATIQUE
const APP_VERSION = typeof CONFIG_VERSION !== 'undefined' ? "v" + CONFIG_VERSION : "v0.0";

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload();
    });
}

// FONCTION DE MISE À JOUR MANUELLE
async function forcerMiseAJour() {
    if ('serviceWorker' in navigator) {
        // 1. On récupère toutes les clés de cache
        const cacheKeys = await caches.keys();
        // 2. On les supprime toutes
        await Promise.all(cacheKeys.map(key => caches.delete(key)));
        
        // 3. On désenregistre le Service Worker
        const registrations = await navigator.serviceWorker.getRegistrations();
        for (let registration of registrations) {
            await registration.unregister();
        }
        
        // 4. On recharge la page (ce qui réinstallera le SW tout neuf)
        window.location.reload(true);
    } else {
        window.location.reload(true);
    }
}

// 2. INITIALISATION DU MOTEUR VOCAL
let voices = [];
function loadVoices() {
    voices = window.speechSynthesis.getVoices();
}
window.speechSynthesis.onvoiceschanged = loadVoices;
loadVoices();

function parler(texte) {
    if (!texte) return;
    window.speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance(texte);
    msg.lang = 'fr-FR';
    msg.rate = 0.9; 
    if (voices.length === 0) loadVoices();
    const frenchVoice = voices.find(v => v.lang.startsWith('fr'));
    if (frenchVoice) msg.voice = frenchVoice;
    window.speechSynthesis.speak(msg);
}

// 3. FONCTION DE RENDU DES PAGES
function renderPage(pageKey) {
    const container = document.getElementById('app-container');
    const data = CONFIG_PODD[pageKey];
    if (!data) return;

    container.innerHTML = "";
    const grid = document.createElement('div');
    grid.className = 'grid-page';
    
    if (pageKey === 'home') {
        const header = document.createElement('div');
        header.className = 'header-placeholder';
        header.innerHTML = `
            <div class="header-title">${data.titre}</div>
            <button class="version-tag" onclick="forcerMiseAJour()" title="Forcer la mise à jour">
                ${APP_VERSION} 🔄
            </button>
        `;
        grid.appendChild(header);
    } else {
        const backBtn = document.createElement('button');
        backBtn.className = 'btn back-btn';
        backBtn.onclick = () => renderPage('home');
        backBtn.innerHTML = `<span class="emoji">⬅️</span><span class="btn-text">RETOUR</span>`;
        grid.appendChild(backBtn);
    }

    data.boutons.forEach(b => {
        const btn = document.createElement('button');
        if (!b.label && !b.emoji) {
            btn.className = 'btn empty';
        } else {
            btn.className = 'btn';
            btn.style.backgroundColor = b.couleur || "#ffffff"; 
            if (b.couleurBordure) btn.style.borderColor = b.couleurBordure;
            else if (b.couleur) btn.style.borderColor = b.couleur;
            else btn.style.borderColor = "#a0aec0"; 

            btn.onclick = () => {
                if (b.page) renderPage(b.page);
                else if (b.son) parler(b.son);
            };

            const labelHTML = b.label ? `<span class="btn-text">${b.label}</span>` : '';
            if (b.emoji && (b.emoji.includes('.') || b.emoji.includes('/'))) {
                btn.classList.add('with-image');
                btn.style.backgroundImage = `url('images/${b.emoji}')`;
                btn.innerHTML = labelHTML;
                if (!b.label) btn.style.backgroundPosition = "center center";
            } else {
                btn.innerHTML = `<span class="emoji">${b.emoji || ''}</span>${labelHTML}`;
            }
        }
        grid.appendChild(btn);
    });
    container.appendChild(grid);
}

window.onload = () => renderPage('home');