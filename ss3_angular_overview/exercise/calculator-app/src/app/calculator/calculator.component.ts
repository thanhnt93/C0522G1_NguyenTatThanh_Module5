import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  number1: number;
  number2: number;
  results: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  getValue(calculation: string) {
    // tslint:disable-next-line:no-eval
    this.results = eval(this.number1 + calculation + this.number2);
  }

}
