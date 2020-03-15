import { Component, OnInit } from '@angular/core';
import { Contacts, RecentUsers, User, UserData } from '../../@mock/type/users';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  private isLoadingUsers: boolean;
  private isLoadingContact: boolean;
  private isLoadingRecentUser: boolean;

  users: User[];
  contacts: Contacts[];
  recentUsers: RecentUsers[];

  userCols: string[] = [ 'UUID', 'Username', 'Fist Name', 'Last Name'];
  contactCols: string[] = [ ...this.userCols, 'Contact Type'];
  recentUserCols: string[] = [ ...this.contactCols, 'Recent time'];

  constructor(
    private userService: UserData,
  ) {
  }

  ngOnInit() {
    this.getUsers();
    this.getContacts();
    this.getRecentUsers();
  }

  protected getUsers() {
    this.isLoadingUsers = true;
    this.userService.getUsers().subscribe(
      (res) => {
        this.users = res;
        this.isLoadingUsers = false;
      }
    );
  }

  protected getContacts() {
    this.isLoadingContact = true;
    this.userService.getContacts().subscribe(
      (res) => {
        this.contacts = res;
        this.isLoadingContact = false;
      }
    );
  }

  protected getRecentUsers() {
    this.isLoadingRecentUser = true;
    this.userService.getRecentUsers().subscribe(
      (res) => {
        this.recentUsers = res;
        this.isLoadingRecentUser = false;
      }
    );
  }
}
