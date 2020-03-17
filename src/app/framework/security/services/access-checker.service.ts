import { Injectable } from '@angular/core';
import { RoleProvider } from './role.provider';
import { AclService } from './acl.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AccessChecker {

  constructor(
    protected roleProvider: RoleProvider,
    protected acl: AclService
  ) {}

  /**
   * Checks whether access is granted or not
   */
  isGranted(permission: string, resource: string): Observable<boolean> {
    return this.roleProvider.getRole()
      .pipe(
        map((role: string|string[]) => Array.isArray(role) ? role : [role]),
        map((roles: string[]) => {
          return roles.some(role => this.acl.can(role, permission, resource));
        })
      );
  }
}
