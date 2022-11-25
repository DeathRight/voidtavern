import { Box, BoxProps } from '@mantine/core';
import { useMemo } from 'react';
import { useHistoryContext } from '../Context';

const HistoryBody = (props: Omit<BoxProps, 'children'>) => {
  const history = useHistoryContext();

  const Body = useMemo(() => {
    if (history.list[history.active]) return <>{history.list[history.active].body}</>;
    return <></>;
  }, [history.active]);

  return <Box {...props}>{Body}</Box>;
};

export default HistoryBody;
