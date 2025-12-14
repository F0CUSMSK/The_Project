import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

// Generate confetti data outside component to avoid Math.random in render
const generateConfetti = () => {
  return [...Array(50)].map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 20,
    delay: Math.random() * 2,
    duration: 2 + Math.random() * 3,
    emoji: ['🌿', '💚', '✨', '🌸', '💫'][Math.floor(Math.random() * 5)]
  }));
};

function FinalWelcome() {
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(true);

  // Generate confetti positions once
  const confettiItems = useMemo(() => generateConfetti(), []);

  useEffect(() => {
    // Hide confetti after animation
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleGetStarted = () => {
    // In a real app, this would navigate to the main dashboard
    navigate('/mood-selection');
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {confettiItems.map((item) => (
            <div
              key={item.id}
              className="absolute animate-fall"
              style={{
                left: `${item.left}%`,
                top: `-${item.top}%`,
                animationDelay: `${item.delay}s`,
                animationDuration: `${item.duration}s`,
              }}
            >
              {item.emoji}
            </div>
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="text-center max-w-2xl z-10">
        {/* Large Welcome Text in Red */}
        <h1 className="text-7xl md:text-9xl font-bold mb-8 animate-fade-in"
            style={{ color: '#E88B8B' }}>
          Welcome
        </h1>

        {/* Success Icon */}
        <div className="mb-8 animate-scale-in">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-mint to-calm-green rounded-full flex items-center justify-center shadow-2xl">
            <span className="text-6xl">✓</span>
          </div>
        </div>

        {/* Subtext */}
        <p className="text-2xl md:text-3xl text-gray-600 mb-4 animate-fade-in-delay">
          You're all set!
        </p>

        <p className="text-lg text-gray-500 mb-12 max-w-xl mx-auto animate-fade-in-delay-2">
          Thank you for trusting us with your journey. 
          Remember, this is a safe space for your thoughts and feelings.
        </p>

        {/* Action Button */}
        <div className="animate-fade-in-delay-3">
          <button
            onClick={handleGetStarted}
            className="btn-primary text-lg"
          >
            Start Your Journey
          </button>
        </div>

        {/* Footer Message */}
        <div className="mt-12 animate-fade-in-delay-4">
          <p className="text-gray-400 text-sm">
            We're here for you, every step of the way 💚
          </p>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fall {
          animation: fall linear infinite;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-fade-in-delay {
          animation: fadeIn 0.8s ease-out 0.3s both;
        }

        .animate-fade-in-delay-2 {
          animation: fadeIn 0.8s ease-out 0.6s both;
        }

        .animate-fade-in-delay-3 {
          animation: fadeIn 0.8s ease-out 0.9s both;
        }

        .animate-fade-in-delay-4 {
          animation: fadeIn 0.8s ease-out 1.2s both;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out 0.4s both;
        }
      `}</style>
    </div>
  );
}

export default FinalWelcome;
