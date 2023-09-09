import React from 'react';
import { useSelector } from 'react-redux';
import ContactForm from 'components/ContactForm/ContactForm';
import Contactlist from 'components/Contactlist/Contactlist';
import Filter from 'components/Filter/Filter';

const ContactsPage = () => {
  const login = useSelector(state => state.signUp.isLoggedIn);
  return (
    <div>
      {login ? (
        <>
          <ContactForm />
          <Filter />
          <Contactlist />
        </>
      ) : (
        <h1>
          Hey there! Welcome to my phonebook. Here you can write and save your
          friends and business contacts.
        </h1>
      )}
    </div> 
  );
};

export default ContactsPage;
