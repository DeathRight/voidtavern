import { IconBrandMantine } from '@tabler/icons';
import { IconType } from 'react-icons';
import React from './react';
import { SkillLevel, Tool, ToolType } from '../types';

const skill: Tool = {
  id: 'b-02',
  name: 'Mantine UI',
  icon: IconBrandMantine as IconType,
  type: ToolType.Library,
  parentIds: [React.id],
  level: SkillLevel.Advanced,
  start: new Date(2021, 0),
};

export default skill;
