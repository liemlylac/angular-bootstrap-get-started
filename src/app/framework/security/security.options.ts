import { InjectionToken } from '@angular/core';

export interface AclRole {
  parent?: string;
  [permission: string]: string | string[] | undefined;
}

export interface AccessControl {
  [role: string]: AclRole;
}

export interface AclOptions {
  accessControl?: AccessControl;
}

export const SECURITY_OPTIONS_TOKEN = new InjectionToken<AclOptions>('Security Options');



