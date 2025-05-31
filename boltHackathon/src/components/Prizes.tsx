import React from 'react';
import { Trophy, Brain, Blocks, HeartHandshake, Palette, Cpu } from 'lucide-react';
import { PrizeCategory } from '../types';

interface PrizesProps {
  categories: PrizeCategory[];
}

const Prizes: React.FC<PrizesProps> = ({ categories }) => {
  // Map icon strings to actual components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'trophy':
        return <Trophy className="h-8 w-8" />;
      case 'brain':
        return <Brain className="h-8 w-8" />;
      case 'blocks':
        return <Blocks className="h-8 w-8" />;
      case 'heart-handshake':
        return <HeartHandshake className="h-8 w-8" />;
      case 'palette':
        return <Palette className="h-8 w-8" />;
      case 'cpu':
        return <Cpu className="h-8 w-8" />;
      default:
        return <Trophy className="h-8 w-8" />;
    }
  };

  return (
    <section id="prizes" className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Rewards</h2>
          <h3 className="mt-2 text-4xl font-bold text-gray-900">
            $125,000+ in Prizes
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Compete across multiple categories for substantial prizes and recognition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`p-3 rounded-lg ${
                      index === 0 
                        ? 'bg-yellow-100 text-yellow-600' 
                        : 'bg-blue-100 text-blue-600'
                    }`}>
                      {getIcon(category.icon)}
                    </div>
                    <h4 className="ml-3 text-xl font-bold text-gray-900">{category.title}</h4>
                  </div>
                  <div className={`text-2xl font-bold ${
                    index === 0 ? 'text-yellow-600' : 'text-blue-600'
                  }`}>
                    {category.prize}
                  </div>
                </div>
                <p className="text-gray-600">{category.description}</p>
              </div>
              <div className={`h-1 w-full ${
                index === 0 ? 'bg-yellow-400' : 'bg-blue-600'
              }`}></div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 max-w-2xl text-center">
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Additional Perks</h4>
            <p className="text-gray-600">
              All participants receive swag bags, exclusive access to workshops, networking opportunities with industry leaders, and potential internship or job offers from our sponsor companies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;