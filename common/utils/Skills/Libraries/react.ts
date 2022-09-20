import { SiReact } from 'react-icons/si';
import { JavaScript, TypeScript } from '../Languages';
import { SkillLevel, Tool, ToolType } from '../types';

const skill: Tool = {
  id: 'b-01',
  name: 'React',
  icon: SiReact,
  type: ToolType.Library,
  parentIds: [JavaScript.id, TypeScript.id],
  level: SkillLevel.Advanced,
  start: new Date(2019),
};

export default skill;
