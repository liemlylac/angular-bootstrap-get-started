import { Inject, Injectable, Optional } from '@angular/core';
import { AccessControl, AclOptions, AclRole, SECURITY_OPTIONS_TOKEN } from '../security.options';

const shallowObjectClone = (obj) => Object.assign({}, obj);
const shallowArrayClone = (arr) => Object.assign([], arr);
const popParent = (abilities) => {
  const parent = abilities.parent;
  delete abilities.parent;
  return parent;
};

@Injectable()
export class AclService {
  private static readonly ANY_RESOURCE = '*';

  private state: AccessControl = {};

  constructor(
    @Optional()
    @Inject(SECURITY_OPTIONS_TOKEN)
    protected settings: AclOptions = {}
  ) {
    if (settings.accessControl) {
      this.setAccessControl(settings.accessControl);
    }
  }

  setAccessControl(list: AccessControl) {
    for (const [role, value] of Object.entries(list)) {
      const abilities = shallowObjectClone(value);
      const parent = popParent(abilities);
      this.register(role, parent, abilities);
    }
  }

  private register(role: string, parent: string = null, abilities: {[permission: string]: string|string[]} = {}) {

    this.validateRole(role);

    this.state[role] = { parent }; // this.state['guest'] = { null }

    for (const [permission, value] of Object.entries(abilities)) {
      const resources = typeof value === 'string' ? [value] : value;
      this.allow(role, permission, shallowArrayClone(resources));
    }
  }

  allow(role: string, permission: string, resource: string|string[]) {

    this.validateRole(role);

    if (!this.getRole(role)) {
      this.register(role, null, {});
    }

    resource = typeof resource === 'string' ? [resource] : resource;

    let resources = shallowArrayClone(this.getRoleResources(role, permission));
    resources = resources.concat(resource);

    this.state[role][permission] = resources.filter((item, pos) => resources.indexOf(item) === pos);
  }

  can(role: string, permission: string, resource: string) {
    this.validateResource(resource);

    const parentRole = this.getRoleParent(role);
    const parentCan = parentRole && this.can(this.getRoleParent(role), permission, resource);
    return parentCan || this.exactCan(role, permission, resource);
  }

  private getRole(role: string): AclRole {
    return this.state[role];
  }

  private validateRole(role: string) {
    if (!role) {
      throw new Error('AclService: role name cannot be empty');
    }
  }

  private validateResource(resource: string) {
    if (!resource || [AclService.ANY_RESOURCE].includes(resource)) {
      throw new Error(`AclService: cannot use empty or bulk '*' resource placeholder with 'can' method`);
    }
  }

  private exactCan(role: string, permission: string, resource: string) {
    const resources = this.getRoleResources(role, permission);
    return resources.includes(resource) || resources.includes(AclService.ANY_RESOURCE);
  }

  private getRoleResources(role: string, permission: string): string[] {
    return this.getRoleAbilities(role)[permission] || [];
  }

  private getRoleAbilities(role: string): {[permission: string]: string[]} {
    const abilities = shallowObjectClone(this.state[role] || {});
    popParent(shallowObjectClone(this.state[role] || {}));
    return abilities;
  }

  private getRoleParent(role: string): string {
    return this.state[role] ? this.state[role].parent : null;
  }
}
