import { Component, OnInit } from '@angular/core';
import { AuthNavItem, AuthNavItems } from './auth-nav-items';
import { AuthFooterItem, AuthFooterItems } from '@layouts/auth-layout/auth-footer-items';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
})
export class AuthLayoutComponent implements OnInit {
  isCollapsed: boolean;
  navItems: AuthNavItem[] = AuthNavItems;
  copyrightYear = new Date();
  footerItems: AuthFooterItem[] = AuthFooterItems;
  logo = 'assets/img/brand/bootstrap-solid.svg';

  constructor(
  ) {
  }

  ngOnInit() {
  }

}
