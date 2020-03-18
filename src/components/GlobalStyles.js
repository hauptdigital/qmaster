import React from 'react';
import { Global, css } from '@emotion/core';

function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *:after,
        *:before {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: linear-gradient(
            45deg,
            #405de6,
            #5851db,
            #833ab4,
            #c13584,
            #e1306c,
            #fd1d1d
          );
          height: 100vh;
          color: white;
          font-family: Arial, Helvetica, sans-serif;
        }

        .main {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}
    />
  );
}

export default GlobalStyles;
