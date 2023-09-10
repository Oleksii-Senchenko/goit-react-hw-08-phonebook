import Header from 'components/Header/Header';
import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { nameSelector } from 'redux/auth/singUpSlice';
// import {  selectContacts } from 'redux/contacts/contactsSlice';

const Layout = () => {
  const name = useSelector(state => state.auth.user.name);
  console.log(name);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
