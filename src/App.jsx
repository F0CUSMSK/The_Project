import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageLoader from './components/PageLoader';
import MainLayout from './layouts/MainLayouts';
import Home from './pages/Home';
import Groupes from './pages/Groupes';
import Events from './pages/Events';
import AccountPreferences from './pages/AccountAndPreferences';
import NotFound from './pages/NotFound';

const WelcomePage = lazy(() => import('./pages/WelcomePage'));
const MoodSelection = lazy(() => import('./pages/MoodSelection'));
const MoodQuiz = lazy(() => import('./pages/MoodQuiz'));
const HobbiesSelection = lazy(() => import('./pages/HobbiesSelection'));
const FreeWriting = lazy(() => import('./pages/FreeWriting'));
const AuthPage = lazy(() => import('./pages/AuthPage'));
const FinalWelcome = lazy(() => import('./pages/FinalWelcome'));

function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
       <MainLayout>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/account" element={<AccountPreferences />} />
          <Route path="/groups" element={<Groupes />} />
          <Route path="/mood-selection" element={<MoodSelection />} />
          <Route path="/quiz/:mood" element={<MoodQuiz />} />
          <Route path="/hobbies" element={<HobbiesSelection />} />
          <Route path="/write" element={<FreeWriting />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/final-welcome" element={<FinalWelcome />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </MainLayout>
      </Suspense>
    </Router>
  );
}

export default App;

