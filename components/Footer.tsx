
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/40 border-t border-slate-100 pt-16 pb-12 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-slate-800 uppercase mb-4 block">Lucky Delay</span>
            <p className="text-[11px] text-slate-400 max-w-xs leading-relaxed font-light">
              항공 지연으로 인한 승객의 불편함을 덜어드리고,<br />
              정당한 권리 보상을 위해 최선을 다합니다.
            </p>
          </div>
          
          <div className="flex space-x-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
            <a href="mailto:contact@luckydelay.com" className="hover:text-slate-900 transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-slate-300 uppercase tracking-widest font-medium">
            © 2024 Lucky Delay Inc. All rights reserved.
          </p>
          <p className="text-[9px] text-slate-200">
            럭키딜레이 주식회사 | 사업자등록번호: 000-00-00000
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
