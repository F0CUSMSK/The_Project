
import React, { useState } from 'react';
import { 
  FaHome, 
  FaPhone, 
  FaFacebookF, 
  FaInstagram,
  FaMapMarkerAlt,
  FaHeart
} from 'react-icons/fa';
import { 
  MdEmail, 
  MdLocationOn,
  MdPhone,
  MdAccessTime 
} from "react-icons/md";
import {
  IoCallOutline,
  IoMailOutline,
  IoLocationOutline,
  IoTimeOutline,
  IoHeartOutline
} from 'react-icons/io5';

const socialLinks = [
  { 
    icon: <FaFacebookF />, 
    href: 'https://www.facebook.com/RJDECO9.7', 
    color: 'hover:text-blue-400 hover:bg-blue-50', 
    label: 'Facebook',
    bgColor: 'bg-blue-500'
  },
  { 
    icon: <FaInstagram />, 
    href: 'https://www.instagram.com/rj.interieur/', 
    color: 'hover:text-pink-400 hover:bg-pink-50', 
    label: 'Instagram',
    bgColor: 'bg-gradient-to-r from-purple-500 to-pink-500'
  }
];

const contactInfo = [
  {
    icon: <IoLocationOutline className="text-xl" />,
    title: "Adresse",
    content: "Avenue de Yasser Arafat, Sahloul, Sousse",
    link: null
  },
  {
    icon: <IoCallOutline className="text-xl" />,
    title: "Téléphone",
    content: "+216 93 482 595",
    link: "tel:+21693482595"
  },
  {
    icon: <IoMailOutline className="text-xl" />,
    title: "Email",
    content: "jabnounirayen14@gmail.com",
    link: "mailto:jabnounirayen14@gmail.com"
  },
  {
    icon: <IoTimeOutline className="text-xl" />,
    title: "Horaires",
    content: "Lun - Sam: 9h - 18h",
    link: null
  }
];

function Footer() {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  return (
    <footer className="relative bg-gradient-to-br from-[#53705e] via-[#4a6355] to-emerald-700 text-white overflow-hidden">
     
      <div className="relative z-10">
       
        {/* Section copyright */}
        <div className="border-t border-white/20 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-300 text-sm">
                  &copy; {new Date().getFullYear()} Mind-app. Tous droits réservés.
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  Création • Innovation • Excellence
                </p>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <span>Développé par</span>
                <a 
                  href="https://moez-aloui.vercel.app/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-300 hover:text-emerald-200 font-medium transition-colors duration-300 hover:underline"
                >
                  EPI-Copro Torjan Hourse
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles CSS personnalisés */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        /* Effet de brillance sur les cartes */
        .group:hover::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          animation: shine 0.6s ease-in-out;
        }

        @keyframes shine {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        /* Animation pour les icônes sociales */
        .social-icon {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .grid {
            gap: 2rem;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
