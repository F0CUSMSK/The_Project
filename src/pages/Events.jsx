import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  Search, 
  Filter, 
  Star,
  Heart,
  Share2,
  ChevronRight,
  CalendarDays,
  Video,
  Mic,
  BookOpen,
  Coffee,
  Music,
  Zap,
  Home,
  Cloud,
  Trees,
  Sunrise
} from 'lucide-react';

function Events() {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [savedEvents, setSavedEvents] = useState([2, 4]);
  const [selectedDate, setSelectedDate] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filters = [
    { id: 'all', label: 'Tous les événements', icon: CalendarDays },
    { id: 'virtual', label: 'En ligne', icon: Video },
    { id: 'in-person', label: 'En présentiel', icon: MapPin },
    { id: 'workshop', label: 'Ateliers', icon: BookOpen },
    { id: 'social', label: 'Sorties sociales', icon: Coffee },
    { id: 'nature', label: 'Nature', icon: Trees }, // Changé de Nature à Trees
    { id: 'therapy', label: 'Thérapies', icon: Mic },
  ];

  const dates = [
    { id: 'all', label: 'Toutes dates' },
    { id: 'today', label: "Aujourd'hui" },
    { id: 'tomorrow', label: 'Demain' },
    { id: 'weekend', label: 'Ce week-end' },
    { id: 'next-week', label: 'Semaine prochaine' },
  ];

  const events = [
    {
      id: 1,
      title: "Méditation collective en forêt",
      description: "Session de méditation guidée en pleine nature pour se reconnecter à soi-même",
      date: "15 Déc",
      day: "Dimanche",
      time: "10:00 - 12:00",
      location: "Bois de Vincennes, Paris",
      type: "in-person",
      category: "nature",
      attendees: 42,
      maxAttendees: 50,
      price: "Gratuit",
      organizer: "Nature & Bien-être",
      featured: true,
      tags: ["méditation", "nature", "plein air"]
    },
    {
      id: 2,
      title: "Atelier Gestion du Stress",
      description: "Techniques pratiques pour réduire le stress au quotidien avec des experts",
      date: "16 Déc",
      day: "Lundi",
      time: "18:30 - 20:30",
      location: "En ligne (Zoom)",
      type: "virtual",
      category: "workshop",
      attendees: 127,
      maxAttendees: 200,
      price: "15€",
      organizer: "Centre de Thérapie",
      featured: true,
      tags: ["stress", "atelier", "expert"]
    },
    {
      id: 3,
      title: "Café Social - Parler sans tabou",
      description: "Rencontre informelle pour échanger autour d'un café dans un cadre bienveillant",
      date: "17 Déc",
      day: "Mardi",
      time: "19:00 - 21:00",
      location: "Café des Arts, Paris 11e",
      type: "in-person",
      category: "social",
      attendees: 28,
      maxAttendees: 30,
      price: "Consommation offerte",
      organizer: "Communauté Solidarité",
      featured: false,
      tags: ["social", "rencontre", "échange"]
    },
    {
      id: 4,
      title: "Groupe de parole - Anxiété",
      description: "Session de partage animée par un psychologue spécialisé",
      date: "18 Déc",
      day: "Mercredi",
      time: "20:00 - 22:00",
      location: "En ligne (Google Meet)",
      type: "virtual",
      category: "therapy",
      attendees: 35,
      maxAttendees: 40,
      price: "10€",
      organizer: "Dr. Sarah Martin",
      featured: false,
      tags: ["anxiété", "groupe", "psychologue"]
    },
    {
      id: 5,
      title: "Yoga du rire",
      description: "Session de yoga combiné à des exercices de rire pour libérer les tensions",
      date: "19 Déc",
      day: "Jeudi",
      time: "09:00 - 10:30",
      location: "Parc Montsouris, Paris 14e",
      type: "in-person",
      category: "workshop",
      attendees: 56,
      maxAttendees: 60,
      price: "Gratuit",
      organizer: "Association Yoga Joyeux",
      featured: true,
      tags: ["yoga", "rire", "énergie"]
    },
    {
      id: 6,
      title: "Soirée musique relaxante",
      description: "Concert de musique douce et méditative pour se détendre",
      date: "20 Déc",
      day: "Vendredi",
      time: "20:30 - 22:30",
      location: "Salle Harmonie, Paris 5e",
      type: "in-person",
      category: "social",
      attendees: 89,
      maxAttendees: 100,
      price: "12€",
      organizer: "Musicothérapie Paris",
      featured: false,
      tags: ["musique", "détente", "concert"]
    },
    {
      id: 7,
      title: "Consultation collective - Burnout",
      description: "Discussion interactive avec un coach spécialisé en prévention du burnout",
      date: "21 Déc",
      day: "Samedi",
      time: "14:00 - 16:00",
      location: "En ligne (Teams)",
      type: "virtual",
      category: "therapy",
      attendees: 63,
      maxAttendees: 80,
      price: "Gratuit",
      organizer: "Institut du Bien-être",
      featured: true,
      tags: ["burnout", "prévention", "coaching"]
    },
    {
      id: 8,
      title: "Marche contemplative au lever du soleil",
      description: "Promenade silencieuse pour observer la nature et méditer en marchant",
      date: "22 Déc",
      day: "Dimanche",
      time: "07:00 - 09:00",
      location: "Bois de Boulogne",
      type: "in-person",
      category: "nature",
      attendees: 31,
      maxAttendees: 40,
      price: "5€",
      organizer: "Guide Nature Méditative",
      featured: false,
      tags: ["marche", "lever soleil", "méditation"]
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesFilter = selectedFilter === 'all' || event.type === selectedFilter;
    
    // Filtre de date simplifié (dans une vraie app, il faudrait gérer les vraies dates)
    const matchesDate = selectedDate === 'all' || true; // Pour la démo
    
    return matchesSearch && matchesFilter && matchesDate;
  });

  const handleSaveEvent = (eventId) => {
    if (savedEvents.includes(eventId)) {
      setSavedEvents(savedEvents.filter(id => id !== eventId));
    } else {
      setSavedEvents([...savedEvents, eventId]);
    }
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'virtual': return 'bg-blue-100 text-blue-700';
      case 'in-person': return 'bg-emerald-100 text-emerald-700';
      case 'workshop': return 'bg-purple-100 text-purple-700';
      case 'therapy': return 'bg-amber-100 text-amber-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getTypeIcon = (type) => {
    switch(type) {
      case 'virtual': return Video;
      case 'in-person': return MapPin;
      case 'workshop': return BookOpen;
      case 'therapy': return Mic;
      case 'nature': return Trees; // Changé ici aussi
      default: return Calendar;
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
                <Calendar className="w-10 h-10 text-emerald-600" />
                Événements & Sorties
              </h1>
              <p className="text-lg text-gray-600">
                Découvrez des activités collectives pour votre bien-être mental et social
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Proposer un événement
              </button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm">
              <div className="text-2xl font-bold text-gray-800">24+</div>
              <div className="text-sm text-gray-600">Événements ce mois</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm">
              <div className="text-2xl font-bold text-gray-800">156</div>
              <div className="text-sm text-gray-600">Participants hier</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm">
              <div className="text-2xl font-bold text-gray-800">8</div>
              <div className="text-sm text-gray-600">En ligne actuellement</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm">
              <div className="text-2xl font-bold text-gray-800">12</div>
              <div className="text-sm text-gray-600">Organisateurs</div>
            </div>
          </div>

          {/* Search and Filter */}
          <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg mb-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher un événement, une activité..."
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              {/* Filters */}
              <div className="flex gap-3 overflow-x-auto pb-2 lg:pb-0">
                {filters.map(filter => {
                  const Icon = filter.icon;
                  return (
                    <button
                      key={filter.id}
                      onClick={() => setSelectedFilter(filter.id)}
                      className={`flex-shrink-0 px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                        selectedFilter === filter.id 
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md' 
                          : 'bg-white text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="whitespace-nowrap">{filter.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Date Filters */}
            <div className="flex gap-2 mt-4 overflow-x-auto">
              {dates.map(date => (
                <button
                  key={date.id}
                  onClick={() => setSelectedDate(date.id)}
                  className={`flex-shrink-0 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    selectedDate === date.id 
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {date.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Events */}
        <div className={`mb-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Star className="w-6 h-6 text-amber-500 fill-current" />
              Événements à ne pas manquer
            </h2>
            <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300 flex items-center gap-1">
              Voir tout
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredEvents.filter(e => e.featured).map(event => {
              const TypeIcon = getTypeIcon(event.type);
              return (
                <div 
                  key={event.id}
                  className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-emerald-100"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-3 py-1 ${getTypeColor(event.type)} rounded-full text-xs font-semibold flex items-center gap-1`}>
                            <TypeIcon className="w-3 h-3" />
                            {event.type === 'virtual' ? 'En ligne' : 'En présentiel'}
                          </span>
                          {event.featured && (
                            <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold flex items-center gap-1">
                              <Star className="w-3 h-3 fill-current" />
                              Populaire
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                      </div>
                      <button
                        onClick={() => handleSaveEvent(event.id)}
                        className="p-2 hover:bg-white/50 rounded-lg transition-colors duration-300"
                      >
                        <Heart 
                          className={`w-5 h-5 ${
                            savedEvents.includes(event.id) 
                              ? 'text-red-500 fill-current' 
                              : 'text-gray-400'
                          }`}
                        />
                      </button>
                    </div>

                    {/* Event Details */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                          <Calendar className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">Date</div>
                          <div className="font-semibold text-gray-800">{event.date} • {event.day}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                          <Clock className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">Heure</div>
                          <div className="font-semibold text-gray-800">{event.time}</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        <MapPin className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Lieu</div>
                        <div className="font-semibold text-gray-800">{event.location}</div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-6">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-700">{event.attendees} participants</span>
                        <span className="text-gray-600">Max: {event.maxAttendees}</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full"
                          style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button className="flex-1 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                        S'inscrire • {event.price}
                      </button>
                      <button className="p-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all duration-300">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* All Events */}
        <div className={`mb-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Tous les événements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.filter(e => !e.featured).map((event, index) => {
              const TypeIcon = getTypeIcon(event.type);
              return (
                <div
                  key={event.id}
                  className={`bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-102 border border-gray-100 ${
                    index > 3 ? 'lg:col-span-1' : ''
                  }`}
                >
                  <div className="p-5">
                    {/* Event Header */}
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-2 py-1 ${getTypeColor(event.type)} rounded-full text-xs font-semibold`}>
                            {event.type === 'virtual' ? 'En ligne' : 'Présentiel'}
                          </span>
                          <span className="text-xs font-semibold text-gray-500">{event.category}</span>
                        </div>
                        <h3 className="font-bold text-gray-800 mb-2 line-clamp-2">{event.title}</h3>
                      </div>
                      <button
                        onClick={() => handleSaveEvent(event.id)}
                        className="p-1 hover:bg-gray-100 rounded-lg transition-colors duration-300"
                      >
                        <Heart 
                          className={`w-4 h-4 ${
                            savedEvents.includes(event.id) 
                              ? 'text-red-500 fill-current' 
                              : 'text-gray-400'
                          }`}
                        />
                      </button>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>

                    {/* Details */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="font-medium text-gray-700">{event.date} • {event.day}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="font-medium text-gray-700">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="font-medium text-gray-700 line-clamp-1">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="font-medium text-gray-700">{event.attendees} participants</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {event.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm text-gray-500">Organisé par</div>
                        <div className="font-medium text-gray-800">{event.organizer}</div>
                      </div>
                      <button className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-xl font-semibold text-sm hover:bg-emerald-100 transition-colors duration-300">
                        {event.price}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className={`text-center py-16 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-24 h-24 mx-auto bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mb-6">
              <Calendar className="w-12 h-12 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Aucun événement trouvé</h3>
            <p className="text-gray-600 max-w-md mx-auto mb-6">
              Aucun événement ne correspond à vos critères. Essayez d'autres filtres ou consultez les événements à venir.
            </p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedFilter('all');
                setSelectedDate('all');
              }}
              className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}

        {/* Upcoming Calendar */}
        <div className={`bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Calendrier des événements</h2>
              <p className="text-gray-600">Ne manquez rien de ce qui arrive bientôt</p>
            </div>
            <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-300">
              Voir le calendrier complet
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.slice(0, 3).map(event => (
              <div key={event.id} className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-4 border border-emerald-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-white rounded-xl flex flex-col items-center justify-center shadow-sm">
                    <span className="font-bold text-emerald-700">{event.date.split(' ')[0]}</span>
                    <span className="text-xs text-gray-600">{event.date.split(' ')[1]}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{event.title}</div>
                    <div className="text-sm text-gray-600">{event.time}</div>
                  </div>
                </div>
                <button className="w-full py-2 bg-white text-emerald-700 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors duration-300">
                  + Ajouter à mon agenda
                </button>
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

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
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

export default Events;