import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.signUp.user.user.name);
  console.log(name);
  return (
    <>
      <h1>Salam {name} </h1>
      <button onClick={() => dispatch(logOut())}>LogOut</button>
    </>
  );
};

export default UserMenu;
