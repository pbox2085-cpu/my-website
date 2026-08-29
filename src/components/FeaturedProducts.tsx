import React, { useState } from 'react';
import { productsData } from '../data/bakeryData';
import { Product } from '../types';
import { Sparkles, Plus, Eye, Check, Heart } from 'lucide-react';
import { SparkleStar, MagicBadge } from './MagicalDecorations';

interface FeaturedProductsProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onOpenCustomOrder: () => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  onSelectProduct,
  onAddToCart,
  onOpenCustomOrder,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'cakes' | 'cupcakes' | 'custom' | 'party' | 'cheesecakes'>('all');
  const [addedId, setAddedId] = useState<string | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Delights' },
    { id: 'cakes', label: 'Classic Cakes' },
    { id: 'cupcakes', label: 'Magical Cupcakes' },
    { id: 'cheesecakes', label: 'Cheesecakes' },
    { id: 'party', label: 'Party Platters' },
    { id: 'custom', label: 'Custom Creations' },
  ];

  const filteredProducts = productsData.filter((product) => {
    if (selectedFilter === 'all') return true;
    return product.category === selectedFilter;
  });

  const handleQuickAdd = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    if (product.category === 'custom') {
      onOpenCustomOrder();
      return;
    }
    onAddToCart(product);
    setAddedId(product.id);
    setTimeout(() => {
      setAddedId(null);
    }, 1800);
  };

  return (
    <section id="menu" className="py-20 sm:py-28 bg-[#FFF8EA]/50 relative">
      {/* Whimsical backdrop sparkles */}
      <div className="absolute top-16 left-[5%] pointer-events-none opacity-60">
        <SparkleStar size={22} color="#72CBE8" />
      </div>
      <div className="absolute bottom-20 right-[7%] pointer-events-none opacity-60">
        <SparkleStar size={26} color="#B7D92B" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F7FC] border border-[#72CBE8]/40 text-[#207A9E] text-xs sm:text-sm font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Baked Daily in Small Batches</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-[#38261F] tracking-tight">
              Made to Make You Smile
            </h2>
            
            <p className="text-base sm:text-lg text-[#634E44] leading-relaxed">
              Explore our curated selection of signature cakes, cloud-soft cupcakes, and celebration platters made with organic berries, pure butter, and a sprinkle of wonder.
            </p>
          </div>

          {/* Quick Stats / Delivery Badge */}
          <div className="hidden lg:flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-[#38261F]/8 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#F4FADC] flex items-center justify-center text-[#8EAE19]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="text-left text-xs">
              <span className="font-bold text-[#38261F] block">Local Delivery & Pickup</span>
              <span className="text-[#7A6154]">Sunnyvale & Bay Area Wide</span>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar scroll-smooth">
          {filterTabs.map((tab) => {
            const isSelected = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedFilter(tab.id as any)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#38261F] text-white shadow-md scale-105'
                    : 'bg-white text-[#5C453A] border border-[#38261F]/10 hover:border-[#72CBE8] hover:bg-[#E8F7FC]/50'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => {
            const isJustAdded = addedId === product.id;
            return (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className="group bg-white rounded-3xl overflow-hidden border border-[#38261F]/8 shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Product Image Frame */}
                  <div className="relative aspect-4/3 overflow-hidden bg-[#FFFDF5]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />

                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#FFFDF5]/95 backdrop-blur-xs text-[#38261F] border border-[#38261F]/10 shadow-2xs">
                          {product.badge}
                        </span>
                      </div>
                    )}

                    {/* Quick View Button on Image Hover */}
                    <div className="absolute inset-0 bg-[#38261F]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProduct(product);
                        }}
                        className="px-4 py-2 rounded-full bg-white/95 text-[#38261F] text-xs font-bold shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Details</span>
                      </button>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-5 sm:p-6 text-left">
                    {/* Dietary tags */}
                    {product.dietary && product.dietary.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-2.5">
                        {product.dietary.slice(0, 2).map((diet, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-[#F4FADC] text-[#6E8B0E]"
                          >
                            {diet}
                          </span>
                        ))}
                      </div>
                    )}

                    <h3 className="text-lg sm:text-xl font-serif font-bold text-[#38261F] group-hover:text-[#E85E76] transition-colors leading-snug">
                      {product.name}
                    </h3>

                    <p className="text-xs text-[#7A6154] mt-2 line-clamp-2 leading-relaxed">
                      {product.tagline}
                    </p>

                    {product.servings && (
                      <p className="text-[11px] font-semibold text-[#8EAE19] mt-2 flex items-center gap-1">
                        <span>•</span> {product.servings}
                      </p>
                    )}
                  </div>
                </div>

                {/* Bottom Price & Add Action */}
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-3 border-t border-[#38261F]/6 flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-[11px] text-[#7A6154] block">Price</span>
                    <span className="text-base sm:text-lg font-extrabold text-[#38261F] font-sans">
                      {product.formattedPrice}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => handleQuickAdd(e, product)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 active:scale-95 shadow-xs ${
                      isJustAdded
                        ? 'bg-[#8EAE19] text-white'
                        : product.category === 'custom'
                        ? 'bg-[#E8F7FC] hover:bg-[#72CBE8] text-[#207A9E] hover:text-[#38261F]'
                        : 'bg-[#B7D92B] hover:bg-[#9EBE1D] text-[#38261F]'
                    }`}
                  >
                    {isJustAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                        <span>Added!</span>
                      </>
                    ) : product.category === 'custom' ? (
                      <>
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Customize</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                        <span>Add</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Order Promo Box underneath products */}
        <div className="mt-14 sm:mt-16 bg-gradient-to-r from-[#E8F7FC] via-[#FFFDF5] to-[#FDF0F3] rounded-3xl p-6 sm:p-10 border border-[#72CBE8]/30 flex flex-col lg:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-2">
            <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#38261F]">
              Looking for a custom theme, tiered cake, or dietary requests?
            </h4>
            <p className="text-sm text-[#634E44] max-w-2xl">
              We specialize in turning your party color schemes, favorite flavors, and story themes into showstopping edible magic.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenCustomOrder}
            className="shrink-0 px-7 py-3.5 rounded-full bg-[#E85E76] hover:bg-[#D44760] text-white font-bold text-sm shadow-md transition-all duration-200 active:scale-95 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Design Your Custom Cake</span>
          </button>
        </div>

      </div>
    </section>
  );
};
