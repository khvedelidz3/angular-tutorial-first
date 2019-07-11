import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users;
  dialog = false;
  authUser;
  constructor(private usersService: UsersService) {
    this.users = this.usersService.getUsers();
    this.authUser = this.usersService.getAuthUser();
  }

  ngOnInit() {
  }

  startDialog() {
    this.dialog = true;
  }

}
