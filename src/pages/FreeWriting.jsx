import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Save, SkipForward, Lock, PenLine, Sparkles } from 'lucide-react';

function FreeWriting() {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative min-h-screen p-6 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl mb-6 shadow-lg shadow-emerald-200/50">
              <PenLine className="w-8 h-8 text-white" strokeWidth={2.5} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
              Feel Free to
              <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Write
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              This is your safe space. Write anything that comes to mind. 
              Your thoughts, feelings, dreams, or worries. No judgment, just you.
            </p>
          </div>

          {/* Word Count Badge */}
          <div className={`text-center mb-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className={`inline-flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-300 ${
              wordCount > 0 
                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-200/50' 
                : 'bg-white/60 backdrop-blur-sm text-gray-500 border border-gray-200'
            }`}>
              <Sparkles className={`w-4 h-4 ${wordCount > 0 ? 'animate-pulse' : ''}`} />
              <span className="font-semibold">
                {wordCount} {wordCount === 1 ? 'word' : 'words'}
              </span>
            </div>
          </div>

          {/* Writing Area */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className={`bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-10 mb-8 transition-all duration-300 ${
              isFocused ? 'ring-4 ring-emerald-200/50 shadow-emerald-200/30' : ''
            }`}>
              <textarea
                value={text}
                onChange={handleTextChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Start writing... Let your thoughts flow freely. This is your private space to express yourself without any judgment..."
                className="w-full h-96 p-6 text-lg text-gray-700 bg-transparent border-2 border-gray-200/50 rounded-2xl focus:border-emerald-400 focus:outline-none resize-none transition-all duration-300 placeholder:text-gray-400"
                style={{ lineHeight: '1.8' }}
              />
              
              {/* Floating helper text */}
              {text.length === 0 && !isFocused && (
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 animate-fade-in">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span>Take your time. There's no rush, no right or wrong way to express yourself.</span>
                </div>
              )}
            </div>
          </div>

          {/* Encouragement Quote */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100/50 rounded-2xl p-6 md:p-8 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-gray-700 italic leading-relaxed text-base md:text-lg">
                    "Writing is a form of therapy; sometimes I wonder how all those who do not write, 
                    compose, or paint can manage to escape the madness."
                  </p>
                  <p className="text-gray-500 text-sm mt-2 font-medium">— Graham Greene</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button
              onClick={handleContinue}
              className="group relative px-10 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-full text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Save className="w-5 h-5" />
                Save & Continue
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button
              onClick={handleSkip}
              className="group relative px-10 py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-full text-lg border-2 border-gray-200 hover:border-gray-300 hover:bg-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2">
                <SkipForward className="w-5 h-5" />
                Skip for Now
              </span>
            </button>
          </div>

          {/* Privacy Note */}
          <div className={`transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-emerald-100/50">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center">
                  <Lock className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm text-gray-600 font-medium">
                  Your writing is private and secure
                </p>
              </div>
            </div>
          </div>

          {/* Additional Features Info */}
          <div className={`mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-1300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {[
              { title: 'Private', desc: 'Your thoughts stay yours', icon: '🔒' },
              { title: 'No Pressure', desc: 'Write at your own pace', icon: '⏱️' },
              { title: 'Therapeutic', desc: 'Express yourself freely', icon: '💚' }
            ].map((item, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/50 hover:bg-white/60 hover:border-emerald-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
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

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
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

export default FreeWriting;