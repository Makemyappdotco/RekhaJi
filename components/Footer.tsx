'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">C</span>
              </div>
              <div>
                <h3 className="font-[\'Pacifico\'] text-xl text-rose-400">Circle of Life</h3>
                <p className="text-sm text-gray-400">by Rekha Gupta</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Helping couples and families build stronger, happier relationships through culturally aware counseling and guidance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-500 transition-colors cursor-pointer">
                <i className="ri-facebook-line"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-500 transition-colors cursor-pointer">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-500 transition-colors cursor-pointer">
                <i className="ri-linkedin-line"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-500 transition-colors cursor-pointer">
                <i className="ri-youtube-line"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-rose-400 transition-colors cursor-pointer">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-rose-400 transition-colors cursor-pointer">About</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-rose-400 transition-colors cursor-pointer">Testimonials</a></li>
              <li><a href="https://topmate.io/rekha_gupta" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-rose-400 transition-colors cursor-pointer">Book Session</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <p className="text-gray-300 flex items-center space-x-2">
                <i className="ri-mail-line"></i>
                <span>hello@circleoflife.in</span>
              </p>
              <p className="text-gray-300 flex items-center space-x-2">
                <i className="ri-phone-line"></i>
                <span>+91 98765 43210</span>
              </p>
              <p className="text-gray-300 flex items-center space-x-2">
                <i className="ri-map-pin-line"></i>
                <span>Online & Offline Sessions</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Circle of Life by Rekha Gupta. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
