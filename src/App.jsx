import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SongGuessingGame from './SongGuessingGame';
import SecondPage from './secondPage'; 
import ThirdPage from './thirdPage';
import FourthPage from './fourthPage';
import FifthPage from './fifthPage';
import ScorePage from './scorePage';
import { ScoreProvider } from './scoreContext';
import './App.css';

const App = () => {
  return (
    <div style={{ backgroundColor: '#FFB6C1', minHeight: '100vh',width:'100%' }}>
    <ScoreProvider>
     
    <Router>
      <Routes>
        <Route path="/" element={<SongGuessingGame correctAnswer="Mann Mera" nextPage="/second-page" />} />
        <Route path="/second-page" element={<SecondPage correctAnswer="Khairiyat" nextPage="/third-page" />} />
        <Route path="/third-page" element={<ThirdPage correctAnswer="Nazm Nazm" nextPage="/fourth-page"/>} />
        <Route path="/fourth-page" element={<FourthPage correctAnswer="Chunari Chunari" nextPage="/fifth-page"/>} />
        <Route path="/fifth-page" element={<FifthPage correctAnswer="Tumse Milkar Dilka Jo Haal" nextPage="/score-page"/>} />
        <Route path="/score-page" element={<ScorePage/>}/>

      </Routes>
    </Router>
    </ScoreProvider>
    </div>
  );
};

export default App;
