import { createContext, useContext } from 'react';
import { UseHistoryReturn } from '../../../common/hooks/useHistory';

interface HistoryContextI {
  history: UseHistoryReturn;
}

const HistoryContext = createContext<HistoryContextI | undefined>(undefined);

export const useHistoryContext = () => {
  const h = useContext(HistoryContext);
  if (h === undefined) {
    throw new Error('useHistoryContext must be inside a HistoryContext Provider!');
  }

  return h.history;
};

export default HistoryContext;
