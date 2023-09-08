import { Navlink } from './Header.styled';

const Header = () => {
  return (
    <Header>
      <h1>Your Website Name</h1>
      <nav>
        <Navlink to="/login">Login</Navlink>
        <Navlink to="registration">Register</Navlink>
      </nav>
    </Header>
  );
};

export default Header;
