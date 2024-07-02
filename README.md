# PokeHub React Native App

## Screenshots
![Simulator Screenshot - iPhone 15 - 2024-07-02 at 12 42 28](https://github.com/sekarna/PokeHub/assets/161050739/c63ef6ae-52bc-4114-81b9-78aab1063a80)
![Simulator Screenshot - iPhone 15 - 2024-07-02 at 12 42 42](https://github.com/sekarna/PokeHub/assets/161050739/3e850022-1596-4ea3-971d-03a247bd3f81)

## Description
Cette application est un Pokédex développé en React Native, permettant d'afficher une liste de Pokémon avec une gestion de la pagination. Lorsque l'utilisateur clique sur un Pokémon, les détails de ce dernier sont affichés.

## Fonctionnalités
- Affichage de tous les Pokémon avec pagination
- Affichage des détails d'un Pokémon sélectionné
- Utilisation de React Query pour la gestion de l'état et le cache
- Utilisation de React Navigation pour la gestion de la navigation entre les écrans

## Technologies Utilisées
- **React Native** : pour le développement cross-platform (iOS et Android) en un seul codebase.
- **TypeScript** : pour la sécurité et la clarté du code.
- **React Query** : pour la gestion de l'état de l'application et du cache.
- **React Navigation** : pour une navigation fluide entre les différents écrans de l'application.
- **PokeAPI** : une API externe riche en données sur les Pokémon.

## Pourquoi ces technologies ?
- **React Native** : permet un développement rapide pour plusieurs plateformes avec une seule base de code.
- **TypeScript** : aide à éviter les erreurs et rend le code plus maintenable et lisible.
- **React Query** : simplifie la gestion des requêtes HTTP et améliore la performance de l'application grâce à son système de cache intégré.
- **React Navigation** : offre une navigation intuitive et facile à implémenter, essentielle pour une application multi-écrans.

## Difficultés Rencontrées
- **Configuration initiale** : Le démarrage avec React Native CLI peut être complexe, avec plusieurs bugs rencontrés lors de l'installation.
- **Conception de l'application** : Trouver un design agréable et fonctionnel pour l'application tout en évitant qu'elle ne paraisse trop simple.
- **Gestion des données** : L'API PokeAPI est très riche en données. Il a été nécessaire de sélectionner les informations pertinentes à afficher sans surcharger l'utilisateur.
- **Première utilisation de React Query** : Il a fallu se documenter sur cette technologie, ce qui a pris du temps.

## Améliorations Futures
- **Système de filtre** : Permettre aux utilisateurs de rechercher des Pokémon spécifiques selon des critères définis.
- **Favoris** : Ajouter la possibilité de sauvegarder ses Pokémon préférés.
- **Notifications** : Informer les utilisateurs des nouveaux Pokémon ajoutés ou des mises à jour.

## Installation et Lancement

### Prérequis
- Node.js
- npm ou yarn
- Expo CLI (optionnel, si vous utilisez Expo)
- Android Studio (pour émuler un appareil Android)
- Xcode (pour émuler un appareil iOS)

### Étapes d'installation

Cloner le dépôt
```sh
git clone https://github.com/sekarna/PokeHub.git
cd PokeHub
```

Installer les dépendances
```sh
npm install
# ou
yarn install
```

Lancer l'application
Pour démarrer l'application sur un émulateur Android ou iOS, utilisez les commandes suivantes :

#### Android
```sh
npx react-native run-android
```

#### IOS
```sh
npx react-native run-ios
```
### Utilisation
- **Écran principal** : affiche une liste paginée de Pokémon.
- **Cliquez sur un Pokémon** : pour afficher les détails du Pokémon sélectionné.

### Auteur

[Bilel Sekarna](https://github.com/sekarna) Github.
