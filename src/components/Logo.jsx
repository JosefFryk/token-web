import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// logo
import logo from '../images/default.svg';

function Logo() {
  return (
    <StyledLogo>
      <Link to='/'>
        <img src={logo} alt='Logo' />
        <h4>Addoken</h4>
      </Link>
    </StyledLogo>
  );
}

const StyledLogo = styled.div`
  display: block;
  padding-top: 10px;
 a  {
    display: flex;
    align-items: center;
    text-decoration: none;
    img {
      background: white;
      width: 30px;
      border-radius: 5px;
      padding: 2px;
      margin-right: 10px;
    }
    h4 {
      color: ${({ theme }) => theme.colors.white};
    }
    &:hover {
      opacity: 0.8;
    }
  }
`;

export default Logo;