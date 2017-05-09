import { Injectable } from '@angular/core';
import { Cell } from '../models/cell.model';
import { Board } from '../models/board.model';

@Injectable()
export class GameService {

  constructor() {
  }

  makeBoard(mineNumber: number, height: number, width: number) {
    return new Board(mineNumber, height, width); 
  }

// initialize and fill the board game - array two dimension
  fillBoardGame(board: Board) {
    console.log(board);
    for(var y=0;y < board.height;y++) {
      var newArray: Cell[] = [];
      board.arrTile.push(newArray);
      for(var x=0;x< board.width;x++) {
        board.arrTile[y].push(new Cell(y, x));
    
      }
    }
    // place mines randomally into the board
    this.placeMines(board);
  }


 
  // place mines randomally into the board
  placeMines(board: Board) {
    var boardSize: number = board.height * board.width;
    if(board.mineNumber <= boardSize) {
      for(var i=0;i < board.mineNumber;i++) {
        var randomY: number = this.getRandom(board.height);
        var randomX: number = this.getRandom(board.width);

        if(board.arrTile[randomY][randomX].mineHere === false) {
          board.arrTile[randomY][randomX].mineHere = true;
        } 

        // if the tile has already mine , reduce the index and rand again
        else { 
          i--;
        }
      }
    } 
  }


// check the board and amount of mines
  checkCells(board: Board) {
    for(let row of board.arrTile) {
      for(let tile of row) {
        if(tile.mineHere) {
          for(var i=tile.yPos-1;i<tile.yPos+2;i++) {
            for(var d=tile.xPos-1;d<tile.xPos+2;d++) {
              if(i >= 0 && d >= 0 && i <= board.height-1 && d <= board.width-1) {
                board.arrTile[i][d].mineNumber++;
      
              }
            }
          }
        }
      }
    }
  }



// return the num of flags arount specific Tile
countFlags(clickedTile: Cell, board: Board) {
    var flagCount: number = 0;
  console.log("cT:");
  console.log(clickedTile);
    for(var i=clickedTile.yPos-1;i<clickedTile.yPos+2;i++) {
      for(var d=clickedTile.xPos-1;d<clickedTile.xPos+2;d++) {
        if(i >= 0 && d >= 0 && i <= board.height-1 && d <= board.width-1) {
          if(board.arrTile[i][d].flagHere) {
            flagCount++;
          }
        }
      }
    }
    return flagCount;
  }

// check if the selectTile is min or not.
 showTile(selectedTile: Cell, board: Board) { 
    if(!selectedTile.clicked) {
      board.shownTileCounter++; // num clicks of user
    }
    selectedTile.clicked = true;
    selectedTile.flagHere = false;
    if(selectedTile.mineHere) {  // if user press on mine
      selectedTile.gameEnder = true;
      board.gameOver = true;
      this.endGame(board);

    } else if(board.winTiles === board.shownTileCounter) { // if true the user won
      board.gameWon = true;
    }
  }

  checkWin(board: Board) {
    if(board.gameWon) {
    }
  }
// check recursive the surrnding of the tile
  surroundTiles(clickedTile: Cell, board: Board) {
    var flagCount: number = this.countFlags(clickedTile, board);
    if(clickedTile.mineNumber === flagCount) {
      for(var i=clickedTile.yPos-1;i<clickedTile.yPos+2;i++) {
        for(var d=clickedTile.xPos-1;d<clickedTile.xPos+2;d++) {
          if(i >= 0 && d >= 0 && i <= board.height-1 && d <= board.width-1) {
            if(!board.arrTile[i][d].flagHere) {
              this.showTile(board.arrTile[i][d], board);
              if(board.arrTile[i][d].mineNumber === 0) {
                if(board.checkedTiles.indexOf(board.arrTile[i][d]) < 0) {
                  board.checkedTiles.push(board.arrTile[i][d]);
                  this.surroundTiles(board.arrTile[i][d], board);
                }
              }
            }
          }
        }
      }
      this.checkWin(board);
    }
  }

// show the tile number and the surrond of this tile
  clickedOnCell(clickedTile: Cell, board: Board) {
    if(!clickedTile.flagHere) {
      this.showTile(clickedTile, board);
      this.surroundTiles(clickedTile, board);
      if(board.firstClick) { // for mines reasons, not in first time
        board.firstClick = false;
      }
    }
  }


  endGame(board: Board) {
    for(let row of board.arrTile) {
      for(let tile of row) {
        if(tile.mineHere && !tile.flagHere) {
          tile.clicked = true;
        }
      }
    }
  }

   getRandom(size: number) {
    return Math.floor(Math.random() * size);
  }

}
