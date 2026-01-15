
import React from 'react';

const Navbar: React.FC = () => {
  const FORM_URL = "https://docs.google.com/forms/d/11NFbPRG-NLcEMyW_9TWJ7MuPtEk06JYpfMKx5jcH9g8/viewform";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/40 backdrop-blur-lg border-b border-white/20">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <span className="text-sm font-black tracking-tight text-slate-900 uppercase cursor-default">럭키딜레이</span>
          </div>

          <div className="hidden md:flex items-center space-x-10 text-[11px] font-bold text-slate-800 uppercase tracking-widest">
            <a href="#" className="hover:text-blue-600 transition-colors">Service</a>
            <a href="#" className="hover:text-blue-600 transition-colors">EU261</a>
            <a href="#" className="hover:text-blue-600 transition-colors">FAQ</a>
          </div>

          <div className="flex items-center">
            <a 
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-bold uppercase tracking-widest bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 active:scale-95"
            >
              Start Claim
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
