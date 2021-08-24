import React from 'react';
import { useUserContext } from '../hooks/useContext';

export default function ProfilePage() {
  const {name, img} = useUserContext();
  return (
    <div>
		  <h3>Hi, {name}</h3>
      <img alt={name} src={img} />
    </div>
  );
}

