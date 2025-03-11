import React from 'react';

const Header = () => {
  return (
    <header className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/65" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Call a Ceasefire with Your Body
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
          Break Free from Dieting - Transform Your Relationship with Food
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#book" className="primary-button">
            Book Your Free Consultation
          </a>
          <a 
            href="#services" 
            className="px-6 py-3 rounded-full font-semibold border-2 border-white text-white
                     hover:bg-white hover:text-purple-600 transition-colors duration-200"
          >
            Learn More
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;