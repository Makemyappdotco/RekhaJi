
'use client';

import { useEffect, useState } from 'react';

export default function TestimonialsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const testimonials = [
    {
      name: "Priya & Arjun",
      city: "Mumbai",
      before: "We were constantly fighting about family expectations and couldn't see eye to eye on our future together.",
      after: "Rekha Ji helped us communicate better and find common ground. We're now happily married and know how to handle disagreements constructively.",
      rating: 5
    },
    {
      name: "Meera",
      city: "Delhi",
      before: "After my breakup, I was completely lost and couldn't trust my judgment about relationships anymore.",
      after: "Through Rekha Ji's guidance, I healed from my past hurt and learned to value myself. I'm now in a healthy relationship built on mutual respect.",
      rating: 5
    },
    {
      name: "Rohit & Sneha",
      city: "Bangalore",
      before: "Our arranged marriage felt like we were strangers living together. We barely communicated beyond daily logistics.",
      after: "Rekha Ji taught us how to connect emotionally and build intimacy. We now understand each other's needs and feel like true partners.",
      rating: 5
    }
  ];

  if (!mounted) {
    return (
      <section id="testimonials" className="py-16 bg-gradient-to-b from-rose-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full mb-4">
              <div className="w-4 h-4 bg-rose-600 rounded"></div>
              <span className="text-rose-700 font-medium">Success Stories</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Real Stories, Real Transformations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how couples and individuals have transformed their relationships with guidance and support.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                <div className="bg-gradient-to-r from-rose-500 to-orange-500 p-6">
                  <div className="h-6 bg-white/20 rounded mb-2"></div>
                  <div className="h-4 bg-white/20 rounded w-1/2"></div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="bg-gray-100 p-4 rounded-xl">
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-12 bg-gray-200 rounded"></div>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-xl">
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-12 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-b from-rose-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full mb-4">
            <i className="ri-chat-heart-line text-rose-600"></i>
            <span className="text-rose-700 font-medium">Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Real Stories, Real Transformations</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how couples and individuals have transformed their relationships with guidance and support.
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-rose-500 to-orange-500 p-6 text-white">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-rose-100 text-sm">{testimonial.city}</p>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-yellow-300 text-sm"></i>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Before */}
                <div className="bg-red-50 p-4 rounded-xl border-l-4 border-red-300">
                  <div className="flex items-center space-x-2 mb-2">
                    <i className="ri-emotion-sad-line text-red-500"></i>
                    <p className="text-sm font-semibold text-red-700">Before:</p>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed italic">"{testimonial.before}"</p>
                </div>
                
                {/* After */}
                <div className="bg-emerald-50 p-4 rounded-xl border-l-4 border-emerald-300">
                  <div className="flex items-center space-x-2 mb-2">
                    <i className="ri-emotion-happy-line text-emerald-500"></i>
                    <p className="text-sm font-semibold text-emerald-700">After:</p>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed italic">"{testimonial.after}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Ready to Transform Your Relationship?</h3>
          <p className="text-gray-600 mb-6">Join hundreds of couples who have found clarity and happiness through personalized guidance.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://topmate.io/rekha_gupta"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rose-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-rose-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              Start Your Journey Today
            </a>
            <a 
              href="#services"
              className="border-2 border-rose-500 text-rose-600 px-8 py-3 rounded-full font-semibold hover:bg-rose-500 hover:text-white transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
