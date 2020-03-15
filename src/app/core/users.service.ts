import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {UserRaw} from '../models/user';
import {HttpResponse} from '../models/http-response';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  usersPerPage(pageIndex: number): Observable<Array<UserRaw>> {
    return this.http.get(`${environment.baseUrl}/users/page/${pageIndex}`)
      .pipe(map((users: HttpResponse<Array<UserRaw>>) => users.data));
  }

  pagesCount(): Observable<number> {
    return this.http.get(`${environment.baseUrl}/users/pages-count`)
      .pipe(map((length: HttpResponse<number>) => length.data));
  }

  userStatistics(userId: number): Observable<any> {
    return this.http.get(`${environment.baseUrl}/user-statistics/${userId}`);
  }

}
