import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService) {
    this.form = fb.group({
      email: '',
      password: ''
    });
  }

  ngOnInit() {
  }

  logIn() {
    const user = {
      email: this.form.get('email').value,
      password: this.form.get('password').value
    };

    if (this.authService.logIn(user)) {
      this.router.navigate(['dashboard']);
    }

    this.form.reset();
  }

}
