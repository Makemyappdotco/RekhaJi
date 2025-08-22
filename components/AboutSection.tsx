"use client";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-white via-rose-50/30 to-orange-50/30 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div
        className="absolute top-20 right-10 w-32 h-32 bg-rose-100 rounded-full opacity-50 animate-bounce hidden sm:block"
        style={{ animationDuration: "3s" }}
      ></div>
      <div
        className="absolute bottom-20 left-10 w-24 h-24 bg-orange-100 rounded-full opacity-40 animate-pulse hidden sm:block"
        style={{ animationDuration: "2s" }}
      ></div>
      <div
        className="absolute top-40 left-1/4 w-16 h-16 bg-pink-100 rounded-full opacity-30 animate-ping hidden md:block"
        style={{ animationDuration: "4s" }}
      ></div>
      <div
        className="absolute top-32 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-30 animate-pulse animation-delay-1000 hidden sm:block"
        style={{ animationDuration: "2.5s" }}
      ></div>
      <div
        className="absolute bottom-20 left-20 w-16 h-16 bg-pink-200 rounded-full opacity-40 animate-bounce animation-delay-2000 hidden sm:block"
        style={{ animationDuration: "3.5s" }}
      ></div>

      {/* Mobile decorative elements - smaller and positioned differently */}
      <div
        className="absolute top-32 right-4 w-8 h-8 bg-rose-200 rounded-full opacity-30 animate-pulse sm:hidden"
        style={{ animationDuration: "2s" }}
      ></div>
      <div
        className="absolute bottom-32 left-4 w-6 h-6 bg-orange-200 rounded-full opacity-25 animate-bounce sm:hidden"
        style={{ animationDuration: "3s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-rose-100 px-4 py-2 rounded-full mb-6">
            <i className="ri-heart-line text-rose-600"></i>
            <span className="text-rose-700 font-medium">Meet Your Guide</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Your Relationship & Marriage Guide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Compassionate guidance rooted in cultural understanding and years of
            experience
          </p>
        </div>

        {/* Top Section - Image and Right Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          {/* Image Section */}
          <div className="relative">
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20Indian%20woman%20counselor%20in%20her%2040s%2C%20warm%20smile%2C%20sitting%20in%20a%20comfortable%20consultation%20room%20with%20soft%20lighting%2C%20wearing%20elegant%20Indian%20attire%2C%20compassionate%20expression%2C%20approachable%20and%20trustworthy%20appearance%2C%20natural%20lighting%2C%20professional%20yet%20warm%20atmosphere%2C%20peaceful%20background&width=600&height=700&seq=rekha-portrait-enhanced&orientation=portrait"
                alt="Rekha Gupta - Relationship Counselor"
                className="rounded-3xl shadow-2xl w-full h-[400px] sm:h-[500px] object-cover object-top"
              />
              {/* Floating credential cards */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white rounded-2xl p-3 sm:p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-rose-600">
                    100+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Happy Couples
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-2xl p-3 sm:p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-orange-600">
                    5+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Section */}
          <div className="space-y-8">
            {/* Greeting */}
            <div className="bg-gradient-to-r from-rose-100 to-orange-100 rounded-2xl p-6 border-l-4 border-rose-500">
              <p className="text-lg text-gray-800 font-medium">
                Namaste! I'm Rekha Gupta{" "}
                <span>
                  <i className="ri-pray-fill"></i>   
                </span>
              </p>
            </div>

            {/* Main content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I understand that relationships in our culture come with unique
                joys and challenges. Whether you're navigating family
                expectations, cultural differences, or simply seeking deeper
                connection, I'm here to walk this journey with you.
              </p>

              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start space-x-4 bg-white/80 rounded-xl p-4 shadow-sm">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-shield-check-line text-emerald-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Safe & Confidential
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Every session is completely private and judgment-free
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white/80 rounded-xl p-4 shadow-sm">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-global-line text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Culturally Aware
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Understanding of Indian family dynamics and traditions
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white/80 rounded-xl p-4 shadow-sm">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-lightbulb-line text-purple-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Practical Solutions
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Actionable guidance focused on real results
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                With years of experience helping couples and families across
                India, I provide practical, culturally-aware guidance. Together,
                we'll work towards the harmony and happiness you deserve in your
                relationships.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section - Under the image */}
        <div className="bg-gradient-to-r from-rose-500 to-orange-500 rounded-2xl p-8 text-white mb-20">
          <h3 className="text-2xl font-bold mb-3">
            Ready to Begin Your Journey?
          </h3>
          <p className="mb-6 opacity-90">
            Take the first step towards stronger, happier relationships with a
            personalized consultation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://topmate.io/circleoflife/1671735"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-rose-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer text-center whitespace-nowrap flex items-center justify-center space-x-2"
            >
              <span>Claim FREE 15 Min Call</span>
              <i className="ri-arrow-right-line"></i>
            </a>
            <div className="flex items-center space-x-4 text-white/90">
              <div className="flex items-center space-x-2">
                <i className="ri-time-line"></i>
                <span className="text-sm">24hr Response</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-phone-line"></i>
                <span className="text-sm">Multiple Formats</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Why Couples Choose Me
            </h3>
            <p className="text-gray-600">
              Real results from real relationships
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-heart-pulse-line text-2xl text-rose-600"></i>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Relationship Healing
              </h4>
              <p className="text-gray-600 text-sm">
                From breakup recovery to marriage preparation
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-team-line text-2xl text-orange-600"></i>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Family Harmony
              </h4>
              <p className="text-gray-600 text-sm">
                Navigating in-laws and cultural expectations
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-chat-heart-line text-2xl text-emerald-600"></i>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Communication
              </h4>
              <p className="text-gray-600 text-sm">
                Building stronger connections and understanding
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
