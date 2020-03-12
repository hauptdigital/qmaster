import React from 'react';
import Card from '../components/Card';
import './Add.css';
import Button from '../components/Button';

function Add() {
  const [question, setQuestion] = React.useState('');
  const [answerOne, setAnswerOne] = React.useState('');
  const [answerTwo, setAnswerTwo] = React.useState('');
  const [answerThree, setAnswerThree] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const poll = {
      question: question,
      answerOne: answerOne,
      answerTwo: answerTwo,
      answerThree: answerThree
    };

    alert(JSON.stringify(poll));
  }

  return (
    <Card>
      <form className="add-form" onSubmit={handleSubmit}>
        <input
          className="add-form__input-question"
          type="text"
          placeholder="What do you want to know?"
          value={question}
          onChange={event => {
            setQuestion(event.target.value);
          }}
        />
        <ol>
          <li className="add-form__inputListItem">
            <input
              className="add-form__input-answer"
              type="text"
              placeholder="Option 1"
              value={answerOne}
              onChange={event => {
                setAnswerOne(event.target.value);
              }}
            />
          </li>
          <li className="add-form__inputListItem">
            <input
              className="add-form__input-answer"
              type="text"
              placeholder="Option 2"
              value={answerTwo}
              onChange={event => {
                setAnswerTwo(event.target.value);
              }}
            />
          </li>
          <li className="add-form__inputListItem">
            <input
              className="add-form__input-answer"
              type="text"
              placeholder="Option 3"
              value={answerThree}
              onChange={event => {
                setAnswerThree(event.target.value);
              }}
            />
          </li>
        </ol>
        <Button>Create Poll</Button>
      </form>
    </Card>
  );
}

export default Add;
