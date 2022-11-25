import { Box, BoxProps } from '@mantine/core';
import React, { useId, useMemo, useState } from 'react';
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
  const uId = useId();
  const [i, setI] = useState(0);

  const Body = useMemo(() => {
    setI(i + 1);
    if (history.list[history.active]) {
      return (
        <div style={{ willChange: 'transform, opacity' }} key={`${uId}-${i}`}>
          {history.list[history.active].body}
        </div>
      );
    }
    return undefined;
  }, [history.active]);

  return (
    <Box {...props}>
      <TransitionReplace
        transitionName="roll-up"
        transitionEnterTimeout={600}
        transitionLeaveTimeout={600}
      >
        {Body}
      </TransitionReplace>
    </Box>
  );
};

export default HistoryBody;
