import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FreeWriting() {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleTextChange = (e) => {
    const value = e.target.value;
    setText(value);
    const words = value.trim().split(/\s+/).filter(word => word.length > 0);
    setWordCount(words.length);
  };

  const handleContinue = () => {
    navigate('/auth');
  };

  const handleSkip = () => {
    navigate('/auth');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-light-mint to-white p-6">
      <div className="max-w-4xl mx-auto py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Feel Free to Write
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This is your safe space. Write anything that comes to mind. 
            Your thoughts, feelings, dreams, or worries. No judgment, just you.
          </p>
        </div>

        {/* Word Count */}
        <div className="text-center mb-6">
          <span className="text-sm text-gray-500">
            {wordCount} {wordCount === 1 ? 'word' : 'words'}
          </span>
        </div>

        {/* Writing Area */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8">
          <textarea
            value={text}
            onChange={handleTextChange}
            placeholder="You can write anything here. This is your safe space. Express yourself freely..."
            className="w-full h-96 p-6 text-lg text-gray-700 border-2 border-gray-200 rounded-2xl focus:border-calm-green focus:outline-none resize-none transition-colors"
            style={{ lineHeight: '1.8' }}
          />
        </div>

        {/* Encouragement */}
        <div className="bg-light-mint rounded-2xl p-6 mb-8 text-center">
          <p className="text-gray-700 italic">
            ✨ "Writing is a form of therapy; sometimes I wonder how all those who do not write, 
            compose, or paint can manage to escape the madness." - Graham Greene
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleContinue}
            className="btn-primary w-full sm:w-auto"
          >
            Save & Continue
          </button>
          <button
            onClick={handleSkip}
            className="btn-secondary w-full sm:w-auto"
          >
            Skip for Now
          </button>
        </div>

        {/* Privacy Note */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            🔒 Your writing is private and secure
          </p>
        </div>
      </div>
    </div>
  );
}

export default FreeWriting;
