var CONFIG_PODD = {
    "home": {
        "titre": "JE VEUX DIRE...",
        "boutons": [
            { "label": "MANGER", "emoji": "🍎", "page": "page-manger", "couleur": "#2ecc71" },
            { "label": "BOIRE", "emoji": "🥤", "page": "page-boire", "couleur": "#3498db" },
            { "label": "JOUER", "emoji": "🧩", "page": "page-jouer", "couleur": "#9b59b6" },
            { "label": "LES GENS", "emoji": "👨‍👩‍👦", "page": "page-gens", "couleur": "#f368e0" },
            { "label": "SENTIMENTS", "emoji": "😊", "page": "page-emotions", "couleur": "#ff9f43" },
            { "label": "MON CORPS", "emoji": "👦", "page": "page-corps", "couleur": "#00d2d3" },
            { "label": "ACTIONS", "emoji": "🏃", "page": "page-actions", "couleur": "#ff9f43" },
            { "label": "L'ÉCOLE", "emoji": "🏫", "page": "page-ecole", "couleur": "#e67e22" },
            { "label": "LIEUX", "emoji": "🏠", "page": "page-lieux", "couleur": "#54a0ff" },
            { "label": "HABITS", "emoji": "👕", "page": "page-habits", "couleur": "#34495e" },
            { "label": "TEMPS", "emoji": "☀️", "page": "page-temps", "couleur": "#f1c40f" },
            { "label": "AIDE", "emoji": "🆘", "son": "J'ai besoin d'aide", "couleur": "#e74c3c" }
        ]
    },
    "page-manger": {
        "titre": "MANGER",
        "boutons": [
            { "label": "GÂTEAU", "emoji": "🍪", "son": "Je veux un gâteau" },
            { "label": "POMME", "emoji": "🍎", "son": "Je veux une pomme" },
            { "label": "YAOURT", "emoji": "🍦", "son": "Je veux un yaourt" },
            { "label": "BANANE", "emoji": "🍌", "son": "Je veux une banane" },
            { "label": "PAIN", "emoji": "🍞", "son": "Je veux du pain" },
            { "label": "COMPOTE", "emoji": "🍎", "son": "Je veux une compote" },
            { "label": "", "emoji": "", "type": "vide" },
            { "label": "", "emoji": "", "type": "vide" },
            { "label": "", "emoji": "", "type": "vide" },
            { "label": "", "emoji": "", "type": "vide" },
            { "label": "RETOUR", "emoji": "⬅️", "action": "back", "couleur": "#718096" },
            { "label": "ACCUEIL", "emoji": "🏠", "page": "home", "couleur": "#2d3436" }
        ]
    }
    // Applique la même logique (10 items + Retour + Accueil) pour les autres pages
};