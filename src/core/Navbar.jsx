import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, LogIn, UserPlus, Home, Users, Calendar, User, Menu, X } from 'lucide-react';

function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Liste des chemins authentifiés
  const authenticatedPaths = [
    '/home',
    '/groups',
    '/events',
    '/account',
    '/mood-selection',
    '/quiz/:mood',
    '/hobbies',
    '/write',
    '/final-welcome'
  ];

  // Vérifier si l'utilisateur est sur un chemin authentifié
  const isAuthenticatedPath = () => {
    return authenticatedPaths.some(path => {
      // Gérer les routes avec paramètres comme /quiz/:mood
      if (path.includes(':')) {
        const basePath = path.split('/:')[0];
        return location.pathname.startsWith(basePath);
      }
      return location.pathname === path || location.pathname.startsWith(path);
    });
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const isActive = (path) => {
    if (path === '/home') {
      return location.pathname === '/home' || location.pathname.startsWith('/home/');
    }
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const renderAuthenticatedMenu = () => (
    <>
      <Link
        to="/home"
        className={`group flex items-center gap-2 px-4 lg:px-5 py-2.5 font-semibold rounded-full transition-all duration-300 hover:scale-105 ${
          isActive('/home')
            ? 'bg-emerald-500 text-white shadow-lg'
            : 'text-gray-700 hover:bg-emerald-50'
        }`}
      >
        <Home className={`w-4 h-4 lg:w-5 lg:h-5 transition-colors duration-300 ${
          isActive('/home') ? 'text-white' : 'text-gray-600 group-hover:text-emerald-600'
        }`} />
        <span>Home</span>
      </Link>

      <Link
        to="/groups"
        className={`group flex items-center gap-2 px-4 lg:px-5 py-2.5 font-semibold rounded-full transition-all duration-300 hover:scale-105 ${
          isActive('/groups')
            ? 'bg-emerald-500 text-white shadow-lg'
            : 'text-gray-700 hover:bg-emerald-50'
        }`}
      >
        <Users className={`w-4 h-4 lg:w-5 lg:h-5 transition-colors duration-300 ${
          isActive('/groups') ? 'text-white' : 'text-gray-600 group-hover:text-emerald-600'
        }`} />
        <span>Groups</span>
      </Link>

      <Link
        to="/events"
        className={`group flex items-center gap-2 px-4 lg:px-5 py-2.5 font-semibold rounded-full transition-all duration-300 hover:scale-105 ${
          isActive('/events')
            ? 'bg-emerald-500 text-white shadow-lg'
            : 'text-gray-700 hover:bg-emerald-50'
        }`}
      >
        <Calendar className={`w-4 h-4 lg:w-5 lg:h-5 transition-colors duration-300 ${
          isActive('/events') ? 'text-white' : 'text-gray-600 group-hover:text-emerald-600'
        }`} />
        <span>Events</span>
      </Link>

      <Link
        to="/account"
        className={`group flex items-center gap-2 px-4 lg:px-5 py-2.5 font-semibold rounded-full transition-all duration-300 hover:scale-105 ${
          isActive('/account')
            ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg'
            : 'text-gray-700 hover:bg-emerald-50'
        }`}
      >
        <User className={`w-4 h-4 lg:w-5 lg:h-5 transition-colors duration-300 ${
          isActive('/account') ? 'text-white' : 'text-gray-600 group-hover:text-emerald-600'
        }`} />
        <span>Account</span>
      </Link>
    </>
  );

  const renderUnauthenticatedMenu = () => (
    <>
      
      
      <Link
        to="/auth"
        className={`group flex items-center gap-2 px-5 lg:px-6 py-2.5 font-semibold rounded-full transition-all duration-300 hover:scale-105 ${
          isActive('/auth')
            ? 'bg-emerald-50 text-emerald-700 shadow-md'
            : 'text-gray-700 hover:bg-emerald-50'
        }`}
      >
        <LogIn className={`w-4 h-4 lg:w-5 lg:h-5 transition-colors duration-300 ${
          isActive('/auth') ? 'text-emerald-600' : 'text-gray-600 group-hover:text-emerald-600'
        }`} />
        <span className={`transition-colors duration-300 ${
          isActive('/auth') ? 'text-emerald-700' : 'group-hover:text-emerald-700'
        }`}>
          Login
        </span>
      </Link>
      
      <Link
        to="/auth?tab=register"
        className="group relative flex items-center gap-2 px-6 lg:px-8 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
      >
        <span className="relative z-10 flex items-center gap-2">
          <UserPlus className="w-4 h-4 lg:w-5 lg:h-5" />
          Register
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </Link>
    </>
  );

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-emerald-100/50' 
            : 'bg-white/80 backdrop-blur-md shadow-lg border-b border-emerald-100/30'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-18">
            {/* Logo / Brand */}
            <Link 
              to={isAuthenticatedPath() ? "/home" : "/"} 
              className="flex items-center gap-2 md:gap-3 group relative"
            >
              <div className="w-10 h-10 md:w-11 md:h-11 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Heart className="w-5 h-5 md:w-6 md:h-6 text-white" fill="white" strokeWidth={2} />
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Moody
              </span>
              
              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-2 lg:gap-3">
              {isAuthenticatedPath() ? renderAuthenticatedMenu() : renderUnauthenticatedMenu()}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-gray-700 hover:bg-emerald-50 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-emerald-100 shadow-2xl transition-all duration-300 ${
            isMobileMenuOpen 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="px-4 py-6 space-y-3">
            {isAuthenticatedPath() ? (
              // Mobile menu for authenticated users
              <>
                <Link
                  to="/home"
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                    isActive('/home')
                      ? 'bg-emerald-500 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-emerald-50'
                  }`}
                >
                  <Home className={`w-5 h-5 ${isActive('/home') ? 'text-white' : 'text-gray-600'}`} />
                  Home
                </Link>

                <Link
                  to="/groups"
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                    isActive('/groups')
                      ? 'bg-emerald-500 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-emerald-50'
                  }`}
                >
                  <Users className={`w-5 h-5 ${isActive('/groups') ? 'text-white' : 'text-gray-600'}`} />
                  Groups
                </Link>

                <Link
                  to="/events"
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                    isActive('/events')
                      ? 'bg-emerald-500 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-emerald-50'
                  }`}
                >
                  <Calendar className={`w-5 h-5 ${isActive('/events') ? 'text-white' : 'text-gray-600'}`} />
                  Events
                </Link>

                <Link
                  to="/account"
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                    isActive('/account')
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-emerald-50'
                  }`}
                >
                  <User className={`w-5 h-5 ${isActive('/account') ? 'text-white' : 'text-gray-600'}`} />
                  Account
                </Link>
              </>
            ) : (
              // Mobile menu for unauthenticated users
              <>
                <Link
                  to="/"
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                    location.pathname === '/'
                      ? 'bg-emerald-500 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-emerald-50'
                  }`}
                >
                  Home
                </Link>

                <Link
                  to="/auth"
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                    isActive('/auth')
                      ? 'bg-emerald-50 text-emerald-700 shadow-md'
                      : 'text-gray-700 hover:bg-emerald-50'
                  }`}
                >
                  <LogIn className={`w-5 h-5 ${isActive('/auth') ? 'text-emerald-600' : 'text-gray-600'}`} />
                  Login
                </Link>
                
                <Link
                  to="/auth?tab=register"
                  className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-2xl shadow-lg"
                >
                  <UserPlus className="w-5 h-5" />
                  Register
                </Link>
              </>
            )}

            {/* Mobile Menu Footer */}
            <div className="pt-4 mt-4 border-t border-emerald-100">
              <p className="text-center text-sm text-gray-500">
                {isAuthenticatedPath() ? 'Welcome back! 💚' : 'Your wellness companion 💚'}
              </p>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 animate-fade-in"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}

export default Navbar;