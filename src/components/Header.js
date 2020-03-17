import React from 'react';
import styled from '@emotion/styled';
import Logo from './Logo.js';
import LogoImg from './logo.png';

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: white;
`;

function appHeader() {
  return (
    <Header>
      <Logo className="logo" src={LogoImg} alt="Q-Master logo" />
    </Header>
  );
}

export default appHeader;
