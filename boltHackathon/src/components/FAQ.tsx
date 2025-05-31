import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ } from '../types';

interface FAQProps {
  faqs: FAQ[];
}

const FAQSection: React.FC<FAQProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Questions & Answers</h2>
          <h3 className="mt-2 text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Find answers to common questions about the World's Largest Hackathon.
          </p>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-gray-200 rounded-xl bg-white shadow-md overflow-hidden">
          {faqs.map((faq, index) => (
            <div key={index} className="group">
              <button
                className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 group-hover:text-blue-600" />
                )}
              </button>
              <div 
                className={`px-6 pb-6 transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;