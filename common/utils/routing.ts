import Projects from './Projects';

const trim = (path: string) => {
  let str = path.startsWith('/') ? path.substring(1) : path;
  const hashI = str.indexOf('#');
  if (hashI > -1) str = str.substring(0, hashI);

  return str;
};

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

export const getPage = <P extends { pId: string }>(path: string, pageProps: P) =>
  pageProps.pId ?? (isHome(path) ? 'home' : '404');
