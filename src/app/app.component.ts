import { Component } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { Location } from '@angular/common';


//import components

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



 constructor(private location: Location) {
        
 }

 
  
}
