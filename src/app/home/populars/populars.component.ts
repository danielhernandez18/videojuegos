import { Component, OnInit } from '@angular/core';
import { IVideoGame } from 'src/app/interfaces/videogame/videogame.interface';
import { VideoGameService } from 'src/app/services/videogame/videogame.service';

@Component({
  selector: 'app-populars',
  templateUrl: './populars.component.html',
  styleUrls: ['./populars.component.css']
})
export class PopularComponent implements OnInit {
  lastVideoGames: IVideoGame[] | undefined;
  addMessage: boolean = false

  constructor(
    public newVideoGame: VideoGameService
  ) { }

  ngOnInit(): void {
    let videogames = this.newVideoGame.videogames
    let mostPopulars = videogames.filter(videojuego => videojuego.rating > 4)

    this.lastVideoGames = mostPopulars
   
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
