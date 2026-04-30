var allVoices = [];

function loadVoices() {
    allVoices = window.speechSynthesis.getVoices();
}

if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
}
loadVoices();

function parler(texte) {
    if (!texte) return;
    window.speechSynthesis.cancel();
    var msg = new SpeechSynthesisUtterance(texte);
    msg.lang = 'fr-FR';
    msg.rate = 0.9;
    
    if (allVoices.length === 0) loadVoices();
    for (var i = 0; i < allVoices.length; i++) {
        if (allVoices[i].lang.indexOf('fr') !== -1) {
            msg.voice = allVoices[i];
            break;
        }
    }
    window.speechSynthesis.speak(msg);
}

function renderPage(pageKey) {
    var container = document.getElementById('app-container');
    var data = CONFIG_PODD[pageKey];
    if (!data) return;

    container.innerHTML = "";
    var grid = document.createElement('div');
    grid.className = 'grid-page';

    if (pageKey !== 'home') {
        var backBtn = document.createElement('button');
        backBtn.className = 'btn back-btn';
        backBtn.onclick = function() { renderPage('home'); };
        backBtn.innerHTML = '⬅️ RETOUR';
        grid.appendChild(backBtn);
    }

    for (var j = 0; j < data.boutons.length; j++) {
        (function() {
            var b = data.boutons[j];
            var btn = document.createElement('button');
            btn.className = b.label ? 'btn' : 'btn empty';
            if (b.label) {
                btn.style.borderColor = b.couleur || "#ccc";
                btn.onclick = function() {
                    if (b.page) renderPage(b.page);
                    else if (b.son) parler(b.son);
                };
                btn.innerHTML = '<span class="emoji">' + (b.emoji || "") + '</span>' +
                                '<span class="btn-text">' + b.label + '</span>';
            }
            grid.appendChild(btn);
        })();
    }
    container.appendChild(grid);
}

window.onload = function() {
    renderPage('home');
};