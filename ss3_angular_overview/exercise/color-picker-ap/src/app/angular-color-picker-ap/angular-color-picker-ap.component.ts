import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-color-picker-ap',
  templateUrl: './angular-color-picker-ap.component.html',
  styleUrls: ['./angular-color-picker-ap.component.css']
})
export class AngularColorPickerApComponent implements OnInit {

  colors: string;
  constructor() { }

  ngOnInit(): void {
  }

}
