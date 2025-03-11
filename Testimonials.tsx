import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah M.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    text: "Working with Claudia transformed my relationship with food. For the first time in my life, I feel at peace with my body and eating habits.",
    location: "New York, NY"
  },
  {
    name: "Michael R.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    text: "I was skeptical at first, but Claudia's approach helped me break free from years of dieting cycles. Her compassionate guidance made all the difference.",
    location: "Los Angeles, CA"
  },
  {
    name: "Emily L.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    text: "The tools and insights I gained through our sessions continue to support me daily. I'm grateful for this transformative experience.",
    location: "Chicago, IL"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Client Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from people who've transformed their relationship with food.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;