import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User, Maximize2, Minimize2 } from 'lucide-react';
import Logo from "../assets/avatar.png"


function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Bonjour ! Je suis votre assistant bien-être. Comment puis-je vous aider aujourd'hui ?", sender: 'bot', timestamp: new Date(Date.now() - 300000) },
    { id: 2, text: "Je me sens un peu stressé en ce moment...", sender: 'user', timestamp: new Date(Date.now() - 180000) },
    { id: 3, text: "Je comprends. Souhaitez-vous essayer une courte méditation ou parler de ce qui vous préoccupe ?", sender: 'bot', timestamp: new Date(Date.now() - 120000) },
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    // Ajouter le message de l'utilisateur
    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Simuler une réponse du bot après un délai
    setTimeout(() => {
      const botResponses = [
        "Je comprends ce que vous ressentez. Avez-vous essayé de prendre quelques respirations profondes ?",
        "Merci de partager cela avec moi. Souhaitez-vous que je vous suggère des exercices de relaxation ?",
        "Je suis là pour vous écouter. Parfois, écrire ses pensées peut aider à les organiser.",
        "N'oubliez pas que c'est normal de se sentir ainsi. Voulez-vous que je vous guide dans un exercice de gratitude ?",
        "Merci pour votre confiance. Souhaitez-vous que je vous recommande des groupes de soutien sur ce sujet ?"
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      const botMessage = {
        id: messages.length + 2,
        text: randomResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleSendMessage(e);
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const clearChat = () => {
    setMessages([
      { id: 1, text: "Bonjour ! Je suis votre assistant bien-être. Comment puis-je vous aider aujourd'hui ?", sender: 'bot', timestamp: new Date() }
    ]);
  };

  return (
    <>
      {/* Bouton flottant du chatbot */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-4xl h-4xl md:w-16 md:h-16  text-white rounded-full shadow-2xl  transform hover:scale-110 transition-all duration-300 flex items-center justify-center group ${
          isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        aria-label="Ouvrir le chatbot"
      >
        <img src={Logo} alt="" className="w-[300px]" srcset="" />
        
        {/* Notification badge */}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
          <span className="text-xs font-bold">1</span>
        </div>
        
        {/* Effet hover */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>

      {/* Fenêtre du chatbot */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        isOpen 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-10 scale-95 pointer-events-none'
      }`}>
        <div className={`bg-white rounded-2xl shadow-2xl overflow-hidden border border-emerald-100 transition-all duration-500 ${
          isMinimized ? 'w-80' : 'w-80 md:w-96'
        }`}>
          {/* Header du chatbot */}
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white">Assistant Bien-être</h3>
                <p className="text-xs text-white/90">En ligne • Prêt à écouter</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-2 text-white/80 hover:text-white hover:bg-white/20 rounded-lg transition-colors duration-300"
                aria-label={isMinimized ? "Agrandir" : "Réduire"}
              >
                {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-white/80 hover:text-white hover:bg-white/20 rounded-lg transition-colors duration-300"
                aria-label="Fermer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="h-80 md:h-96 overflow-y-auto p-4 bg-gradient-to-b from-emerald-50/50 to-teal-50/50">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.sender === 'bot' 
                          ? 'bg-emerald-100 text-emerald-600' 
                          : 'bg-teal-100 text-teal-600'
                      }`}>
                        {message.sender === 'bot' ? (
                          <Bot className="w-4 h-4" />
                        ) : (
                          <User className="w-4 h-4" />
                        )}
                      </div>
                      
                      <div className="max-w-[70%]">
                        <div className={`rounded-2xl px-4 py-3 ${
                          message.sender === 'bot'
                            ? 'bg-white border border-emerald-100 text-gray-700'
                            : 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white'
                        }`}>
                          <p className="text-sm md:text-base leading-relaxed">{message.text}</p>
                        </div>
                        <span className="text-xs text-gray-500 mt-1 block px-2">
                          {formatTime(new Date(message.timestamp))}
                        </span>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* Zone de saisie */}
              <div className="border-t border-emerald-100 p-4 bg-white">
                <div className="flex items-end gap-3">
                  <button
                    onClick={clearChat}
                    className="px-3 py-2 text-xs text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors duration-300"
                  >
                    Effacer
                  </button>
                  
                  <form onSubmit={handleSendMessage} className="flex-1 flex gap-3">
                    <div className="flex-1 relative">
                      <textarea
                        ref={inputRef}
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Écrivez votre message..."
                        className="w-full px-4 py-3 pr-12 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all resize-none"
                        rows="1"
                        maxLength="500"
                      />
                      <div className="absolute right-3 bottom-3 text-xs text-gray-400">
                        {inputText.length}/500
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={!inputText.trim()}
                      className={`p-3 rounded-xl flex-shrink-0 transition-all duration-300 ${
                        inputText.trim()
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:shadow-lg hover:scale-105'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                </div>
                
                <div className="mt-3 flex flex-wrap gap-2 justify-center">
                  <button
                    onClick={() => setInputText("Je me sens stressé")}
                    className="px-3 py-1.5 text-xs bg-emerald-50 text-emerald-700 rounded-full hover:bg-emerald-100 transition-colors duration-300"
                  >
                    Je me sens stressé
                  </button>
                  <button
                    onClick={() => setInputText("Besoin de conseils")}
                    className="px-3 py-1.5 text-xs bg-teal-50 text-teal-700 rounded-full hover:bg-teal-100 transition-colors duration-300"
                  >
                    Besoin de conseils
                  </button>
                  <button
                    onClick={() => setInputText("Exercices de relaxation")}
                    className="px-3 py-1.5 text-xs bg-cyan-50 text-cyan-700 rounded-full hover:bg-cyan-100 transition-colors duration-300"
                  >
                    Exercices de relaxation
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsOpen(false)}
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

        textarea {
          min-height: 48px;
          max-height: 120px;
        }
      `}</style>
    </>
  );
}

export default Chatbot;