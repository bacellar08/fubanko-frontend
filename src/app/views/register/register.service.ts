import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../login/user.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  url: string = environment.API_URL;

  constructor(private http: HttpClient) {}

  register(userData: UserModel): Observable<any> {
    return this.http.post(this.url + '/auth/register', userData);
  }
}
