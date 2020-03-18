import React from 'react';
import { Global, css } from '@emotion/core';

const theme = {
  colors: {
    primary: 'white',
    secondary: 'rgba(0, 0, 0, 0.5)',
    secondaryHover: 'rgba(0, 0, 0, 0.25)',
    gradient:
      'linear-gradient(45deg,#405de6,#5851db,#833ab4,#c13584,#e1306c,#fd1d1d)'
  }
};

function GlobalStyles() {
  return (
    <>
      <Global
        styles={css`
          *,
          *:after,
          *:before {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            background: ${theme.colors.gradient};
            height: 100vh;
            font-family: Arial, Helvetica, sans-serif;
          }

          .main {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      />
    </>
  );
}

export default GlobalStyles;
