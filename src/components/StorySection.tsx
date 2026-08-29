import React, { useState } from 'react';
import { Sparkles, Heart, Check, X, Award, Smile } from 'lucide-react';
import { bakeryImages } from '../data/bakeryData';
import { SparkleStar, WhimsicalHeart } from './MagicalDecorations';

export const StorySection: React.FC = () => {
  const [showStoryModal, setShowStoryModal] = useState(false);

  const bakeryValues = [
    '100% Organic Flours & Pure Cane Sugar',
    'Real Madagascar Bourbon Vanilla Beans',
    'European Pasture-Raised Sweet Butter',
    'Scratch-Made Fruit Curds & Compotes',
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FFF8EA]/60 relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-16 right-[12%] pointer-events-none opacity-70">
        <SparkleStar size={24} color="#F6D86B" />
      </div>
      <div className="absolute bottom-12 left-[8%] pointer-events-none opacity-70">
        <SparkleStar size={22} color="#72CBE8" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Image with editorial frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Backing decorative frame */}
              <div className="absolute inset-0 -m-4 sm:-m-6 bg-gradient-to-tr from-[#72CBE8]/20 via-[#FDF0F3] to-[#F4FADC] rounded-3xl sm:rounded-[2.5rem] -rotate-1" />

              {/* Main Image */}
              <div className="relative z-10 rounded-2xl sm:rounded-[2rem] overflow-hidden border-4 border-white shadow-xl bg-white aspect-4/3 group">
                <img
                  src={bakeryImages.storyChef}
                  alt="Pastry chef delicately styling artisanal bakery cakes and cupcakes with fresh berries and stars"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Floating Artisan Badge bottom left */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-xs px-4 py-2.5 rounded-2xl shadow-lg border border-[#38261F]/8 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#E8F7FC] text-[#207A9E] flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="block text-xs font-bold text-[#38261F]">Crafted by Hand</span>
                    <span className="text-[10px] text-[#7A6154]">Small Morning Batches</span>
                  </div>
                </div>
              </div>

              {/* Floating decorative heart top right */}
              <div className="hidden sm:block absolute -top-4 -right-4 z-20 bg-white p-3 rounded-2xl shadow-md border border-[#F28B9D]/30 animate-float-slow">
                <WhimsicalHeart size={24} color="#E85E76" />
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 text-left space-y-6">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FDF0F3] border border-[#F28B9D]/40 text-[#E85E76] text-xs sm:text-sm font-bold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 fill-[#E85E76]" />
              <span>Made With Heart</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-[#38261F] leading-[1.15] tracking-tight">
              A Little Magic in <br />
              <span className="text-[#E85E76] italic font-normal">Every Single Bite.</span>
            </h2>

            {/* Story Copy */}
            <div className="space-y-4 text-base sm:text-lg text-[#634E44] leading-relaxed">
              <p>
                At Magical Bites, we believe desserts should do more than taste delicious. They should create smiles, spark wonder, bring loved ones together, and become part of the sweet memories you keep forever.
              </p>
              <p className="text-sm sm:text-base text-[#7A6154]">
                Founded with a passion for playful confectionery and timeless baking artistry, our recipes marry old-world European techniques with joyful, vibrant aesthetics that delight kids and adults alike.
              </p>
            </div>

            {/* Quality Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {bakeryValues.map((val, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#38261F]">
                  <div className="w-5 h-5 rounded-full bg-[#F4FADC] text-[#8EAE19] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{val}</span>
                </div>
              ))}
            </div>

            {/* Discover Story Button & Signature */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-[#38261F]/10">
              <button
                type="button"
                onClick={() => setShowStoryModal(true)}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#FFFDF5] hover:bg-[#E8F7FC] text-[#38261F] font-bold text-sm border-2 border-[#72CBE8] transition-all duration-200 active:scale-95 shadow-2xs group"
              >
                <Sparkles className="w-4 h-4 text-[#207A9E] group-hover:rotate-12 transition-transform" />
                <span>Discover Our Story</span>
              </button>

              {/* Chef Signature detail */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E8F7FC] border border-[#72CBE8]/40 flex items-center justify-center font-serif text-[#207A9E] font-bold text-base">
                  MB
                </div>
                <div className="text-left">
                  <span className="font-serif italic font-semibold text-[#38261F] block text-sm">
                    The Magical Bites Team
                  </span>
                  <span className="text-[11px] text-[#7A6154] font-sans">Handcrafted with care</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Story Modal */}
      {showStoryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-[#38261F]/50 backdrop-blur-xs"
            onClick={() => setShowStoryModal(false)}
          />
          <div className="relative bg-[#FFFDF5] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#38261F]/10 z-10 max-h-[90vh] overflow-y-auto text-left">
            <div className="flex items-center justify-between pb-4 border-b border-[#38261F]/10">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#E85E76]" />
                <h3 className="text-2xl font-serif font-bold text-[#38261F]">The Magical Bites Journey</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowStoryModal(false)}
                className="p-2 rounded-full hover:bg-[#FDF0F3] text-[#38261F]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 py-6 text-[#634E44] text-sm sm:text-base leading-relaxed">
              <p>
                Our story started in a sunlit kitchen with a simple idea: that a cupcake or celebration cake should feel like a moment of pure magic. Not stiff or overly formal, but warm, playful, and crafted with unforgettable culinary excellence.
              </p>
              <p>
                Every morning at 5:00 AM, our ovens preheat and the scent of Madagascar bourbon vanilla, browned butter, and roasted citrus fills the bakery. We whip our buttercream until it’s light as a cloud and fold whole organic fruits into our handmade fillings.
              </p>
              <div className="p-4 rounded-2xl bg-[#E8F7FC] border border-[#72CBE8]/30 text-xs sm:text-sm text-[#207A9E]">
                <p className="font-bold mb-1">Our Daily Promise:</p>
                <p>
                  No artificial preservatives, no shortcuts. Only real creamery butter, pasture-raised eggs, and meticulous artisan care baked into every single bite.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#38261F]/10 flex justify-end">
              <button
                type="button"
                onClick={() => setShowStoryModal(false)}
                className="px-6 py-2.5 rounded-full bg-[#B7D92B] text-[#38261F] font-bold text-sm hover:bg-[#9EBE1D] transition-colors"
              >
                Close & Enjoy
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
