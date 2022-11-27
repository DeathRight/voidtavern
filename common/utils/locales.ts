const locales = ['en', 'fr', 'es'];

/**
 * Generates paths with `params` for every locale
 * @param params path params object (e.g.: `{slug: 'post-1'}`)
 */
const mapLocalesToPaths = (params: { [key: string]: string }) =>
  locales.map((l) => ({ params, locale: l }));

export default mapLocalesToPaths;
