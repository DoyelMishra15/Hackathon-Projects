import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { HeroProps } from '../types';

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  date,
  location,
  ctaText,
  ctaLink
}) => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-purple-900 to-blue-950 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500 opacity-10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 opacity-10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-yellow-500 opacity-10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-24 text-center md:text-left">
        <div className="md:max-w-3xl xl:max-w-4xl">
          <div 
            className="inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 animate-fade-in-up"
          >
            <div className="flex items-center space-x-4 text-white">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">{date}</span>
              </div>
              <div className="h-4 w-px bg-white/30"></div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">{location}</span>
              </div>
            </div>
          </div>
          
          <h1 
            className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-200 leading-tight mb-6 animate-fade-in-up animation-delay-300"
          >
            {title}
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl animate-fade-in-up animation-delay-600"
          >
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-900">
            <a 
              href={ctaLink} 
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center sm:justify-start"
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#about" 
              className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      {/* Floating cards decoration - for desktop only */}
      <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 perspective-1000 z-10">
        <div className="relative w-96 h-64 animate-float animation-delay-1000">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl transform rotate-3 translate-y-4"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl transform -rotate-6"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;