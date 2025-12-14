import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, AlertCircle, Heart } from 'lucide-react';

function NotFound() {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Créer des particules animées
    const newParticles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-teal-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-cyan-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        
        {/* Animated particles */}
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 bg-emerald-400/20 rounded-full animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center p-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated number 404 */}
          <div className={`mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="relative inline-block">
              <h1 className="text-9xl md:text-10xl font-bold text-gray-800 mb-4 leading-none">
                <span className="inline-block animate-fade-in">4</span>
                <span className="inline-block animate-fade-in animation-delay-200">0</span>
                <span className="inline-block animate-fade-in animation-delay-400">4</span>
              </h1>
              
              {/* Floating hearts around the number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 text-pink-500 animate-float">
                <Heart className="w-full h-full" fill="currentColor" />
              </div>
              <div className="absolute -top-6 -right-6 w-6 h-6 text-emerald-500 animate-float animation-delay-1000">
                <Heart className="w-full h-full" fill="currentColor" />
              </div>
              <div className="absolute -bottom-6 left-1/4 w-7 h-7 text-teal-500 animate-float animation-delay-1500">
                <Heart className="w-full h-full" fill="currentColor" />
              </div>
              <div className="absolute -bottom-4 right-1/4 w-5 h-5 text-cyan-500 animate-float animation-delay-2000">
                <Heart className="w-full h-full" fill="currentColor" />
              </div>
            </div>
          </div>

          {/* Message */}
          <div className={`mb-10 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg mb-6">
              <AlertCircle className="w-8 h-8 text-amber-500" />
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                  Oups ! Page introuvable
                </h2>
                <p className="text-gray-600 text-lg">
                  La page que vous cherchez semble s'être égarée dans le jardin de votre bien-être...
                </p>
              </div>
            </div>

            <p className="text-gray-500 text-xl max-w-2xl mx-auto">
              Ne vous inquiétez pas, même les chemins les plus paisibles peuvent avoir des détours.
              Revenons vers des sentiers plus familiers.
            </p>
          </div>

          {/* Search suggestion */}
          <div className={`mb-10 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg max-w-md mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <Search className="w-6 h-6 text-emerald-600" />
                <h3 className="text-xl font-bold text-gray-800">Cherchez quelque chose ?</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Essayez de chercher ce que vous vouliez dans notre espace de bien-être :
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
                  Méditation
                </span>
                <span className="px-3 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium">
                  Groupes
                </span>
                <span className="px-3 py-2 bg-cyan-50 text-cyan-700 rounded-full text-sm font-medium">
                  Événements
                </span>
                <span className="px-3 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                  Ateliers
                </span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Link
              to="/"
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Home className="w-5 h-5" />
                Retour à l'accueil
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <Link
              to="/home"
              className="group flex items-center gap-3 px-8 py-4 bg-white/90 text-gray-800 font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-emerald-100"
            >
              <span className="relative z-10 flex items-center gap-3">
                <ArrowLeft className="w-5 h-5 text-emerald-600" />
                Espace de bien-être
              </span>
              <div className="absolute inset-0 bg-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </Link>
          </div>

          {/* Additional links */}
          <div className={`mt-12 transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <p className="text-gray-500 mb-4">Ou explorez ces sections populaires :</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/groups"
                className="px-5 py-3 bg-white/70 backdrop-blur-sm text-gray-700 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 font-medium"
              >
                Groupes de soutien
              </Link>
              <Link
                to="/events"
                className="px-5 py-3 bg-white/70 backdrop-blur-sm text-gray-700 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 font-medium"
              >
                Événements
              </Link>
              <Link
                to="/mood-selection"
                className="px-5 py-3 bg-white/70 backdrop-blur-sm text-gray-700 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 font-medium"
              >
                Exploration d'humeur
              </Link>
            </div>
          </div>

          {/* Inspirational quote */}
          <div className={`mt-12 pt-8 border-t border-emerald-100/50 max-w-lg mx-auto transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <p className="text-gray-600 italic text-lg">
              "Parfois se perdre est la meilleure façon de se retrouver."
            </p>
            <p className="text-gray-500 text-sm mt-2">— Proverbe zen</p>
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
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) translateX(10px) rotate(120deg);
          }
          66% {
            transform: translateY(10px) translateX(-5px) rotate(240deg);
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

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-1500 {
          animation-delay: 1.5s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}

export default NotFound;