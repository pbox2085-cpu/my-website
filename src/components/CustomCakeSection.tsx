import React from 'react';
import { Sparkles, Calendar, Palette, HeartHandshake, ArrowRight, CheckCircle2 } from 'lucide-react';
import { bakeryImages } from '../data/bakeryData';
import { SparkleStar, WhimsicalHeart } from './MagicalDecorations';

interface CustomCakeSectionProps {
  onOpenCustomOrder: () => void;
}

export const CustomCakeSection: React.FC<CustomCakeSectionProps> = ({ onOpenCustomOrder }) => {
  const steps = [
    {
      num: '01',
      title: 'Tell Us Your Idea',
      description: 'Share your party theme, color palette, preferred sponge & filling flavors, and occasion date.',
      icon: Palette,
      accentColor: 'text-[#207A9E] bg-[#E8F7FC] border-[#72CBE8]/40',
    },
    {
      num: '02',
      title: 'We Create the Magic',
      description: 'Our master cake decorators hand-sculpt, pipe, and bake your vision using 100% natural gourmet ingredients.',
      icon: Sparkles,
      accentColor: 'text-[#8EAE19] bg-[#F4FADC] border-[#B7D92B]/40',
    },
    {
      num: '03',
      title: 'Make Your Moment Sweet',
      description: 'Pick up your bespoke creation in our signature ribboned packaging or receive refrigerated doorstep delivery.',
      icon: HeartHandshake,
      accentColor: 'text-[#E85E76] bg-[#FDF0F3] border-[#F28B9D]/40',
    },
  ];

  return (
    <section id="celebrations" className="py-20 sm:py-28 bg-[#FFFDF5] relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-12 left-[10%] pointer-events-none opacity-80">
        <SparkleStar size={26} color="#F6D86B" />
      </div>
      <div className="absolute bottom-16 right-[8%] pointer-events-none opacity-80">
        <SparkleStar size={24} color="#72CBE8" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Backdrop pastel shape */}
              <div className="absolute inset-0 -m-4 sm:-m-6 bg-gradient-to-br from-[#F4FADC] via-[#E8F7FC] to-[#FFF8EA] rounded-3xl sm:rounded-[2.5rem] rotate-1" />

              {/* Main Image Frame */}
              <div className="relative z-10 rounded-2xl sm:rounded-[2rem] overflow-hidden border-4 border-white shadow-xl bg-white aspect-4/3 group">
                <img
                  src={bakeryImages.customCake}
                  alt="Custom handcrafted celebration cake with pastel macarons and edible gold stars"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Floating tag top right */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-full shadow-md text-xs font-bold text-[#E85E76] border border-[#F28B9D]/30 flex items-center gap-1.5">
                  <WhimsicalHeart size={13} color="#E85E76" />
                  <span>Custom Handcrafted</span>
                </div>

                {/* Floating Lead Time tag bottom left */}
                <div className="absolute bottom-4 left-4 bg-[#38261F]/90 text-white backdrop-blur-xs px-4 py-2 rounded-2xl shadow-lg text-xs flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#B7D92B]" />
                  <div>
                    <span className="block font-bold text-white leading-tight">5–7 Days Lead Time</span>
                    <span className="text-[10px] text-[#B7D92B]">Reserve your celebration date</span>
                  </div>
                </div>
              </div>

              {/* Floating review snippet badge */}
              <div className="hidden sm:flex absolute -bottom-5 -right-5 z-20 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-[#B7D92B]/40 max-w-xs items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#F4FADC] flex items-center justify-center text-[#8EAE19] shrink-0 font-serif font-bold text-sm">
                  ★
                </div>
                <p className="text-xs text-[#38261F] font-medium leading-tight text-left">
                  “Turned our daughter’s favorite storybook theme into the most breathtaking cake.”
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Custom Process & Copy */}
          <div className="lg:col-span-6 text-left space-y-6 sm:space-y-8 order-1 lg:order-2">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4FADC] border border-[#B7D92B]/40 text-[#6E8B0E] text-xs sm:text-sm font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bespoke Celebrations & Cakes</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-[#38261F] leading-[1.15] tracking-tight">
              Have a Sweet Idea? <br />
              <span className="text-[#8EAE19] italic font-normal">Let’s Make It Magical.</span>
            </h2>

            {/* Copy */}
            <p className="text-base sm:text-lg text-[#634E44] leading-relaxed">
              From tiny birthday surprises to unforgettable multi-tiered milestone cakes, we create custom treats inspired by your colors, themes, stories, and sweetest ideas.
            </p>

            {/* 3 Step Process List */}
            <div className="space-y-4 pt-2">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.num}
                    className="flex items-start gap-4 p-3.5 rounded-2xl bg-white border border-[#38261F]/6 shadow-2xs hover:shadow-xs transition-all duration-200"
                  >
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${step.accentColor} font-serif font-bold text-sm`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#7A6154] tracking-wider uppercase">
                          Step {step.num}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-[#38261F]/20" />
                        <h3 className="text-base font-bold text-[#38261F] font-sans">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-[#634E44] mt-1 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onOpenCustomOrder}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#B7D92B] hover:bg-[#9EBE1D] text-[#38261F] font-bold text-base shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 group"
              >
                <span>Start Your Custom Order</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <span className="text-xs text-[#7A6154] text-center sm:text-left">
                No payment required upfront for inquiries.
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
