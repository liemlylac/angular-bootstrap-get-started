import { of as observableOf, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Contacts, RecentUsers, User, UserData } from '../type/users';
import { ListUsersData } from '../data/list-users.data';

export class UsersService extends UserData {

  private currentTime: Date = new Date();

  private users = ListUsersData;

  private contacts: Contacts[] = [];

  private recentUsers: RecentUsers[] = [];

  private types = ['mobile', 'home', 'work'];

  constructor() {
    super();
    this.initContacts();
    this.initRecentUser();
  }

  protected random(below) {
    return Math.round(Math.random() * (below - 1));
  }

  protected initContacts() {
    for (const user of this.users) {
      this.contacts.push({user, type: this.types[this.random(3)]});
    }
  }

  protected initRecentUser() {
    let i = this.users.length;
    i++;
    for (const contact of this.contacts) {
      this.recentUsers.push({
        user: contact.user,
        type: contact.type,
        time: this.currentTime.setHours(this.currentTime.getHours() - i, this.random(60))
      });
    }
  }

  public getUsers(): Observable<User[]> {
    return observableOf(this.users).pipe(delay(5500));
  }

  public getContacts(): Observable<Contacts[]> {
    return observableOf(this.contacts).pipe(delay(7000));
  }

  public getRecentUsers(): Observable<RecentUsers[]> {
    return observableOf(this.recentUsers).pipe(delay(10000));
  }
}
