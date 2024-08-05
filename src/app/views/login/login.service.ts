import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModel} from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url : string = 'http://localhost:8080/auth/login';

  constructor(private http: HttpClient) { }

  login(userData : UserModel) : Observable<any> {
    return this.http.post(this.url, userData);
  }

  storeToken(token: string) : void {
    return localStorage.setItem('authToken', token);
  }

  getToken() : string | null {
    return  localStorage.getItem("authToken");
  }
}
