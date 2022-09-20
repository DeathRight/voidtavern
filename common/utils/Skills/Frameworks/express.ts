import { SiExpress } from 'react-icons/si';
import { NodeJS } from '../Environments';
import { JavaScript } from '../Languages';
import { SkillLevel, Tool, ToolType } from '../types';

const skill: Tool = {
  id: 'f-01',
  name: 'Express',
  icon: SiExpress,
  type: ToolType.Framework,
  parentIds: [NodeJS.id, JavaScript.id],
  level: SkillLevel.Intermediate,
  start: new Date(2019, 0),
  end: new Date(2021, 0),
};

export default skill;
