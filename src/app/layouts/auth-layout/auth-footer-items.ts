export interface AuthFooterItem {
  paths: Array<string>;
  label: string;
  class?: string;
}

export const AuthFooterItems: AuthFooterItem[] = [
  {
    paths: ['home'],
    label: 'Home',
    class: '',
  },
  {
    paths: ['about-me'],
    label: 'About Me',
    class: '',
  },
  {
    paths: ['sample-link'],
    label: 'Sample link',
    class: '',
  },
  {
    paths: [],
    label: 'MIT License',
    class: '',
  },
];
