import Projects from '../../../../modules/Projects';
import { TypeScript } from '../../Skills/Languages';
import { React } from '../../Skills/Libraries';
import { Project } from '../types';

const DCRProject: Project = {
  id: 'dcr',
  name: 'DnD Char Roll',
  link: 'https://github.com/DeathRight/dnd-char-roll',
  description: 'A highly customizable DnD character generator"',
  skills: [React, TypeScript],
  body: Projects.dcr,
};

export default DCRProject;
