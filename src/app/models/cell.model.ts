export class Cell {

  public yPos: number = -1;
  public xPos: number = -1;
  public mineNumber: number = 0;
  public questionCell: boolean = false;
  public mineHere: boolean = false;
  public flagHere: boolean = false;
  public clicked: boolean = false;
  public gameEnder: boolean = false;

  constructor(y: number, x: number) {
    this.yPos = y;
    this.xPos = x;
  }
}
