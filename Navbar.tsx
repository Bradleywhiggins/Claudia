import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 px-4 py-2 transition-all duration-300 ${
      isScrolled ? 'glass-nav' : ''
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-purple-600">
            Claudia Sammer
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="nav-link">About Me</a>
            <div className="relative group">
              <button 
                className="nav-link flex items-center"
                onMouseEnter={() => setShowServices(true)}
                onMouseLeave={() => setShowServices(false)}
              >
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {showServices && (
                <div className="absolute top-full left-0 w-48 py-2 mt-2 bg-white rounded-lg shadow-xl">
                  <a href="#eating-psychology" className="block px-4 py-2 hover:bg-purple-50">
                    Eating Psychology
                  </a>
                  <a href="#what-to-expect" className="block px-4 py-2 hover:bg-purple-50">
                    What to Expect
                  </a>
                </div>
              )}
            </div>
            <a href="#testimonials" className="nav-link">Testimonials</a>
            <a href="#faq" className="nav-link">FAQ</a>
            <a href="#book" className="primary-button">Book a Session</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <a href="#about" className="block py-2">About Me</a>
            <a href="#eating-psychology" className="block py-2">Eating Psychology</a>
            <a href="#what-to-expect" className="block py-2">What to Expect</a>
            <a href="#testimonials" className="block py-2">Testimonials</a>
            <a href="#faq" className="block py-2">FAQ</a>
            <a href="#book" className="primary-button block text-center mt-4">Book a Session</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;