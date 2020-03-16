import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';

function Vote() {
  return (
    <Container>
      Vote <Link to="/result">Results</Link>
    </Container>
  );
}

export default Vote;
