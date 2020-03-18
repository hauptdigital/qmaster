import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import Button from '../components/Button';
import Container from '../components/Container';

const Input = styled.input`
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.primary};
  border: none;
  outline: none;
  width: 100%;
  font-size: 1.125em;
`;
const VoteHeader = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.primary};
  border: none;
  outline: none;
  padding: 1em;
  text-align: center;
  width: 100%;
  font-size: 1.125em;
`;
const VoteInput = styled(Input)`
  display: none;
`;

const VoteInputCheck = styled.div`
  background: ${props =>
    props.checked ? props.theme.colors.primary : 'transparent'};
  width: ${props => (props.checked ? '18px' : '0px')};
  height: ${props => (props.checked ? '18px' : '0px')};
  border-radius: 100px;
  transition: 0.5s;
  align-self: center;
`;

const VoteInputLabel = styled.label`
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  padding: 1em;
  margin: 1em 0em;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.primary};
  border: none;
  outline: none;
  width: 100%;
  font-size: 1.125em;
  &:hover {
    background-color: ${props => props.theme.colors.secondaryHover};
  }
`;

const VoteInputList = styled.ul`
  padding-inline-start: 0px;
`;

const VoteInputListItem = styled.li`
  list-style-type: none;
`;

const POLLS_API_URL =
  process.env.REACT_APP_POLLS_API ||
  'https://my-json-server.typicode.com/hauptdigital/qmaster/polls';

function Vote() {
  const { pollId } = useParams();
  const history = useHistory();
  const [poll, setPoll] = React.useState(null);
  const [answer, setAnswer] = React.useState(null);

  React.useEffect(() => {
    async function getPoll() {
      const response = await fetch(`${POLLS_API_URL}/${pollId}`);
      const poll = await response.json();
      setPoll(poll);
      console.log(poll);
    }

    getPoll();
  }, [pollId]);

  async function handleSubmit(event) {
    event.preventDefault();
    const newPoll = { ...poll };
    newPoll.votes.push(answer);
    console.log(newPoll);
    await fetch(`${POLLS_API_URL}/${pollId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPoll)
    });
    history.push(`/polls/${poll.id}`);
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <VoteHeader>{poll?.question}</VoteHeader>
        <VoteInputList>
          <VoteInputListItem>
            <VoteInputLabel>
              {poll?.answerOne}
              <VoteInput
                type="radio"
                name="vote"
                value="answerOne"
                checked={answer === 'answerOne'}
                onChange={event => setAnswer(event.target.value)}
              />
              <VoteInputCheck checked={answer === 'answerOne'}></VoteInputCheck>
            </VoteInputLabel>
          </VoteInputListItem>
          <VoteInputListItem>
            <VoteInputLabel>
              {poll?.answerTwo}
              <VoteInput
                type="radio"
                name="vote"
                value="answerTwo"
                checked={answer === 'answerTwo'}
                onChange={event => setAnswer(event.target.value)}
              />
              <VoteInputCheck checked={answer === 'answerTwo'}></VoteInputCheck>
            </VoteInputLabel>
          </VoteInputListItem>
          <VoteInputListItem>
            <VoteInputLabel>
              {poll?.answerThree}
              <VoteInput
                type="radio"
                name="vote"
                value="answerThree"
                checked={answer === 'answerThree'}
                onChange={event => setAnswer(event.target.value)}
              />
              <VoteInputCheck
                checked={answer === 'answerThree'}
              ></VoteInputCheck>
            </VoteInputLabel>
          </VoteInputListItem>
        </VoteInputList>
        <Button>Submit vote</Button>
      </form>
    </Container>
  );
}

export default Vote;
