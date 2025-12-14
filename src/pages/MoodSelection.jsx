import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Smile, 
  Frown, 
  AlertCircle, 
  Flame, 
  Moon, 
  Zap, 
  CloudRain,
  Waves
} from 'lucide-react';

function MoodSelection() {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [value , setValue]=useState("Get Started")
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const moods = [
    { 
      id: 'happy', 
      icon: Smile, 
      label: 'Happy', 
      gradient: 'from-yellow-400 to-amber-500', 
      shadow: 'shadow-yellow-200',
      bgColor: 'bg-yellow-50'
    },
    { 
      id: 'sad', 
      icon: Frown, 
      label: 'Sad', 
      gradient: 'from-blue-400 to-indigo-500', 
      shadow: 'shadow-blue-200',
      bgColor: 'bg-blue-50'
    },
    { 
      id: 'anxious', 
      icon: AlertCircle, 
      label: 'Anxious', 
      gradient: 'from-purple-400 to-violet-500', 
      shadow: 'shadow-purple-200',
      bgColor: 'bg-purple-50'
    },
    { 
      id: 'angry', 
      icon: Flame, 
      label: 'Angry', 
      gradient: 'from-red-400 to-rose-500', 
      shadow: 'shadow-red-200',
      bgColor: 'bg-red-50'
    },
    { 
      id: 'tired', 
      icon: Moon, 
      label: 'Tired', 
      gradient: 'from-slate-400 to-gray-500', 
      shadow: 'shadow-gray-200',
      bgColor: 'bg-slate-50'
    },
    { 
      id: 'stressed', 
      icon: Zap, 
      label: 'Stressed', 
      gradient: 'from-orange-400 to-red-500', 
      shadow: 'shadow-orange-200',
      bgColor: 'bg-orange-50'
    },
    { 
      id: 'lonely', 
      icon: CloudRain, 
      label: 'Lonely', 
      gradient: 'from-indigo-400 to-purple-500', 
      shadow: 'shadow-indigo-200',
      bgColor: 'bg-indigo-50'
    },
    { 
      id: 'calm', 
      icon: Waves, 
      label: 'Calm', 
      gradient: 'from-emerald-400 to-teal-500', 
      shadow: 'shadow-emerald-200',
      bgColor: 'bg-emerald-50'
    },
  ];

  const handleMoodSelect = (moodId) => {
    setSelectedMood(moodId);
    setValue("Lodaing...");
    setTimeout(() => {
      navigate(`/quiz/${moodId}`);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative min-h-screen flex flex-col justify-center items-center p-6 py-12">
        <div className="max-w-6xl mx-auto w-full">
          {/* Header */}
          <div className={`text-center flex flex-col justify-center items-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
              How are you feeling
              <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mt-2">
                today?
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-500 mt-6 max-w-2xl mx-auto">
              Select the emotion that best describes your current state
            </p>
          </div>

          {/* Mood Grid */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {moods.map((mood, index) => {
              const Icon = mood.icon;
              const isSelected = selectedMood === mood.id;
              
              return (
                <div
                  key={mood.id}
                  onClick={() => handleMoodSelect(mood.id)}
                  className={`group relative cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
                    isSelected ? 'scale-105 -translate-y-2' : ''
                  }`}
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <div
                    className={`
                      relative p-8 rounded-3xl border-2 transition-all duration-300 overflow-hidden
                      ${isSelected 
                        ? `border-transparent bg-gradient-to-br ${mood.gradient} shadow-2xl ${mood.shadow}` 
                        : 'border-white/50 bg-white/70 backdrop-blur-sm hover:border-white hover:bg-white/90 hover:shadow-xl'
                      }
                    `}
                  >
                    {/* Animated background on hover */}
                    {!isSelected && (
                      <div className={`absolute inset-0 bg-gradient-to-br ${mood.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    )}
                    
                    {/* Content */}
                    <div className="relative text-center">
                      {/* Icon Container */}
                      <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-4 transition-all duration-300 ${
                        isSelected 
                          ? 'bg-white/20 backdrop-blur-sm scale-110' 
                          : `${mood.bgColor} group-hover:scale-110`
                      }`}>
                        <Icon 
                          className={`w-10 h-10 transition-all duration-300 ${
                            isSelected ? 'text-white' : 'text-gray-700'
                          }`}
                          strokeWidth={isSelected ? 2.5 : 2}
                        />
                      </div>
                      
                      <p className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                        isSelected ? 'text-white' : 'text-gray-700 group-hover:text-gray-900'
                      }`}>
                        {mood.label}
                      </p>
                    </div>

                    {/* Selection indicator */}
                    {isSelected && (
                      <div className="absolute top-4 right-4 w-7 h-7 bg-white rounded-full flex items-center justify-center animate-scale-in shadow-lg">
                        <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}

                    {/* Subtle shine effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Encouragement Text */}
          <div className={`text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-block px-8 py-4 bg-white/60 backdrop-blur-sm rounded-full border border-emerald-100/50 shadow-sm">
              <p className="text-gray-600 italic text-base md:text-lg">
                "It's okay to feel what you're feeling. Let's talk about it."
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
            transform: scale(0) rotate(-180deg);
            opacity: 0;
          }
          to {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-scale-in {
          animation: scale-in 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
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

export default MoodSelection;