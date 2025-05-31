import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/About';
import Schedule from './components/Schedule';
import Prizes from './components/Prizes';
import Sponsors from './components/Sponsors';
import FAQSection from './components/FAQ';
import Team from './components/Team';
import Register from './components/Register';
import Footer from './components/Footer';

import { navItems, heroData, timelineEvents, prizeCategories, sponsorTiers, faqs, teamMembers } from './data/siteData';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar items={navItems} />
      <Hero {...heroData} />
      <AboutSection />
      <Schedule events={timelineEvents} />
      <Prizes categories={prizeCategories} />
      <Sponsors tiers={sponsorTiers} />
      <FAQSection faqs={faqs} />
      <Team members={teamMembers} />
      <Register />
      <Footer />
    </div>
  );
}

export default App;