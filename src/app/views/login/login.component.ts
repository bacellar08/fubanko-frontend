import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { FormsModule } from '@angular/forms';
import { UserModel } from './user.model';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private loginService: LoginService, private router: Router) {}

  login() {
    const userData: UserModel = {
      username: this.username,
      password: this.password,
    };

    this.loginService.login(userData).subscribe({
      next: (response): void => {
        console.log(response);
        this.loginService.storeToken(response.token);
        this.router
          .navigate(['dashboard'])
          .catch((error) => console.log(error));
      },
      error: (error): void => {
        console.log(error);
      },
    });
  }
}
