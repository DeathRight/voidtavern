import 'react-i18next';
import { Resources as CustomResources } from './types/LocaleTranslation';

declare module 'react-i18next' {
  interface Resources extends CustomResources {}
}
