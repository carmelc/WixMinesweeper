import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { DialogResultComponent } from '../dialog-result/dialog-result.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html'
})
export class DialogComponent {
  name: string;
  width: number;
  height: number;
  mines: number;

  constructor(public dialog: MdDialog,private router: Router) {}
  ngOnInit() {

    const dialogRef = this.dialog.open(DialogResultComponent,{
      disableClose:true
    });
    dialogRef.afterClosed().subscribe(result => {

      this.name = result.name;
      this.width = result.width;
      this.height = result.height;
      this.mines = result.mines;

      this.router.navigate(['game',this.name,this.width,this.height,this.mines]);

     console.log(this.name + this.width + this.height);
    });
  }
    
  
  /*openDialog() {
    const dialogRef = this.dialog.open(DialogResultComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }
  */
}


