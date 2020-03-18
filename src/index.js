import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Global, css } from '@emotion/core';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
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
    <App />
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
