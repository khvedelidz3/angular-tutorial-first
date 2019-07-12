import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: `app-top-bar`,
  templateUrl: `./top-bar.component.html`,
  styleUrls: [`./top-bar.component.scss`]
})

export class TopBarComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  get isAuthorized() {
    return this.authService.userIsAuthorized();
  }

  logOut() {
    this.authService.logOut();
    this.router.navigate(['login']);
  }
}
