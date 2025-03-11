import React from 'react';
import { Video, MessageCircle, Clock } from 'lucide-react';

const Consultation = () => {
  return (
    <section id="book" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">Book Your Free Consultation</h2>
              <p className="text-gray-600 mb-8">
                Take the first step towards food freedom with a complimentary 30-minute Zoom consultation.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Video className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold">Video Conference</h3>
                    <p className="text-gray-600">Connect from anywhere via Zoom</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold">30 Minutes</h3>
                    <p className="text-gray-600">Discuss your goals and journey</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold">Personalized Plan</h3>
                    <p className="text-gray-600">Get clarity on next steps</p>
                  </div>
                </div>
              </div>

              <a 
                href="#" 
                className="primary-button inline-block w-full text-center"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://calendly.com/claudia-sammer/consultation', '_blank');
                }}
              >
                Schedule Your Free Call
              </a>
            </div>
            
            <div 
              className="md:w-1/2 bg-cover bg-center"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;