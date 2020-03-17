import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';

function Result() {
  return (
    <Container>
      Result <Link to="/">Start new question</Link>
    </Container>
  );
}

export default Result;
