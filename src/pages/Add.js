import React from 'react';
import Container from '../components/Container';
import './Add.css';
import Button from '../components/Button';
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

const PollOptionInputListItem = styled.li`
  margin: 1em 0em;
`;

function Add() {
  const [question, setQuestion] = React.useState('');
  const [answerOne, setAnswerOne] = React.useState('');
  const [answerTwo, setAnswerTwo] = React.useState('');
  const [answerThree, setAnswerThree] = React.useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const poll = {
      question: question,
      answerOne: answerOne,
      answerTwo: answerTwo,
      answerThree: answerThree
    };

    const response = await fetch('http://localhost:4000/polls', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(poll)
    });
    const createdPoll = await response.json();
    console.log(createdPoll);
    alert(`Created poll with the id ${createdPoll.id}`);
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
          <PollOptionInputListItem>
            <PollOptionInput
              type="text"
              placeholder="Option 1"
              value={answerOne}
              onChange={event => {
                setAnswerOne(event.target.value);
              }}
            />
          </PollOptionInputListItem>
          <PollOptionInputListItem>
            <PollOptionInput
              type="text"
              placeholder="Option 2"
              value={answerTwo}
              onChange={event => {
                setAnswerTwo(event.target.value);
              }}
            />
          </PollOptionInputListItem>
          <PollOptionInputListItem>
            <PollOptionInput
              type="text"
              placeholder="Option 3"
              value={answerThree}
              onChange={event => {
                setAnswerThree(event.target.value);
              }}
            />
          </PollOptionInputListItem>
        </ol>
        <Button>Create Poll</Button>
      </form>
    </Container>
  );
}

export default Add;
