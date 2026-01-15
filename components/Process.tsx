
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "신청서 작성",
      description: "구글 폼을 통해 지연된 항공편 정보를 간략하게 입력해주세요."
    },
    {
      num: "02",
      title: "검토 및 접수",
      description: "전문 팀이 데이터를 분석하여 즉시 항공사에 보상을 청구합니다."
    },
    {
      num: "03",
      title: "보상금 지급",
      description: "보상 절차가 완료되면 수령액을 고객님의 계좌로 직접 송금합니다."
    }
  ];

  return (
    <section className="py-32 px-8 max-w-6xl mx-auto relative z-10">
      <div className="mb-20 text-center">
        <h2 className="text-[11px] font-bold text-blue-600 uppercase tracking-[0.3em] mb-4">How it works</h2>
        <p className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">누구나 쉽게, 3분이면 충분합니다.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="relative group p-10 bg-white/80 backdrop-blur-md border border-white rounded-[32px] shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-500">
            <span className="text-[60px] font-black text-slate-900/5 absolute top-4 right-8 z-0 pointer-events-none group-hover:text-blue-500/10 transition-colors">
              {step.num}
            </span>
            <div className="relative z-10">
              <h3 className="text-[16px] font-bold text-slate-900 mb-4 uppercase tracking-wider">{step.title}</h3>
              <p className="text-[14px] text-slate-600 leading-relaxed font-medium">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
