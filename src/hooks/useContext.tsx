import React, { createContext, useReducer, useContext, Dispatch } from 'react';

type userInfoType = {
  name: string,
  img: string,
  isOnline?: boolean,
}

type actionType = { type: 'login', info: userInfoType } | { type: 'logout' };

const initialInfo: userInfoType = {
  name: '',
  img: '',
  isOnline: false,
};

const userContext = createContext<userInfoType | undefined>(undefined);
const dispatchContext = createContext<Dispatch<actionType> | undefined>(undefined);

function reducer(state: userInfoType, action: actionType): userInfoType {
  switch (action.type) {
    case 'login':
      return { ...action.info, isOnline: true };
    case 'logout':
    default:
      return { ...initialInfo };
  }
}

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialInfo);
  return (
    <userContext.Provider value={state}>
      <dispatchContext.Provider value={dispatch}>
        {children}
      </dispatchContext.Provider>
    </userContext.Provider>
  );
}

export function useUserContext() {
  const state = useContext(userContext);
  if (!state) {
    throw new Error('Provider not found');
  }
  return (state);
}

export function useDispatchContext() {
  const dispatch = useContext(dispatchContext);
  if (!dispatch) {
    throw new Error('Provider not found');
  }
  return (dispatch);
}
