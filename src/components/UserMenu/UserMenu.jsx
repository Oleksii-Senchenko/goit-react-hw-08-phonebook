import React from 'react';
import { useSelector } from 'react-redux';

const UserMenu = () => {
  const name = useSelector(state => state.signUp);
  console.log(name);
  return (
    <>
      <h1>Salam </h1>
      <button>LogOut</button>
    </>
  );
};

export default UserMenu;
