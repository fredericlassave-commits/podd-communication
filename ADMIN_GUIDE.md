🛠 Guide d'utilisation du Configurateur PODD

Ce guide explique comment utiliser l'interface admin.html pour modifier les pages, les boutons et les sons de la tablette de communication sans toucher directement au code.
1. Préparation

    Assurez-vous que le fichier admin.html est bien placé à la racine du projet (au même niveau que le dossier /images).

    Ouvrez simplement admin.html dans n'importe quel navigateur Web (Chrome, Firefox, Safari).

2. Importer la configuration actuelle

Au démarrage, l'interface est vide. Pour modifier votre PODD existant :

    Cliquez sur le bouton "Sélectionner le fichier" dans la barre latérale gauche.

    Choisissez votre fichier config.js actuel.

    L'interface va charger toutes vos pages et afficher la version actuelle.

3. Modifier les boutons

Le configurateur simule la grille 4x3 de la tablette.

    Sélection : Cliquez sur une case de la grille pour la modifier. Elle s'entoure d'orange.

    Type de bouton : * Normal : Pour un bouton actif avec texte, image et son.

        Vide : Pour laisser un espace libre dans la grille.

    Champs disponibles :

        Label : Le texte qui apparaîtra en haut du bouton.

        Image : Tapez le nom du fichier (ex: pomme.png) s'il est dans le dossier /images, ou collez un Emoji.

        Lien vers Page : L'ID de la page de destination (ex: page-manger).

        Son : La phrase que la tablette prononcera à voix haute.

        Bordure : Permet de définir la couleur de la case (utile pour le code couleur du langage PODD).

4. Gérer les pages

    Ajouter : Cliquez sur "+ Nouvelle Page". Un ID sera automatiquement créé (ex: "Manger" devient page-manger).

    Supprimer : Allez sur la page à supprimer et cliquez sur le bouton rouge "Supprimer cette page".

        Note : La page "HOME" ne peut pas être supprimée.

5. Sauvegarder et Appliquer

L'outil d'administration ne modifie pas directement votre fichier sur le disque dur (sécurité du navigateur).

    Une fois vos modifications terminées, cliquez sur "Copier le Code" (en bas à droite).

    Le script va automatiquement incrémenter la version (ex: de 1.0.24 vers 1.0.25) pour forcer la mise à jour sur la tablette.

    Ouvrez votre fichier config.js original avec un éditeur de texte (Notepad, VS Code, etc.).

    Effacez tout le contenu et collez le nouveau code à la place.

    Enregistrez le fichier.

💡 Astuces

    Images : Si une image ne s'affiche pas dans l'aperçu, vérifiez qu'elle est bien présente dans le dossier /images et que l'orthographe est exacte (attention aux majuscules et aux extensions .jpg vs .png).

    Navigation : N'oubliez pas de créer un bouton sur chaque nouvelle page pour revenir à la "HOME" ou à la page précédente !