📱 PODD de Communication pour mon Neveu

Ce projet est une application de communication alternative et améliorée (CAA) de type PODD, conçue pour être utilisée sur tablette avec un keyguard imprimé en 3D.
🚀 Installation Rapide

    Ouvrir l'adresse du site sur la tablette.

    Attendre que les images chargent (le système les met automatiquement en cache).

    Important : Utiliser la fonction "Ajouter à l'écran d'accueil" (Safari ou Chrome) pour lancer l'app en plein écran sans barre d'adresse.

📸 Comment ajouter ou modifier une photo ?

Pour que les nouvelles images soient disponibles même sans internet (hors-ligne), suis scrupuleusement ces étapes :
1. Préparer l'image

    Format : JPG ou PNG (carré de préférence).

    Lieu : Glisser le fichier dans le dossier /images.

    Nom : Utiliser un nom simple sans espace (ex: doudou.jpg).

2. Modifier le vocabulaire

    Ouvrir config.js.

    Ajouter ou modifier une ligne dans la catégorie souhaitée :
    { "label": "DOUDOU", "emoji": "doudou.jpg", "son": "Je veux mon doudou" },

3. Forcer la mise à jour (Le cache)

C'est l'étape la plus importante pour que la tablette télécharge les nouveautés :

    Ouvrir sw.js.

    Modifier la variable CACHE_NAME tout en haut (ex: changer v1 en v2).

    Dès que la tablette sera connectée au Wi-Fi, elle verra le changement et mettra tout à jour.

🛠 Infos pour l'impression 3D

    Grille : 2 colonnes x 4 lignes (1 titre + 3 boutons).

    Marges : gap: 20px entre les boutons / padding: 15px sur les bords.

    Réglages 3D : Utiliser un filament doux (PLA/PETG), bords chanfreinés pour une meilleure visibilité des photos.
