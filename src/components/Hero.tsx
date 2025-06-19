import React from 'react';
import { Play, Youtube } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-silver-900/20 to-black"></div>
      <div className="absolute inset-0">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-600/20 via-gray-600/20 to-transparent"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <img 
            src="/ss-logo-with-black-radial-gradient.jpg" 
            alt="Silver Souls Logo" 
            className="mx-auto h-64 w-64 object-contain mb-6"
          />
        </div>
        
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-6 animate-slide-up">
          <span className="bg-gradient-to-r from-silver-300 via-white to-silver-400 bg-clip-text text-transparent">
            SILVER SOULS
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
          Bringing your favorite songs to life with passion and energy. 
          Experience the music you love performed with soul and authenticity.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up animation-delay-400">
          <button className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 flex items-center gap-3">
            <Youtube size={20} className="group-hover:scale-110 transition-transform" />
            Watch Videos
          </button>
          
          <button className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
            Book Us Now
          </button>
        </div>
      </div>
      <!-- Slide toggle
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
      -->
    </section>
  );
};

export default Hero;