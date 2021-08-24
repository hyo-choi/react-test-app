import React, { createContext, Dispatch, useContext, useReducer } from 'react';

type appStateType = {
  isError: boolean,
  isLoading: boolean,
};

type stateActionType = { type: 'error', message: string } | { type: 'loading' } | { type: 'init' };

const initialState: appStateType = {
  isError: false,
  isLoading: false,
};

const appStateContext = createContext<appStateType | undefined>(undefined);
const appDispatchContext = createContext<Dispatch<stateActionType> | undefined>(undefined);

function reducer(state: appStateType, action: stateActionType): appStateType {
  switch (action.type) {
    case 'error':
      return { isError: true, isLoading: false };
    case 'loading':
      return { isError: false, isLoading: true };
    default:
      return { ...initialState };
  }
};

export function AppStateProvider({ children }: { children: React.ReactNode}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <appStateContext.Provider value={state}>
      <appDispatchContext.Provider value={dispatch}>
        {children}
      </appDispatchContext.Provider>
    </appStateContext.Provider>
  );
};

export function useAppContext() {
  const state = useContext(appStateContext);
  if (!state) {
    throw new Error('Provider not found');
  }
  return (state);
}

export function useAppDispatchContext() {
  const dispatch = useContext(appDispatchContext);
  if (!dispatch) {
    throw new Error('Provider not found');
  }
  return (dispatch);
}

