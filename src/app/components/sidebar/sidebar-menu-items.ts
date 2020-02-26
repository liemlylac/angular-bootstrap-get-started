export interface SidebarMenuItem {
  path: string;
  icon: string;
  label: string;
  class?: string;
}

export const SidebarMenuItems: SidebarMenuItem[] = [
  { path: '/dashboard', label: 'Dashboard', icon: 'dashboard', class: '' },
  { path: '/layouts', label: 'Layout', icon: 'layout', class: '' },
  { path: '/forms', label: 'Forms', icon: 'form', class: '' },
  { path: '/map', label: 'Map', icon: 'map', class: '' },
  { path: '/charts', label: 'Charts', icon: 'chart', class: '' },
  { path: '/tables', label: 'Table', icon: 'table', class: '' },
  { path: '/editor', label: 'Editor', icon: 'editor', class: '' },
];
