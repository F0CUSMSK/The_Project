import React, { useState, useEffect } from 'react';
import {
  User,
  Settings,
  Bell,
  Shield,
  Palette,
  Moon,
  Globe,
  Eye,
  Volume2,
  Smartphone,
  Mail,
  Lock,
  Trash2,
  Download,
  LogOut,
  ChevronRight,
  Check,
  CreditCard,
  Heart,
  Calendar,
  Users,
  TrendingUp,
  Award,
  Star,
  X
} from 'lucide-react';

function AccountPreferences() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    reminders: true,
    groupUpdates: true,
    weeklyDigest: false
  });
  const [privacy, setPrivacy] = useState({
    profileVisibility: 'public',
    showActivity: true,
    allowMessages: 'friends',
    showOnlineStatus: true
  });
  const [userData, setUserData] = useState({
    name: 'Alexandre Martin',
    email: 'alex.martin@example.com',
    bio: 'Passionné de bien-être mental et de développement personnel. Je cherche à créer des connexions authentiques.',
    avatar: '👨‍💼',
    joinDate: '15 Mars 2023',
    location: 'Paris, France',
    interests: ['Méditation', 'Yoga', 'Psychologie', 'Nutrition', 'Écriture']
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tabs = [
    { id: 'profile', label: 'Profil', icon: User },
    { id: 'preferences', label: 'Préférences', icon: Settings },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Confidentialité', icon: Shield },
    { id: 'appearance', label: 'Apparence', icon: Palette },
    { id: 'account', label: 'Compte', icon: Lock }
  ];

  const stats = [
    { label: 'Jours actifs', value: '142', icon: Calendar, color: 'text-blue-500' },
    { label: 'Groupes rejoints', value: '8', icon: Users, color: 'text-emerald-500' },
    { label: 'Événements', value: '24', icon: Star, color: 'text-amber-500' },
    { label: 'Badges', value: '12', icon: Award, color: 'text-purple-500' }
  ];

  const themes = [
    { id: 'light', label: 'Clair', gradient: 'from-gray-100 to-gray-50' },
    { id: 'dark', label: 'Sombre', gradient: 'from-gray-800 to-gray-900' },
    { id: 'emerald', label: 'Émeraude', gradient: 'from-emerald-50 to-teal-50' },
    { id: 'ocean', label: 'Océan', gradient: 'from-blue-50 to-cyan-50' },
    { id: 'sunset', label: 'Couché de soleil', gradient: 'from-orange-50 to-rose-50' },
    { id: 'lavender', label: 'Lavande', gradient: 'from-violet-50 to-purple-50' }
  ];

  const handleNotificationToggle = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handlePrivacyChange = (key, value) => {
    setPrivacy(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleExportData = () => {
    // Simuler l'export des données
    alert('Vos données ont été exportées avec succès !');
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.')) {
      alert('Votre compte sera supprimé sous 30 jours.');
    }
  };

  const renderProfileTab = () => (
    <div className="space-y-8">
      {/* Profile Header */}
      <div className="bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl p-8 text-white">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="relative">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-4xl shadow-lg">
              {userData.avatar}
            </div>
            <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-white text-emerald-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
              <User className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">{userData.name}</h2>
            <p className="opacity-90 mb-3">{userData.bio}</p>
            <div className="flex flex-wrap gap-2">
              {userData.interests.map(interest => (
                <span key={interest} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                  {interest}
                </span>
              ))}
            </div>
          </div>
          <button className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-colors duration-300 font-semibold">
            Modifier le profil
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map(stat => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-10 h-10 rounded-xl bg-${stat.color.split('text-')[1].split('-')[0]}-100 flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Personal Information */}
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <User className="w-5 h-5 text-emerald-600" />
          Informations personnelles
        </h3>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
              <input
                type="text"
                value={userData.name}
                onChange={(e) => setUserData({...userData, name: e.target.value})}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={userData.email}
                onChange={(e) => setUserData({...userData, email: e.target.value})}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Localisation</label>
            <input
              type="text"
              value={userData.location}
              onChange={(e) => setUserData({...userData, location: e.target.value})}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
            <textarea
              value={userData.bio}
              onChange={(e) => setUserData({...userData, bio: e.target.value})}
              rows={3}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all resize-none"
            />
          </div>
          <div className="flex justify-end">
            <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Enregistrer les modifications
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPreferencesTab = () => (
    <div className="space-y-8">
      {/* Language and Region */}
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Globe className="w-5 h-5 text-emerald-600" />
          Langue et région
        </h3>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Langue</label>
            <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none">
              <option>Français</option>
              <option>English</option>
              <option>Español</option>
              <option>Deutsch</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Fuseau horaire</label>
            <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none">
              <option>Europe/Paris (GMT+1)</option>
              <option>UTC</option>
              <option>America/New_York (GMT-5)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Accessibility */}
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Eye className="w-5 h-5 text-emerald-600" />
          Accessibilité
        </h3>
        <div className="space-y-4">
          {[
            { label: 'Mode contraste élevé', description: 'Augmente le contraste des couleurs' },
            { label: 'Taille du texte', description: 'Ajuster la taille du texte' },
            { label: 'Réduire les animations', description: 'Diminuer les effets animés' }
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors duration-300">
              <div>
                <div className="font-medium text-gray-800">{item.label}</div>
                <div className="text-sm text-gray-600">{item.description}</div>
              </div>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                Configurer
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Audio Settings */}
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Volume2 className="w-5 h-5 text-emerald-600" />
          Paramètres audio
        </h3>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Volume des notifications</label>
            <input type="range" min="0" max="100" defaultValue="50" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-gray-800">Sons des méditations</div>
              <div className="text-sm text-gray-600">Activer les sons ambiants</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotificationsTab = () => (
    <div className="space-y-8">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Bell className="w-5 h-5 text-emerald-600" />
          Préférences de notification
        </h3>
        <div className="space-y-4">
          {Object.entries(notifications).map(([key, value]) => {
            const labels = {
              email: 'Notifications par email',
              push: 'Notifications push',
              reminders: 'Rappels de sessions',
              groupUpdates: 'Mises à jour des groupes',
              weeklyDigest: 'Résumé hebdomadaire'
            };
            
            const descriptions = {
              email: 'Recevoir des emails pour les activités importantes',
              push: 'Notifications sur votre appareil',
              reminders: 'Rappels avant vos sessions programmées',
              groupUpdates: 'Nouveaux messages dans vos groupes',
              weeklyDigest: 'Récapitulatif de votre activité hebdomadaire'
            };

            return (
              <div key={key} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors duration-300">
                <div>
                  <div className="font-medium text-gray-800">{labels[key]}</div>
                  <div className="text-sm text-gray-600">{descriptions[key]}</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={value}
                    onChange={() => handleNotificationToggle(key)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                </label>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Planificateur de notifications</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Heure de début</label>
            <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none">
              <option>08:00</option>
              <option>09:00</option>
              <option>10:00</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Heure de fin</label>
            <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none">
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
            </select>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div>
              <div className="font-medium text-gray-800">Mode silencieux le week-end</div>
              <div className="text-sm text-gray-600">Désactiver les notifications le samedi et dimanche</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-300 peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPrivacyTab = () => (
    <div className="space-y-8">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Shield className="w-5 h-5 text-emerald-600" />
          Paramètres de confidentialité
        </h3>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Visibilité du profil</label>
            <select 
              value={privacy.profileVisibility}
              onChange={(e) => handlePrivacyChange('profileVisibility', e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
            >
              <option value="public">Public (recommandé)</option>
              <option value="friends">Amis seulement</option>
              <option value="private">Privé</option>
            </select>
          </div>

          {[
            { key: 'showActivity', label: 'Afficher mon activité', description: 'Partager vos activités avec vos amis' },
            { key: 'showOnlineStatus', label: 'Afficher le statut en ligne', description: 'Montrer quand vous êtes connecté' }
          ].map(item => (
            <div key={item.key} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors duration-300">
              <div>
                <div className="font-medium text-gray-800">{item.label}</div>
                <div className="text-sm text-gray-600">{item.description}</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={privacy[item.key]}
                  onChange={() => handlePrivacyChange(item.key, !privacy[item.key])}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
              </label>
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Qui peut vous envoyer des messages</label>
            <select 
              value={privacy.allowMessages}
              onChange={(e) => handlePrivacyChange('allowMessages', e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
            >
              <option value="everyone">Tout le monde</option>
              <option value="friends">Amis seulement</option>
              <option value="none">Personne</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Sécurité des données</h3>
        <div className="space-y-4">
          <button 
            onClick={handleExportData}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors duration-300"
          >
            <div className="flex items-center gap-3">
              <Download className="w-5 h-5 text-emerald-600" />
              <div>
                <div className="font-medium text-gray-800">Exporter vos données</div>
                <div className="text-sm text-gray-600">Télécharger toutes vos informations personnelles</div>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors duration-300">
            <div className="flex items-center gap-3">
              <Eye className="w-5 h-5 text-emerald-600" />
              <div>
                <div className="font-medium text-gray-800">Voir votre historique d'activité</div>
                <div className="text-sm text-gray-600">Consulter toutes vos activités récentes</div>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );

  const renderAppearanceTab = () => (
    <div className="space-y-8">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Palette className="w-5 h-5 text-emerald-600" />
          Thème
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {themes.map(theme => (
            <button
              key={theme.id}
              onClick={() => setDarkMode(theme.id === 'dark')}
              className={`aspect-square rounded-2xl bg-gradient-to-br ${theme.gradient} p-4 flex flex-col items-center justify-center border-2 transition-all duration-300 hover:scale-105 ${
                darkMode && theme.id === 'dark' ? 'border-emerald-500' : 'border-transparent'
              }`}
            >
              <div className="text-lg font-semibold text-gray-800 mb-2">{theme.label}</div>
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-3 h-3 rounded-full bg-current opacity-20"></div>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Moon className="w-5 h-5 text-emerald-600" />
          Mode sombre
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors duration-300">
            <div>
              <div className="font-medium text-gray-800">Mode sombre automatique</div>
              <div className="text-sm text-gray-600">Basculer selon l'heure de la journée</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
            </label>
          </div>
          
          {darkMode && (
            <div className="p-4 bg-gray-50 rounded-xl">
              <label className="block text-sm font-medium text-gray-700 mb-2">Intensité du mode sombre</label>
              <input type="range" min="0" max="100" defaultValue="70" className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer" />
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderAccountTab = () => (
    <div className="space-y-8">
      {/* Security */}
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Sécurité du compte</h3>
        <div className="space-y-4">
          <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors duration-300">
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-emerald-600" />
              <div>
                <div className="font-medium text-gray-800">Changer le mot de passe</div>
                <div className="text-sm text-gray-600">Mettre à jour votre mot de passe régulièrement</div>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors duration-300">
            <div className="flex items-center gap-3">
              <Smartphone className="w-5 h-5 text-emerald-600" />
              <div>
                <div className="font-medium text-gray-800">Authentification à deux facteurs</div>
                <div className="text-sm text-gray-600">Ajouter une couche de sécurité supplémentaire</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Non activé</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </button>

          <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors duration-300">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-emerald-600" />
              <div>
                <div className="font-medium text-gray-800">Sessions actives</div>
                <div className="text-sm text-gray-600">Gérer vos appareils connectés</div>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Subscription */}
      <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-6 text-white">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Abonnement Premium</h3>
            <p className="opacity-90">Débloquez toutes les fonctionnalités avancées</p>
          </div>
          <button className="px-6 py-3 bg-white text-purple-600 rounded-xl font-semibold hover:scale-105 transition-transform duration-300">
            Voir les plans
          </button>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border-2 border-red-100">
        <h3 className="text-xl font-bold text-gray-800 mb-6 text-red-600">Zone de danger</h3>
        <div className="space-y-4">
          <button 
            onClick={handleDeleteAccount}
            className="w-full flex items-center justify-between p-4 hover:bg-red-50 rounded-xl transition-colors duration-300 text-red-600"
          >
            <div className="flex items-center gap-3">
              <Trash2 className="w-5 h-5" />
              <div>
                <div className="font-medium">Supprimer le compte</div>
                <div className="text-sm opacity-75">Supprimer définitivement votre compte et toutes vos données</div>
              </div>
            </div>
            <ChevronRight className="w-5 h-5" />
          </button>

          <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors duration-300 text-gray-700">
            <div className="flex items-center gap-3">
              <LogOut className="w-5 h-5" />
              <div>
                <div className="font-medium">Déconnexion de tous les appareils</div>
                <div className="text-sm text-gray-600">Se déconnecter de tous les appareils connectés</div>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'profile': return renderProfileTab();
      case 'preferences': return renderPreferencesTab();
      case 'notifications': return renderNotificationsTab();
      case 'privacy': return renderPrivacyTab();
      case 'appearance': return renderAppearanceTab();
      case 'account': return renderAccountTab();
      default: return renderProfileTab();
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
        <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            Compte & Préférences
          </h1>
          <p className="text-lg text-gray-600">
            Gérez vos paramètres personnels et vos préférences
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className={`lg:w-1/4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg sticky top-8">
              <nav className="space-y-2">
                {tabs.map(tab => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{tab.label}</span>
                      {activeTab === tab.id && (
                        <ChevronRight className="w-5 h-5 ml-auto" />
                      )}
                    </button>
                  );
                })}
              </nav>

              {/* Quick Stats */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="text-sm font-medium text-gray-500 mb-3">Votre activité</div>
                <div className="space-y-3">
                  {[
                    { label: 'Membre depuis', value: userData.joinDate },
                    { label: 'Dernière connexion', value: 'Aujourd\'hui, 14:30' },
                    { label: 'Version de l\'app', value: '2.4.1' }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">{item.label}</span>
                      <span className="font-medium text-gray-800">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Help */}
              <div className="mt-6">
                <button className="w-full px-4 py-3 text-emerald-600 hover:bg-emerald-50 rounded-xl transition-colors duration-300 font-medium">
                  Aide & Support
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {renderContent()}
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

        .animate-blob {
          animation: blob 7s infinite;
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

export default AccountPreferences;