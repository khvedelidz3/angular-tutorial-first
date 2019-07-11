import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users = [];

  authorized = false;
  authorizedUser = null;

  public getUsers() {
    return this.users;
  }

  public store(user) {
    this.users.push(user);
    window.alert('User was saved');
  }

  public update(user, data) {
    const oldUser = this.users[this.users.indexOf(user)];

    oldUser.email = data.email;
    oldUser.nickName = data.nickName;
    oldUser.website = data.website;
    oldUser.phoneNumber = data.phoneNumber;
    oldUser.password = data.passwordGroup.password ? data.passwordGroup.password : oldUser.password;

    window.alert('User was updated');
  }

  public logIn(user) {
    const userExists = this.users.find((item) => {
      return item.email === user.email && item.password === user.password;
    });

    if (userExists) {
      this.authorized = true;
      this.authorizedUser = userExists;

      return true;
    }

    return false;
  }

  logOut() {
    this.authorized = false;
    this.authorizedUser = null;
  }

  isAuthorized() {
    return this.authorized;
  }

  getAuthUser() {
    return this.authorizedUser;
  }
}
