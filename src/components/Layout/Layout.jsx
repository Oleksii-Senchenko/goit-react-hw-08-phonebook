import Header from 'components/Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';
// import {  selectContacts } from 'redux/contacts/contactsSlice';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
