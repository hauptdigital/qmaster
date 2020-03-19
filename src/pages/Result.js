import React from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import Container from '../components/Container';
import { getPoll } from '../api/polls';
import Loading from '../components/Loading';

const ResultHeader = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.primary};
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
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.primary};
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
  background: ${props => props.theme.colors.gradient};
  border-radius: 0px 100px 100px 0px;
  color: white;
  border: none;
  outline: none;
  width: ${props => props.percentage * 0.6}%;
  font-size: 1em;
  border: 1px solid ${props => props.theme.colors.secondary};
  align-items: center;
  transition: 2s;
  ${props =>
    props.percentage > 50 ? 'box-shadow: 0px 0px 20px 0px rgb(0, 0, 0);' : ''};
`;

function Result() {
  const { pollId } = useParams();
  const [poll, setPoll] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const percentages = [];

  React.useEffect(() => {
    setIsLoading(true);
    getPoll(pollId).then(poll => {
      setPoll(poll);
      setIsLoading(false);
    });
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

  if (isLoading) {
    return <Loading />;
  }

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
