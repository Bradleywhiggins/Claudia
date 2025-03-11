import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Consultation from './components/Consultation';
import Packages from './components/Packages';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Header />
      <About />
      <Services />
      <Process />
      <Consultation />
      <Packages />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;