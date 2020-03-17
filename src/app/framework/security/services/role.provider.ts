import { Observable } from 'rxjs';

export abstract class RoleProvider {

  /**
   * Return current user role
   */
  abstract getRole(): Observable<string | string[]>;
}
