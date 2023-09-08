import { Outlet } from 'react-router-dom';
import { HeaderTitle, Navlink } from './Header.styled';

const Header = () => {
  return (
    <>
      <HeaderTitle>
        <h1>Phonebook</h1>
        <nav>
          <Navlink to="/login">Login</Navlink>
          <Navlink to="registration">SingUp</Navlink>
        </nav>
      </HeaderTitle>
      <Outlet />
    </>
  );
};

export default Header;
