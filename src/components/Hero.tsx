import React from 'react';
import { SparkleStar, WhimsicalHeart } from './MagicalDecorations';
import { bakeryImages } from '../data/bakeryData';
import { Sparkles, ArrowRight, Star, Heart, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
  onOrderMagical: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onOrderMagical }) => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#FFF8EA]/70 via-[#FFFDF5] to-[#FFFDF5]"
    >
      {/* Whimsical background ambient shapes & sparkles */}
      <div className="absolute top-12 left-1/4 w-72 h-72 bg-[#72CBE8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-28 right-10 w-96 h-96 bg-[#B7D92B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#FDF0F3]/80 rounded-full blur-2xl pointer-events-none" />

      {/* Floating subtle star accents */}
      <div className="absolute top-24 left-[8%] hidden sm:block animate-float-slow">
        <SparkleStar size={24} color="#F6D86B" />
      </div>
      <div className="absolute top-36 right-[12%] hidden sm:block animate-float-delayed">
        <SparkleStar size={20} color="#72CBE8" />
      </div>
      <div className="absolute bottom-20 left-[15%] hidden lg:block animate-float-slow">
        <SparkleStar size={18} color="#B7D92B" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 sm:space-y-8">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F7FC] border border-[#72CBE8]/40 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#72CBE8] animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-[#207A9E]" />
              <span className="text-xs sm:text-sm font-bold tracking-wide uppercase text-[#207A9E] font-sans">
                Baked With a Little Magic
              </span>
              <WhimsicalHeart size={14} color="#F28B9D" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-serif font-extrabold text-[#38261F] leading-[1.12] tracking-tight">
              Little Bites. <br />
              Big Moments of{' '}
              <span className="relative inline-block text-[#E85E76] italic font-normal">
                Delight.
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#B7D92B]/80"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path
                    d="M0 15 Q 50 0, 100 15"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-[#634E44] max-w-2xl font-normal leading-relaxed">
              Whimsical cakes, cupcakes, and handcrafted treats made to turn everyday celebrations into unforgettable sweet moments. Freshly baked in small batches with European butter and pure vanilla.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto pt-2">
              {/* Primary CTA */}
              <button
                type="button"
                onClick={onExploreMenu}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#B7D92B] hover:bg-[#9EBE1D] text-[#38261F] font-bold text-base shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 group"
              >
                <span>Explore Our Menu</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary CTA */}
              <button
                type="button"
                onClick={onOrderMagical}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#FFFDF5] hover:bg-[#FDF0F3] text-[#38261F] font-semibold text-base border-2 border-[#F28B9D]/60 hover:border-[#E85E76] transition-all duration-200 active:scale-95 shadow-2xs group"
              >
                <Sparkles className="w-4 h-4 text-[#E85E76] group-hover:rotate-12 transition-transform" />
                <span>Order Something Magical</span>
              </button>
            </div>

            {/* Trust Badges under CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-[#7A6154]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#8EAE19]" />
                <span>Small Batch Artisan</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#72CBE8]" />
                <span>European Sweet Butter</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#E85E76]" />
                <span>Custom Designs</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Frame */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Organic Decorative Background Panel */}
              <div className="absolute inset-0 -m-4 sm:-m-6 bg-gradient-to-tr from-[#72CBE8]/25 via-[#F4FADC] to-[#FDF0F3] rounded-3xl sm:rounded-[2.5rem] -rotate-2 transform transition-transform group-hover:rotate-0" />
              
              {/* Hero Image Container */}
              <div className="relative z-10 rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-xl border-4 border-white bg-white aspect-4/3 group">
                <img
                  src={bakeryImages.hero}
                  alt="Assortment of Magical Bites gourmet cupcakes with pastel buttercream swirls and celebration cake"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle soft gradient overlay at bottom for polish */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#38261F]/30 via-transparent to-transparent pointer-events-none" />

                {/* Floating Rating Badge Top Left */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5 border border-[#FFF8EA]">
                  <div className="flex text-[#F6D86B]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#F6D86B]" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-[#38261F] ml-1">5.0</span>
                </div>

                {/* Floating Fresh Daily Tag Bottom Right */}
                <div className="absolute bottom-4 right-4 bg-[#FFFDF5]/95 backdrop-blur-xs px-4 py-2 rounded-2xl shadow-lg border border-[#B7D92B]/50 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#F4FADC] flex items-center justify-center text-[#8EAE19]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] font-bold text-[#38261F] leading-tight">Fresh Daily</p>
                    <p className="text-[10px] text-[#8EAE19] font-semibold">100% Handcrafted</p>
                  </div>
                </div>
              </div>

              {/* Floating Handcrafted Card Tag (Bottom Left) */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 z-20 bg-white/95 backdrop-blur-sm p-3.5 rounded-2xl shadow-lg border border-[#72CBE8]/30 items-center gap-3 animate-float-slow">
                <div className="w-10 h-10 rounded-full bg-[#E8F7FC] flex items-center justify-center text-[#207A9E]">
                  <Heart className="w-5 h-5 fill-[#E85E76] text-[#E85E76]" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-[#38261F]">Baked with Love</div>
                  <div className="text-[11px] text-[#7A6154]">Pure joy in every crumb</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
