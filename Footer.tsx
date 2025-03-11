import React from 'react';
import { Instagram, Facebook, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-purple-900 text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          opacity: 0.15
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Claudia Sammer</h3>
            <p className="text-purple-200 mb-6">
              Certified Eating Psychology Coach helping you transform your relationship with food and body.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-purple-200 hover:text-white transition-colors duration-200">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-purple-200 hover:text-white transition-colors duration-200">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-purple-200 hover:text-white transition-colors duration-200">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-purple-200 hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="#services" className="text-purple-200 hover:text-white transition-colors duration-200">Services</a></li>
              <li><a href="#testimonials" className="text-purple-200 hover:text-white transition-colors duration-200">Testimonials</a></li>
              <li><a href="#faq" className="text-purple-200 hover:text-white transition-colors duration-200">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:hello@claudiasammer.com" className="text-purple-200 hover:text-white transition-colors duration-200">
                  hello@claudiasammer.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-purple-200 mb-4">
              Subscribe for tips and insights on food freedom and body peace.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-lg bg-purple-800 text-white placeholder-purple-300 border border-purple-700 focus:outline-none focus:border-purple-500"
              />
              <button
                type="submit"
                className="w-full px-6 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-purple-100 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-purple-800 text-center text-purple-200">
          <p>&copy; {new Date().getFullYear()} Claudia Sammer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;