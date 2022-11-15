import { SkillList } from '../Skills/types';

export interface Project {
  id: number;
  name: string;
  link: string;
  skills: SkillList;
  body: React.ReactNode;
  description?: string;
}
