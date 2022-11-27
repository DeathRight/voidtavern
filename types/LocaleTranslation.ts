import common from '../public/locales/en/common.json';
import home from '../public/locales/en/home.json';
import projects from '../public/locales/en/projects.json';

export interface Resources {
  common: typeof common;
  home: typeof home;
  projects: typeof projects;
}
