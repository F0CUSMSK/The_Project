import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function MoodQuiz() {
  const { mood } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const quizData = {
    happy: {
      emoji: '😊',
      title: 'Celebrating Your Happiness',
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
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleContinue = () => {
    navigate('/hobbies');
  };

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-light-mint to-white flex items-center justify-center p-6">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="text-center">
            <div className="text-7xl mb-6">{currentQuiz.emoji}</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Thank you for sharing
            </h2>
            <div className="bg-light-mint p-6 rounded-2xl mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                {currentQuiz.advice}
              </p>
            </div>
            <button
              onClick={handleContinue}
              className="btn-primary"
            >
              Continue Your Journey
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-light-mint to-white p-6">
      <div className="max-w-3xl mx-auto py-12">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm text-calm-green font-semibold">
              {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-calm-green h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-6">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{currentQuiz.emoji}</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              {questions[currentQuestion].question}
            </h2>
          </div>

          {/* Answer Options */}
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-full p-4 bg-gray-50 hover:bg-mint border-2 border-transparent hover:border-calm-green rounded-2xl text-left transition-all duration-300 transform hover:scale-102"
              >
                <span className="text-lg text-gray-700">{option}</span>
              </button>
            ))}
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm italic">
          Take your time. There are no wrong answers.
        </p>
      </div>
    </div>
  );
}

export default MoodQuiz;
