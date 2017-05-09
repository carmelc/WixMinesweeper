export class Board {
  public arrTile: any[] = [];
  public clickNumber: number = 0;
  public gameOver: boolean = false;
  public checkedTiles: any[] = [];
  public flagNumber: number = 0;
  public firstClick: boolean = true;
  public winTiles: number;
  public shownTileCounter: number = 0;
  public gameWon: boolean = false;


  constructor(public mineNumber: number, public height: number, public width: number) {
    this.winTiles = (height * width) - mineNumber;
  }
}
