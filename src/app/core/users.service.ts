import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  usersPerPage(pageIndex: number): Observable<any> {
    return this.http.get(`${environment.baseUrl}/users/page/${pageIndex}`);
  }

  pagesCount(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/users/pages-count`);
  }

  userStatistics(userId: number): Observable<any> {
    return this.http.get(`${environment.baseUrl}/user-statistics/${userId}`);
  }
}
