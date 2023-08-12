import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoGameService {
  videogames: {
    id: number,
    title: string,
    description: string,
    releaseDate: string,
    image: string;
    rating: number;
    downloads: number;
    comingSoon: boolean;
  }[] = [
    {
      id: 1,
      title: 'Call of Duty ',    
      description: 'Call of Duty es una serie de videojuegos de disparos en primera persona, de estilo bélico, desarrollada principal e inicialmente por Infinity Ward, Treyarch, Sledgehammer Games y en menor proporción Raven Software y distribuida por Activision',
      releaseDate: '2003-04-11',
      image: 'https://st1.techlusive.in/wp-content/uploads/2023/03/CoD-Mobile.jpg',
      rating: 9,
      downloads: 500,
      comingSoon: false,
    },
    {
      id: 2,
      title: 'Minecraft',
      description: 'Minecraft es un juego de bloques que podrás transformar en cualquier cosa que te imagines. Juega en el modo creativo con recursos ilimitados o busca herramientas para defenderte de los peligros que acechan en el modo supervivencia. Con el juego multiplataforma sin interrupciones en Minecraft: Bedrock Edition, puedes aventurarte por tu cuenta o con tus amigos y descubrir un mundo infinito generado aleatoriamente lleno de bloques que minar, biomas que explorar y criaturas con las que entablar amistad (o luchar). ¡En Minecraft, tú eliges',
      releaseDate: '2011-04-11',
      image: 'https://www.eltiempo.com/files/article_main_1200/uploads/2023/03/31/642756e65c75c.png',
      rating: 10,
      downloads: 600,
      comingSoon: false,
    },
    {
      id: 3,
      title: 'Fall Guys',
      description: 'Fall Guys es un videojuego de plataformas y battle royale gratuito desarrollado por Mediatonic. En el videojuego participan hasta 40 jugadores que controlan criaturas parecidas a gominolas y compiten entre sí en una serie de minijuegos seleccionados al azar, como carreras de obstáculos o fútbol en equipo',
      releaseDate: '2020-08-04',
      image: 'https://sm.ign.com/ign_latam/gallery/f/fall-guys-/fall-guys-season-1-free-for-all-update_vhmp.jpg',
      rating: 8,
      downloads: 200,
      comingSoon: false,
    },
    {
      id: 4,
      title: 'The Legend of Zelda: Breath of the Wild 2',
      description: 'The Legend of Zelda: Tears of the Kingdom es un videojuego de acción-aventura de 2023 de la serie The Legend of Zelda, desarrollado por la filial Nintendo EPD en colaboración con Monolith Soft y publicado por Nintendo para la consola Nintendo Switch',
      releaseDate: '2023-05-12',
      image: 'https://cl.buscafs.com/www.levelup.com/public/uploads/images/702857/702857.jpg',
      rating: 3,
      downloads: 100,
      comingSoon: false,
    },
    {
      id: 5,
      title: 'Fornite',
      description: 'Fortnite es un videojuego del año 2017 desarrollado por la empresa Epic Games lanzado como diferentes paquetes de software que presentan diferentes modos de juego, pero que comparten el mismo motor de juego y mecánicas.',
      releaseDate: '2017-07-21',
      image: 'https://s2-ge.glbimg.com/SDQCkpYCU4C_R6Ceswb5YC6ptDQ=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2020/C/4/WC166yT0uMa85VkUrLTQ/15br-social-lineup-social-1920x1080-685054651.jpg',
      rating: 8,
      downloads: 400,
      comingSoon: false,
    },
    {
      id: 6,
      title: 'FIFA 2024',
      description: 'FIFA 24 es un videojuego de simulación de fútbol publicado por Electronic Arts. Es la trigésima entrega de la serie FIFA desarrollada por EA Sports, y la última entrega bajo el estandarte de FIFA',
      releaseDate: '2024-12-11',
      image: 'https://images.immediate.co.uk/production/volatile/sites/3/2023/07/ea-sports-fc-24-cover-erling-haaland-9bb1f83.jpeg',
      rating: 10,
      downloads: 0,
      comingSoon: true,
    },
    {
      id: 7,
      title: 'GTA VI',
      description: 'Rockstar Games está desarrollando un próximo videojuego de la serie Grand Theft Auto, ​ que será la octava entrega principal de dicha serie, tras Grand Theft Auto V de 2013, y la decimosexta en total. Tras años de especulaciones y filtraciones, Rockstar confirmó que el juego estaba en desarrollo en febrero de 2022',
      releaseDate: '2024-12-11',
      image: 'https://img.asmedia.epimg.net/resizer/JvvKbV_UtmK62yX5x0PVL1qy7-k=/644x362/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/N4UVEW6YURC4LAFTQ6TREZHV2Y.jpg',
      rating: 8,
      downloads: 0,
      comingSoon: true,
    },
    {
      id: 8,
      title: 'Pac-Man',
      description: 'Pac-Man es una franquicia de videojuegos japonesa desarrollada, publicada y propiedad de Bandai Namco Entertainment, un editor de videojuegos que anteriormente se conocía como Namco',
      releaseDate: '2000-12-11',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHI2ZdQeZqNxTU8prZvsmAqJUPc1OvWmr49D3VnP9i8tuiu3CBup6Lp7LiU_Sl0mbsg8k',
      rating: 3,
      downloads: 300,
      comingSoon: false,
    },
    {
      id: 9,
      title: 'Plants vs. Zombies',
      description: 'Prepárate para abonar tus plantas mientras un grupo de zombis deseosos de diversión está a punto de invadir tu casa. Usa tu arsenal de 49 plantas antizombis (lanzaguisantes, nueces, petacerezas y más) para convertir en abono 26 tipos de zombis antes de que derriben tu puerta.',
      releaseDate: '2010-11-13',
      image: 'https://i.blogs.es/a77a17/plants-vs-zombies/1366_2000.jpg',
      rating: 7,
      downloads: 100,
      comingSoon: false,
    }
  ]

  constructor() { }

  addNewGame(title: string, description: string, releaseDate:string, image: string, rating: number, downloads: number, comingSoon: boolean){
    const lastVideoGame = this.videogames[this.videogames.length - 1];
    const newVideoGame = {id: lastVideoGame.id + 1, title, description, releaseDate, image, rating, downloads, comingSoon};
    this.videogames = [
      ...this.videogames,
      newVideoGame,
    ];
    localStorage.setItem('newVideoGame', JSON.stringify(this.videogames));
  }

}
