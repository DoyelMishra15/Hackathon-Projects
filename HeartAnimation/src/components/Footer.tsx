import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <a href="#home" className="text-2xl font-bold text-blue-400">
              Bolt<span className="text-purple-400">Hack</span>
            </a>
            <p className="mt-4 text-gray-300 max-w-md">
              The World's Largest Hackathon brings together thousands of creators to build, learn, and connect. Join us for an unforgettable experience of innovation and collaboration.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#schedule" className="text-gray-300 hover:text-blue-400 transition-colors">Schedule</a>
              </li>
              <li>
                <a href="#prizes" className="text-gray-300 hover:text-blue-400 transition-colors">Prizes</a>
              </li>
              <li>
                <a href="#sponsors" className="text-gray-300 hover:text-blue-400 transition-colors">Sponsors</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-blue-400 transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#register" className="text-gray-300 hover:text-blue-400 transition-colors">Register</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="block">Email:</span>
                <a href="mailto:info@bolthack.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                  info@bolthack.com
                </a>
              </li>
              <li className="text-gray-300">
                <span className="block">Phone:</span>
                <a href="tel:+14155551234" className="text-blue-400 hover:text-blue-300 transition-colors">
                  +1 (415) 555-1234
                </a>
              </li>
              <li className="text-gray-300">
                <span className="block">Address:</span>
                <address className="not-italic">
                  123 Innovation Way<br />
                  San Francisco, CA 94107<br />
                  United States
                </address>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} World's Largest Hackathon. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Code of Conduct
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;