import { SkillList } from '../Skills/types';

export interface Project {
  id: string;
  name: string;
  link: string;
  skills: SkillList;
  body: React.ReactNode;
  description?: string;
}
