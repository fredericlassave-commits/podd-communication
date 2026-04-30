var CONFIG_PODD = {
    "home": {
        "titre": "JE VEUX DIRE...",
        "boutons": [
            { "label": "MANGER", "emoji": "manger.jpg", "page": "page-manger", "couleur": "#2ecc71" },
            { "label": "BOIRE", "emoji": "boire.jpg", "page": "page-boire", "couleur": "#3498db" },
            { "label": "JOUER", "emoji": "🧩", "page": "page-jouer", "couleur": "#9b59b6" },
            { "label": "LES GENS", "emoji": "👨‍👩‍👦", "page": "page-gens", "couleur": "#f368e0" },
            { "label": "SENTIMENTS", "emoji": "😊", "page": "page-emotions", "couleur": "#ff9f43" },
            { "label": "MON CORPS", "emoji": "👦", "page": "page-corps", "couleur": "#00d2d3" },
            { "label": "LIEUX", "emoji": "🏠", "page": "page-lieux", "couleur": "#54a0ff" },
            { "label": "ACTIONS", "emoji": "🏃", "page": "page-actions", "couleur": "#ff9f43" },
            { "label": "L'ÉCOLE", "emoji": "🏫", "page": "page-ecole", "couleur": "#e67e22" },
            { "label": "HABITS", "emoji": "👕", "page": "page-habits", "couleur": "#34495e" },
            { "label": "TEMPS", "emoji": "☀️", "page": "page-temps", "couleur": "#f1c40f" },
            { "label": "PLUS...", "emoji": "➕", "page": "page-plus", "couleur": "#718096" } // Le bouton "+" revient ici
        ]
    },
    "page-plus": {
        "titre": "PLUS DE CHOIX",
        "boutons": [
            { "label": "AIDE", "emoji": "🆘", "son": "J'ai besoin d'aide", "couleur": "#e74c3c" },
            { "label": "", "emoji": "", "type": "vide" },
            { "label": "", "emoji": "", "type": "vide" },
            { "label": "", "emoji": "", "type": "vide" },
            { "label": "", "emoji": "", "type": "vide" },
            { "label": "", "emoji": "", "type": "vide" },
            { "label": "", "emoji": "", "type": "vide" },
            { "label": "", "emoji": "", "type": "vide" },
            { "label": "", "emoji": "", "type": "vide" },
            { "label": "", "emoji": "", "type": "vide" },
            { "label": "RETOUR", "emoji": "⬅️", "page": "home", "couleur": "#718096" },
            { "label": "ACCUEIL", "emoji": "🏠", "page": "home", "couleur": "#2d3436" }
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
            { "label": "", "emoji": "", "type": "vide" }, { "label": "", "emoji": "", "type": "vide" },
            { "label": "", "emoji": "", "type": "vide" }, { "label": "", "emoji": "", "type": "vide" },
            { "label": "RETOUR", "emoji": "⬅️", "page": "home", "couleur": "#718096" },
            { "label": "ACCUEIL", "emoji": "🏠", "page": "home", "couleur": "#2d3436" }
        ]
    },
    "page-boire": {
        "titre": "BOIRE",
        "boutons": [
            { "label": "EAU", "emoji": "💧", "son": "Je veux de l'eau" },
            { "label": "JUS", "emoji": "🍊", "son": "Je veux du jus" },
            { "label": "LAIT", "emoji": "🥛", "son": "Je veux du lait" },
            { "label": "CHOCO", "emoji": "☕", "son": "Je veux un chocolat chaud" },
            { "label": "GOURDE", "emoji": "🍼", "son": "Je veux ma gourde" },
            { "label": "SOIF", "emoji": "👅", "son": "J'ai très soif" },
            { "label": "", "emoji": "", "type": "vide" }, { "label": "", "emoji": "", "type": "vide" },
            { "label": "", "emoji": "", "type": "vide" }, { "label": "", "emoji": "", "type": "vide" },
            { "label": "RETOUR", "emoji": "⬅️", "page": "home", "couleur": "#718096" },
            { "label": "ACCUEIL", "emoji": "🏠", "page": "home", "couleur": "#2d3436" }
        ]
    },
    "page-jouer": {
        "titre": "JOUER",
        "boutons": [
            { "label": "MUSIQUE", "emoji": "🎵", "son": "Je veux de la musique" },
            { "label": "LEGO", "emoji": "🧱", "son": "Je veux jouer aux Legos" },
            { "label": "DESSIN", "emoji": "🖍️", "son": "Je veux dessiner" },
            { "label": "ÉCRAN", "emoji": "📱", "son": "Je veux la tablette" },
            { "label": "DEHORS", "emoji": "🌳", "son": "Je veux aller dehors" },
            { "label": "CÂLIN", "emoji": "🫂", "son": "Je veux un gros câlin" },
            { "label": "Balançoire", "emoji": "balançoire.jpg", "son": "Je veux faire de la balançoire" },{ "label": "", "emoji": "", "type": "vide" },
            { "label": "Chatouilles", "emoji": "chatouilles.jpg", "son": "Fais moi des chatouilles" }, { "label": "", "emoji": "", "type": "vide" },
            { "label": "RETOUR", "emoji": "⬅️", "page": "home", "couleur": "#718096" },
            { "label": "ACCUEIL", "emoji": "🏠", "page": "home", "couleur": "#2d3436" }
        ]
    },
    "page-gens": {
        "titre": "LES GENS",
        "boutons": [
            { "label": "MAMAN", "emoji": "👩", "son": "Maman" },
            { "label": "PAPA", "emoji": "👨", "son": "Papa" },
            { "label": "MOI", "emoji": "👦", "son": "C'est moi" },
            { "label": "Alyx", "emoji": "👴", "son": "Alyx" },
            { "label": "Eliott", "emoji": "👩‍⚕️", "son": "Eliott" },
            { "label": "COPAINS", "emoji": "👫", "son": "Les copains" },
            { "label": "", "emoji": "", "type": "vide" }, { "label": "", "emoji": "", "type": "vide" },
            { "label": "", "emoji": "", "type": "vide" }, { "label": "", "emoji": "", "type": "vide" },
            { "label": "RETOUR", "emoji": "⬅️", "page": "home", "couleur": "#718096" },
            { "label": "ACCUEIL", "emoji": "🏠", "page": "home", "couleur": "#2d3436" }
        ]
    },
    "page-emotions": {
        "titre": "SENTIMENTS",
        "boutons": [
            { "label": "CONTENT", "emoji": "😄", "son": "Je suis content" },
            { "label": "FATIGUÉ", "emoji": "😴", "son": "Je suis fatigué" },
            { "label": "COLÈRE", "emoji": "😡", "son": "Je suis en colère" },
            { "label": "MAL", "emoji": "🤕", "son": "J'ai mal" },
            { "label": "STOP", "emoji": "✋", "son": "Arrêtez ça" },
            { "label": "BRUIT", "emoji": "👂", "son": "C'est trop bruyant" },
            { "label": "", "emoji": "", "type": "vide" }, { "label": "", "emoji": "", "type": "vide" },
            { "label": "", "emoji": "", "type": "vide" }, { "label": "", "emoji": "", "type": "vide" },
            { "label": "RETOUR", "emoji": "⬅️", "page": "home", "couleur": "#718096" },
            { "label": "ACCUEIL", "emoji": "🏠", "page": "home", "couleur": "#2d3436" }
        ]
    },
    "page-corps": {
        "titre": "MON CORPS",
        "boutons": [
            { "label": "TÊTE", "emoji": "💆", "son": "J'ai mal à la tête" },
            { "label": "VENTRE", "emoji": "🤢", "son": "J'ai mal au ventre" },
            { "label": "TOILETTES", "emoji": "🚽", "son": "Je veux aller aux toilettes" },
            { "label": "LAVER", "emoji": "🧼", "son": "Je veux me laver" },
            { "label": "BOBO", "emoji": "🩹", "son": "J'ai un bobo" },
            { "label": "AIDE", "emoji": "🆘", "son": "Aide-moi s'il te plaît" },
            { "label": "", "emoji": "", "type": "vide" }, { "label": "", "emoji": "", "type": "vide" },
            { "label": "", "emoji": "", "type": "vide" }, { "label": "", "emoji": "", "type": "vide" },
            { "label": "RETOUR", "emoji": "⬅️", "page": "home", "couleur": "#718096" },
            { "label": "ACCUEIL", "emoji": "🏠", "page": "home", "couleur": "#2d3436" }
        ]
    },
    "page-lieux": {
        "titre": "OÙ ALLER ?",
        "boutons": [
            { "label": "MAISON", "emoji": "🏠", "son": "Je veux rentrer à la maison" },
            { "label": "JARDIN", "emoji": "jardin.jpg", "son": "Je veux aller dans le jaardin" },
            { "label": "MAGASIN", "emoji": "🛒", "son": "On va au magasin" },
            { "label": "VOITURE", "emoji": "🚗", "son": "On prend la voiture" },
            { "label": "ÉCOLE", "emoji": "🏫", "son": "On va à l'école" },
            { "label": "CHAMBRE", "emoji": "🛏️", "son": "Je vais dans ma chambre" },
            { "label": "", "emoji": "", "type": "vide" }, { "label": "", "emoji": "", "type": "vide" },
            { "label": "", "emoji": "", "type": "vide" }, { "label": "", "emoji": "", "type": "vide" },
            { "label": "RETOUR", "emoji": "⬅️", "page": "home", "couleur": "#718096" },
            { "label": "ACCUEIL", "emoji": "🏠", "page": "home", "couleur": "#2d3436" }
        ]
    },
    "page-ecole": {
        "titre": "À L'ÉCOLE",
        "boutons": [
            { "label": "TRAVAILLER", "emoji": "📝", "son": "C'est l'heure de travailler" },
            { "label": "LIVRE", "emoji": "📚", "son": "Je veux lire une histoire" },
            { "label": "RECRÉ", "emoji": "🔔", "son": "C'est la récréation" },
            { "label": "CANTINE", "emoji": "🍴", "son": "C'est l'heure de manger à la cantine" },
            { "label": "PEINTURE", "emoji": "🎨", "son": "Je veux faire de la peinture" },
            { "label": "SAC", "emoji": "🎒", "son": "Je prépare mon sac" },
            { "label": "", "emoji": "", "type": "vide" }, { "label": "", "emoji": "", "type": "vide" },
            { "label": "", "emoji": "", "type": "vide" }, { "label": "", "emoji": "", "type": "vide" },
            { "label": "RETOUR", "emoji": "⬅️", "page": "home", "couleur": "#718096" },
            { "label": "ACCUEIL", "emoji": "🏠", "page": "home", "couleur": "#2d3436" }
        ]
    },
    "page-habits": {
        "titre": "M'HABILLER",
        "boutons": [
            { "label": "MANTEAU", "emoji": "🧥", "son": "Je mets mon manteau" },
            { "label": "CHAUSSURES", "emoji": "👟", "son": "Je mets mes chaussures" },
            { "label": "PULL", "emoji": "👕", "son": "Je veux mettre mon pull" },
            { "label": "PYJAMA", "emoji": "😴", "son": "Je veux mettre mon pyjama" },
            { "label": "BONNET", "emoji": "🧤", "son": "Il me faut mon bonnet ou mes gants" },
            { "label": "CHANGER", "emoji": "🔄", "son": "Je veux changer de vêtements" },
            { "label": "", "emoji": "", "type": "vide" }, { "label": "", "emoji": "", "type": "vide" },
            { "label": "", "emoji": "", "type": "vide" }, { "label": "", "emoji": "", "type": "vide" },
            { "label": "RETOUR", "emoji": "⬅️", "page": "home", "couleur": "#718096" },
            { "label": "ACCUEIL", "emoji": "🏠", "page": "home", "couleur": "#2d3436" }
        ]
    },
    "page-temps": {
        "titre": "MÉTÉO",
        "boutons": [
            { "label": "SOLEIL", "emoji": "☀️", "son": "Il y a du soleil" },
            { "label": "PLUIE", "emoji": "🌧️", "son": "Il pleut" },
            { "label": "FROID", "emoji": "❄️", "son": "J'ai froid" },
            { "label": "CHAUD", "emoji": "🔥", "son": "J'ai trop chaud" },
            { "label": "JOUR", "emoji": "🌤️", "son": "C'est le jour" },
            { "label": "NUIT", "emoji": "🌙", "son": "C'est la nuit, je vais dormir" },
            { "label": "", "emoji": "", "type": "vide" }, { "label": "", "emoji": "", "type": "vide" },
            { "label": "", "emoji": "", "type": "vide" }, { "label": "", "emoji": "", "type": "vide" },
            { "label": "RETOUR", "emoji": "⬅️", "page": "home", "couleur": "#718096" },
            { "label": "ACCUEIL", "emoji": "🏠", "page": "home", "couleur": "#2d3436" }
        ]
    },
    "page-actions": {
        "titre": "ACTIONS",
        "boutons": [
            { "label": "REGARDER", "emoji": "👀", "son": "Regarde" },
            { "label": "ÉCOUTER", "emoji": "👂", "son": "Écoute" },
            { "label": "DONNER", "emoji": "🤲", "son": "Donne-moi" },
            { "label": "PARTIR", "emoji": "🚪", "son": "Je veux partir" },
            { "label": "ATTENDRE", "emoji": "⏳", "son": "Attends" },
            { "label": "ENCORE", "emoji": "🔄", "son": "Je veux encore" },
            { "label": "", "emoji": "", "type": "vide" }, { "label": "", "emoji": "", "type": "vide" },
            { "label": "", "emoji": "", "type": "vide" }, { "label": "", "emoji": "", "type": "vide" },
            { "label": "RETOUR", "emoji": "⬅️", "page": "home", "couleur": "#718096" },
            { "label": "ACCUEIL", "emoji": "🏠", "page": "home", "couleur": "#2d3436" }
        ]
    }
};