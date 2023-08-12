import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DowloadComponent } from './downloands/downloands.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { HasSessionGuard } from '../guards/has-session/has-session.guard';
import { PopularComponent } from './populars/populars.component';
import { AddGameComponent } from './addGame/addGame.component';
import { VideoGameComponent } from './videogames/videogames.component';
VideoGameComponent
const routesChildren: Routes = [
  {path: 'videogames', component: VideoGameComponent, canActivate: [HasSessionGuard]},
  {path: 'populars', component: PopularComponent, canActivate: [HasSessionGuard]},
  {path: 'downloads', component: DowloadComponent, canActivate: [HasSessionGuard]},
  {path: 'comingsoon', component: ComingsoonComponent, canActivate: [HasSessionGuard]},
  {path: 'addGame', component: AddGameComponent, canActivate: [HasSessionGuard]},
  {path: '**', redirectTo: 'videogames', pathMatch: 'full'},
];

const routes: Routes = [
  {path: 'home', component: HomeComponent, children: routesChildren},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
