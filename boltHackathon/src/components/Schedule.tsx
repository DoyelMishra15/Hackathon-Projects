import React from 'react';
import { TimelineEvent } from '../types';

interface ScheduleProps {
  events: TimelineEvent[];
}

const Schedule: React.FC<ScheduleProps> = ({ events }) => {
  return (
    <section id="schedule\" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Event Timeline</h2>
          <h3 className="mt-2 text-4xl font-bold text-gray-900">
            Hackathon Schedule
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            From applications to the final awards ceremony, here's what to expect.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
          
          <div className="space-y-12">
            {events.map((event, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div className="h-8 w-8 rounded-full border-4 border-blue-200 bg-white"></div>
                </div>
                
                {/* Date block */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} text-center md:text-right ${index % 2 === 0 ? 'md:text-left' : ''}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-transform hover:scale-105 duration-300">
                    <div className="flex md:hidden items-center justify-center mb-4">
                      <div className="h-8 w-8 rounded-full border-4 border-blue-200 bg-white"></div>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">{event.title}</h4>
                    <div className="mt-2 flex items-center justify-center md:justify-end space-x-2 text-sm text-gray-500">
                      <span className="font-semibold text-blue-600">{event.date}</span>
                      <span>•</span>
                      <span>{event.time}</span>
                    </div>
                    <p className="mt-2 text-gray-600">{event.description}</p>
                  </div>
                </div>
                
                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;