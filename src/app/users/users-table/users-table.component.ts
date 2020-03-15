import {Component, Input, OnInit} from '@angular/core';
import {UserTable} from '../../models/user';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  @Input() length = 0;
  @Input() pageSize = 0;
  private _USERS: Array<UserTable> = [];

  constructor() {
  }

  get users() {
    return this._USERS;
  }

  @Input() set users(rawUsers: Array<UserTable>) {
    if (!rawUsers.some(u => u)) {
      this._USERS = [];
    }
    this._USERS = rawUsers;
  }

  ngOnInit(): void {
  }

}
