import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HobbiesSelection() {
  const navigate = useNavigate();
  const [selectedHobbies, setSelectedHobbies] = useState([]);

  const hobbies = [
    { id: 'music', emoji: '🎵', label: 'Music', color: 'bg-purple-50' },
    { id: 'reading', emoji: '📚', label: 'Reading', color: 'bg-blue-50' },
    { id: 'walking', emoji: '🚶', label: 'Walking', color: 'bg-green-50' },
    { id: 'drawing', emoji: '🎨', label: 'Drawing', color: 'bg-pink-50' },
    { id: 'gaming', emoji: '🎮', label: 'Gaming', color: 'bg-indigo-50' },
    { id: 'yoga', emoji: '🧘', label: 'Yoga', color: 'bg-teal-50' },
    { id: 'cooking', emoji: '🍳', label: 'Cooking', color: 'bg-orange-50' },
    { id: 'writing', emoji: '✍️', label: 'Writing', color: 'bg-yellow-50' },
    { id: 'photography', emoji: '📸', label: 'Photography', color: 'bg-cyan-50' },
    { id: 'gardening', emoji: '🌱', label: 'Gardening', color: 'bg-lime-50' },
    { id: 'dancing', emoji: '💃', label: 'Dancing', color: 'bg-fuchsia-50' },
    { id: 'meditation', emoji: '🧘‍♀️', label: 'Meditation', color: 'bg-violet-50' },
  ];

  const toggleHobby = (hobbyId) => {
    if (selectedHobbies.includes(hobbyId)) {
      setSelectedHobbies(selectedHobbies.filter(id => id !== hobbyId));
    } else {
      setSelectedHobbies([...selectedHobbies, hobbyId]);
    }
  };

  const handleContinue = () => {
    if (selectedHobbies.length > 0) {
      navigate('/write');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-light-mint to-white p-6">
      <div className="max-w-5xl mx-auto py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What brings you joy?
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Select your hobbies and interests
          </p>
          <p className="text-sm text-gray-500">
            (You can select multiple)
          </p>
        </div>

        {/* Selected Count */}
        {selectedHobbies.length > 0 && (
          <div className="text-center mb-6">
            <span className="inline-block bg-calm-green text-white px-6 py-2 rounded-full font-semibold">
              {selectedHobbies.length} selected ✨
            </span>
          </div>
        )}

        {/* Hobbies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {hobbies.map((hobby) => (
            <div
              key={hobby.id}
              onClick={() => toggleHobby(hobby.id)}
              className={`hobby-card ${
                selectedHobbies.includes(hobby.id) ? 'hobby-card-selected' : ''
              } ${hobby.color}`}
            >
              <div className="text-center">
                <div className="text-5xl mb-3">{hobby.emoji}</div>
                <p className="text-lg font-semibold text-gray-700">{hobby.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Continue Button */}
        <div className="text-center">
          <button
            onClick={handleContinue}
            disabled={selectedHobbies.length === 0}
            className={`btn-primary ${
              selectedHobbies.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Continue
          </button>
          {selectedHobbies.length === 0 && (
            <p className="text-sm text-gray-500 mt-4">
              Please select at least one hobby to continue
            </p>
          )}
        </div>

        {/* Motivational Text */}
        <div className="text-center mt-12">
          <p className="text-gray-500 italic">
            "Hobbies are the bridge between who you are and who you want to be."
          </p>
        </div>
      </div>
    </div>
  );
}

export default HobbiesSelection;
