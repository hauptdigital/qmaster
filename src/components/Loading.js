import React from 'react';
import styled from '@emotion/styled';
import loadingSVG from './loading.svg';

const LoadingDiv = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Loading() {
  return (
    <LoadingDiv>
      <img src={loadingSVG} alt="Loading..." />
    </LoadingDiv>
  );
}

export default Loading;
