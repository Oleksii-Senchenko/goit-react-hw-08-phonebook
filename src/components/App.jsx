import { Route, Routes } from 'react-router-dom';

import { Suspense, lazy } from 'react';

import Layout from './Layout/Layout';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUser } from 'redux/auth/operationsAuth';
import PublickRoute from './PublickRoute';
import PrivateRoute from 'components/PrivateRoute';
import Loader from './Loader/Loader';
// import RegistrationForm from 'Pages/SignUpForm/SingUp';
// import LogInForm from 'Pages/LogInForm/LogIn';
// import ContactsPage from 'Pages/ContactsPage/ContactsPage';
const RegistrationForm = lazy(() => import('Pages/SignUpForm/SingUp'));
const LogInForm = lazy(() => import('Pages/LogInForm/LogIn'));
const ContactsPage = lazy(() => import('Pages/ContactsPage/ContactsPage'));

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  });

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="login"
            element={
              <PublickRoute component={LogInForm} redirectTo="/phonebooklist" />
            }
          />
          <Route
            path="registration"
            element={
              <PublickRoute
                component={RegistrationForm}
                redirectTo="phonebooklist"
              />
            }
          />

          <Route
            path="phonebooklist"
            element={
              <PrivateRoute component={ContactsPage} redirectTo="/login" />
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
}
