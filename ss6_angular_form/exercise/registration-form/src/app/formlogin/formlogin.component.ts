import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-formlogin',
  templateUrl: './formlogin.component.html',
  styleUrls: ['./formlogin.component.css']
})
export class FormloginComponent implements OnInit {
  createForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.createForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      passwordGroup: new FormGroup(
        {
          password: new FormControl('', [Validators.required, Validators.minLength(6)]),
          confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)], this.checkConfirm)
        }
      ),
      country: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]),
    });
  }

  checkConfirm(item: AbstractControl): any {
    const c = item.value;
    return c.password === c.confirmPassword ? null : {confirmPass: true};
  }

  getValueForm(): void {
    console.log(this.createForm.value);
    // console.log(this.createForm.value.password);
    // console.log(this.createForm.value.confirmPassword);
  }

}
