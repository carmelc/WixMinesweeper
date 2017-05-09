import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'
import { HttpModule } from '@angular/http';
import 'hammerjs';

//material design
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import { MdlModule } from '@angular-mdl/core';

// import components

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GameComponent } from './game/game.component';
import { DialogComponent } from './dialogs-game/dialog/dialog.component';
import { DialogResultComponent } from './dialogs-game/dialog-result/dialog-result.component';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    DialogComponent,
    DialogResultComponent,

  ],
  entryComponents:[DialogResultComponent],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MdlModule,
    CustomFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
