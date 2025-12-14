import React from 'react';
import { useNavigate } from 'react-router-dom';

function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-light-mint via-white to-mint flex flex-col items-center justify-center p-6">
      <div className="text-center space-y-8 max-w-2xl">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-calm-green rounded-full flex items-center justify-center shadow-lg">
            <span className="text-5xl">🌿</span>
          </div>
        </div>

        {/* Welcome Text */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          Welcome to a safe space
          <br />
          <span className="text-calm-green">for your mind</span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto">
          Take a moment for yourself. Express your feelings, explore your thoughts, 
          and find peace in a supportive environment.
        </p>

        {/* Get Started Button */}
        <button
          onClick={() => navigate('/mood-selection')}
          className="btn-primary text-lg"
        >
          Get Started
        </button>

        <p className="text-sm text-gray-500 mt-6">
          Your mental health matters 💚
        </p>
      </div>
    </div>
  );
}

export default WelcomePage;
