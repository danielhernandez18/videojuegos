import { Component, OnInit } from '@angular/core';
import { IVideoGame } from 'src/app/interfaces/videogame/videogame.interface';
import { VideoGameService } from 'src/app/services/videogame/videogame.service';
@Component({
  selector: 'app-about',
  templateUrl: './downloands.component.html',
  styleUrls: ['./downloands.component.css']
})
export class DowloadComponent implements OnInit {
  lastVideoGames: IVideoGame[] | undefined;
  addMessage: boolean = false

  constructor(
    public newVideoGame: VideoGameService
  ) { }

  ngOnInit(): void {
    let videogames = this.newVideoGame.videogames
    let mostDownloads = videogames.filter(videojuego => videojuego.downloads > 100)

    this.lastVideoGames = mostDownloads
   
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
