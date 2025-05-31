import React from 'react';
import { SponsorTier } from '../types';

interface SponsorsProps {
  tiers: SponsorTier[];
}

const Sponsors: React.FC<SponsorsProps> = ({ tiers }) => {
  return (
    <section id="sponsors\" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Our Partners</h2>
          <h3 className="mt-2 text-4xl font-bold text-gray-900">
            Sponsored By
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Supported by leading technology companies and organizations committed to innovation.
          </p>
        </div>

        <div className="space-y-12">
          {tiers.map((tier, tierIndex) => (
            <div key={tierIndex} className="space-y-5">
              <h4 className="text-center text-lg font-semibold text-gray-900">
                {tier.name} Sponsors
              </h4>
              
              <div className={`grid grid-cols-1 ${
                tier.name === 'Platinum' 
                  ? 'md:grid-cols-2' 
                  : tier.name === 'Gold' 
                    ? 'md:grid-cols-3' 
                    : 'md:grid-cols-4'
              } gap-8`}>
                {tier.sponsors.map((sponsor, sponsorIndex) => (
                  <a 
                    key={sponsorIndex} 
                    href={sponsor.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`flex flex-col items-center justify-center p-6 bg-white rounded-lg border border-gray-100 shadow-md transition-all duration-300 hover:shadow-lg ${
                      tier.name === 'Platinum' ? 'aspect-[3/2]' : 'aspect-square'
                    }`}
                  >
                    <div className="text-center">
                      <div className="w-full flex items-center justify-center">
                        <img 
                          src={sponsor.logo} 
                          alt={`${sponsor.name} logo`} 
                          className={`max-h-${tier.name === 'Platinum' ? '24' : '16'} max-w-full object-contain`}
                        />
                      </div>
                      <div className={`mt-4 font-medium ${
                        tier.name === 'Platinum' 
                          ? 'text-xl' 
                          : tier.name === 'Gold' 
                            ? 'text-lg' 
                            : 'text-base'
                      } text-gray-900`}>
                        {sponsor.name}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h4 className="text-2xl font-semibold text-gray-900 mb-4">
            Interested in sponsoring?
          </h4>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Showcase your brand to thousands of talented developers and innovators.
            Gain access to top talent and breakthrough projects.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Become a Sponsor
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;