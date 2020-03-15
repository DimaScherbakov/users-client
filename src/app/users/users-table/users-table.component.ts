import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/user';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  @Input() length = 0;
  @Input() pageSize = 0;
  @Input() users: Array<User> = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
