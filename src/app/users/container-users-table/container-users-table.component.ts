import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../core/users.service';
import {take} from 'rxjs/operators';
import {HttpResponse} from '../../models/http-response';
import {environment} from '../../../environments/environment';
import {User} from '../../models/user';

@Component({
  selector: 'app-container-users-table',
  templateUrl: './container-users-table.component.html',
  styleUrls: ['./container-users-table.component.css']
})
export class ContainerUsersTableComponent implements OnInit {
  length = 0;
  pageSize = environment.pageSize;
  users: Array<User> = [];

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.usersService.pagesCount()
      .pipe(take(1))
      .subscribe((pages: HttpResponse) => {
        this.length = pages.data;
      });
    this.usersService.usersPerPage(1)
      .pipe(take(1))
      .subscribe((pages: HttpResponse) => {
        this.users = pages.data;
      });
  }
}
