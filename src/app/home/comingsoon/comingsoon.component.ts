import { Component, OnInit } from '@angular/core';
import { IVideoGame } from 'src/app/interfaces/videogame/videogame.interface';
import { VideoGameService } from 'src/app/services/videogame/videogame.service';

@Component({
  selector: 'app-comingsoon',
  templateUrl: './comingsoon.component.html',
  styleUrls: ['./comingsoon.component.css']
})
export class ComingsoonComponent implements OnInit {
  lastVideoGames: IVideoGame[] | undefined;
  addMessage: boolean = false

  constructor(
    public newVideoGame: VideoGameService
  ) { }

  ngOnInit(): void {
    let videogames = this.newVideoGame.videogames
    let comingSoon = videogames.filter(videojuego => videojuego.comingSoon == true)

    this.lastVideoGames = comingSoon
   
    console.log(this.lastVideoGames);
  }

  onByEvent(event: IVideoGame) {
    console.log('Comprar: ', event);
    this.addMessage = true
    setTimeout(() => {
      this.addMessage = false;
    }, 
    3000);
  }

}
