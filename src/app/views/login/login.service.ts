import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from './user.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url: string = environment.API_URL;

  constructor(private http: HttpClient) {}

  login(userData: UserModel): Observable<any> {
    return this.http.post(this.url + '/auth/login', userData);
  }

  storeToken(token: string): void {
    return localStorage.setItem('authToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }
}
