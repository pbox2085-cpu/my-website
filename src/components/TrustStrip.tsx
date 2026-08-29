import React from 'react';
import { Sparkles, Heart, Award, Gift, Clock, ShieldCheck } from 'lucide-react';
import { SparkleStar } from './MagicalDecorations';

export const TrustStrip: React.FC = () => {
  const benefits = [
    {
      title: 'Baked Fresh Daily',
      description: 'Freshly prepared with care in small morning batches.',
      icon: Clock,
      color: 'blue',
      bgClass: 'bg-[#E8F7FC] text-[#207A9E]',
      borderClass: 'border-[#72CBE8]/30',
    },
    {
      title: 'Made With Love',
      description: 'Handcrafted with heartwarming attention for special moments.',
      icon: Heart,
      color: 'pink',
      bgClass: 'bg-[#FDF0F3] text-[#E85E76]',
      borderClass: 'border-[#F28B9D]/30',
    },
    {
      title: 'Premium Ingredients',
      description: 'European sweet butter, Bourbon vanilla, organic berries.',
      icon: Award,
      color: 'lime',
      bgClass: 'bg-[#F4FADC] text-[#8EAE19]',
      borderClass: 'border-[#B7D92B]/40',
    },
    {
      title: 'Made For Your Moment',
      description: 'Birthdays, milestones, party spreads & thoughtful gifts.',
      icon: Gift,
      color: 'gold',
      bgClass: 'bg-[#FFF8EA] text-[#B58514]',
      borderClass: 'border-[#F6D86B]/40',
    },
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-[#38261F]/6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-3 rounded-2xl transition-all duration-200 hover:bg-[#FFFDF5] group"
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border ${item.bgClass} ${item.borderClass} shadow-2xs group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h2 className="text-base font-bold text-[#38261F] font-sans flex items-center gap-1.5">
                    {item.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#7A6154] mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
