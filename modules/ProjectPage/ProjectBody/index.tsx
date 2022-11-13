import { useContext, useId } from 'react';
import ProjectContext from '../ProjectContext';

const ProjectBody = () => {
  const uId = useId();
  const project = useContext(ProjectContext);

  return <div key={uId}>{project?.body}</div>;
};

export default ProjectBody;
