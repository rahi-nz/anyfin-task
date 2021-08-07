import { useState, useCallback } from 'react';
import Store from './Store';

export default function usePersistedState<S>(
  id: string,
  initialValue: S,
): [S, (newValue: S) => void] {
  const [value, setValue] = useState<S>(() => Store.get(id) || initialValue);

  if (value === initialValue) {
    Store.set(id, initialValue);
  }

  const updateValue = useCallback(
    (newValue: S) => {
      Store.set(id, newValue);
      return setValue(newValue);
    },
    [id],
  );

  return [value, updateValue];
}
