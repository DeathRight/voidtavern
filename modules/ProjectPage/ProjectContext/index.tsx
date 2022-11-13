import { createContext } from 'react';
import { Project } from '../../../common/utils/Projects/types';

interface ProjectContextI extends Project {}

const ProjectContext = createContext<ProjectContextI | undefined>(undefined);
export default ProjectContext;
