import React from 'react';
import { useScore } from './scoreContext';

const ScorePage = () => {
  const { score } = useScore();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Your Score</h1>
      <p>Total Points: {score}</p>
    </div>
  );
};

export default ScorePage;

