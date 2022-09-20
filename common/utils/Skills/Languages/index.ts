import { SkillList } from '../types';
import csharp from './csharp';
import css from './css';
import html from './html';
import java from './java';
import javascript from './javascript';
import typescript from './typescript';

export {
  csharp as CSharp,
  java as Java,
  javascript as JavaScript,
  typescript as TypeScript,
  html as HTML,
  css as CSS,
};
export default [csharp, java, javascript, typescript, html, css] as SkillList;
