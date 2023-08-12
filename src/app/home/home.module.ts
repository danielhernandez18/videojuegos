import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { DowloadComponent } from './downloands/downloands.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { PopularComponent } from './populars/populars.component';
import { AddGameComponent } from './addGame/addGame.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VideoGameComponent } from './videogames/videogames.component';

@NgModule({
  declarations: [VideoGameComponent, PopularComponent, HomeComponent, DowloadComponent, ComingsoonComponent, AddGameComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
