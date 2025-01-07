import React, { useState } from 'react';
import YouTubeAudioPlayer from './YoutubeAudioPlayer';
import { useNavigate } from 'react-router-dom';
import { useScore } from './scoreContext';

const FifthPage = ({ correctAnswer, nextPage }) => {
  const [guess, setGuess] = useState('');
  const [result, setResult] = useState('');
  const [isCorrect, setCorrect] = useState(false);
  const navigate = useNavigate();
  const {incrementScore} = useScore();

  const handleGuessChange = (event) => {
    setGuess(event.target.value);
  };

  const checkGuess = () => {
    if (guess.toLowerCase() === correctAnswer.toLowerCase()) {
      setResult('Correct! 🎉');
      setCorrect(true);
      incrementScore();
    } else {
      setResult('Wrong! Try again. ❌');
      setCorrect(false);
    }
  };

  const handleNext = () => {
    navigate(nextPage);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Guess the Song</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <YouTubeAudioPlayer key={nextPage} videoId="7AQlI_4xvss" />
        <input
          type="text"
          value={guess}
          onChange={handleGuessChange}
          placeholder="Enter song title..."
          style={{ padding: '5px', margin: '25px', width: '20%', borderRadius: '15px', boxShadow: 'none', border: '1px solid #ccc' }}
        />
        <button onClick={checkGuess} style={{ padding: '5px 10px', borderRadius: '15px', boxShadow: 'none', cursor: 'pointer' }}>Submit</button>
        {isCorrect && (
          <button onClick={handleNext} style={{ padding: '5px 10px', borderRadius: '15px', boxShadow: 'none', cursor: 'pointer', marginTop: '10px' }}>Next</button>
        )}
      </div>
      <p>{result}</p>
    </div>
  );
};

export default FifthPage;


/*
<iframe width="560" height="315" src="https://www.youtube.com/embed/7AQlI_4xvss?si=omKrQM4OvqJs_1fM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>*/