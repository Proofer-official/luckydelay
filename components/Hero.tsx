
import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  const FORM_URL = "https://docs.google.com/forms/d/11NFbPRG-NLcEMyW_9TWJ7MuPtEk06JYpfMKx5jcH9g8/viewform";

  return (
    <section className="relative pt-36 pb-24 md:pt-48 md:pb-40 px-6 flex flex-col items-center text-center">
      {/* Main Content Glass Card for Maximum Readability */}
      <div className="max-w-3xl w-full bg-white/40 backdrop-blur-xl border border-white/60 rounded-[40px] p-8 md:p-16 shadow-2xl shadow-blue-500/5 animate-fade-in-up">
        {/* Refined Badge */}
        <div className="mb-8">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-900/5 backdrop-blur-md border border-slate-900/10 text-[10px] font-bold text-slate-800 uppercase tracking-[0.2em]">
            최대 600유로 보상 가능
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.2]">
          항공 지연,<br />
          <span className="text-blue-600 font-light italic font-serif-kr">당신의 권리</span>를 찾으세요
        </h1>

        {/* Supporting Subtext */}
        <p className="text-[15px] md:text-[16px] text-slate-700 mb-10 max-w-lg mx-auto font-medium leading-relaxed">
          복잡한 서류 작업과 항공사와의 실랑이는 럭키딜레이에 맡기세요.
          지금 바로 신청 폼을 작성하고 정당한 보상을 받으세요.
        </p>

        {/* CTA Section - Replaced input with a large button */}
        <div className="w-full max-w-sm mx-auto">
          <a 
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-full bg-slate-900 text-white rounded-full py-5 px-8 text-sm font-bold shadow-xl shadow-slate-900/20 hover:bg-slate-800 hover:scale-[1.02] transition-all duration-300"
          >
            지금 바로 보상 신청하기
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <p className="mt-6 text-[10px] uppercase tracking-[0.15em] text-slate-500 font-bold flex items-center justify-center gap-2">
            구글 폼으로 간편 접수 <ExternalLink className="w-3 h-3" />
          </p>
          
          <p className="mt-2 text-[9px] text-slate-400 font-medium">
            보상 성공 시에만 수수료 발생 • 0원 신청
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
