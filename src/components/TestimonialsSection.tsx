import React from 'react';
import { testimonialsData } from '../data/bakeryData';
import { Star, Sparkles, Quote, Heart } from 'lucide-react';
import { SparkleStar, WhimsicalHeart } from './MagicalDecorations';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FFFDF5] relative overflow-hidden">
      {/* Decorative background stars */}
      <div className="absolute top-10 left-[7%] pointer-events-none opacity-70">
        <SparkleStar size={24} color="#F6D86B" />
      </div>
      <div className="absolute bottom-12 right-[9%] pointer-events-none opacity-70">
        <SparkleStar size={20} color="#E85E76" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FDF0F3] border border-[#F28B9D]/40 text-[#E85E76] text-xs sm:text-sm font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 fill-[#E85E76]" />
            <span>Community Love</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-[#38261F] tracking-tight">
            Sweet Words From Happy Customers
          </h2>

          <p className="text-base sm:text-lg text-[#634E44] leading-relaxed">
            Every celebration has a story. Here is what families and party hosts share about their Magical Bites dessert experiences.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#38261F]/8 shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between text-left relative group"
            >
              {/* Quote icon watermark */}
              <div className="absolute top-6 right-6 text-[#E8F7FC] pointer-events-none group-hover:text-[#72CBE8]/20 transition-colors">
                <Quote className="w-10 h-10" />
              </div>

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#F6D86B] mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F6D86B]" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-[#38261F] font-medium leading-relaxed italic relative z-10">
                  “{t.quote}”
                </p>
              </div>

              {/* Author & Occasion */}
              <div className="pt-6 mt-6 border-t border-[#38261F]/6 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-serif font-bold text-[#38261F]">
                    {t.author}
                  </h3>
                  <p className="text-xs text-[#7A6154] mt-0.5">
                    {t.occasion}
                  </p>
                </div>

                {/* Badge for featured dessert */}
                {t.featuredDessert && (
                  <span className="hidden sm:inline-block px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#F4FADC] text-[#6E8B0E] border border-[#B7D92B]/30 max-w-[120px] truncate">
                    {t.featuredDessert}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
