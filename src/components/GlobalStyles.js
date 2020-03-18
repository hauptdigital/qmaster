import React from 'react';
import { Global, css } from '@emotion/core';
import dark from '../themes/dark';

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
            background: ${dark.colors.gradient};
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
