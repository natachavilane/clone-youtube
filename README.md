# Clone YouTube

Clone de l'interface de YouTube, construit avec React et Tailwind CSS. Le menu latéral, les pages et la navigation s'adaptent au mobile, à la tablette et au desktop.

**[Voir le site en ligne](https://clone-youtube.vercel.app)**

## Technologies

- React
- Tailwind CSS
- React Router
- Vite

## Fonctionnalités

- Menu latéral à deux modes : réduit par défaut, complet au clic sur le bouton hamburger
- Menu en tiroir sur mobile, avec un fond assombri qui le ferme au clic
- Barre de filtres pour trier les vidéos par catégorie
- Navigation entre plusieurs pages avec React Router : accueil, abonnements, chaîne, lecture d'une vidéo
- Routes dynamiques : chaque vidéo et chaque chaîne a sa propre adresse
- Suggestions de vidéos sur la page de lecture
- Page « introuvable » pour les adresses inconnues
- Affichage adapté au mobile, à la tablette et au desktop

## Lancer le projet

1. Cloner le dépôt :

```bash
git clone https://github.com/natachavilane/clone-youtube.git
cd clone-youtube
```

2. Installer les dépendances :

```bash
npm install
```

3. Démarrer le serveur de développement :

```bash
npm run dev
```

Ouvrir ensuite l'adresse affichée dans le terminal (en général `http://localhost:5173`).