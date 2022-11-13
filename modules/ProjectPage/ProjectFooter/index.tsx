import { Divider, Grid } from '@mantine/core';
import { useContext, useId, useMemo } from 'react';
import SkillBadge from '../../../common/components/Skill/SkillBadge';
import ProjectContext from '../ProjectContext';

const ProjectFooter = () => {
  const uId = useId();
  const project = useContext(ProjectContext);

  const skillBadges = useMemo(
    () => project?.skills.map((s) => <SkillBadge key={`skillBadge:${s.id}`} skill={s} />),
    []
  );

  return (
    <div key={uId}>
      <Divider />
      <Grid id="skillBadges">{skillBadges}</Grid>
    </div>
  );
};

export default ProjectFooter;
