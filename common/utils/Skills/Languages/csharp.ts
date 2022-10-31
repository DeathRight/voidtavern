import { SiCsharp } from 'react-icons/si';
import { Language, SkillLevel } from '../types';

const skill: Language = {
  id: 'l-01',
  name: 'C#',
  icon: SiCsharp,
  level: SkillLevel.Intermediate,
  start: new Date(2010, 0),
  end: new Date(2013, 0),
};

export default skill;
