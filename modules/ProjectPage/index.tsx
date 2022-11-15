import { Project } from '../../common/utils/Projects/types';
import ProjectContext from './ProjectContext';

interface ProjectPageProps {
  children: React.ReactNode;
  project: Project;
}
const ProjectPage = (props: ProjectPageProps) => {
  const { children, project } = props;
  return <ProjectContext.Provider value={project}>{children}</ProjectContext.Provider>;
};

export default ProjectPage;
