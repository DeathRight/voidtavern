import { SiJava } from 'react-icons/si';
import { Language, SkillLevel } from '../types';

const skill: Language = {
  id: 'l-02',
  name: 'Java',
  icon: SiJava,
  level: SkillLevel.Intermediate,
  start: new Date(2009, 0),
  end: new Date(2013, 0),
};

export default skill;
