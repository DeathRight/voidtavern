import React from 'react';
import useStyle from './styles';

const PageBody = (props: { children: React.ReactNode }) => {
  const { children } = props;
  const { classes } = useStyle();

  return <div className={classes.main}>{children}</div>;
};

export default PageBody;
