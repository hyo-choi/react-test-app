import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatchContext, useUserContext } from '../hooks/useContext';

function Bar() {
  const history = useHistory();
  const dispatch = useDispatchContext();
  const { name } = useUserContext();

  const handleLogout = () => {
    dispatch({ type: 'logout' });
    history.push('/');
  }

  return (
    <nav>
      <ol>
        <ul><Link to="/">main</Link></ul>
        <ul><Link to="/game">game</Link></ul>
        <ul><Link to="/profile">profile</Link></ul>
        <ul><Link to="/community">community</Link></ul>
        <ul><Link to="/channel">channel</Link></ul>
        <ul>Logged in: {name}</ul>
        <ul><button onClick={handleLogout}>fake logout</button></ul>
      </ol>
    </nav>
  );
}

export default React.memo(Bar);
