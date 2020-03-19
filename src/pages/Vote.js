import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import Button from '../components/Button';
import Container from '../components/Container';
import { patchPoll } from '../api/polls';
import useGetPoll from '../hooks/useGetPoll';
import Loading from '../components/Loading';

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

function Vote() {
  const { pollId } = useParams();
  const history = useHistory();

  const [answer, setAnswer] = React.useState('');

  const { poll, isLoading, errorMessage } = useGetPoll(pollId);

  async function handleSubmit(event) {
    event.preventDefault();
    poll.votes.push(answer);
    console.log(poll);
    patchPoll(pollId, poll);
    history.push(`/polls/${poll.id}`);
  }

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <VoteHeader>{poll?.question}</VoteHeader>
        <VoteInputList>
          {poll?.answers.map(function(answerOption, answerIndex) {
            return (
              <VoteInputListItem>
                <VoteInputLabel>
                  {console.log(poll)}
                  {answerOption}
                  <VoteInput
                    type="radio"
                    name="vote"
                    value={answerOption}
                    checked={answer === answerOption}
                    onChange={event => setAnswer(event.target.value)}
                  />
                  <VoteInputCheck
                    checked={answer === answerOption}
                  ></VoteInputCheck>
                </VoteInputLabel>
              </VoteInputListItem>
            );
          })}
        </VoteInputList>
        <Button disabled={isLoading}>Submit vote</Button>
      </form>
    </Container>
  );
}

export default Vote;
