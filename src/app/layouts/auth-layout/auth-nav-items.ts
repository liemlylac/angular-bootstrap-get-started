export interface AuthNavItem {
  paths: Array<string>;
  icon: string;
  label: string;
  class?: string;
}

export const AuthNavItems: AuthNavItem[] = [
  {
    paths: ['/dashboard'],
    icon: '',
    label: 'Dashboard',
    class: ''
  },
  {
    paths: ['register'],
    icon: '',
    label: 'Register',
    class: ''
  },
  {
    paths: ['login'],
    icon: '',
    label: 'Login',
    class: ''
  },
  {
    paths: ['profile'],
    icon: '',
    label: 'Profile',
    class: ''
  },
];
