import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarMenuItem, SidebarMenuItems } from './sidebar-menu-items';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {

  public menuItems: SidebarMenuItem[];
  public isCollapsed = true;

  constructor(
    private router: Router,
    ) {
  }

  ngOnInit(): void {
    this.menuItems = SidebarMenuItems.filter(menuItem => menuItem);
    this.router.events.subscribe(() => {
      this.isCollapsed = true;
    });
  }

}
