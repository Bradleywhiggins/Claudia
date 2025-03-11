import React from 'react';
import { Brain, Clock, Heart, Target } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive support for your journey to food freedom and body peace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div id="eating-psychology" className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <Brain className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Eating Psychology Coaching</h3>
            <p className="text-gray-600 mb-6">
              Transform your relationship with food through a mind-body-heart approach that addresses the psychology behind eating habits.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <Heart className="w-5 h-5 text-purple-600 mr-3" />
                Emotional eating support
              </li>
              <li className="flex items-center text-gray-600">
                <Target className="w-5 h-5 text-purple-600 mr-3" />
                Body image healing
              </li>
              <li className="flex items-center text-gray-600">
                <Clock className="w-5 h-5 text-purple-600 mr-3" />
                Sustainable lifestyle changes
              </li>
            </ul>
          </div>

          <div id="what-to-expect" className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">What to Expect</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-2">Initial Consultation</h4>
                <p className="text-gray-600">
                  A 30-minute complimentary call to discuss your goals and how we can work together.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Regular Sessions</h4>
                <p className="text-gray-600">
                  50-minute sessions focused on your unique journey, combining practical strategies with deeper psychological work.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Ongoing Support</h4>
                <p className="text-gray-600">
                  Email support between sessions and resources to support your progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;