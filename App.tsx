
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkyBackground from './components/SkyBackground';
import Process from './components/Process';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-slate-800 selection:bg-blue-100 selection:text-blue-900">
      <SkyBackground scrollY={scrollY} />
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Process />
          <Benefits />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
