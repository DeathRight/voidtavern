import { SiNodedotjs } from 'react-icons/si';
import { JavaScript } from '../Languages';
import { SkillLevel, Tool, ToolType } from '../types';

const skill: Tool = {
  id: 'e-01',
  name: 'NodeJS',
  icon: SiNodedotjs,
  type: ToolType.Environment,
  parentIds: [JavaScript.id],
  level: SkillLevel.Intermediate,
  start: new Date(2018, 0),
};

export default skill;
