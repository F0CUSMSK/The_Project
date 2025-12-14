import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import MoodSelection from './pages/MoodSelection';
import MoodQuiz from './pages/MoodQuiz';
import HobbiesSelection from './pages/HobbiesSelection';
import FreeWriting from './pages/FreeWriting';
import AuthPage from './pages/AuthPage';
import FinalWelcome from './pages/FinalWelcome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/mood-selection" element={<MoodSelection />} />
        <Route path="/quiz/:mood" element={<MoodQuiz />} />
        <Route path="/hobbies" element={<HobbiesSelection />} />
        <Route path="/write" element={<FreeWriting />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/final-welcome" element={<FinalWelcome />} />
      </Routes>
    </Router>
  );
}

export default App;

