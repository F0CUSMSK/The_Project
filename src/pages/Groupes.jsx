import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Search, 
  Filter, 
  Calendar, 
  MessageCircle, 
  UserPlus, 
  Lock,
  Globe,
  TrendingUp,
  Star,
  ChevronRight,
  Check,
  Hash
} from 'lucide-react';

function Groupes() {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [joinedGroups, setJoinedGroups] = useState([1, 3]); // IDs des groupes rejoints

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', label: 'Tous les groupes', color: 'bg-gradient-to-r from-emerald-500 to-teal-600' },
    { id: 'anxiety', label: 'Anxiété', color: 'bg-gradient-to-r from-purple-500 to-violet-600' },
    { id: 'depression', label: 'Dépression', color: 'bg-gradient-to-r from-blue-500 to-indigo-600' },
    { id: 'stress', label: 'Stress', color: 'bg-gradient-to-r from-orange-500 to-red-600' },
    { id: 'wellness', label: 'Bien-être', color: 'bg-gradient-to-r from-green-500 to-emerald-600' },
    { id: 'mindfulness', label: 'Pleine conscience', color: 'bg-gradient-to-r from-cyan-500 to-blue-600' },
  ];

  const groups = [
    {
      id: 1,
      name: "Groupe Soutien Anxiété",
      description: "Un espace sûr pour partager vos expériences et trouver du soutien contre l'anxiété.",
      members: 245,
      active: 42,
      privacy: "public",
      category: "anxiety",
      tags: ["anxiété", "soutien", "quotidien"],
      nextMeeting: "Demain, 18:00",
      popularity: "high",
      isNew: true
    },
    {
      id: 2,
      name: "Méditation Collective",
      description: "Séances de méditation guidée quotidienne et partage d'expériences.",
      members: 512,
      active: 89,
      privacy: "public",
      category: "mindfulness",
      tags: ["méditation", "calme", "zen"],
      nextMeeting: "Aujourd'hui, 20:00",
      popularity: "very-high",
      isNew: false
    },
    {
      id: 3,
      name: "Gestion du Stress",
      description: "Techniques et stratégies pour mieux gérer le stress au quotidien.",
      members: 178,
      active: 31,
      privacy: "private",
      category: "stress",
      tags: ["stress", "gestion", "techniques"],
      nextMeeting: "Mercredi, 19:30",
      popularity: "medium",
      isNew: true
    },
    {
      id: 4,
      name: "Bien-être Quotidien",
      description: "Conseils et astuces pour améliorer votre bien-être mental chaque jour.",
      members: 389,
      active: 67,
      privacy: "public",
      category: "wellness",
      tags: ["bien-être", "conseils", "quotidien"],
      nextMeeting: "Jeudi, 17:00",
      popularity: "high",
      isNew: false
    },
    {
      id: 5,
      name: "Parents en Détente",
      description: "Groupe de soutien pour parents cherchant à préserver leur santé mentale.",
      members: 124,
      active: 23,
      privacy: "private",
      category: "stress",
      tags: ["parents", "famille", "équilibre"],
      nextMeeting: "Vendredi, 20:30",
      popularity: "medium",
      isNew: false
    },
    {
      id: 6,
      name: "Étudiants Zen",
      description: "Communauté d'étudiants pour gérer le stress académique ensemble.",
      members: 298,
      active: 56,
      privacy: "public",
      category: "stress",
      tags: ["étudiants", "académique", "équilibre"],
      nextMeeting: "Lundi, 19:00",
      popularity: "high",
      isNew: true
    },
    {
      id: 7,
      name: "Groupe Dépression",
      description: "Espace confidentiel pour le soutien et le partage d'expériences.",
      members: 156,
      active: 28,
      privacy: "private",
      category: "depression",
      tags: ["dépression", "soutien", "écoute"],
      nextMeeting: "Dimanche, 16:00",
      popularity: "medium",
      isNew: false
    },
    {
      id: 8,
      name: "Yoga et Relaxation",
      description: "Sessions de yoga en ligne et discussions sur la relaxation profonde.",
      members: 421,
      active: 78,
      privacy: "public",
      category: "wellness",
      tags: ["yoga", "relaxation", "santé"],
      nextMeeting: "Aujourd'hui, 7:00",
      popularity: "very-high",
      isNew: false
    }
  ];

  const filteredGroups = groups.filter(group => {
    const matchesSearch = group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         group.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         group.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || group.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleJoinGroup = (groupId) => {
    if (!joinedGroups.includes(groupId)) {
      setJoinedGroups([...joinedGroups, groupId]);
    } else {
      setJoinedGroups(joinedGroups.filter(id => id !== groupId));
    }
  };

  const getPopularityColor = (level) => {
    switch(level) {
      case 'very-high': return 'bg-red-100 text-red-700';
      case 'high': return 'bg-orange-100 text-orange-700';
      case 'medium': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden pt-20 pb-12">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3 flex items-center gap-3">
                <Users className="w-10 h-10 text-emerald-600" />
                Groupes de Soutien
              </h1>
              <p className="text-lg text-gray-600">
                Rejoignez des communautés bienveillantes et trouvez du soutien auprès de pairs
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full font-semibold text-sm">
                {joinedGroups.length} groupes rejoints
              </span>
            </div>
          </div>

          {/* Search and Filter */}
          <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher un groupe, un thème..."
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              {/* Categories Filter */}
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  className="w-full md:w-48 pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none appearance-none"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Categories Quick Filter */}
          <div className={`mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                    selectedCategory === cat.id 
                      ? cat.color + ' text-white shadow-lg' 
                      : 'bg-white/70 text-gray-700 hover:bg-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group, index) => (
            <div
              key={group.id}
              className={`bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 delay-${
                400 + index * 100
              } hover:scale-102 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              {/* Group Header */}
              <div className={`p-6 relative ${categories.find(c => c.id === group.category)?.color.split('from-')[1].split(' ')[0]} bg-gradient-to-r ${categories.find(c => c.id === group.category)?.color}`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-white">{group.name}</h3>
                      {group.isNew && (
                        <span className="px-2 py-1 bg-white/30 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                          Nouveau
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 ${getPopularityColor(group.popularity)} rounded-full text-xs font-semibold`}>
                        {group.popularity === 'very-high' ? 'Très populaire' : 
                         group.popularity === 'high' ? 'Populaire' : 'Actif'}
                      </span>
                      <div className="flex items-center gap-1 text-white/90">
                        {group.privacy === 'public' ? (
                          <>
                            <Globe className="w-4 h-4" />
                            <span className="text-sm">Public</span>
                          </>
                        ) : (
                          <>
                            <Lock className="w-4 h-4" />
                            <span className="text-sm">Privé</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  {joinedGroups.includes(group.id) && (
                    <div className="px-3 py-1 bg-white/30 backdrop-blur-sm rounded-full flex items-center gap-2">
                      <Check className="w-4 h-4 text-white" />
                      <span className="text-sm font-semibold text-white">Membre</span>
                    </div>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {group.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Group Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {group.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-800">{group.members}</div>
                    <div className="text-sm text-gray-600">Membres</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-800">{group.active}</div>
                    <div className="text-sm text-gray-600">En ligne</div>
                  </div>
                </div>

                {/* Next Meeting */}
                <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-xl mb-6">
                  <Calendar className="w-5 h-5 text-emerald-600" />
                  <div>
                    <div className="text-sm font-semibold text-emerald-700">Prochaine réunion</div>
                    <div className="text-gray-700">{group.nextMeeting}</div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button
                    onClick={() => handleJoinGroup(group.id)}
                    className={`flex-1 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      joinedGroups.includes(group.id)
                        ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        : 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:shadow-lg hover:scale-105'
                    }`}
                  >
                    {joinedGroups.includes(group.id) ? 'Quitter le groupe' : 'Rejoindre'}
                  </button>
                  <button className="p-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all duration-300 hover:scale-105">
                    <MessageCircle className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredGroups.length === 0 && (
          <div className={`text-center py-16 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-24 h-24 mx-auto bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mb-6">
              <Search className="w-12 h-12 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Aucun groupe trouvé</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Aucun groupe ne correspond à votre recherche. Essayez d'autres mots-clés ou filtrez différemment.
            </p>
          </div>
        )}

        {/* Featured Communities */}
        <div className={`mt-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl p-8 shadow-xl transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-2">Trouvez votre communauté</h2>
              <p className="opacity-90">
                Rejoignez des milliers de personnes qui trouvent du soutien et de la connexion
              </p>
            </div>
            <button className="px-8 py-3 bg-white text-emerald-700 font-semibold rounded-xl hover:scale-105 transition-transform duration-300 flex items-center gap-2">
              Créer un groupe
              <ChevronRight className="w-5 h-5" />
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

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
}

export default Groupes;