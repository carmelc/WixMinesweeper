import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { FormGroup,FormControl,Validators,FormBuilder,ValidatorFn,AbstractControl  } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';


@Component({
  selector: 'app-dialog-result',
  templateUrl: './dialog-result.component.html',
  styleUrls: ['./dialog-result.component.css'],

})

export class DialogResultComponent {


  form: FormGroup;
  name = new FormControl('',Validators.required);
  width = new FormControl('',[Validators.required,CustomValidators.range([10,300])]);
  height = new FormControl('',[Validators.required,CustomValidators.range([10,300])]);
  mines = new FormControl('',Validators.required);
  constructor(public dialogRef: MdDialogRef<DialogResultComponent>,private fb: FormBuilder) {
   
  }

  ngOnInit() {
  this.form = this.fb.group({
      'name' :this.name,
      'width': this.width,
      'height':  this.height,
      'mines' : this.mines
    });
}
  
  Play(){
    this.dialogRef.close({name:this.name.value,width:this.width.value,height:this.height.value,mines:this.mines.value});
  }
 
}

