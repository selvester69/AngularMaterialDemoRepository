import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from "@angular/material";

@Component({
  selector: 'app-snackbar-demo',
  templateUrl: './snackbar-demo.component.html',
  styleUrls: ['./snackbar-demo.component.css']
})
export class SnackbarDemoComponent implements OnInit {

  constructor(public snackBar : MatSnackBar ) { }

  ngOnInit() {
  }

  openSnackbar(){
    this.snackBar.open("this is the SnackBar message!","Got it!");
  }
}
