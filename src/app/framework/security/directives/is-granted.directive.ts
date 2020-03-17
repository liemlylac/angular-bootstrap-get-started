import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AccessChecker } from '../services/access-checker.service';

@Directive({ selector: '[appIsGranted]' })
export class IsGrantedDirective implements OnDestroy {
  private destroy = new Subject<void>();

  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private accessChecker: AccessChecker,
  ) {
  }

  @Input()
  set appIsGranted([permission, resource]: [string, string]) {
    this.accessChecker.isGranted(permission, resource)
      .pipe(
        takeUntil(this.destroy)
      )
      .subscribe((can: boolean) => {
        if (can && !this.hasView) {
          this.viewContainer.createEmbeddedView(this.templateRef);
          this.hasView = true;
        } else if (!can && this.hasView) {
          this.viewContainer.clear();
          this.hasView = false;
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
