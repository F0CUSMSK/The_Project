import React from 'react';
import Logo from "../assets/avatar.png"
export default function PageLoader() {
  return (
       <div className="min-h-screen bg-gradient-to-br from-light-mint via-white to-mint flex flex-col items-center justify-center p-6">
            <img src={Logo} alt="" className="w-3xl animate-bounce" srcset="" />
            <h2 className="text-gray-400 font-bold animate-pulse">Moody A gentel Adaptative Mental Health Support Application </h2>
    </div>
  );
}
