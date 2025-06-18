
import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import Blogs from '../components/Blogs';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-black text-white">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        {activeSection === 'home' && <Hero />}
        {activeSection === 'about' && <About />}
        {activeSection === 'portfolio' && <Portfolio />}
        {activeSection === 'services' && <Services />}
        {activeSection === 'blogs' && <Blogs />}
        {activeSection === 'reviews' && <Reviews />}
        {activeSection === 'contact' && <Contact />}
      </main>
    </div>
  );
};

export default Index;
