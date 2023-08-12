import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IVideoGame } from 'src/app/interfaces/videogame/videogame.interface';
import { VideoGameService } from 'src/app/services/videogame/videogame.service';


@Component({
  selector: 'app-videogame-card',
  templateUrl: './videogame-card.component.html',
  styleUrls: ['./videogame-card.component.css']
})
export class VideoGameComponent implements OnInit {
  @Input() videogame: IVideoGame | undefined;
  // @Input() newUser: AuthService | undefined;
  @Output() buyEvent: EventEmitter<IVideoGame> = new EventEmitter<IVideoGame>();
  @Output() notInterestedEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    public newVideoGame: VideoGameService
  ) { }

  ngOnInit(): void {
  }

  onBuy() {
    this.buyEvent.emit(this.videogame);
  }  
}
