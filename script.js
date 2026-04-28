function renderPage(pageKey) {
    const container = document.getElementById('app-container');
    const data = CONFIG_PODD[pageKey];
    
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
                if (b.page) renderPage(b.page);
                else parler(b.son);
            };

            // LOGIQUE D'AFFICHAGE IMAGE VS EMOJI
            let visuel;
            if (b.emoji.includes('.') || b.emoji.includes('/')) {
                // Si c'est un fichier (ex: maman.jpg)
                visuel = `<img src="images/${b.emoji}" class="picto-img">`;
            } else {
                // Si c'est un emoji standard
                visuel = `<span class="emoji">${b.emoji}</span>`;
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

function parler(texte) {
    window.speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance(texte);
    msg.lang = 'fr-FR';
    msg.rate = 0.8;
    window.speechSynthesis.speak(msg);
}

window.onload = () => renderPage('home');