
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="font-['Pacifico'] text-2xl text-rose-500">
              Circle of Life
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#services" className="text-gray-700 hover:text-rose-500 transition-colors cursor-pointer">
              Services
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-rose-500 transition-colors cursor-pointer">
              About
            </Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-rose-500 transition-colors cursor-pointer">
              Testimonials
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://topmate.io/rekha_gupta"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rose-500 text-white px-6 py-2 rounded-full hover:bg-rose-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              Book a Session
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-rose-500 focus:outline-none focus:text-rose-500 cursor-pointer"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                {isMenuOpen ? (
                  <i className="ri-close-line text-xl"></i>
                ) : (
                  <i className="ri-menu-line text-xl"></i>
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="#services" 
                className="block px-3 py-2 text-gray-700 hover:text-rose-500 transition-colors cursor-pointer"
                onClick={closeMenu}
              >
                Services
              </Link>
              <Link 
                href="#about" 
                className="block px-3 py-2 text-gray-700 hover:text-rose-500 transition-colors cursor-pointer"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link 
                href="#testimonials" 
                className="block px-3 py-2 text-gray-700 hover:text-rose-500 transition-colors cursor-pointer"
                onClick={closeMenu}
              >
                Testimonials
              </Link>
              <div className="px-3 py-2">
                <a
                  href="https://topmate.io/rekha_gupta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-rose-500 text-white px-4 py-2 rounded-full hover:bg-rose-600 transition-colors cursor-pointer whitespace-nowrap text-sm font-medium inline-block"
                  onClick={closeMenu}
                >
                  Book a Session
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
