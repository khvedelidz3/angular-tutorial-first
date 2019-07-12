import {Injectable} from '@angular/core';
import {UsersService} from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private access = false;
  private isAuthorized = false;
  private authorizedUser = null;

  constructor(private usersService: UsersService) {
  }

  isEnabled() {
    return this.access;
  }

  disallow() {
    this.access = false;
  }

  allow() {
    this.access = true;
  }

  logIn(credentials) {
    const user = this.usersService.getUser(credentials);

    if (user) {
      this.isAuthorized = true;
      this.authorizedUser = user;

      return this.authorizedUser;
    }

    return null;
  }

  logOut() {
    this.isAuthorized = false;
    this.authorizedUser = null;
  }

  userIsAuthorized() {
    return this.isAuthorized;
  }

  getAuthUser() {
    return this.authorizedUser;
  }
}
