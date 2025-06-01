import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';
import { TeamMember } from '../types';

interface TeamProps {
  members: TeamMember[];
}

const Team: React.FC<TeamProps> = ({ members }) => {
  return (
    <section id="team\" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Our Team</h2>
          <h3 className="mt-2 text-4xl font-bold text-gray-900">
            Meet The Organizers
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            The dedicated individuals working behind the scenes to make the World's Largest Hackathon possible.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-end">
                  <div className="p-4 w-full">
                    <h4 className="text-xl font-bold text-white">{member.name}</h4>
                    <p className="text-blue-200">{member.role}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 flex justify-center space-x-4">
                {member.linkedIn && (
                  <a 
                    href={member.linkedIn} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}
                {member.twitter && (
                  <a 
                    href={member.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-500 hover:text-blue-400 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                )}
                {member.github && (
                  <a 
                    href={member.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;