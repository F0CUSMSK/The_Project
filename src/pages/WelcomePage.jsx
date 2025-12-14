import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function WelcomePage() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [value , setValue]=useState("Get Started")

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handelPass = () =>{
    setValue("Loading ...")
   setTimeout(() => {
    navigate('/mood-selection')
   },3000);
    
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-teal-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-cyan-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400/40 rounded-full animate-float"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-teal-400/40 rounded-full animate-float animation-delay-1000"></div>
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-cyan-400/40 rounded-full animate-float animation-delay-2000"></div>

      {/* Main content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center p-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title with staggered animation */}
          <div className={`transition-all flex flex-col justify-center items-center duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
             <span className="inline-block animate-fade-in">Welcome</span>{' '}
             <span className="inline-block animate-fade-in animation-delay-800">to</span>{' '}
             <span className="inline-block animate-fade-in animation-delay-800">a</span>{' '}
             <span className="inline-block animate-fade-in animation-delay-800">safe</span>{' '}
             <span className="inline-block animate-fade-in animation-delay-800">space</span>
            </h1>

            <h2 className={`text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent animate-fade-in animation-delay-600`}>
              for your mind
            </h2>
          </div>

          {/* Description */}
          <p className="text-gray-400 font-semibold text-xl mt-10">
            Take a moment for yourself. Express your feelings, explore your thoughts, 
            and find peace in a supportive environment.
          </p>

          {/* CTA Button with hover effects */}
          <div className={`mt-7 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button
              onClick={() => handelPass()}
              className="group relative  h-12 w-3xs  px-16 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-full text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative flex   flex-col justify-center items-center z-10 flex items-center gap-2">
                {value}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
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

export default WelcomePage;