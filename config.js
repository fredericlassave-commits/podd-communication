var CONFIG_PODD = {
    "home": {
        "titre": "JE VEUX DIRE...",
        "boutons": [
            { "label": "", "emoji": "manger.png", "page": "page-manger", "couleurBordure": "#2ecc71" },
            { "label": "", "emoji": "boire.png", "page": "page-boire", "couleurBordure": "#3498db" },
            { "label": "", "emoji": "jouer.png", "page": "page-jouer", "couleurBordure": "#9b59b6" },
            { "label": "LES GENS", "emoji": "👨‍👩‍👦", "page": "page-gens", "couleurBordure": "#f368e0" },
            { "label": "SENTIMENTS", "emoji": "😊", "page": "page-emotions", "couleurBordure": "#ff9f43" },
            { "label": "MON CORPS", "emoji": "👦", "page": "page-corps", "couleurBordure": "#00d2d3" },
            { "label": "LIEUX", "emoji": "🏠", "page": "page-lieux", "couleurBordure": "#54a0ff" },
            { "label": "ACTIONS", "emoji": "🏃", "page": "page-actions", "couleurBordure": "#ff9f43" },            
            { "label": "HABITS", "emoji": "👕", "page": "page-habits", "couleurBordure": "#34495e" },
            { "label": "", "emoji": "oui.jpg", "son": "OUI", "couleurBordure": "#00ff00", "couleur": "#00ff00" },
            { "label": "", "emoji": "non.jpg", "son": "NON", "couleurBordure": "#ff0000","couleur": "#ff0000" },
            { "label": "", "emoji": "tourner_page.png", "page": "page-plus", "couleurBordure": "#718096" }
        ]
    },
    "page-manger": {
        "titre": "MANGER",
        "boutons": [
            { "label": "MANGER", "emoji": "veux_manger.png", "son": "Je veux manger" },
            { "label": "GÂTEAU", "emoji": "🍪", "son": "un gâteau" },
            { "label": "POMME", "emoji": "🍎", "son": "une pomme" },
            { "label": "YAOURT", "emoji": "🍦", "son": "un yaourt" },
            { "label": "BANANE", "emoji": "🍌", "son": "une banane" },
            { "label": "PAIN", "emoji": "🍞", "son": "du pain" },
            { "label": "COMPOTE", "emoji": "🍎", "son": "une compote" },
            { "label": "", "type": "vide" }, 
            { "label": "MIAM", "emoji": "miam.png", "son": "Miam, c'est bon", "couleurBordure": "#2ecc71" }, 
            { "label": "BEURK", "emoji": "beurk.png", "son": "Beurk, c'est pas bon", "couleurBordure": "#e74c3c" },
            { "label": "", "type": "vide" },
            { "label": "ACCUEIL", "emoji": "🏠", "page": "home", "couleurBordure": "#2d3436" }
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
            { "label": "", "type": "vide" }, { "label": "", "type": "vide" },
            { "label": "", "type": "vide" }, { "label": "", "type": "vide" },
            { "label": "", "type": "vide" },
            { "label": "ACCUEIL", "emoji": "🏠", "page": "home", "couleurBordure": "#2d3436" }
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
            { "label": "BALANÇOIRE", "emoji": "balançoire.jpg", "son": "Je veux faire de la balançoire" },
            { "label": "CHATOUILLES", "emoji": "chatouilles.jpg", "son": "Fais moi des chatouilles" },
            { "label": "", "type": "vide" }, { "label": "", "type": "vide" },
            { "label": "", "type": "vide" },
            { "label": "ACCUEIL", "emoji": "🏠", "page": "home", "couleurBordure": "#2d3436" }
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
            { "label": "", "type": "vide" }, { "label": "", "type": "vide" },
            { "label": "", "type": "vide" }, { "label": "", "type": "vide" },
            { "label": "", "type": "vide" },
            { "label": "ACCUEIL", "emoji": "🏠", "page": "home", "couleurBordure": "#2d3436" }
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
            { "label": "", "type": "vide" }, { "label": "", "type": "vide" },
            { "label": "", "type": "vide" }, { "label": "", "type": "vide" },
            { "label": "", "type": "vide" },
            { "label": "ACCUEIL", "emoji": "🏠", "page": "home", "couleurBordure": "#2d3436" }
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
            { "label": "AIDE", "emoji": "🆘", "son": "Aide-moi s'il te plaît", "couleur": "#e74c3c" },
            { "label": "", "type": "vide" }, { "label": "", "type": "vide" },
            { "label": "", "type": "vide" }, { "label": "", "type": "vide" },
            { "label": "", "type": "vide" },
            { "label": "ACCUEIL", "emoji": "🏠", "page": "home", "couleurBordure": "#2d3436" }
        ]
    },
    "page-lieux": {
        "titre": "OÙ ALLER ?",
        "boutons": [
            { "label": "MAISON", "emoji": "🏠", "son": "Je veux rentrer à la maison" },
            { "label": "JARDIN", "emoji": "jardin.jpg", "son": "Je veux aller dans le jardin" },
            { "label": "MAGASIN", "emoji": "🛒", "son": "On va au magasin" },
            { "label": "VOITURE", "emoji": "🚗", "son": "On prend la voiture" },
            { "label": "ÉCOLE", "emoji": "🏫", "son": "On va à l'école" },
            { "label": "CHAMBRE", "emoji": "🛏️", "son": "Je vais dans ma chambre" },
            { "label": "", "type": "vide" }, { "label": "", "type": "vide" },
            { "label": "", "type": "vide" }, { "label": "", "type": "vide" },
            { "label": "", "type": "vide" },
            { "label": "ACCUEIL", "emoji": "🏠", "page": "home", "couleurBordure": "#2d3436" }
        ]
    },
    "page-habits": {
        "titre": "M'HABILLER",
        "boutons": [
            { "label": "", "emoji": "habiller.png", "son": "Je veux mettre" },
            { "label": "CHANGER", "emoji": "🔄", "son": "Je veux changer" },
            { "label": "MANTEAU", "emoji": "🧥", "son": "le manteau" },
            { "label": "CHAUSSURES", "emoji": "👟", "son": "les chaussures" },
            { "label": "PULL", "emoji": "👕", "son": "le pull" },
            { "label": "PYJAMA", "emoji": "😴", "son": "le pyjama" },
            { "label": "BONNET", "emoji": "🧤", "son": "mon bonnet ou mes gants" },            
            { "label": "", "emoji": "couche.jpg", "son": "ma couche" }, 
            { "label": "", "type": "vide" }, { "label": "", "type": "vide" },
            { "label": "", "type": "vide" },
            { "label": "ACCUEIL", "emoji": "🏠", "page": "home", "couleurBordure": "#2d3436" }
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
            { "label": "", "type": "vide" }, { "label": "", "type": "vide" },
            { "label": "", "type": "vide" }, { "label": "", "type": "vide" },
            { "label": "", "type": "vide" },
            { "label": "ACCUEIL", "emoji": "🏠", "page": "home", "couleurBordure": "#2d3436" }
        ]
    },
    "page-plus": {
        "titre": "PLUS DE CHOIX",
        "boutons": [
            { "label": "TEMPS", "emoji": "☀️", "page": "page-temps", "couleurBordure": "#f1c40f" },
            { "label": "L'ÉCOLE", "emoji": "🏫", "page": "page-ecole", "couleurBordure": "#e67e22" },
            { "label": "AIDE", "emoji": "🆘", "son": "J'ai besoin d'aide", "couleur": "#e74c3c" },
            { "label": "", "type": "vide" }, { "label": "", "type": "vide" },
            { "label": "", "type": "vide" }, { "label": "", "type": "vide" },
            { "label": "", "type": "vide" }, { "label": "", "type": "vide" },
            { "label": "", "type": "vide" }, { "label": "", "type": "vide" },
            { "label": "ACCUEIL", "emoji": "🏠", "page": "home", "couleurBordure": "#2d3436" }
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
            { "label": "", "type": "vide" }, { "label": "", "type": "vide" },
            { "label": "", "type": "vide" }, { "label": "", "type": "vide" },
            { "label": "", "type": "vide" },
            { "label": "ACCUEIL", "emoji": "🏠", "page": "home", "couleurBordure": "#2d3436" }
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
            { "label": "", "type": "vide" }, { "label": "", "type": "vide" },
            { "label": "", "type": "vide" }, { "label": "", "type": "vide" },
            { "label": "", "type": "vide" },
            { "label": "ACCUEIL", "emoji": "🏠", "page": "home", "couleurBordure": "#2d3436" }
        ]
    }
};