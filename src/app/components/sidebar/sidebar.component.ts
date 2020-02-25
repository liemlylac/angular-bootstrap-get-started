import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItems } from './sidebar.menu';
import { MenuItem } from '../menu.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {

  public menuItems: MenuItem[];
  public isCollapsed = true;

  constructor(
    private router: Router,
    ) {
  }

  ngOnInit(): void {
    this.menuItems = MenuItems.filter(menuItem => menuItem);
    this.router.events.subscribe(() => {
      this.isCollapsed = true;
    });
  }

}
