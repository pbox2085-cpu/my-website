import React, { useState } from 'react';
import { galleryItems } from '../data/bakeryData';
import { GalleryItem } from '../types';
import { Sparkles, Instagram, Maximize2, X, Heart } from 'lucide-react';
import { SparkleStar, WhimsicalHeart } from './MagicalDecorations';

export const GallerySection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section className="py-20 sm:py-28 bg-[#FFF8EA]/50 relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-12 left-[12%] pointer-events-none opacity-60">
        <SparkleStar size={20} color="#72CBE8" />
      </div>
      <div className="absolute bottom-16 right-[10%] pointer-events-none opacity-60">
        <SparkleStar size={24} color="#F6D86B" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F7FC] border border-[#72CBE8]/40 text-[#207A9E] text-xs sm:text-sm font-bold uppercase tracking-wider">
            <Instagram className="w-3.5 h-3.5" />
            <span>#MagicalBites Moments</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-[#38261F] tracking-tight">
            See More Sweet Moments
          </h2>

          <p className="text-base sm:text-lg text-[#634E44] leading-relaxed">
            A glimpse into our bakery kitchen, weekend celebration tables, and the smiles we’ve had the joy of creating.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-square cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border border-[#38261F]/8"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedItem(item);
                }
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#38261F]/80 via-[#38261F]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 sm:p-5 text-white text-left">
                <div className="flex justify-end">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#B7D92B] block mb-0.5">
                    {item.category}
                  </span>
                  <h3 className="text-sm sm:text-base font-serif font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Tagline */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-3">
          <p className="text-xs sm:text-sm font-semibold text-[#7A6154]">
            Tag your celebration treats with <span className="text-[#E85E76] font-bold">#MagicalBitesBakery</span> to be featured in our sweet community gallery!
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-[#38261F]/70 backdrop-blur-xs"
            onClick={() => setSelectedItem(null)}
          />
          <div className="relative bg-[#FFFDF5] rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-[#38261F]/10 z-10 text-left">
            <div className="relative aspect-4/3 bg-black">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white text-[#38261F] backdrop-blur-xs transition-colors shadow-md"
                aria-label="Close image"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              <span className="text-xs font-bold text-[#8EAE19] uppercase tracking-wider block mb-1">
                {selectedItem.category}
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#38261F] mb-2">
                {selectedItem.title}
              </h3>
              <p className="text-sm text-[#634E44] leading-relaxed">
                {selectedItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
