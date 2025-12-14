import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Loader2, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

function MoodQuiz() {
  const { mood } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const quizData = {
    happy: {
      emoji: '😊',
      title: 'Celebrating Your Happiness',
      gradient: 'from-yellow-400 to-amber-500',
      questions: [
        {
          question: 'What made you happy today?',
          options: ['Spending time with loved ones', 'Achieving a goal', 'Enjoying nature', 'Something unexpected']
        },
        {
          question: 'How would you like to extend this feeling?',
          options: ['Share it with others', 'Do something creative', 'Help someone else', 'Simply enjoy the moment']
        },
        {
          question: 'What activity brings you the most joy?',
          options: ['Being with friends/family', 'Pursuing hobbies', 'Learning something new', 'Relaxing']
        },
        {
          question: 'How often do you feel this way?',
          options: ['Very often', 'Sometimes', 'Rarely', 'First time in a while']
        },
        {
          question: 'What helps you maintain positive feelings?',
          options: ['Gratitude practice', 'Exercise', 'Music', 'Social connections']
        }
      ],
      advice: '🌟 Keep spreading that positive energy! Your happiness is contagious. Consider journaling about this moment to revisit when you need a boost.'
    },
    sad: {
      emoji: '😢',
      title: 'Understanding Your Sadness',
      gradient: 'from-blue-400 to-indigo-500',
      questions: [
        {
          question: 'How long have you been feeling this way?',
          options: ['Just today', 'A few days', 'A week or more', 'It comes and goes']
        },
        {
          question: 'What might have triggered these feelings?',
          options: ['A specific event', 'Nothing in particular', 'Multiple things', 'Not sure']
        },
        {
          question: 'Have you talked to anyone about how you feel?',
          options: ['Yes, to someone close', 'No, keeping it to myself', 'Thinking about it', 'I prefer to process alone']
        },
        {
          question: 'What usually helps when you feel sad?',
          options: ['Talking to someone', 'Being alone', 'Doing an activity', 'Resting']
        },
        {
          question: 'Are you able to identify what you need right now?',
          options: ['Comfort', 'Understanding', 'Space', 'Distraction']
        }
      ],
      advice: '💙 It\'s completely okay to feel sad. Remember, this feeling is temporary. Consider reaching out to someone you trust, taking a gentle walk, or writing down your thoughts. Be kind to yourself.'
    },
    anxious: {
      emoji: '😰',
      title: 'Managing Your Anxiety',
      gradient: 'from-purple-400 to-violet-500',
      questions: [
        {
          question: 'When did you start feeling anxious?',
          options: ['Right now', 'Earlier today', 'It\'s been ongoing', 'It comes in waves']
        },
        {
          question: 'Can you identify what\'s making you anxious?',
          options: ['Yes, something specific', 'Multiple things', 'General worry', 'Not sure']
        },
        {
          question: 'How is your breathing right now?',
          options: ['Shallow and fast', 'A bit tight', 'Trying to calm it', 'Normal']
        },
        {
          question: 'What helps you feel grounded?',
          options: ['Deep breathing', 'Physical activity', 'Talking it out', 'Quiet time']
        },
        {
          question: 'Have you tried any calming techniques today?',
          options: ['Yes, they helped', 'Yes, but not much', 'Not yet', 'Don\'t know any']
        }
      ],
      advice: '🌊 Take a deep breath. Try the 4-7-8 breathing technique: breathe in for 4 counts, hold for 7, exhale for 8. Ground yourself by naming 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste.'
    },
    angry: {
      emoji: '😠',
      title: 'Working Through Anger',
      gradient: 'from-red-400 to-rose-500',
      questions: [
        {
          question: 'What triggered your anger?',
          options: ['Someone\'s actions', 'A situation', 'Frustration building up', 'Not entirely sure']
        },
        {
          question: 'How intense is your anger right now?',
          options: ['Very intense', 'Moderate', 'Simmering', 'Cooling down']
        },
        {
          question: 'Have you expressed your anger?',
          options: ['Yes, to the person/situation', 'To someone else', 'Keeping it inside', 'Partially']
        },
        {
          question: 'What do you need to release this feeling?',
          options: ['Physical activity', 'To talk about it', 'Time alone', 'Creative expression']
        },
        {
          question: 'What usually helps you process anger?',
          options: ['Exercise', 'Writing', 'Talking', 'Taking space']
        }
      ],
      advice: '🔥 Your anger is valid. Channel it constructively - try physical exercise, punch a pillow, or write down everything you\'re feeling. Once you\'re calmer, consider if the situation needs addressing or if you need to let it go.'
    },
    tired: {
      emoji: '😴',
      title: 'Understanding Your Fatigue',
      gradient: 'from-slate-400 to-gray-500',
      questions: [
        {
          question: 'What kind of tired are you feeling?',
          options: ['Physically exhausted', 'Mentally drained', 'Emotionally worn out', 'All of the above']
        },
        {
          question: 'How has your sleep been lately?',
          options: ['Not enough', 'Poor quality', 'Too much', 'Decent but still tired']
        },
        {
          question: 'What\'s been draining your energy?',
          options: ['Work/studies', 'Social obligations', 'Emotional stress', 'Not sure']
        },
        {
          question: 'When did you last take a real break?',
          options: ['Today', 'This week', 'Can\'t remember', 'I don\'t take breaks']
        },
        {
          question: 'What sounds most restorative right now?',
          options: ['Sleep/nap', 'Quiet time', 'Light activity', 'Change of scenery']
        }
      ],
      advice: '😴 Listen to your body. Rest is productive. Consider a 20-minute power nap, some gentle stretching, or simply sitting quietly. Make sure you\'re drinking enough water and eating properly. It\'s okay to say no to things when you need to recharge.'
    },
    stressed: {
      emoji: '😫',
      title: 'Relieving Your Stress',
      gradient: 'from-orange-400 to-red-500',
      questions: [
        {
          question: 'What\'s your main source of stress?',
          options: ['Work/school deadlines', 'Personal relationships', 'Financial concerns', 'Multiple things']
        },
        {
          question: 'How long have you felt stressed?',
          options: ['Just today', 'This week', 'Ongoing for weeks', 'It\'s chronic']
        },
        {
          question: 'Are you able to take breaks?',
          options: ['Yes, regularly', 'Sometimes', 'Rarely', 'I feel I can\'t']
        },
        {
          question: 'What stress management do you practice?',
          options: ['Exercise', 'Meditation/breathing', 'Hobbies', 'None currently']
        },
        {
          question: 'Do you feel you have support?',
          options: ['Yes, strong support', 'Some support', 'Limited support', 'Feel alone in this']
        }
      ],
      advice: '🧘 Break tasks into smaller steps. Use the Pomodoro Technique: 25 minutes of focus, 5-minute break. Remember to step away from screens. A short walk or stretching can reset your mind. You don\'t have to handle everything at once.'
    },
    lonely: {
      emoji: '😔',
      title: 'Addressing Your Loneliness',
      gradient: 'from-indigo-400 to-purple-500',
      questions: [
        {
          question: 'When do you feel most lonely?',
          options: ['At night', 'During the day', 'In crowds', 'All the time']
        },
        {
          question: 'Do you have people you can reach out to?',
          options: ['Yes, but hesitant', 'Yes, and I do', 'A few people', 'Not really']
        },
        {
          question: 'What kind of connection do you crave?',
          options: ['Deep conversation', 'Casual company', 'Understanding', 'Any connection']
        },
        {
          question: 'Have you tried connecting with anyone recently?',
          options: ['Yes, recently', 'Not in a while', 'I want to but can\'t', 'I prefer solitude usually']
        },
        {
          question: 'What makes you feel less alone?',
          options: ['Talking to someone', 'Being in public spaces', 'Online communities', 'Creative activities']
        }
      ],
      advice: '💜 Loneliness is hard, but you\'re not alone in feeling this way. Consider reaching out to one person, even with a simple "hi". Join online communities around your interests. Sometimes a walk in a café or park can help. Your presence matters.'
    },
    calm: {
      emoji: '😌',
      title: 'Nurturing Your Calm',
      gradient: 'from-emerald-400 to-teal-500',
      questions: [
        {
          question: 'What brought you to this calm state?',
          options: ['Meditation/mindfulness', 'Nature', 'Music', 'It just happened']
        },
        {
          question: 'How often do you feel this peaceful?',
          options: ['Very often', 'Sometimes', 'Rarely', 'First time in a while']
        },
        {
          question: 'What helps you maintain calmness?',
          options: ['Regular practice', 'Healthy boundaries', 'Good sleep', 'Supportive environment']
        },
        {
          question: 'Do you have a calming routine?',
          options: ['Yes, daily', 'Working on it', 'Occasionally', 'No routine yet']
        },
        {
          question: 'How can you extend this feeling?',
          options: ['Continue current activity', 'Share the peace', 'Rest in it', 'Create with it']
        }
      ],
      advice: '🌸 Beautiful! Savor this moment. Consider what led you here so you can recreate it. This calm is your natural state - remember you can always return to it. Maybe note down what helped you get here.'
    }
  };

  const currentQuiz = quizData[mood] || quizData.calm;
  const questions = currentQuiz.questions;

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setIsProcessing(true);

    setTimeout(() => {
      const newAnswers = [...answers, answer];
      setAnswers(newAnswers);

      if (currentQuestion < questions.length - 1) {
        setTimeout(() => {
          setCurrentQuestion(currentQuestion + 1);
          setIsProcessing(false);
          setSelectedAnswer(null);
          setIsVisible(false);
          setTimeout(() => setIsVisible(true), 50);
        }, 600);
      } else {
        setTimeout(() => {
          setShowResult(true);
          setIsProcessing(false);
        }, 600);
      }
    }, 1000);
  };

  const handleContinue = () => {
    navigate('/hobbies');
  };

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden flex items-center justify-center p-6">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-3xl w-full bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 animate-fade-in">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl mb-6 shadow-lg shadow-emerald-200/50 animate-bounce-gentle">
              <CheckCircle2 className="w-12 h-12 text-white" strokeWidth={2.5} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Thank you for sharing
            </h2>
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100/50 p-6 md:p-8 rounded-2xl mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-left">
                  {currentQuiz.advice}
                </p>
              </div>
            </div>
            <button
              onClick={handleContinue}
              className="group relative px-10 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-full text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Continue Your Journey
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
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
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes bounce-gentle {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          .animate-blob {
            animation: blob 7s infinite;
          }

          .animate-fade-in {
            animation: fade-in 0.6s ease-out;
          }

          .animate-bounce-gentle {
            animation: bounce-gentle 2s ease-in-out infinite;
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden p-6">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-3xl mx-auto py-12">
        {/* Progress Bar */}
        <div className={`mb-8 bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold text-gray-600">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm font-bold text-emerald-600">
              {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-emerald-500 to-teal-600 h-3 rounded-full transition-all duration-700 ease-out shadow-sm"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className={`bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="text-center mb-8">
            <div className="text-6xl md:text-7xl mb-6">{currentQuiz.emoji}</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 leading-tight">
              {questions[currentQuestion].question}
            </h2>
          </div>

          {/* Answer Options */}
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => !isProcessing && handleAnswer(option)}
                disabled={isProcessing}
                className={`w-full p-5 rounded-2xl text-left transition-all duration-300 transform border-2 ${
                  selectedAnswer === option
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 border-transparent text-white scale-105 shadow-xl'
                    : isProcessing
                    ? 'bg-gray-50 border-gray-200 cursor-not-allowed opacity-50'
                    : 'bg-white border-gray-200 hover:border-emerald-400 hover:bg-emerald-50 hover:scale-102 shadow-md hover:shadow-lg'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-base md:text-lg font-medium ${
                    selectedAnswer === option ? 'text-white' : 'text-gray-700'
                  }`}>
                    {option}
                  </span>
                  {selectedAnswer === option && isProcessing && (
                    <Loader2 className="w-5 h-5 text-white animate-spin flex-shrink-0" />
                  )}
                  {selectedAnswer === option && !isProcessing && (
                    <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Processing indicator */}
          {isProcessing && (
            <div className="mt-6 text-center animate-fade-in">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-50 border border-emerald-200 rounded-full">
                <Loader2 className="w-4 h-4 text-emerald-600 animate-spin" />
                <span className="text-sm text-emerald-700 font-medium">Processing your answer...</span>
              </div>
            </div>
          )}
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm italic bg-white/40 backdrop-blur-sm rounded-full px-6 py-3 inline-block">
            Take your time. There are no wrong answers.
          </p>
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
          animation: fade-in 0.3s ease-out;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}

export default MoodQuiz;