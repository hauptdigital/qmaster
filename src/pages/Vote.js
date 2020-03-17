import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import Button from '../components/Button';
import Container from '../components/Container';

const Input = styled.input`
  background-color: #3e3c41;
  color: white;
  border: none;
  outline: none;
  width: 100%;
  font-size: 1.125em;
`;
const VoteHeader = styled.div`
  background-color: #3e3c41;
  color: white;
  border: none;
  outline: none;
  width: 100%;
  font-size: 1.125em;
`;
const VoteInput = styled(Input)`
  text-align: center;
  padding: 1em 0em;
`;

const VoteInputCheck = styled.div`
  background: ${props => (props.checked ? 'white' : 'transparent')};
  }
  width: 18px;
  height: 18px;
  border-radius: 35px;
`;

const VoteInputLabel = styled.label`
  cursor: pointer;
  margin: 0em 0em;
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
  console.log(history);
  const [poll, setPoll] = React.useState(null);
  const [answer, setAnswer] = React.useState(null);

  React.useEffect(() => {
    async function getPoll() {
      const response = await fetch(`${POLLS_API_URL}/${pollId}`);
      const poll = await response.json();
      setPoll(poll);
    }

    getPoll();
  }, [pollId]);

  async function handleSubmit(event) {
    event.preventDefault();

    const newPoll = { ...poll };
    newPoll.votes.push(answer);

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
