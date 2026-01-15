
import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "어떤 경우에 보상을 받을 수 있나요?",
      a: "유럽(EU) 출발 항공편이거나, EU 항공사의 EU 도착 항공편인 경우 보상 대상이 됩니다. 3시간 이상의 지연, 결항, 또는 오버부킹이 발생했을 때 최대 600유로까지 청구 가능합니다."
    },
    {
      q: "과거에 발생한 지연도 청구할 수 있나요?",
      a: "네, 일반적으로 지난 3년 내에 발생한 항공 지연에 대해 소급하여 청구가 가능합니다."
    },
    {
      q: "보상 기간은 얼마나 걸리나요?",
      a: "항공사의 대응 속도에 따라 다르지만 보통 4주에서 12주 정도 소요됩니다. 럭키딜레이는 정기적인 업데이트를 통해 진행 상황을 공유해 드립니다."
    }
  ];

  return (
    <section className="py-32 px-6 max-w-3xl mx-auto relative z-10">
      <h2 className="text-2xl font-bold mb-12 font-serif-kr text-center text-slate-900">자주 묻는 질문</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <details key={idx} className="group bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden border border-white shadow-lg shadow-slate-200/50">
            <summary className="p-6 cursor-pointer flex justify-between items-center list-none font-bold text-slate-800 text-[15px]">
              {faq.q}
              <span className="group-open:rotate-180 transition-transform duration-300 text-blue-500 text-xs">▼</span>
            </summary>
            <div className="p-6 pt-0 text-slate-700 text-[14px] leading-relaxed border-t border-slate-50 font-medium">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
