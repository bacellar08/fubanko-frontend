import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {Router} from "@angular/router";
import {UserModel} from "../login/user.model";
import {RegisterService} from "./register.service";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    NgIf,
    NgClass
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  username : string = '';
  password : string = '';
  passwordCheck : string = '';
  isPasswordValid: boolean = true;
  isFormValid : boolean = true;
  showError : boolean = false;


  constructor(private registerService: RegisterService, private router: Router) {}

  register () {

    const userData: UserModel = {
      username: this.username,
      password: this.password
    };

    if (this.isFormValid) {

      this.registerService.register(userData)
        .subscribe({
          next: (response) : void  => {
            console.log(response)
            this.router.navigate(["login"])
              .catch(error => console.log(error));
          },
          error: (error) : void => {console.log(error)}
        });

    } else {
      this.showError = true;

      setTimeout(() => {
        this.showError = false;
      }, 500);
    }

  }

  checkPassword() : boolean {
    return this.isPasswordValid = this.password === this.passwordCheck;
  }

  checkFormValid() : boolean {

    return this.isFormValid = this.isPasswordValid;
  }


}
