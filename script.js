// --- INITIALISATION DU MOTEUR VOCAL POUR ANDROID 5 ---
let voices = [];

function loadVoices() {
    voices = window.speechSynthesis.getVoices();
}

// Les voix se chargent de manière asynchrone sur les vieux navigateurs
window.speechSynthesis.onvoiceschanged = loadVoices;
loadVoices();

function parler(texte) {
    if (!texte) return;

    // Stop toute parole en cours
    window.speechSynthesis.cancel();

    const msg = new SpeechSynthesisUtterance(texte);
    msg.lang = 'fr-FR';
    msg.rate = 0.9; // Légèrement plus lent pour une meilleure articulation

    // Recherche explicite d'une voix française (crucial pour Android 5)
    if (voices.length === 0) loadVoices();
    const frenchVoice = voices.find(v => v.lang.startsWith('fr'));
    if (frenchVoice) {
        msg.voice = frenchVoice;
    }

    window.speechSynthesis.speak(msg);
}

// --- FONCTION DE RENDU ---
function renderPage(pageKey) {
    const container = document.getElementById('app-container');
    const data = CONFIG_PODD[pageKey];
    
    if (!data) return;

    container.innerHTML = "";
    const grid = document.createElement('div');
    grid.className = 'grid-page';
    
    // Header ou Retour
    if (pageKey === 'home') {
        const header = document.createElement('div');
        header.className = 'header-placeholder';
        header.innerText = data.titre;
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
        if (!b.label) {
            btn.className = 'btn empty';
        } else {
            btn.className = 'btn';
            btn.style.borderColor = b.couleur || "#a0aec0";
            
            btn.onclick = () => {
                // Déclenchement de la navigation ou de la parole
                if (b.page) {
                    renderPage(b.page);
                } else if (b.son) {
                    parler(b.son);
                }
            };

            // LOGIQUE D'AFFICHAGE IMAGE VS EMOJI
            let visuel;
            if (b.emoji && (b.emoji.includes('.') || b.emoji.includes('/'))) {
                visuel = `<img src="images/${b.emoji}" class="picto-img">`;
            } else {
                visuel = `<span class="emoji">${b.emoji || ''}</span>`;
            }

            btn.innerHTML = `
                ${visuel}
                <span class="btn-text">${b.label}</span>
            `;
        }
        grid.appendChild(btn);
    });

    container.appendChild(grid);
}

// --- DÉMARRAGE ET GESTION DU CACHE ---
window.onload = () => {
    renderPage('home');
    
    // Petit hack : au premier clic n'importe où, on initialise le moteur audio
    // (Certains Android bloquent le TTS sans un premier geste utilisateur)
    document.body.addEventListener('click', () => {
        if (voices.length === 0) loadVoices();
    }, { once: true });
};