'use client';

import { useState } from 'react';

export default function ServicesSection() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const categories = [
    {
      title: "Relationship Clarity Sessions",
      description: "Find direction in your relationship journey with compassionate guidance.",
      bgColor: "bg-gradient-to-br from-rose-100 to-pink-100",
      iconColor: "text-rose-600",
      icon: "ri-heart-pulse-line",
      services: [
        { 
          name: "Breakup Healing", 
          description: "Compassionate support to heal and move forward",
          link: "http://topmate.io/circleoflife/1672075",
          image: "https://readdy.ai/api/search-image?query=soft%20healing%20heart%20with%20gentle%20sunlight%20peaceful%20nature%20background%20emotional%20recovery%20warm%20comforting%20colors%20minimalist%20design%20clean%20simple&width=300&height=200&seq=breakup-healing-new&orientation=landscape"
        },
        { 
          name: "Relationship Health Check", 
          description: "Evaluate your relationship's strengths and growth areas",
          link: "http://topmate.io/circleoflife/1672098",
          image: "https://readdy.ai/api/search-image?query=two%20hands%20holding%20heart%20symbol%20soft%20pink%20background%20relationship%20wellness%20gentle%20pastel%20colors%20caring%20supportive%20atmosphere%20clean%20minimal&width=300&height=200&seq=health-check-new&orientation=landscape"
        },
        { 
          name: "Marriage Readiness", 
          description: "Discover if you're ready for the next step",
          link: "http://topmate.io/circleoflife/1672099",
          image: "https://readdy.ai/api/search-image?query=wedding%20rings%20soft%20rose%20petals%20romantic%20pastel%20pink%20background%20elegant%20minimalist%20style%20marriage%20preparation%20clean%20simple%20design&width=300&height=200&seq=marriage-readiness-new&orientation=landscape"
        },
        { 
          name: "Conflict Resolution", 
          description: "Learn healthy communication for dating couples",
          link: "http://topmate.io/circleoflife/1672100",
          image: "https://readdy.ai/api/search-image?query=peaceful%20dove%20olive%20branch%20soft%20gradient%20background%20harmony%20peace%20gentle%20pastel%20colors%20conflict%20resolution%20symbolism%20clean%20minimal&width=300&height=200&seq=conflict-resolution-new&orientation=landscape"
        }
      ]
    },
    {
      title: "Marriage Preparation Sessions",
      description: "Build a strong foundation for your upcoming marriage with expert preparation.",
      bgColor: "bg-gradient-to-br from-orange-100 to-amber-100",
      iconColor: "text-orange-600",
      icon: "ri-gift-2-line",
      services: [
        { 
          name: "Love Marriage Support", 
          description: "Navigate family dynamics and gain acceptance",
          link: "http://topmate.io/circleoflife/1672101",
          image: "https://readdy.ai/api/search-image?query=family%20gathering%20warm%20embrace%20golden%20sunset%20background%20love%20marriage%20acceptance%20warm%20yellow%20amber%20colors%20unity%20harmony%20clean%20minimal&width=300&height=200&seq=love-marriage-new&orientation=landscape"
        },
        { 
          name: "Compatibility Check", 
          description: "Ensure deep connection before commitment",
          link: "http://topmate.io/circleoflife/1672104",
          image: "https://readdy.ai/api/search-image?query=puzzle%20pieces%20fitting%20together%20soft%20amber%20background%20compatibility%20connection%20warm%20golden%20colors%20perfect%20match%20symbolism%20clean%20design&width=300&height=200&seq=compatibility-new&orientation=landscape"
        },
        { 
          name: "Hidden Issues Discovery", 
          description: "Uncover challenges early for stronger foundation",
          link: "http://topmate.io/circleoflife/1672105",
          image: "https://readdy.ai/api/search-image?query=magnifying%20glass%20revealing%20treasure%20warm%20golden%20light%20discovery%20insight%20soft%20amber%20background%20wisdom%20clarity%20clean%20minimal%20style&width=300&height=200&seq=hidden-issues-new&orientation=landscape"
        },
        { 
          name: "Communication Strengthening", 
          description: "Develop skills that make marriages thrive",
          link: "http://topmate.io/circleoflife/1672106",
          image: "https://readdy.ai/api/search-image?query=speech%20bubbles%20connecting%20heart%20center%20communication%20warm%20orange%20gradient%20background%20understanding%20connection%20clean%20minimal%20design&width=300&height=200&seq=communication-new&orientation=landscape"
        }
      ]
    },
    {
      title: "Post-Marriage & Family Harmony",
      description: "Navigate married life and family dynamics with wisdom and support.",
      bgColor: "bg-gradient-to-br from-emerald-100 to-teal-100",
      iconColor: "text-emerald-600",
      icon: "ri-home-heart-line",
      services: [
        { 
          name: "Newlywed Adjustment", 
          description: "Smooth transition into married life together",
          link: "http://topmate.io/circleoflife/1672108",
          image: "https://readdy.ai/api/search-image?query=cozy%20home%20heart%20symbol%20soft%20mint%20green%20background%20newlywed%20happiness%20peaceful%20emerald%20colors%20warm%20domestic%20harmony%20clean%20minimal&width=300&height=200&seq=newlywed-new&orientation=landscape"
        },
        { 
          name: "Partner Conflict Resolution", 
          description: "Transform disagreements into deeper understanding",
          link: "http://topmate.io/circleoflife/1672111",
          image: "https://readdy.ai/api/search-image?query=bridge%20connecting%20two%20sides%20peaceful%20water%20soft%20teal%20background%20resolution%20unity%20harmony%20peace%20clean%20minimal%20design&width=300&height=200&seq=partner-conflict-new&orientation=landscape"
        },
        { 
          name: "Family Harmony", 
          description: "Create peace between both families",
          link: "http://topmate.io/circleoflife/1672112",
          image: "https://readdy.ai/api/search-image?query=multiple%20hands%20joining%20circle%20soft%20emerald%20background%20family%20unity%20peaceful%20mint%20colors%20togetherness%20support%20clean%20minimal%20style&width=300&height=200&seq=family-consultancy-new&orientation=landscape"
        },
        { 
          name: "Pre-Pregnancy Readiness",  
          description: "Prepare emotionally for parenthood journey",
          link: "http://topmate.io/circleoflife/1672119",
          image: "https://readdy.ai/api/search-image?query=baby%20footprints%20soft%20clouds%20gentle%20sunlight%20pregnancy%20preparation%20soft%20mint%20green%20background%20hope%20new%20beginnings%20clean%20minimal&width=300&height=200&seq=pre-pregnancy-new&orientation=landscape"
        },
        { 
          name: "Post-Pregnancy Support", 
          description: "Strengthen partnership through new parenthood",
          link: "http://topmate.io/circleoflife/1672120",
          image: "https://readdy.ai/api/search-image?query=protective%20umbrella%20family%20silhouette%20soft%20teal%20background%20parental%20support%20nurturing%20emerald%20colors%20care%20protection%20clean%20minimal&width=300&height=200&seq=post-pregnancy-new&orientation=landscape"
        }
      ]
    }
  ];

  const sessionTypes = [
    { icon: "ri-phone-line", name: "On Call", color: "bg-blue-100 text-blue-700", description: "Voice consultation" },
    { icon: "ri-user-heart-line", name: "One-to-One", color: "bg-purple-100 text-purple-700", description: "In-person (Delhi NCR only)" },
    { icon: "ri-video-line", name: "Online/Zoom", color: "bg-green-100 text-green-700", description: "Video consultation" }
  ];

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-gradient-to-b from-orange-50 to-rose-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Tailored support for every relationship milestone. Choose your preferred consultation format.
          </p>
          
          {/* Session Format Badges */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
            {sessionTypes.map((type, index) => (
              <div key={index} className={`${type.color} px-2 sm:px-4 py-1 sm:py-2 rounded-full flex items-center space-x-1 sm:space-x-2 flex-shrink-0`}>
                <i className={`${type.icon} text-xs sm:text-sm`}></i>
                <div className="text-left">
                  <div className="font-semibold text-xs sm:text-sm">{type.name}</div>
                  <div className="text-xs opacity-80 hidden sm:block">{type.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Service Cards */}
        <div className="grid gap-6 sm:gap-8 max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <div key={index} className="group">
              {/* Main Card */}
              <div 
                className={`${category.bgColor} rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
                onClick={() => toggleCard(index)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 sm:space-x-4 flex-1">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                      <i className={`${category.icon} text-lg sm:text-2xl ${category.iconColor}`}></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{category.title}</h3>
                      <p className="text-gray-700 text-sm sm:text-base mb-3">{category.description}</p>
                      <div className="flex items-center space-x-4">
                        <span className="text-xs sm:text-sm text-gray-600 bg-white/60 px-2 sm:px-3 py-1 rounded-full">
                          Available: On Call • One-to-One • Online
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Prominent Dropdown Arrow */}
                  <div className="bg-white/90 hover:bg-white p-3 sm:p-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg ml-3 flex-shrink-0">
                    <i className={`ri-arrow-${expandedCard === index ? 'up' : 'down'}-s-line text-xl sm:text-2xl text-gray-700 transition-transform duration-300`}></i>
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedCard === index && (
                <div className="mt-4 bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden animate-fade-in">
                  <div className="p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                      {category.services.map((service, serviceIndex) => (
                        <div 
                          key={serviceIndex}
                          className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors group/service"
                        >
                          <div className="h-32 sm:h-40 overflow-hidden rounded-lg mb-4">
                            <img 
                              src={service.image}
                              alt={service.name}
                              className="w-full h-full object-cover object-top group-hover/service:scale-105 transition-transform duration-300"
                            />
                          </div>
                          
                          <h4 className="text-lg font-bold text-gray-800 mb-2 leading-tight">
                            {service.name}
                          </h4>
                          <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                            {service.description}
                          </p>
                          
                          {/* Session Format Badges */}
                          <div className="flex flex-wrap gap-1 mb-4">
                            {sessionTypes.map((type, typeIndex) => (
                              <span key={typeIndex} className={`${type.color} px-2 py-1 rounded-full text-xs flex items-center space-x-1`}>
                                <i className={`${type.icon} text-xs`}></i>
                                <span>{type.name}</span>
                              </span>
                            ))}
                          </div>
                          
                          {/* Book Now Button */}
                          <a 
                            href={service.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-rose-500 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full font-semibold hover:bg-rose-600 transition-colors cursor-pointer whitespace-nowrap text-center text-sm sm:text-base block"
                          >
                            Book Now
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}