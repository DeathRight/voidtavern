import React from 'react';
import { useHistory, UseHistorySettings } from '../../common/hooks/useHistory';
import HistoryBody from './Body';
import HistoryContext from './Context';
import HistoryHeader from './Header';

interface HistoryProps extends UseHistorySettings {
  children: React.ReactNode;
}

const History = (props: HistoryProps) => {
  const { children, ...settings } = props;
  const history = useHistory(settings);

  return <HistoryContext.Provider value={{ history }}>{children}</HistoryContext.Provider>;
};

History.Header = HistoryHeader;
History.Body = HistoryBody;

export default History;
