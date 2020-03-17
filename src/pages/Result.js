import React from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import Container from '../components/Container';

const ResultHeader = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  outline: none;
  padding: 1em;
  text-align: center;
  width: 100%;
  font-size: 1em;
`;

const PollResult = styled.div`
  display: flex;
`;

const PollResultTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em;
  margin: 1em 0em;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  outline: none;
  width: 40%;
  font-size: 1em;
`;

const PollResultBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em 0.25em;
  margin: 1em 0em;
  background: linear-gradient(
    45deg,
    #405de6,
    #5851db,
    #833ab4,
    #c13584,
    #e1306c,
    #fd1d1d
  );
  border-radius: 0px 100px 100px 0px;
  color: white;
  border: none;
  outline: none;
  width: ${props => props.percentage * 0.6}%;
  font-size: 1em;
  border: 1px solid rgba(255, 255, 255, 0.5);
  align-items: center;
  transition: 2s;
  ${props =>
    props.percentage > 50 ? 'box-shadow: 0px 0px 20px 0px rgb(0, 0, 0);' : ''};
`;

const POLLS_API_URL =
  process.env.REACT_APP_POLLS_API ||
  'https://my-json-server.typicode.com/hauptdigital/qmaster/polls';

function Result() {
  const { pollId } = useParams();
  const [poll, setPoll] = React.useState(null);
  const percentages = [];

  React.useEffect(() => {
    async function getPoll() {
      const response = await fetch(`${POLLS_API_URL}/${pollId}`);
      const poll = await response.json();
      setPoll(poll);
    }
    getPoll();
  }, [pollId]);

  const sum = poll?.votes.length;
  const sumAnswerOne = poll?.votes.filter(
    answerOption => answerOption === 'answerOne'
  ).length;
  percentages[0] = Math.round((sumAnswerOne / sum) * 100);
  const sumAnswerTwo = poll?.votes.filter(
    answerOption => answerOption === 'answerTwo'
  ).length;
  percentages[1] = Math.round((sumAnswerTwo / sum) * 100);
  const sumAnswerThree = poll?.votes.filter(
    answerOption => answerOption === 'answerThree'
  ).length;
  percentages[2] = Math.round((sumAnswerThree / sum) * 100);

  console.log(percentages);

  return (
    <Container>
      <ResultHeader>{poll?.question}</ResultHeader>
      <PollResult>
        <PollResultTitle>{poll?.answerOne}</PollResultTitle>
        <PollResultBar percentage={percentages[0]}>
          {percentages[0]}%
        </PollResultBar>
      </PollResult>
      <PollResult>
        <PollResultTitle>{poll?.answerTwo}</PollResultTitle>
        <PollResultBar percentage={percentages[1]}>
          {percentages[1]}%
        </PollResultBar>
      </PollResult>
      <PollResult>
        <PollResultTitle>{poll?.answerThree}</PollResultTitle>
        <PollResultBar percentage={percentages[2]}>
          {percentages[2]}%
        </PollResultBar>
      </PollResult>
    </Container>
  );
}

export default Result;
