import React, { useState, useMemo } from 'react';
import { X, Search, Sparkles, ArrowRight } from 'lucide-react';
import { productsData } from '../data/bakeryData';
import { Product } from '../types';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!query.trim()) return productsData.slice(0, 4);
    const q = query.toLowerCase();
    return productsData.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.dietary?.some((d) => d.toLowerCase().includes(q))
    );
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#38261F]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="relative bg-[#FFFDF5] rounded-3xl max-w-xl w-full p-6 shadow-2xl border border-[#38261F]/10 z-10 text-left space-y-4 max-h-[80vh] flex flex-col">
        
        {/* Search Input Bar */}
        <div className="relative">
          <Search className="w-5 h-5 text-[#9C8578] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            autoFocus
            placeholder="Search cakes, cupcakes, flavors, dietary (e.g. vanilla, strawberry, gluten)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-white border border-[#38261F]/15 text-sm text-[#38261F] focus:outline-none focus:ring-2 focus:ring-[#72CBE8] placeholder:text-[#9C8578]"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#9C8578] hover:text-[#38261F]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Results List */}
        <div className="overflow-y-auto flex-1 space-y-2.5 pr-1">
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#8EAE19] px-1">
            {query.trim() ? `Found ${searchResults.length} Delights` : 'Popular Recommendations'}
          </div>

          {searchResults.length === 0 ? (
            <div className="text-center py-8 text-xs text-[#7A6154]">
              No sweet treats matching "{query}". Try searching "cake", "cupcake", or "strawberry".
            </div>
          ) : (
            searchResults.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct(product);
                  onClose();
                }}
                className="p-3 rounded-2xl bg-white hover:bg-[#E8F7FC]/60 border border-[#38261F]/8 flex items-center justify-between gap-3 cursor-pointer transition-all duration-200 group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 rounded-xl object-cover shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="min-w-0">
                    <h4 className="text-sm font-serif font-bold text-[#38261F] group-hover:text-[#E85E76] transition-colors truncate">
                      {product.name}
                    </h4>
                    <p className="text-xs text-[#7A6154] truncate">
                      {product.tagline}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs font-bold text-[#38261F]">
                    {product.formattedPrice}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#9C8578] group-hover:translate-x-1 group-hover:text-[#38261F] transition-all" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="pt-3 border-t border-[#38261F]/6 flex items-center justify-between text-xs text-[#7A6154]">
          <span>Press ESC or click outside to close</span>
          <button
            type="button"
            onClick={onClose}
            className="font-bold text-[#E85E76] hover:underline"
          >
            Close Search
          </button>
        </div>

      </div>
    </div>
  );
};
