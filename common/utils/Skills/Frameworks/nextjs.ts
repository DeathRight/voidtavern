import { SiNextdotjs } from 'react-icons/si';
import { NodeJS } from '../Environments';
import { React } from '../Libraries';
import { SkillLevel, Tool, ToolType } from '../types';

const skill: Tool = {
  id: 'f-03',
  name: 'Next.JS',
  icon: SiNextdotjs,
  type: ToolType.Framework,
  parentIds: [React.id, NodeJS.id],
  level: SkillLevel.Intermediate,
  start: new Date(2020, 0),
};

export default skill;
