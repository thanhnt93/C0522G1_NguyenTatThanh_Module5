import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../service/customer.service';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private customerService: CustomerService,
              private titleService: Title,
              private router: Router) {
  }

  ngOnInit(): void {
    /*id: number;
  name: string;
  birthday: string;
  gender: boolean;
  idCard: string;
  phone: string;
  email: string;
  address: string;
  customerType: string;*/
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      // tslint:disable-next-line:max-line-length
      /*name:    new FormControl('', [Validators.required, Validators.pattern('^([\\p{Lu}][\\p{Ll}]{1,8})(\\s([\\p{Lu}]|[\\p{Lu}][\\p{Ll}]{1,10})){0,5}$')]),*/
      birthday: new FormControl('', [Validators.required, this.checkAge]),
      gender: new FormControl(false, [Validators.required]),
      idCard: new FormControl('', [Validators.required, Validators.pattern('^[1-9][\\d]{11}$')]),
      phone: new FormControl('', [Validators.required
        // , Validators.pattern('^[0][\\d]{9}$')
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required]),
      customerType: new FormControl('', [Validators.required])
    });
  }

  private checkAge(abstractControl: AbstractControl): any {
    const formYear = Number(abstractControl.value.substr(0, 4));
    const curYear = new Date().getFullYear();
    return curYear - formYear >= 18 ? null : {invalid18: true};
  }

  giveFormValue() {
    console.log(this.formGroup.value);
  }

}
