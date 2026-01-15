
import React from 'react';
import { Shield, Zap, Globe, Sparkles } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "성공 보수제",
      description: "보상금을 실제로 수령했을 때만 수수료가 발생합니다. 신청 비용은 무료입니다."
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "글로벌 대응",
      description: "전 세계 모든 유럽 노선 항공편의 지연 및 결항 데이터를 실시간으로 분석합니다."
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "간편한 접수",
      description: "번거로운 서류 제출 없이 모바일에서 몇 번의 클릭만으로 접수가 완료됩니다."
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "정확한 계산",
      description: "EU261 규정에 따라 고객님이 받을 수 있는 최적의 보상 금액을 즉시 산출합니다."
    }
  ];

  return (
    <section className="py-24 px-8 relative z-10">
      <div className="max-w-6xl mx-auto bg-white/70 backdrop-blur-2xl border border-white rounded-[48px] p-10 md:p-20 shadow-2xl shadow-blue-900/5">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900 tracking-tight leading-tight">
              가장 스마트한<br />보상금 대리 청구
            </h2>
            <p className="text-slate-600 text-[15px] leading-relaxed mb-8 font-medium">
              항공사는 개인의 청구에 소홀할 수 있습니다. 럭키딜레이는 체계적인 데이터와 프로세스로 승객의 권리를 보호합니다.
            </p>
          </div>
          
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-x-12 gap-y-12">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="group">
                <div className="text-blue-600 mb-4 bg-blue-50 w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">{benefit.icon}</div>
                <h4 className="text-[16px] font-bold mb-3 text-slate-900">{benefit.title}</h4>
                <p className="text-[14px] text-slate-600 leading-relaxed font-medium">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
