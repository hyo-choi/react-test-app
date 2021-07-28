import React from 'react';
import { useUserContext } from '../hooks/useContext';

export default function Page({ children }: { children: React.ReactNode }) {
  const state = useUserContext();
  return (
  <div>
    {children}
    { state.isOnline && (
      <>
        <h3>Hi, {state.name}</h3>
        <img alt={state.name} src={state.img} />
      </>)}
  </div>);
}
