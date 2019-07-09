import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users;

  constructor(private usersService: UsersService) {
    this.users = this.usersService.getUsers();
  }

  ngOnInit() {
  }

}
