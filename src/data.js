// data.js (tu ajoutes ça à côté de navItems)
export const MenuFiltres = ["Tout", "En direct", "Musique", "Jeux vidéo", "Actualités", "Sport", "Podcasts",
                            "Publicite", "Catologue", "En live", "Fait divers", "Kongfou", "Footbal", "Autres",
                            
];
export const listVideo=[
  { 
    id:1,
    thumbnail: "/assets/image/projet1.png",
    logochaine:"/assets/image/profil.png",
    title: "Apprendre React-router pour débutants",
    channel: "Xaral",
    views: "13 k vues",
    publishedAt: "Il y a 12 jours",
    category:"Catologue"

  },
  { 
    id:2,
    title: "Apprendre angular pour débutants Apprendre angular pour débutants Apprendre angular pour débutants",
    logochaine:"/assets/image/profil.png",
    channel: "mady tech",
    views: "10 k vues",
    publishedAt: "Il y a 20 jours",
    thumbnail: "/assets/image/projet2.png",
    category:"Musique"

  },
  { id:3 ,
    title: "Apprendre nextjs",
    channel: "mara info",
    logochaine:"/assets/image/profil.png",
    views: "50 k vues",
    publishedAt: "Il y a 40 jours",
    thumbnail: "/assets/image/projet3.png",
    category:"Musique"

  },
   { 
    id:4,
    thumbnail: "/assets/image/projet1.png",
    logochaine:"/assets/image/profil.png",
    title: "Apprendre React-router pour débutants",
    channel: "Xaral",
    views: "13 k vues",
    publishedAt: "Il y a 12 jours",
    category:"Sport"

  },
  { 
    id:5,
    title: "Apprendre angular pour débutants Apprendre angular pour débutants Apprendre angular pour débutants",
    logochaine:"/assets/image/profil.png",
    channel: "mady tech",
    views: "10 k vues",
    publishedAt: "Il y a 20 jours",
    thumbnail: "/assets/image/projet2.png",
    category:"Sport"

  },
  { id:6 ,
    title: "Apprendre nextjs",
    channel: "mara info",
    logochaine:"/assets/image/profil.png",
    views: "50 k vues",
    publishedAt: "Il y a 40 jours",
    thumbnail: "/assets/image/projet3.png",
    category:"Musique"

  }
];

export const navItems = [
  { image: "/assets/image/iconnoir/home.svg", label: "Accueil", to: "/accueil" },
  { image: "/assets/image/iconnoir/short.svg", label: "Short", to: "/short" },
  
];
export const MenuBarPrimaire = [
  {to: "/Presentation" , label: "Presentation"},
  {to: "/Presse" , label: "Presse"},
  {to: "/Droithauteur" , label: "Droit d'auteur"},
  {to: "/Contact" , label: "Nous contacter"},
  {to: "/Createurs" , label: "Createurs"},
  {to: "/Publicite" , label: "Publicite"},
  {to: "Developpeur" , label: "Developpeurs"},

];
export const MenuBarSegondaire =[
  {to: "/Presentation" , label: "Conditions d'utilisation"},
  {to: "/Presentation" , label: "Confidentialite"},
  {to: "/Presentation" , label: "Regles de securite"},
  {to: "/Presentation" , label: "Premiers pas sur youtube"},
  {to: "/Presentation" , label: "Tester de nouvelles fonctionnalites"}
]

export const MenuVous = [
  // { icon: "fa-house", label: "Vous", to: "/vous" },
  { image: "/assets/image/profileUser.svg", label: "Votre chaine", to: "/Chaine" },
  { image: "/assets/image/iconnoir/historique.svg", label: "Historique", to: "/historique" },
  { image: "/assets/image/iconnoir/playlist.svg", label: "Playlist", to: "/Playlist" },
  { image: "/assets/image/iconnoir/regarderplustard.svg", label: "A regarder plus tard", to: "/Regarder" },
  { image: "/assets/image/iconnoir/like.svg", label: "Video J'aime", to: "/Video" },
  { image: "/assets/image/iconnoir/video.svg", label: "Vos video", to: "/Vosvideo" },
  { image: "/assets/image/iconnoir/telechargement.svg", label: "Telechargements", to: "/telechargements" },
];
export const MenuAutesContenu = [
  { image: "/assets/image/iconnoir/youtube.svg", label: "Youtube Premium", to: "/YoutubePremium" },
  { image: "/assets/image/iconnoir/youtubestudio.svg", label: "Youtube Music", to: "/YoutubeMusic" },
  { image: "/assets/image/iconnoir/youtubeKids.svg", label: "Youtube Kids", to: "/Youtubekids" },
];
export const MenuExplorer = [
  { image: "/assets/image/iconnoir/musique.svg", label: "Musique", to: "/Musique" },
  { image: "/assets/image/iconnoir/film.svg", label: "Films", to: "/Films" },
  { image: "/assets/image/iconnoir/jeuxvideo.svg", label: "Jeux Video", to: "/JeuxVideo" },
  { image: "/assets/image/iconnoir/sport.svg", label: "Sport", to: "/Sport" },
  { image: "/assets/image/Souscription.svg", label: "Souscription", to: "/Souscription" },
  { image: "/assets/image/Jeuxintegre.svg", label: "Jeux integre", to: "/Jeux integre" },
  
]



