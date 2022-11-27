import Projects from './Projects';

const trim = (path: string) => path.substring(1);

export const isHome = (path: string) => trim(path) === '';

export const getProjectFromPath = (path: string) => {
  const p = trim(path);
  if (!isHome(path)) {
    const split = p.split('/');
    if (
      split.length === 2 &&
      split[0] === 'project' &&
      Projects.findIndex((v) => v.id === split[1])
    ) {
      return split[1];
    }
  }

  return false;
};

export const getNavLinkIdFromPath = (path: string) =>
  isHome(path) ? 'home' : getProjectFromPath(path) || '404';
