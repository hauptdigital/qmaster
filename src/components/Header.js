import React from 'react';
import styled from '@emotion/styled';
import Logo from './Logo.js';
import SwitchColor from './invert_colors-24px.svg';
import LogoImg from './logo.png';

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: white;
`;

const SwitchThemeImg = styled.img`
  background: ${props => props.theme.colors.secondaryHover};
  border-radius: 50px;
  padding: 10px;
  position: absolute;
  right: 1em;
  cursor: pointer;
`;

function appHeader({ onSwitchThemeImgClick }) {
  return (
    <Header>
      <Logo className="logo" src={LogoImg} alt="Q-Master logo" />
      <SwitchThemeImg onClick={onSwitchThemeImgClick} src={SwitchColor} />
    </Header>
  );
}

export default appHeader;
