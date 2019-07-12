import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users;
  dialog = false;
  authUser;
  constructor(private authService: AuthService, private usersService: UsersService) {
    this.users = this.usersService.getUsers();
    this.authUser = this.authService.getAuthUser();
  }

  ngOnInit() {
  }

  startDialog() {
    this.dialog = true;
  }

}
