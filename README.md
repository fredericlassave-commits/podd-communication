📱 PODD de Communication pour mon Neveu

Ce projet est une application de communication alternative et améliorée (CAA) de type PODD, conçue pour être utilisée sur tablette avec un Keyguard imprimé en 3D.
🚀 Installation Rapide

    Ouvrir l'adresse du site sur la tablette.

    Important : Utiliser la fonction "Ajouter à l'écran d'accueil" (Safari ou Chrome) pour lancer l'app en plein écran (mode PWA) sans barre d'adresse.

    Attendre que les images chargent (le système les met automatiquement en cache pour l'usage hors-ligne).

🎨 Personnalisation des Boutons (config.js)

Tu peux désormais modifier l'apparence de chaque bouton individuellement pour l'adapter aux besoins visuels de ton neveu.
1. Ajouter ou modifier une photo

    Format : JPG ou PNG.

    Lieu : Placer le fichier dans le dossier /images.

    Code : { "label": "DOUDOU", "emoji": "doudou.jpg", "son": "Je veux mon doudou" }

2. Gérer les Couleurs (Fond et Contour)

Par défaut, les boutons sont blancs avec un contour gris. Tu peux changer cela :

    Changer le fond : Ajoute "couleur": "#HEX" (ex: #2ecc71 pour du vert).

    Changer le contour : Ajoute "couleurBordure": "#HEX".

    Exemple (Bouton bicolore) :
    { "label": "BOIRE", "emoji": "boire.png", "couleur": "#ffffff", "couleurBordure": "#3498db" }

3. Masquer le Texte (Label)

Si tu souhaites n'afficher que l'image pour épurer l'interface :

    Laisse le label vide : "label": "".

    L'image ou l'émoji se centrera automatiquement dans le bouton et l'étiquette blanche disparaîtra.

🔄 Forcer la mise à jour (Le cache)

C'est l'étape cruciale pour que la tablette télécharge les nouvelles images ou les changements de code :

    Ouvrir sw.js.

    Modifier la variable CACHE_NAME tout en haut (ex: passer de v1 à v2).

    Recharger la page sur la tablette avec une connexion Wi-Fi.

🛠 Infos Techniques & Impression 3D
Réglages Logiciels

    Grille : 4 colonnes x 4 lignes (1 ligne Titre/Retour + 3 lignes de boutons).

    Bordures CSS : Configurées à 8px pour correspondre à l'épaisseur des parois du Keyguard.

    Affichage : Le texte est encapsulé dans une étiquette (cadre) avec un fond blanc opaque pour garantir la lisibilité au-dessus des images.

Réglages Impression 3D

    Précision : Optimisé pour une impression stable à 180°C (selon ton filament).

    Matériau : Utiliser un filament doux au toucher (PLA ou PETG).

    Design : Prévoir des bords chanfreinés sur le Keyguard pour faciliter l'accès aux boutons dans les angles et maximiser la visibilité des pictogrammes.