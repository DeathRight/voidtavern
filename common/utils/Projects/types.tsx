import ProjectBody from '../../components/common/ProjectBody';
import { SkillList } from '../Skills/types';

export interface Project {
  id: number;
  link: string;
  skills: SkillList;
  body: typeof ProjectBody;
}
