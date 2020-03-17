import React from 'react';
import styled from '@emotion/styled';

export const Input = styled.input`
  background-color: #3e3c41;
  color: white;
  border: none;
  outline: none;
  width: 100%;
  font-size: 1.125em;
`;

export const PollQuestionInput = styled(Input)`
  text-align: center;
  padding: 1em 0em;
`;

export const PollOptionInput = styled(Input)`
  text-align: left;
  border-radius: 35px 0px 0px 35px;
  padding: 1em 1.5em;
`;

export function PollOptionVoteInputLabel({ children, ...other }) {
  return <label {...other}>{children}</label>;
}

export function PollOptionVoteInput(props) {
  return <input {...props} />;
}

export default Input;
