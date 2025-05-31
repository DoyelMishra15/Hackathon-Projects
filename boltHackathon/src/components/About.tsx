import React from 'react';
import { CodeIcon, Users, Zap, Globe } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">About The Event</h2>
          <h3 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
            The World's Largest Hackathon
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Join thousands of innovators for an unprecedented 48-hour hackathon experience that will redefine what's possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Hackathon participants collaborating" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 rounded-xl p-4 shadow-lg">
              <div className="text-white font-bold text-4xl">10K+</div>
              <div className="text-blue-100 font-medium">Participants</div>
            </div>
          </div>
          
          <div>
            <h4 className="text-2xl font-bold text-gray-900 mb-6">
              Where Innovation Meets Community
            </h4>
            <p className="text-lg text-gray-600 mb-6">
              The World's Largest Hackathon brings together developers, designers, and creators from across the globe to solve challenging problems, build groundbreaking products, and push the boundaries of technology.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                    <CodeIcon className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg font-medium text-gray-900">Build Something Amazing</h5>
                  <p className="mt-1 text-gray-600">
                    Work on projects that matter with cutting-edge technologies.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-100 text-purple-600">
                    <Users className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg font-medium text-gray-900">Connect With Peers</h5>
                  <p className="mt-1 text-gray-600">
                    Network with thousands of like-minded creators and industry leaders.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-100 text-yellow-600">
                    <Zap className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg font-medium text-gray-900">Win Big Prizes</h5>
                  <p className="mt-1 text-gray-600">
                    Compete for over $150,000 in prizes across multiple categories.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600">
                    <Globe className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg font-medium text-gray-900">Hybrid Format</h5>
                  <p className="mt-1 text-gray-600">
                    Participate in-person in San Francisco or virtually from anywhere in the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;