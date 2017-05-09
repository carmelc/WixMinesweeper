import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameComponent } from './game/game.component';
import { DialogComponent } from './dialogs-game/dialog/dialog.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/wix', pathMatch: 'full' },
  { path: 'wix', component: DialogComponent },
  {path: 'game/:name/:width/:height/:mines',component: GameComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
