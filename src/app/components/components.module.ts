import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { VideoGameComponent } from './videogame-card/videogame-card.component';



@NgModule({
  declarations: [
    NavBarComponent,
    VideoGameComponent,
  ],
  exports: [
    NavBarComponent,
    VideoGameComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class ComponentsModule { }
