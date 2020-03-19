import React from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import { postPoll } from '../api/polls';
import Loading from '../components/Loading';

const Input = styled.input`
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

const PollQuestionInput = styled(Input)`
  text-align: center;
  padding: 1em 0em;
`;

const PollOptionInput = styled(Input)`
  text-align: left;
  border-radius: 35px 0px 0px 35px;
  padding: 1em 1.5em;
`;

const PollOptionInputListItem = styled.li`
  margin: 1em 0em;
`;

function Add() {
  const history = useHistory();

  const [question, setQuestion] = React.useState('');
  const [answers, setAnswers] = React.useState(Array(3).fill(null));
  const [isLoading, setLoading] = React.useState(false);

  const numberOfOptions = 3;
  const options = [];
  let optionIndex;

  for (optionIndex = 1; optionIndex <= numberOfOptions; optionIndex++) {
    options.push({ optionIndex: optionIndex, option: 'Option ' + optionIndex });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    // const poll = {
    //   question: question,
    //   answerOne: answer[0],
    //   answerTwo: answer[1],
    //   answerThree: answer[2],
    //   votes: []
    // };

    const poll = {
      question: question,
      answers: answers,
      votes: []
    };

    const createdPoll = await postPoll(poll);
    history.push(`polls/${createdPoll.id}/vote/`);
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <PollQuestionInput
          type="text"
          placeholder="What do you want to know?"
          value={question}
          onChange={event => {
            setQuestion(event.target.value);
          }}
        />
        <ol>
          {options.map(function(option, optionIndex) {
            return (
              <PollOptionInputListItem>
                <PollOptionInput
                  key={option.optionIndex}
                  type="text"
                  placeholder={`Option ${optionIndex}`}
                  value={answers[optionIndex]}
                  onChange={event => {
                    answers[optionIndex] = event.target.value;
                    setAnswers(answers);
                  }}
                />
              </PollOptionInputListItem>
            );
          })}
        </ol>
        <Button disabled={isLoading}>Create Poll</Button>
      </form>
    </Container>
  );
}

export default Add;
