import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import RegistrationForm from 'Pages/SignUpForm/SingUp';
import LogInForm from 'Pages/LogInForm/LogIn';
import ContactsPage from 'Pages/ContactsPage/ContactsPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUser } from 'redux/auth/operationsAuth';

export function App() {

const dispatch = useDispatch()
useEffect(()=>{
  dispatch(getCurrentUser())
})

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<LogInForm />} />
        <Route path="registration" element={<RegistrationForm />} />
        <Route path="phonebooklist" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
}
// import { getContacts } from 'redux/operations';
// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './Contactlist/Contactlist';
// import Filter from './Filter/Filter';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import Loader from './Loader/Loader';

// export function App() {
//   const { isLoading, error } = useSelector(state => state.contacts);
//   const dispath = useDispatch();

//   useEffect(() => {
//     dispath(getContacts());
//   }, [dispath]);
//   return (
//     <>
//       {isLoading && <Loader />}
//       {!error ? (
//         <>
//           <ContactForm />
//           <Filter />
//           <ContactList />
//         </>
//       ) : (
//         <p>{error}</p>
//       )}
//     </>
//   );
// }
