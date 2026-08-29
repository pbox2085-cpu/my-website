import React from 'react';
import { Sparkles, ArrowRight, Heart } from 'lucide-react';
import { SparkleStar, WhimsicalHeart } from './MagicalDecorations';
import { MagicalLogo } from './MagicalLogo';

interface FinalCtaSectionProps {
  onExploreMenu: () => void;
  onOpenCustomOrder: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({
  onExploreMenu,
  onOpenCustomOrder,
}) => {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-br from-[#72CBE8] via-[#85D4ED] to-[#B7D92B]/80 text-[#38261F]">
      {/* Whimsical decorative elements & stars */}
      <div className="absolute top-10 left-[8%] animate-float-slow pointer-events-none">
        <SparkleStar size={32} color="#FFFFFF" />
      </div>
      <div className="absolute bottom-12 right-[10%] animate-float-delayed pointer-events-none">
        <SparkleStar size={28} color="#F6D86B" />
      </div>
      <div className="absolute top-1/2 left-[3%] hidden lg:block pointer-events-none">
        <WhimsicalHeart size={26} color="#F28B9D" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Brand badge icon */}
        <div className="inline-flex mb-6 animate-pulse-soft">
          <MagicalLogo size="lg" variant="badge-only" />
        </div>

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-xs text-[#207A9E] text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 shadow-xs">
          <Sparkles className="w-4 h-4 text-[#E85E76]" />
          <span>Little Bites Full of Delight</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-extrabold text-[#38261F] leading-[1.12] tracking-tight max-w-3xl mx-auto mb-6">
          Ready to Make Your Moment a Little More Magical?
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-xl text-[#38261F]/90 max-w-2xl mx-auto font-medium leading-relaxed mb-10">
          Choose your favorite handcrafted treats from our menu or tell us what you’re dreaming up for your next unforgettable celebration.
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            type="button"
            onClick={onExploreMenu}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#38261F] hover:bg-[#261914] text-white font-bold text-base shadow-xl transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 group"
          >
            <span>Explore Menu</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            type="button"
            onClick={onOpenCustomOrder}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FFFDF5] hover:bg-[#FFF8EA] text-[#38261F] font-bold text-base border-2 border-white shadow-lg transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 group"
          >
            <Sparkles className="w-4 h-4 text-[#E85E76] group-hover:rotate-12 transition-transform" />
            <span>Request a Custom Cake</span>
          </button>
        </div>

      </div>
    </section>
  );
};
