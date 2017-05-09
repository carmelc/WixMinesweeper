import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import {HostListener} from '@angular/core';

// material design
import { MdSnackBar } from '@angular/material';

// components & models
import { GameService } from '../services/game.service';
import { Board } from '../models/board.model';
import { Cell } from '../models/Cell.model';



@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [GameService],

})

export class GameComponent implements OnInit {

  name: string;
  width: number;
  height: number;
  mines: number;
  board: Board;
  gameOver: boolean = false;
  userClick: boolean = false;
  firstClick: boolean = true;
  superManMode: boolean = false;


  constructor(private route: ActivatedRoute,public snackBar: MdSnackBar,private location: Location,private gameService: GameService
  ) {  }

  ngOnInit() {
    this.route.params.forEach((urlParams) => {
      this.name = urlParams['name'];
      this.width = urlParams['width'];
      this.height = urlParams['height'];
      this.mines = urlParams['mines'];

    });
      this.startGame();

  }

   startGame() {
      this.board = this.gameService.makeBoard(this.mines, this.height, this.width);
      this.gameService.fillBoardGame(this.board);
      this.gameService.checkCells(this.board);
  }

 // back to start game to play new game with new arguments
  backToStart(){
    this.location.back();
  }

  clickedOnCell(clickedCell: Cell) {
    this.board.clickNumber++;
    this.gameService.clickedOnCell(clickedCell, this.board);
    this.userClick = false;
  }
  ClickSuperManMode(){
    this.superManMode = !this.superManMode;
    console.log(this.superManMode);
  }
  userClicking() {
    this.userClick = true;
  }


  mouseClick($event, clickedCell: Cell) {
    
    this.userClick = false;
    console.log($event);
    if($event.which === 1 && $event.shiftKey) { 
      this.board.clickNumber++;
      if(!clickedCell.flagHere && ! clickedCell.questionCell) {
        if(this.board.flagNumber>=this.mines){
        var message = "no more flags left";
        var action ="Okay, I got it";
        this.snackBar.open(message,action, {
            duration: 2000,
          });
          
        }
        else{
          clickedCell.flagHere = true;
          this.board.flagNumber++;
        }

      } else if(clickedCell.flagHere === true && !clickedCell.questionCell) {
        this.board.flagNumber--;
        clickedCell.flagHere = false;
        clickedCell.questionCell = true;
      } else {
        clickedCell.flagHere = false;
        clickedCell.questionCell = false;
      }
    } else if($event.which === 1) { // עכבר כפתור ימני
      console.log("1");
      this.clickedOnCell(clickedCell);
    }
  }

 
}
