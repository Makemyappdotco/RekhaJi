
'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const phrases = [
    'breakups',
    'family acceptance', 
    'partner communication',
    'marriage readiness',
    'post-pregnancy changes'
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (displayText.length < phrases[currentIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText(phrases[currentIndex].slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isTyping, phrases]);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url('https://readdy.ai/api/search-image?query=Two%20hands%20gently%20holding%20each%20other%20in%20warm%20golden%20sunlight%2C%20soft%20focus%20background%20with%20warm%20lighting%20creating%20an%20intimate%20and%20caring%20atmosphere%2C%20beautiful%20natural%20lighting%2C%20emotional%20connection%2C%20gentle%20touch%2C%20peaceful%20moment%2C%20romantic%20and%20warm%20tones&width=1920&height=1080&seq=hero-hands&orientation=landscape')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-orange-50/90 via-orange-50/70 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 sm:px-6 sm:py-3 rounded-full mb-8 sm:mb-10 md:mb-12 shadow-sm">
            <i className="ri-verified-badge-line text-rose-600 text-base sm:text-lg"></i>
            <span className="text-sm sm:text-base font-medium text-gray-700">Trusted by 500+ couples across India</span>
          </div>

          <div className="inline-flex items-center space-x-2 bg-rose-100 px-4 py-2 rounded-full mb-8 sm:mb-10">
            <i className="ri-heart-line text-rose-600"></i>
            <span className="text-rose-700 font-medium">Relationship & Marriage Consultancy</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-6 leading-[1.1] sm:leading-[1.15] md:leading-[1.2] max-w-5xl mx-auto">
            Turning <span className="text-rose-600">Relationship</span> Confusion<br className="hidden sm:block" /> Into <span className="text-rose-600">Clarity</span>
          </h1>

          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">I Support you with <span className="font-medium text-rose-600">{displayText}<span className="animate-pulse">|</span></span></p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 md:mb-14">
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 sm:px-5 sm:py-3 rounded-full">
              <i className="ri-shield-check-line text-emerald-600 text-sm sm:text-base"></i>
              <span className="text-sm sm:text-base font-medium text-gray-700">100% Confidential</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 sm:px-5 sm:py-3 rounded-full">
              <i className="ri-heart-line text-rose-600 text-sm sm:text-base"></i>
              <span className="text-sm sm:text-base font-medium text-gray-700">Culturally Aware</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 sm:px-5 sm:py-3 rounded-full">
              <i className="ri-video-chat-line text-blue-600 text-sm sm:text-base"></i>
              <span className="text-sm sm:text-base font-medium text-gray-700">Online/Offline Sessions</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-16 sm:mb-20 md:mb-24 justify-center">
            <a 
              href="https://topmate.io/rekha_gupta" 
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-rose-500 text-white px-10 py-4 sm:px-12 sm:py-5 rounded-full text-lg sm:text-xl font-semibold hover:bg-rose-600 transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer text-center whitespace-nowrap transform hover:scale-105"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Book a Session</span>
                <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
              </span>
            </a>
            <a 
              href="#services"
              className="group border-3 border-rose-500 text-rose-600 px-10 py-4 sm:px-12 sm:py-5 rounded-full text-lg sm:text-xl font-semibold hover:bg-rose-500 hover:text-white transition-all duration-300 cursor-pointer text-center whitespace-nowrap bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Explore Services</span>
                <i className="ri-arrow-down-line group-hover:translate-y-1 transition-transform"></i>
              </span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-gray-600">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-rose-600">500+</div>
              <div className="text-sm sm:text-base">Happy Couples</div>
            </div>
            <div className="w-px h-8 sm:h-10 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-rose-600">5+</div>
              <div className="text-sm sm:text-base">Years Experience</div>
            </div>
            <div className="w-px h-8 sm:h-10 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-rose-600">24hrs</div>
              <div className="text-sm sm:text-base">Response Time</div>
            </div>
          </div>
        </div>

        <div className="absolute top-20 right-10 w-4 h-4 bg-rose-400 rounded-full opacity-60 animate-pulse hidden sm:block"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-orange-400 rounded-full opacity-40 animate-pulse animation-delay-1000 hidden sm:block"></div>
        <div className="absolute bottom-32 right-20 w-8 h-8 bg-pink-400 rounded-full opacity-50 animate-pulse animation-delay-2000 hidden sm:block"></div>
      </div>
    </section>
  );
}
