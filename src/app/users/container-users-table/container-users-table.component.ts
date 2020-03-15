import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../core/users.service';
import {map, take} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {UserRaw, UserTable} from '../../models/user';
import {UserTransformService} from '../services/user-transform.service';

@Component({
  selector: 'app-container-users-table',
  templateUrl: './container-users-table.component.html',
  styleUrls: ['./container-users-table.component.css']
})
export class ContainerUsersTableComponent implements OnInit {
  length = 0;
  pageSize = environment.pageSize;
  users: Array<UserTable> = [];

  constructor(
    private userTransformS: UserTransformService,
    private usersS: UsersService) {
  }

  ngOnInit(): void {
    this.usersS.pagesCount()
      .pipe(take(1))
      .subscribe((pages: number) => {
        this.length = pages;
      });
    this.usersS.usersPerPage(1)
      .pipe(take(1))
      .pipe(map((rawUsers: Array<UserRaw>) => {
        return rawUsers.map((userRaw: UserRaw): UserTable => this.userTransformS.transformUserRawToUserTable(userRaw));
      }))
      .subscribe((users: Array<UserTable>) => {
        this.users = users;
      });
  }
}
