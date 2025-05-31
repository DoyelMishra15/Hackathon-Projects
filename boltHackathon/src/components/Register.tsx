import React, { useState } from 'react';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    experience: '',
    format: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would submit the form data to a server
    alert('Registration submitted! We will contact you with next steps.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      role: '',
      experience: '',
      format: '',
      message: ''
    });
  };

  return (
    <section id="register" className="py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-300 tracking-wide uppercase">Join Us</h2>
          <h3 className="mt-2 text-4xl font-bold text-white">
            Register Now
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-100">
            Secure your spot in the World's Largest Hackathon and be part of something extraordinary.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl border border-white/20">
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-blue-100">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full bg-white/5 border border-blue-300/30 rounded-md shadow-sm py-2 px-3 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-100">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full bg-white/5 border border-blue-300/30 rounded-md shadow-sm py-2 px-3 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-blue-100">
                    Your Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full bg-white/5 border border-blue-300/30 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="" disabled className="text-gray-800">Select your role</option>
                    <option value="developer" className="text-gray-800">Developer</option>
                    <option value="designer" className="text-gray-800">Designer</option>
                    <option value="product" className="text-gray-800">Product Manager</option>
                    <option value="data" className="text-gray-800">Data Scientist</option>
                    <option value="other" className="text-gray-800">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-blue-100">
                    Experience Level
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full bg-white/5 border border-blue-300/30 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="" disabled className="text-gray-800">Select your experience</option>
                    <option value="beginner" className="text-gray-800">Beginner (0-1 years)</option>
                    <option value="intermediate" className="text-gray-800">Intermediate (1-3 years)</option>
                    <option value="advanced" className="text-gray-800">Advanced (3-5 years)</option>
                    <option value="expert" className="text-gray-800">Expert (5+ years)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-100">
                  Participation Format
                </label>
                <div className="mt-2 space-x-6 flex">
                  <div className="flex items-center">
                    <input
                      id="format-inperson"
                      name="format"
                      type="radio"
                      value="in-person"
                      checked={formData.format === 'in-person'}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <label htmlFor="format-inperson" className="ml-2 block text-sm text-blue-100">
                      In-person (San Francisco)
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="format-virtual"
                      name="format"
                      type="radio"
                      value="virtual"
                      checked={formData.format === 'virtual'}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <label htmlFor="format-virtual" className="ml-2 block text-sm text-blue-100">
                      Virtual (Remote)
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-blue-100">
                  Why do you want to participate? (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-white/5 border border-blue-300/30 rounded-md shadow-sm py-2 px-3 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell us a bit about yourself and what you hope to achieve"
                ></textarea>
              </div>

              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-blue-100">
                  I agree to the <a href="#" className="text-blue-300 hover:text-blue-200">Terms and Conditions</a> and <a href="#" className="text-blue-300 hover:text-blue-200">Privacy Policy</a>
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;