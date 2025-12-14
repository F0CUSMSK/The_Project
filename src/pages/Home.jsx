import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  MessageCircle, 
  Bookmark, 
  Share2, 
  TrendingUp,
  Clock,
  User,
  BookOpen,
  Lightbulb,
  Sparkles,
  Calendar,
  Award,
  ThumbsUp
} from 'lucide-react';

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [likedPosts, setLikedPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState([]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Sample posts data
  const posts = [
    {
      id: 1,
      author: {
        name: "Dr. Sarah Mitchell",
        title: "Clinical Psychologist",
        avatar: "👩‍⚕️",
        verified: true
      },
      content: "Understanding anxiety isn't about eliminating it completely - it's about learning to coexist with it peacefully. Small steps matter more than giant leaps. 🌱",
      timestamp: "2 hours ago",
      likes: 234,
      comments: 45,
      category: "Mental Health"
    },
    {
      id: 2,
      author: {
        name: "Dr. James Chen",
        title: "Psychiatrist",
        avatar: "👨‍⚕️",
        verified: true
      },
      content: "Your mental health is just as important as your physical health. Taking a break isn't giving up - it's choosing to recharge. Remember: rest is productive. 💚",
      timestamp: "5 hours ago",
      likes: 567,
      comments: 89,
      category: "Self-Care"
    },
    {
      id: 3,
      author: {
        name: "Dr. Emily Rodriguez",
        title: "Therapist & Wellness Coach",
        avatar: "👩‍⚕️",
        verified: true
      },
      content: "Progress isn't always linear. Some days you'll take steps forward, other days you might feel stuck. Both are part of the healing journey. Be patient with yourself. 🌸",
      timestamp: "1 day ago",
      likes: 892,
      comments: 156,
      category: "Healing"
    }
  ];

  // Sample articles
  const articles = [
    {
      id: 1,
      title: "5 Breathing Techniques to Calm Anxiety",
      excerpt: "Discover scientifically-proven breathing exercises that can help reduce anxiety in minutes.",
      author: "Dr. Michael Brown",
      readTime: "5 min read",
      image: "🧘",
      category: "Wellness"
    },
    {
      id: 2,
      title: "The Science of Sleep and Mental Health",
      excerpt: "Learn how quality sleep directly impacts your emotional well-being and cognitive function.",
      author: "Dr. Lisa Wang",
      readTime: "8 min read",
      image: "😴",
      category: "Health"
    },
    {
      id: 3,
      title: "Building Resilience: A Practical Guide",
      excerpt: "Practical strategies to develop mental strength and bounce back from life's challenges.",
      author: "Dr. David Kumar",
      readTime: "6 min read",
      image: "💪",
      category: "Growth"
    }
  ];

  // Wellness tips
  const wellnessTips = [
    { icon: "🌞", tip: "Start your day with 5 minutes of gratitude journaling" },
    { icon: "💧", tip: "Stay hydrated - drink water throughout the day" },
    { icon: "🚶", tip: "Take short walks to clear your mind" },
    { icon: "📱", tip: "Set boundaries with screen time before bed" }
  ];

  const handleLike = (postId) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter(id => id !== postId));
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
  };

  const handleSave = (postId) => {
    if (savedPosts.includes(postId)) {
      setSavedPosts(savedPosts.filter(id => id !== postId));
    } else {
      setSavedPosts([...savedPosts, postId]);
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
        {/* Welcome Header */}
        <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            Welcome to your
            <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Wellness Hub
            </span>
          </h1>
          <p className="text-lg text-gray-600">Discover insights, tips, and support from mental health professionals</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Content - Posts */}
          <div className="lg:col-span-2 space-y-6">
            {/* Daily Wellness Tips */}
            <div className={`bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl p-6 md:p-8 shadow-xl transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Daily Wellness Tips</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {wellnessTips.map((item, index) => (
                  <div key={index} className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/30 transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <span className="text-3xl">{item.icon}</span>
                      <p className="text-white font-medium leading-relaxed">{item.tip}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Posts Feed */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-emerald-600" />
                  Latest from Professionals
                </h2>
              </div>

              {posts.map((post, index) => (
                <div 
                  key={post.id}
                  className={`bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 delay-${300 + index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                  {/* Post Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center text-2xl shadow-md">
                        {post.author.avatar}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-gray-800 text-lg">{post.author.name}</h3>
                          {post.author.verified && (
                            <Award className="w-4 h-4 text-emerald-600" fill="currentColor" />
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{post.author.title}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Clock className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-500">{post.timestamp}</span>
                        </div>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Post Content */}
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {post.content}
                  </p>

                  {/* Post Actions */}
                  <div className="flex items-center gap-6 pt-4 border-t border-gray-200">
                    <button 
                      onClick={() => handleLike(post.id)}
                      className={`flex items-center gap-2 font-semibold transition-all duration-300 hover:scale-110 ${
                        likedPosts.includes(post.id) 
                          ? 'text-red-500' 
                          : 'text-gray-600 hover:text-red-500'
                      }`}
                    >
                      <Heart 
                        className="w-5 h-5" 
                        fill={likedPosts.includes(post.id) ? 'currentColor' : 'none'}
                      />
                      <span>{post.likes + (likedPosts.includes(post.id) ? 1 : 0)}</span>
                    </button>

                    <button className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 font-semibold transition-all duration-300 hover:scale-110">
                      <MessageCircle className="w-5 h-5" />
                      <span>{post.comments}</span>
                    </button>

                    <button 
                      onClick={() => handleSave(post.id)}
                      className={`flex items-center gap-2 font-semibold transition-all duration-300 hover:scale-110 ${
                        savedPosts.includes(post.id)
                          ? 'text-emerald-600'
                          : 'text-gray-600 hover:text-emerald-600'
                      }`}
                    >
                      <Bookmark 
                        className="w-5 h-5" 
                        fill={savedPosts.includes(post.id) ? 'currentColor' : 'none'}
                      />
                    </button>

                    <button className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 font-semibold transition-all duration-300 hover:scale-110 ml-auto">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Featured Articles */}
            <div className={`bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="w-5 h-5 text-emerald-600" />
                <h2 className="text-xl font-bold text-gray-800">Featured Articles</h2>
              </div>

              <div className="space-y-4">
                {articles.map((article) => (
                  <div 
                    key={article.id}
                    className="group cursor-pointer p-4 rounded-2xl hover:bg-emerald-50 transition-all duration-300 hover:scale-102"
                  >
                    <div className="flex gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {article.image}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs font-semibold text-emerald-600 mb-1 block">
                          {article.category}
                        </span>
                        <h3 className="font-bold text-gray-800 mb-1 line-clamp-2 group-hover:text-emerald-700 transition-colors duration-300">
                          {article.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{article.author}</span>
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className={`bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-6 shadow-lg transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <h2 className="text-xl font-bold text-gray-800">Quick Actions</h2>
              </div>

              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300 hover:scale-105">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  <span className="font-semibold text-gray-700">Book a Session</span>
                </button>

                <button className="w-full flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300 hover:scale-105">
                  <User className="w-5 h-5 text-purple-600" />
                  <span className="font-semibold text-gray-700">Find a Therapist</span>
                </button>

                <button className="w-full flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300 hover:scale-105">
                  <MessageCircle className="w-5 h-5 text-purple-600" />
                  <span className="font-semibold text-gray-700">Join Support Group</span>
                </button>
              </div>
            </div>

            {/* Motivational Quote */}
            <div className={`bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border-l-4 border-emerald-500 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-gray-700 italic text-lg leading-relaxed mb-3">
                "Healing is not linear. Be patient with yourself."
              </p>
              <p className="text-sm text-gray-500 font-medium">— Dr. Sarah Mitchell</p>
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

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export default Home;