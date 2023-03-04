import Projects from '../../../../modules/Projects';
import { TypeScript } from '../../Skills/Languages';
import { React } from '../../Skills/Libraries';
import { Project } from '../types';

const STGProject: Project = {
  id: 'stg',
  name: 'ScrollTrackingGroup',
  link: 'https://github.com/DeathRight/ScrollTrackingGroup',
  description: 'React component that detects if a "Section" overlaps with a "Window"',
  skills: [React, TypeScript],
  body: Projects.stg,
};

export default STGProject;
