import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  number1 = 0;
  number2 = 0;
  results = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  getValue(calculation: string) {
    // tslint:disable-next-line:no-eval
    this.results = eval(this.number1 + calculation + this.number2);
  }

}
