import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { VideoGameService } from 'src/app/services/videogame/videogame.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-addGame',
  templateUrl: './addGame.component.html',
  styleUrls: ['./addGame.component.css']
}) 

export class AddGameComponent implements OnInit {
  addGame!: FormGroup;
  addForminvalid: boolean = false
  errorMessage: string = ''
  addProductMessage: boolean = false

  constructor(
    private router: Router,
    private videoGameService: VideoGameService,
  ) { }

  ngOnInit(): void {
    this.addGame = new FormGroup({
      title: new FormControl('', Validators.required),
      calification: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      downloads: new FormControl('', Validators.required),
      checkComingsoon: new FormControl(false),
      image: new FormControl(null),
    });
  }

  onAdd() {
    const values = this.addGame.value;
    console.log(values);

    if (this.addGame.valid) {
      console.log('form valido');
      
      this.videoGameService.addNewGame(
        values.title,
        values.description,
        values.date,
        values.image,
        values.calification,
        values.downloads,
        values.checkComingsoon,
      )

      this.addProductMessage = true
      setTimeout(() => {
        this.addProductMessage = false;
        this.router.navigate(['/', 'module-home', 'home', 'videogames']);
      }, 
      3000);

    } else {
      this.addProductMessage = false
      this.addForminvalid = true
      this.errorMessage = 'Ingrese todos los datos'
      setTimeout(() => {
        this.addForminvalid = false;
      }, 
      3000);
    }
  }
}