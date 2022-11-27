import { SiMaterialui } from 'react-icons/si';
import React from './react';
import { SkillLevel, Tool, ToolType } from '../types';

const skill: Tool = {
  id: 'b-03',
  name: 'MaterialUI',
  icon: SiMaterialui,
  type: ToolType.Library,
  parentIds: [React.id],
  level: SkillLevel.Advanced,
  start: new Date(2020, 0),
};

export default skill;
