import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from '@modules/auth/auth.service';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private location: Location,
  ) {
  }

  ngOnInit() {
  }

  back() {
    this.location.back();
    return false;
  }

}
