import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatchContext } from '../hooks/useContext';

export default function Bar() {
  const history = useHistory();
  const dispatch = useDispatchContext();

  const handleLogout = () => {
    dispatch({ type: 'logout' });
    history.push('/');
  }

  return (
    <ol>
      <ul><Link to="/">main</Link></ul>
      <ul><Link to="/game">game</Link></ul>
      <ul><Link to="/profile">profile</Link></ul>
      <ul><Link to="/community">community</Link></ul>
      <ul><Link to="/channel">channel</Link></ul>
      <ul><button onClick={handleLogout}>fake logout</button></ul>
    </ol>
  );
}
