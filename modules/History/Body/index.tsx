import { Box, BoxProps } from '@mantine/core';
import React, { useMemo } from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import { useHistoryContext } from '../Context';

const TransitionReplace = ReactCSSTransitionReplace as unknown as React.FC<{
  transitionName: string;
  transitionEnterTimeout: string | number;
  transitionLeaveTimeout: string | number;
  children: React.ReactNode;
}>;

const HistoryBody = (props: Omit<BoxProps, 'children'>) => {
  const history = useHistoryContext();

  const Body = useMemo(() => {
    const item = history.list[history.active];
    if (item) {
      return (
        <div style={{ willChange: 'transform, opacity' }} key={item.key}>
          {item.body}
        </div>
      );
    }
    return undefined;
  }, [history.active]);

  return (
    <Box {...props}>
      <TransitionReplace
        transitionName="roll-up"
        transitionEnterTimeout={350}
        transitionLeaveTimeout={350}
      >
        {Body}
      </TransitionReplace>
    </Box>
  );
};

export default HistoryBody;
