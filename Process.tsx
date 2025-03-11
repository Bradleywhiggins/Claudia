import React from 'react';
import { Sparkles, Heart, Target, Star } from 'lucide-react';

const Process = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Your Transformation Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A step-by-step approach to lasting change and food freedom.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200 hidden md:block" />
          
          <div className="space-y-12">
            {[
              {
                icon: Sparkles,
                title: "Awareness & Understanding",
                description: "Explore your relationship with food and identify patterns that no longer serve you."
              },
              {
                icon: Heart,
                title: "Healing & Integration",
                description: "Work through emotional blocks and develop new, nurturing relationships with food and your body."
              },
              {
                icon: Target,
                title: "Strategy & Implementation",
                description: "Learn practical tools and strategies for sustainable change."
              },
              {
                icon: Star,
                title: "Embodiment & Freedom",
                description: "Experience true food freedom and body peace in your daily life."
              }
            ].map((step, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="hidden md:block w-1/2" />
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center z-10">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;