import { Component, OnInit } from '@angular/core';
import { IVideoGame } from 'src/app/interfaces/videogame/videogame.interface';
import { VideoGameService } from 'src/app/services/videogame/videogame.service';

@Component({
  selector: 'app-videogames',
  templateUrl: './videogames.component.html',
  styleUrls: ['./videogames.component.css']
})
export class VideoGameComponent implements OnInit {
  lastVideoGames: IVideoGame[] | undefined;
  addMessage: boolean = false

  constructor(
    public newVideoGame: VideoGameService
  ) { }

  ngOnInit(): void {
    this.lastVideoGames = this.newVideoGame.videogames
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
