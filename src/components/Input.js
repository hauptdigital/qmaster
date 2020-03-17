import styled from '@emotion/styled';

const Input = styled.input`
  background-color: #3e3c41;
  color: white;
  border: none;
  outline: none;
  width: 100%;
  font-size: 1.125em;
`;

const PollQuestionInput = styled(Input)`
  text-align: center;
  padding: 1em 0em;
`;

const PollOptionInput = styled(Input)`
  text-align: left;
  border-radius: 35px 0px 0px 35px;
  padding: 1em 1.5em;
`;

function Input(props) {
  return <input {...props} />;
}

function PollQuestionInput(props) {
  return <input {...props} />;
}

function PollOptionInput(props) {
  return <input {...props} />;
}

export default PollQuestionInput;
export default PollOptionInput;
