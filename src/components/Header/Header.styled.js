

import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: #333;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Navlink = styled(NavLink)`
  text-decoration: none;
  color: white;
  margin-right: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;
