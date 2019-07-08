import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  form;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.minLength(7)]],
      confirmPassword: ['', [Validators.required, this.confirmPassword()]],
      nickName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      website: ['', Validators.required],
      agreement: ['', Validators.required]
    })
  }

  confirmPassword() {
    return (formGroup) => {
      return formGroup.password === formGroup.confirmPassword ? null : { notSame: { invalid: true } };
    }
  }

  ngOnInit() {
  }

}
