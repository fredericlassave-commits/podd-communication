📱 PODD de Communication pour mon Neveu

Ce projet est une application de communication alternative et améliorée (CAA) de type PODD, conçue pour être utilisée sur tablette avec un Keyguard imprimé en 3D.
🚀 Installation Rapide

    Ouvrir l'adresse du site sur la tablette.

    Important : Utiliser la fonction "Ajouter à l'écran d'accueil" (Safari ou Chrome) pour lancer l'app en plein écran (mode PWA) sans barre d'adresse.

    Mise en cache : Le système télécharge automatiquement les fichiers et images pour un usage 100% hors-ligne.

🎨 Personnalisation (config.js)

Le fichier config.js est le cerveau de ton application. C'est ici que tu gères tout.
1. Gestion Unique de la Version

Plus besoin de modifier plusieurs fichiers. Changez simplement la ligne suivante en haut de config.js pour déclencher une mise à jour sur tous les appareils :
var CONFIG_VERSION = "1.0.14";
2. Ajouter une photo ou un Emoji

    Image perso : Place le fichier dans /images et écris son nom : "emoji": "doudou.png"

    Emoji clavier : Utilise directement l'icône : "emoji": "🏠"

3. Couleurs et Visibilité

    Couleurs : Utilisez "couleur": "#HEX" pour le fond et "couleurBordure": "#HEX" pour le contour (optimisé pour le Keyguard).

    Transparence : Les étiquettes de texte sont désormais en mode "verre dépoli" (semi-transparentes) pour ne plus masquer le bas des images.

    Masquer le texte : En mettant "label": "", l'image prendra toute la place et l'étiquette disparaîtra.

🔄 Mise à jour du Cache

Si les modifications ne s'affichent pas immédiatement sur la tablette :

    Bouton de secours : Cliquez sur le numéro de version (ex: v1.0.14 🔄) en haut à droite de l'écran d'accueil. Cela videra instantanément le cache et rechargera l'application.

    Automatique : Dès que vous changez la CONFIG_VERSION dans le code, l'application détecte le changement et propose (ou force) le rechargement au prochain démarrage.

🛠 Infos Techniques & Impression 3D
Réglages Logiciels

    Grille : 4 colonnes x 4 lignes.

    Bordures CSS : Fixées à 8px pour s'aligner parfaitement avec les parois de ton Keyguard imprimé.

    Responsive : Les images et emojis utilisent la fonction clamp() pour rester lisibles quelle que soit la taille de la tablette.

Réglages Impression 3D

    Température : Optimisé pour ton filament à 180°C.

    Keyguard : Dessiné pour une grille 4x4 avec une rangée supérieure dédiée au titre et au bouton retour.

    Astuce : Les bords chanfreinés sur le plastique permettent à ton neveu de mieux glisser ses doigts vers le centre des boutons.

📁 Structure des fichiers

    index.html : Structure de base.

    style.css : Design, transparence et réglages du Keyguard.

    script.js : Moteur de l'application et synthèse vocale.

    config.js : Ta source unique pour les boutons et la version.

    sw.js : Gestion de la mémoire hors-ligne (automatisé).