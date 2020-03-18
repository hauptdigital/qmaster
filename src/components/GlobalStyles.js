import React from 'react';
import { Global, css } from '@emotion/core';

function GlobalStyles() {
  return (
    <>
      <Global
        styles={theme => css`
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
