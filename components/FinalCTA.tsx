
'use client';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-rose-400 via-pink-400 to-orange-400 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white rounded-full"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Your Next Chapter Can Be Better
        </h2>
        
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Breakup, pre-marriage, post-marriage — help is one session away. Take the first step towards the relationship you deserve.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://topmate.io/circleoflife/1671735"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-rose-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap"
          >
            Claim FREE 15 Min Call
          </a>
          <a 
            href="#services"
            className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-rose-600 transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            View All Services
          </a>
        </div>
        
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 text-white/80 px-4">
          <div className="flex items-center space-x-2">
            <i className="ri-shield-check-line text-lg sm:text-xl"></i>
            <span className="text-sm sm:text-base">100% Confidential</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="ri-heart-line text-lg sm:text-xl"></i>
            <span className="text-sm sm:text-base">Culturally Aware</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="ri-time-line text-lg sm:text-xl"></i>
            <span className="text-sm sm:text-base">Flexible Scheduling</span>
          </div>
        </div>
      </div>
    </section>
  );
}
