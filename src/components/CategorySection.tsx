import React from 'react';
import { categoriesData } from '../data/bakeryData';
import { CategoryCard } from '../types';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SparkleStar } from './MagicalDecorations';

interface CategorySectionProps {
  onSelectCategory: (categoryId: string) => void;
  onOpenCustomOrder: () => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  onSelectCategory,
  onOpenCustomOrder,
}) => {
  const cardStyles = {
    pink: {
      bg: 'bg-[#FDF0F3]',
      border: 'border-[#F28B9D]/30 hover:border-[#E85E76]/50',
      badgeBg: 'bg-[#FFFDF5] text-[#E85E76] border-[#F28B9D]/40',
      buttonHover: 'group-hover:bg-[#E85E76] group-hover:text-white',
    },
    blue: {
      bg: 'bg-[#E8F7FC]',
      border: 'border-[#72CBE8]/30 hover:border-[#207A9E]/50',
      badgeBg: 'bg-[#FFFDF5] text-[#207A9E] border-[#72CBE8]/40',
      buttonHover: 'group-hover:bg-[#72CBE8] group-hover:text-[#38261F]',
    },
    lime: {
      bg: 'bg-[#F4FADC]',
      border: 'border-[#B7D92B]/40 hover:border-[#8EAE19]/60',
      badgeBg: 'bg-[#FFFDF5] text-[#6E8B0E] border-[#B7D92B]/40',
      buttonHover: 'group-hover:bg-[#B7D92B] group-hover:text-[#38261F]',
    },
    ivory: {
      bg: 'bg-[#FFF8EA]',
      border: 'border-[#F6D86B]/40 hover:border-[#B58514]/60',
      badgeBg: 'bg-[#FFFDF5] text-[#B58514] border-[#F6D86B]/40',
      buttonHover: 'group-hover:bg-[#F6D86B] group-hover:text-[#38261F]',
    },
  };

  const handleCardClick = (cat: CategoryCard) => {
    if (cat.id === 'custom') {
      onOpenCustomOrder();
    } else {
      onSelectCategory(cat.id);
    }
  };

  return (
    <section id="categories" className="py-20 sm:py-28 relative">
      {/* Decorative stars */}
      <div className="absolute top-10 right-[8%] pointer-events-none opacity-70">
        <SparkleStar size={24} color="#F6D86B" />
      </div>
      <div className="absolute bottom-12 left-[6%] pointer-events-none opacity-70">
        <SparkleStar size={20} color="#72CBE8" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4FADC] border border-[#B7D92B]/40 text-[#6E8B0E] text-xs sm:text-sm font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover the Delights</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-[#38261F] tracking-tight">
            Find Your Sweet Spot
          </h2>

          <p className="text-base sm:text-lg text-[#634E44] font-normal leading-relaxed">
            From signature multi-layered cakes to delightful cupcake boxes and custom celebration centerpieces, discover fresh treats handcrafted for every smile.
          </p>
        </div>

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {categoriesData.map((cat) => {
            const style = cardStyles[cat.colorScheme];
            return (
              <div
                key={cat.id}
                onClick={() => handleCardClick(cat)}
                className={`group relative rounded-3xl p-5 sm:p-6 flex flex-col justify-between cursor-pointer border-2 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl ${style.bg} ${style.border}`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardClick(cat);
                  }
                }}
              >
                <div>
                  {/* Top Image Container */}
                  <div className="relative rounded-2xl overflow-hidden aspect-4/3 mb-5 bg-white/60 shadow-xs">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Badge top left */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border shadow-2xs ${style.badgeBg}`}>
                        {cat.badge}
                      </span>
                    </div>

                    {/* Price tag bottom right */}
                    <div className="absolute bottom-3 right-3">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#38261F]/80 text-white backdrop-blur-xs">
                        {cat.itemsCount}
                      </span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <span className="text-xs font-bold text-[#8EAE19] uppercase tracking-wider block mb-1">
                    {cat.subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#38261F] mb-2 group-hover:text-[#E85E76] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#634E44] leading-relaxed mb-4">
                    {cat.description}
                  </p>
                </div>

                {/* Bottom Action */}
                <div className="pt-3 border-t border-[#38261F]/8 flex items-center justify-between mt-auto">
                  <span className="text-xs sm:text-sm font-bold text-[#38261F] group-hover:underline">
                    {cat.id === 'custom' ? 'Request Custom Design' : 'Explore Category'}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#38261F] border border-[#38261F]/10 transition-all duration-300 shadow-2xs ${style.buttonHover}`}
                  >
                    <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
