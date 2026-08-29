import React, { useState } from 'react';
import { faqsData } from '../data/bakeryData';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { SparkleStar } from './MagicalDecorations';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#FFFDF5] relative">
      {/* Decorative star */}
      <div className="absolute top-12 right-[10%] pointer-events-none opacity-60">
        <SparkleStar size={22} color="#F6D86B" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4FADC] border border-[#B7D92B]/40 text-[#6E8B0E] text-xs sm:text-sm font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-[#38261F] tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-base sm:text-lg text-[#634E44] leading-relaxed">
            Everything you need to know about placing orders, lead times, dietary options, and event delivery.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4 text-left">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl sm:rounded-3xl border border-[#38261F]/8 shadow-2xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between gap-4 text-left font-sans focus:outline-none focus-visible:ring-2 focus-visible:ring-[#72CBE8]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#38261F]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-[#72CBE8] text-[#38261F] rotate-180' : 'bg-[#FFF8EA] text-[#5C453A]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 text-sm sm:text-base text-[#634E44] leading-relaxed border-t border-[#38261F]/6">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
