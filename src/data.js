// data.js (tu ajoutes ça à côté de navItems)
export const MenuFiltres = ["Tout", "En direct", "Musique", "Jeux vidéo", "Actualités", "Sport", "Podcasts",
                            "Publicite", "Catologue", "En live", "Fait divers", "Kongfou", "Footbal", "Autres",
                            
];
export const listVideo=[
  { 
    id:1,
    thumbnail: "/assets/image/projet1.png",
    title: "Apprendre React-router pour débutants",
    channel:"xaral",
    channelID:1,
    views: "13 k vues",
    publishedAt: "Il y a 12 jours",
    category:"Catologue"

  },
  { 
    id:2,
    title: "Apprendre angular pour débutants Apprendre angular pour débutants Apprendre angular pour débutants",
    channelID: 1,
    channel:"xaral",
    views: "10 k vues",
    publishedAt: "Il y a 20 jours",
    thumbnail: "/assets/image/projet2.png",
    category:"Musique"

  },
  { id:3 ,
    title: "Apprendre nextjs",
    channelID: 1,
    channel:"xaral",
    views: "50 k vues",
    publishedAt: "Il y a 40 jours",
    thumbnail: "/assets/image/projet3.png",
    category:"Musique"

  },
   { 
    id:4,
    thumbnail: "/assets/image/projet1.png",
    title: "Apprendre React-router pour débutants",
    channel:"Mady tech",
    channelID: 2,
    views: "13 k vues",
    publishedAt: "Il y a 12 jours",
    category:"Sport"

  },
  { 
    id:5,
    title: "Apprendre angular pour débutants Apprendre angular pour débutants Apprendre angular pour débutants",
    channelID: 2,
    channel:"Mady tech",
    views: "10 k vues",
    publishedAt: "Il y a 20 jours",
    thumbnail: "/assets/image/projet2.png",
    category:"Sport"

  },
  { id:6 ,
    title: "Apprendre nextjs",
    channelID: 2,
    channel:"Mady tech",
    views: "50 k vues",
    publishedAt: "Il y a 40 jours",
    thumbnail: "/assets/image/projet3.png",
    category:"Musique"

  },
  { id:7 ,
    title: "Apprendre nextjs",
    channelID: 3,
    channel:"Mady Info",
    views: "50 k vues",
    publishedAt: "Il y a 40 jours",
    thumbnail: "/assets/image/projet3.png",
    category:"Musique"

  },
  { id:8 ,
    title: "Apprendre nextjs",
    channelID: 3,
    channel:"Mady Info",
    views: "50 k vues",
    publishedAt: "Il y a 40 jours",
    thumbnail: "/assets/image/projet3.png",
    category:"Musique"

  },
  { id:9 ,
    title: "Apprendre nextjs",
    channelID: 3,
    channel:"Mady Info",
    views: "50 k vues",
    publishedAt: "Il y a 40 jours",
    thumbnail: "/assets/image/projet3.png",
    category:"Musique"

  }

];

export const chaine =[
  {id:1, logochaine:"/assets/image/profil.png", nom:"Mady tech", abonnes:"7,21 k abonnés", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ut temporibus officia sunt hic, facere sed doloribus ad dolorum tempora! Quam officiis quo veritatis quidem quisquam magni commodi delectus dolorum. dolor sit amet consectetur adipisicing elit. Corrupti ut temporibus officia sunt hic, facere sed doloribus ad dolorum tempora! Quam officiis quo veritatis quidem quisquam magni commodi delectus dolorum."},
  {id:2, logochaine:"/assets/image/profil.png",nom:"Mara Info", abonnes:"3,1 k abonnés", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ut temporibus officia sunt hic, facere sed doloribus ad dolorum tempora! Quam officiis quo veritatis quidem quisquam magni commodi delectus dolorum."},
  {id:3, logochaine:"/assets/image/profil.png",nom:"Xaral", abonnes:"5,2 k abonnés", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ut temporibus officia sunt hic, facere sed doloribus ad dolorum tempora! Quam officiis quo veritatis quidem quisquam magni commodi delectus dolorum."},
  {id:4, logochaine:"/assets/image/profil.png", nom:"Mady tech", abonnes:"7,21 k abonnés", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ut temporibus officia sunt hic, facere sed doloribus ad dolorum tempora! Quam officiis quo veritatis quidem quisquam magni commodi delectus dolorum."},
  {id:5, logochaine:"/assets/image/profil.png",nom:"Mara Info", abonnes:"3,1 k abonnés", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ut temporibus officia sunt hic, facere sed doloribus ad dolorum tempora! Quam officiis quo veritatis quidem quisquam magni commodi delectus dolorum."},
  {id:6, logochaine:"/assets/image/profil.png",nom:"Xaral", abonnes:"5,2 k abonnés", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ut temporibus officia sunt hic, facere sed doloribus ad dolorum tempora! Quam officiis quo veritatis quidem quisquam magni commodi delectus dolorum."}
]

export const navItems = [
  { image: "/assets/image/iconnoir/home.svg", label: "Accueil", to: "/" },
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



