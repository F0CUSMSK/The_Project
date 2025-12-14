import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MoodSelection() {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState(null);

  const moods = [
    { id: 'happy', emoji: '😊', label: 'Happy', color: 'bg-yellow-100' },
    { id: 'sad', emoji: '😢', label: 'Sad', color: 'bg-blue-100' },
    { id: 'anxious', emoji: '😰', label: 'Anxious', color: 'bg-purple-100' },
    { id: 'angry', emoji: '😠', label: 'Angry', color: 'bg-red-100' },
    { id: 'tired', emoji: '😴', label: 'Tired', color: 'bg-gray-100' },
    { id: 'stressed', emoji: '😫', label: 'Stressed', color: 'bg-orange-100' },
    { id: 'lonely', emoji: '😔', label: 'Lonely', color: 'bg-indigo-100' },
    { id: 'calm', emoji: '😌', label: 'Calm', color: 'bg-green-100' },
  ];

  const handleMoodSelect = (moodId) => {
    setSelectedMood(moodId);
    // Navigate after a short delay to show selection
    setTimeout(() => {
      navigate(`/quiz/${moodId}`);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-light-mint to-white p-6">
      <div className="max-w-4xl mx-auto py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            How are you feeling today?
          </h1>
          <p className="text-lg text-gray-600">
            Select the emotion that best describes your current state
          </p>
        </div>

        {/* Mood Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {moods.map((mood) => (
            <div
              key={mood.id}
              onClick={() => handleMoodSelect(mood.id)}
              className={`mood-card ${
                selectedMood === mood.id ? 'mood-card-selected' : ''
              } ${mood.color}`}
            >
              <div className="text-center">
                <div className="text-6xl mb-3">{mood.emoji}</div>
                <p className="text-lg font-semibold text-gray-700">{mood.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Encouragement Text */}
        <div className="text-center mt-12">
          <p className="text-gray-500 italic">
            "It's okay to feel what you're feeling. Let's talk about it."
          </p>
        </div>
      </div>
    </div>
  );
}

export default MoodSelection;
