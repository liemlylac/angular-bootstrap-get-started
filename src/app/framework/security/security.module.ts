import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AclOptions, SECURITY_OPTIONS_TOKEN } from './security.options';
import { AclService } from './services/acl.service';
import { AccessChecker } from './services/access-checker.service';
import { IsGrantedDirective } from './directives/is-granted.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    IsGrantedDirective,
  ],
  exports: [
    IsGrantedDirective,
  ]
})
export class SecurityModule {
  static forRoot(securityOptions: AclOptions): ModuleWithProviders<SecurityModule> {
    return {
      ngModule: SecurityModule,
      providers: [
        { provide: SECURITY_OPTIONS_TOKEN, useValue: securityOptions },
        AclService,
        AccessChecker,
      ],
    };
  }
}
