import React from 'react';
import { Heart, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">About Claudia</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As a Certified Eating Psychology Coach, I help people transform their relationship with food and their bodies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
              <Heart className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Compassionate Approach</h3>
            <p className="text-gray-600">
              I believe in creating a safe, judgment-free space for healing and growth.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
              <Award className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Certified Expert</h3>
            <p className="text-gray-600">
              With extensive training in eating psychology and mind-body nutrition.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Personalized Support</h3>
            <p className="text-gray-600">
              Tailored guidance to meet your unique needs and circumstances.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;