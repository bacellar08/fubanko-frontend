import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../login/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  url: string = 'https://fubanko-api.onrender.com/auth/register';

  constructor(private http: HttpClient) {}

  register(userData: UserModel): Observable<any> {
    return this.http.post(this.url, userData);
  }
}
