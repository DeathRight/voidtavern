import React, { useCallback, useEffect, useMemo, useState } from 'react';

export type HistoryItem = { header: React.ReactNode; body: React.ReactNode };
export interface UseHistorySettings {
  historyItems?: HistoryItem[];
  /**
   * Default: 4
   *
   * Always keeps item at index 0 but will shift indexes 2 through (`max`-1)
   * to the left before adding new items to the history if `max` is reached.
   *
   * Ex:
   * ```js
   * const history = useHistory({max: 4, historyItems: ["Test0", "Test1", "Test2", "Test3"]});
   *
   * history.add("Test4");
   * history.list; // -> ["Test0", "Test2", "Test3", "Test4"]
   * history.add("Test5");
   * history.list; // -> ["Test0", "Test3", "Test4", "Test5"]
   * ```
   */
  max?: number;
  onAdded?: (i: number) => void;
  onRemoved?: (i: number) => void;
}

interface UseHistoryActions {
  /**
   * Moves `active` forward by 1
   */
  next: () => void;
  /**
   * Moves `active` backward by 1
   */
  prev: () => void;
  /**
   * Moves `active` to 0 (origin)
   */
  home: () => void;
  /**
   * Adds `item` to end of history, and shifts indexes 2 through (`max`-1) if `max` is reached
   * (see `useHistory` hook's documentation)
   */
  add: (item: HistoryItem) => void;
  /**
   * Removes the last item from history
   */
  remove: () => void;
  clear: () => void;
}

export interface UseHistoryReturn extends UseHistoryActions {
  /**
   * Index of currently active history item
   */
  active: number;
  list: HistoryItem[];
}

const shave = (v: any[], max: number) => {
  const l = v.slice();

  if (v.length > max) {
    const count = v.length - max;

    l.splice(1, count);
    return l;
  }

  return l;
};

function useHistoryHistory({ max = 4, historyItems = [], onAdded, onRemoved }: UseHistorySettings) {
  const [list, setList] = useState<HistoryItem[]>(shave(historyItems, max));
  const [_list, _setList] = useState<HistoryItem[]>(shave(historyItems, max));
  const [active, setActive] = useState(0);

  /* ------------------------------ Modification ------------------------------ */
  const add = useCallback(
    (item: HistoryItem) =>
      setList((v) => {
        if (v.length >= max) {
          const count = v.length - max + 1;

          const l = v.slice();
          l.splice(1, count);
          l.push(item);
          //setActive(l.length);
          return l;
        }

        //setActive(v.length);

        return [...v, item];
      }),
    [max]
  );
  const remove = useCallback(() => {
    setList((v) => {
      const l = v.slice(0, -1);
      //if (active > l.length - 1) setActive(l.length - 1);
      return l;
    });
  }, []);

  const clear = useCallback(() => setList((v) => v.slice(0, 1)), []);

  /* -------------------------------- Movement -------------------------------- */
  const next = useCallback(() => {
    const n = active + 1;
    if (list.length - 1 >= n) setActive(n);
  }, [active, list]);

  const prev = useCallback(() => {
    const n = active - 1;
    if (n >= 0 && n <= list.length - 1) setActive(n);
    else setActive(0);
  }, [active, list]);

  /**
   * Sets `active` as 0
   */
  const home = useCallback(() => {
    if (active !== 0) setActive(0);
  }, [active]);
  /* ------------------------------------ * ----------------------------------- */
  const actions: UseHistoryActions = useMemo(
    () => ({ add, remove, clear, next, prev, home }),
    [add, remove, clear, next, prev, home]
  );
  /* ------------------------------------ * ----------------------------------- */
  useEffect(() => {
    if (list.length >= _list.length) {
      onAdded?.(list.length - 1);
      // Automatically set added item as active
      next();
    } else if (list.length < _list.length) {
      onRemoved?.(list.length - 1);
      prev();
    }
    _setList(list.slice());
  }, [list]);

  return [active, list, actions] as const;
}

export function useHistory(settings?: UseHistorySettings): UseHistoryReturn {
  const [active, list, actions] = useHistoryHistory({ ...settings });

  return useMemo(() => ({ list, active, ...actions }), [list, active, actions]);
}
