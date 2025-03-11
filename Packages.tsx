import React from 'react';
import { Check } from 'lucide-react';

const packages = [
  {
    name: "Starter Journey",
    sessions: 5,
    price: 425,
    perSession: 85,
    features: [
      "5 x 50-minute sessions",
      "Email support between sessions",
      "Personalized resources",
      "Valid for 2 months"
    ]
  },
  {
    name: "Transformation Path",
    sessions: 10,
    price: 820,
    perSession: 82,
    popular: true,
    features: [
      "10 x 50-minute sessions",
      "Priority email support",
      "Customized action plans",
      "Resource library access",
      "Valid for 4 months"
    ]
  },
  {
    name: "Deep Dive",
    sessions: 20,
    price: 1580,
    perSession: 79,
    features: [
      "20 x 50-minute sessions",
      "Unlimited email support",
      "Comprehensive resource library",
      "Custom meditation recordings",
      "Valid for 8 months"
    ]
  },
  {
    name: "Complete Journey",
    sessions: 30,
    price: 2220,
    perSession: 74,
    features: [
      "30 x 50-minute sessions",
      "VIP email & text support",
      "All digital resources",
      "Custom meditation library",
      "Valid for 12 months"
    ]
  }
];

const Packages = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Investment Options</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the package that best supports your transformation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`package-card relative ${pkg.popular ? 'border-2 border-purple-500' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-purple-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">${pkg.price}</span>
                <span className="text-gray-600 ml-2">(${pkg.perSession}/session)</span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#"
                className="block text-center py-3 px-6 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://calendly.com/claudia-sammer/consultation', '_blank');
                }}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;