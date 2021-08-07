import { useReducer, useEffect, Dispatch } from 'react';
import Store from './Store';

export type ReducerType<T, P> = (state: T, action: ActionType<P>) => T;
export type InitType<T> = (state: T) => void;
export interface ActionType<P> {
  type: string;
  payload: P;
}
export function usePersistedReducer<T, P>(
  reducer: ReducerType<T, P>,
  defaultState: T,
  storageKey: string,
  init?: InitType<T>,
): [T, Dispatch<ActionType<P>>] {
  const [state, dispatch] = useReducer(reducer, defaultState, initialState => {
    const persisted = JSON.parse(
      process.browser ? (localStorage.getItem(storageKey) as string) : null,
    );
    // eslint-disable-next-line no-nested-ternary
    return persisted !== null ? persisted : init ? init(initialState) : initialState;
  });

  useEffect(() => {
    Store.set(storageKey, state);
  }, [storageKey, state]);

  return [state, dispatch];
}
