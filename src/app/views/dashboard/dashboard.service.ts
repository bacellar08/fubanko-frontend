import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  apiUrl: string = 'https://fubanko-api.onrender.com';

  constructor(private http: HttpClient, private loginService: LoginService) {}

  getUserName(): Observable<any> {
    const token = this.loginService.getToken();
    let headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(this.apiUrl + '/users/userinfo', { headers: headers });
  }

  getUserData(username: string): Observable<any> {
    const token = this.loginService.getToken();
    let headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(this.apiUrl + `/dashboard?username=${username}`, {
      headers: headers,
    });
  }
}
