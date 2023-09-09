import { Outlet } from 'react-router-dom';
import { HeaderTitle, Navlink } from './Header.styled';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';

const Header = () => {
  const login = useSelector(state => state.signUp.isLoggedIn);
  return (
    <header>
      <HeaderTitle>
      <h1>Phonebook</h1>
        {!login ? (
          <nav>
            <Navlink to="/login">Login</Navlink>
            <Navlink to="/registration">SignUp</Navlink>
          </nav>
        ) : (
          <UserMenu />
        )}
      </HeaderTitle>
    </header>
  );
};

export default Header;