import React from 'react';
import { Global, css } from '@emotion/core';
import dark from '../themes/dark';
import light from '../themes/light';

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
            background: ${light.colors.gradient};
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
