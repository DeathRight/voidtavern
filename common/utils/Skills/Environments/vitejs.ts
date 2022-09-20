import { SiVite } from 'react-icons/si';
import NodeJS from './nodejs';
import { SkillLevel, Tool, ToolType } from '../types';

const skill: Tool = {
  id: 'e-02',
  name: 'ViteJS',
  icon: SiVite,
  type: ToolType.Environment,
  parentIds: [NodeJS.id],
  level: SkillLevel.Beginner,
  start: new Date(2021, 0),
  end: new Date(2022, 0),
};

export default skill;
