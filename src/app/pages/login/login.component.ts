import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logoImg = '/assets/img/default/bootstrap-solid.svg';
  logoAlt = 'logo-alt-description';

  constructor() {
  }

  ngOnInit() {
  }

}
