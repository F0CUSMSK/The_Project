import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Music, 
  BookOpen, 
  Footprints, 
  Palette, 
  Gamepad2, 
  Heart, 
  ChefHat, 
  PenTool, 
  Camera, 
  Flower2, 
  Sparkles,
  Brain
} from 'lucide-react';

function HobbiesSelection() {
  const navigate = useNavigate();
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const hobbies = [
    { id: 'music', icon: Music, label: 'Music', gradient: 'from-purple-400 to-pink-500', shadow: 'shadow-purple-200' },
    { id: 'reading', icon: BookOpen, label: 'Reading', gradient: 'from-blue-400 to-indigo-500', shadow: 'shadow-blue-200' },
    { id: 'walking', icon: Footprints, label: 'Walking', gradient: 'from-green-400 to-emerald-500', shadow: 'shadow-green-200' },
    { id: 'drawing', icon: Palette, label: 'Drawing', gradient: 'from-pink-400 to-rose-500', shadow: 'shadow-pink-200' },
    { id: 'gaming', icon: Gamepad2, label: 'Gaming', gradient: 'from-indigo-400 to-purple-500', shadow: 'shadow-indigo-200' },
    { id: 'yoga', icon: Heart, label: 'Yoga', gradient: 'from-teal-400 to-cyan-500', shadow: 'shadow-teal-200' },
    { id: 'cooking', icon: ChefHat, label: 'Cooking', gradient: 'from-orange-400 to-amber-500', shadow: 'shadow-orange-200' },
    { id: 'writing', icon: PenTool, label: 'Writing', gradient: 'from-yellow-400 to-orange-500', shadow: 'shadow-yellow-200' },
    { id: 'photography', icon: Camera, label: 'Photography', gradient: 'from-cyan-400 to-blue-500', shadow: 'shadow-cyan-200' },
    { id: 'gardening', icon: Flower2, label: 'Gardening', gradient: 'from-lime-400 to-green-500', shadow: 'shadow-lime-200' },
    { id: 'dancing', icon: Sparkles, label: 'Dancing', gradient: 'from-fuchsia-400 to-pink-500', shadow: 'shadow-fuchsia-200' },
    { id: 'meditation', icon: Brain, label: 'Meditation', gradient: 'from-violet-400 to-purple-500', shadow: 'shadow-violet-200' },
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
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-20 w-96 h-96 bg-purple-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-32 left-20 w-96 h-96 bg-pink-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative min-h-screen p-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
              What brings you
              <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
                joy?
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mt-6">
              Select your hobbies and interests
            </p>
            <p className="text-sm text-gray-500 mt-2">
              (Choose as many as you like)
            </p>
          </div>

          {/* Selected Count Badge */}
          <div className={`text-center mb-8 transition-all duration-500 ${selectedHobbies.length > 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-emerald-200/50 animate-bounce-subtle">
              <Sparkles className="w-5 h-5" />
              <span>{selectedHobbies.length} selected</span>
            </div>
          </div>

          {/* Hobbies Grid */}
          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {hobbies.map((hobby, index) => {
              const Icon = hobby.icon;
              const isSelected = selectedHobbies.includes(hobby.id);
              
              return (
                <div
                  key={hobby.id}
                  onClick={() => toggleHobby(hobby.id)}
                  className={`group relative cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
                    isSelected ? 'scale-105 -translate-y-2' : ''
                  }`}
                  style={{ animationDelay: `${400 + index * 80}ms` }}
                >
                  <div
                    className={`
                      relative p-6 md:p-8 rounded-3xl border-2 transition-all duration-300 overflow-hidden
                      ${isSelected 
                        ? `border-transparent bg-gradient-to-br ${hobby.gradient} shadow-2xl ${hobby.shadow}` 
                        : 'border-white/50 bg-white/70 backdrop-blur-sm hover:border-white hover:bg-white/90'
                      }
                    `}
                  >
                    {/* Animated background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${hobby.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    {/* Content */}
                    <div className="relative text-center">
                      <div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl mb-4 transition-all duration-300 ${
                        isSelected 
                          ? 'bg-white/20 backdrop-blur-sm' 
                          : 'bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-gray-100 group-hover:to-gray-200'
                      }`}>
                        <Icon 
                          className={`w-8 h-8 md:w-10 md:h-10 transition-all duration-300 ${
                            isSelected ? 'text-white scale-110' : 'text-gray-600 group-hover:scale-110'
                          }`}
                          strokeWidth={isSelected ? 2.5 : 2}
                        />
                      </div>
                      <p className={`text-base md:text-lg font-bold transition-colors duration-300 ${
                        isSelected ? 'text-white' : 'text-gray-700 group-hover:text-gray-900'
                      }`}>
                        {hobby.label}
                      </p>
                    </div>

                    {/* Selection indicator */}
                    {isSelected && (
                      <div className="absolute top-3 right-3 w-7 h-7 bg-white rounded-full flex items-center justify-center animate-scale-in shadow-lg">
                        <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}

                    {/* Pulse effect on selection */}
                    {isSelected && (
                      <div className="absolute inset-0 rounded-3xl animate-pulse-ring"></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Continue Button */}
          <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button
              onClick={handleContinue}
              disabled={selectedHobbies.length === 0}
              className={`group relative px-12 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-full text-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 overflow-hidden
                ${selectedHobbies.length === 0 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:scale-105'
                }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                Continue
                <svg 
                  className={`w-5 h-5 transition-transform duration-300 ${selectedHobbies.length > 0 ? 'group-hover:translate-x-1' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              {selectedHobbies.length > 0 && (
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </button>
            
            {selectedHobbies.length === 0 && (
              <p className="text-sm text-gray-500 mt-4 animate-fade-in">
                Please select at least one hobby to continue
              </p>
            )}
          </div>

          {/* Motivational Text */}
          <div className={`text-center mt-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-block px-8 py-4 bg-white/60 backdrop-blur-sm rounded-full border border-purple-100/50">
              <p className="text-gray-600 italic text-base md:text-lg">
                "Hobbies are the bridge between who you are and who you want to be."
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes scale-in {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes pulse-ring {
          0% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4);
          }
          100% {
            box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .animate-pulse-ring {
          animation: pulse-ring 1s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

export default HobbiesSelection;