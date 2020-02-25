import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserLoginModel } from './user-login.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  errors: string[];
  messages: string[];
  user: UserLoginModel;
  submitted = false;
  rememberMe = false;

  constructor(
    private titleService: Title,
    private router: Router,
    ) {
  }

  ngOnInit() {
    this.titleService.setTitle('Login');
    this.user = new UserLoginModel();
  }

  login(): void {
    this.errors = [];
    this.messages = [];
    this.submitted = true;
  }

  gotoForgotPassword() {
    this.router.navigate(['auth', 'forgot-password']);
  }

  gotoRegister() {
    this.router.navigate(['auth', 'register']);
  }
}
