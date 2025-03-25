import Projects from '../../../../modules/Projects';
import { Python } from '../../Skills/Languages';
import { Project } from '../types';

const SLGProject: Project = {
  id: 'silverlingua',
  name: 'SilverLingua',
  link: 'https://github.com/DeathRight/SilverLingua',
  description: 'A modular and extensible framework for working with Large Language Models (LLMs)',
  skills: [Python],
  body: Projects.silverlingua,
};

export default SLGProject;
