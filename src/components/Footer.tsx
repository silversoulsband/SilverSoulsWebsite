import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-6 md:mb-0">
            <img 
              src="/ss-logo-with-black-radial-gradient.jpg" 
              alt="Silver Souls Logo" 
              className="h-10 w-10 object-contain"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-silver-300 to-white bg-clip-text text-transparent">
              SILVER SOULS
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <span>Made with</span>
              <Heart size={16} className="text-red-400 fill-current" />
              <span>for music lovers everywhere</span>
            </div>
            <div className="text-sm">
              © 2024 Silver Souls. All rights reserved.
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>Cover band bringing your favorite songs to life with passion and energy.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;