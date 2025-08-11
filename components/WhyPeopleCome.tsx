'use client';

export default function WhyPeopleCome() {
  const reasons = [
    {
      icon: "ri-heart-line",
      title: "For Unmarried Couples",
      description: "Clarity before commitment, breakup healing, stronger bonds."
    },
    {
      icon: "ri-gift-line",
      title: "For Pre-Marital Couples",
      description: "Spot hidden issues, prepare for marriage with confidence."
    },
    {
      icon: "ri-home-heart-line",
      title: "For Married Couples & Families",
      description: "Resolve conflicts, improve family harmony."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why People Come to Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every relationship stage has its unique challenges. I'm here to guide you through each one.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center p-8 rounded-2xl bg-gradient-to-br from-rose-50 to-orange-50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-rose-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${reason.icon} text-2xl text-rose-600`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}