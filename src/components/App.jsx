import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import RegistrationForm from 'Pages/SignUpForm/SingUp';
import LogInForm from 'Pages/LogInForm/LogIn';
import ContactsPage from 'Pages/ContactsPage/ContactsPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUser } from 'redux/auth/operationsAuth';
import PublickRoute from './PublickRoute';
import PrivateRoute from 'PrivateRoute';

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  });

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="login"
          element={
            <PublickRoute component={LogInForm} redirectTo="phonebooklist" />
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

        
        <Route path="phonebooklist"
         element={
         <PrivateRoute component={ContactsPage} redirectTo='login'/>} />
      </Route>
    </Routes>
  );
}
