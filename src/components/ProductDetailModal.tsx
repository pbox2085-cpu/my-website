import React, { useState } from 'react';
import { Product } from '../types';
import { X, Sparkles, Plus, Check, Heart, ShieldAlert, Award, Star } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, selectedFlavor?: string) => void;
  onOpenCustomOrder: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onOpenCustomOrder,
}) => {
  if (!product) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedFlavor, setSelectedFlavor] = useState(product.flavors?.[0] || '');
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    if (product.category === 'custom') {
      onClose();
      onOpenCustomOrder();
      return;
    }
    onAddToCart(product, quantity, selectedFlavor);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#38261F]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-[#FFFDF5] rounded-3xl max-w-2xl w-full shadow-2xl border border-[#38261F]/10 z-10 my-8 overflow-hidden text-left max-h-[92vh] flex flex-col">
        
        {/* Top Image Banner */}
        <div className="relative aspect-16/9 sm:aspect-21/9 bg-[#38261F] shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-[#38261F] backdrop-blur-xs shadow-md transition-colors"
            aria-label="Close product details"
          >
            <X className="w-5 h-5 text-[#E85E76]" />
          </button>

          {product.badge && (
            <div className="absolute bottom-4 left-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FFFDF5]/95 text-[#38261F] border border-[#38261F]/10 shadow-xs">
                {product.badge}
              </span>
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
          
          {/* Header */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8EAE19]">
                {product.category.toUpperCase()}
              </span>
              <span className="text-2xl font-serif font-extrabold text-[#38261F]">
                {product.formattedPrice}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#38261F]">
              {product.name}
            </h3>

            {product.servings && (
              <p className="text-xs font-semibold text-[#7A6154] mt-1">
                Servings: {product.servings}
              </p>
            )}
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#634E44] leading-relaxed">
            {product.description}
          </p>

          {/* Dietary Badges */}
          {product.dietary && product.dietary.length > 0 && (
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#38261F] block">Dietary & Quality:</span>
              <div className="flex flex-wrap gap-2">
                {product.dietary.map((d, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-[#F4FADC] text-[#6E8B0E] border border-[#B7D92B]/40"
                  >
                    ✓ {d}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Flavor options if applicable */}
          {product.flavors && product.flavors.length > 1 && (
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#38261F] block">
                Choose Flavor Option:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.flavors.map((flavor, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedFlavor(flavor)}
                    className={`p-2.5 rounded-xl text-xs font-bold text-left transition-all border ${
                      selectedFlavor === flavor
                        ? 'bg-[#E8F7FC] border-[#72CBE8] text-[#207A9E] shadow-2xs'
                        : 'bg-white border-[#38261F]/10 text-[#634E44] hover:bg-[#FFF8EA]'
                    }`}
                  >
                    {flavor}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Ingredients list */}
          {product.ingredients && product.ingredients.length > 0 && (
            <div className="p-4 rounded-2xl bg-[#FFF8EA] border border-[#F6D86B]/30 space-y-1.5 text-xs text-[#634E44]">
              <span className="font-bold text-[#38261F] block">Pure Ingredients:</span>
              <p className="leading-relaxed">
                {product.ingredients.join(' • ')}
              </p>
            </div>
          )}

        </div>

        {/* Modal Footer Controls */}
        <div className="p-6 bg-white border-t border-[#38261F]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          {product.category !== 'custom' && (
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-[#38261F]">Quantity:</span>
              <div className="flex items-center gap-2 border border-[#38261F]/15 rounded-full px-3 py-1">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-sm font-bold text-[#5C453A] hover:text-[#38261F]"
                >
                  -
                </button>
                <span className="text-sm font-bold text-[#38261F] w-6 text-center">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-sm font-bold text-[#5C453A] hover:text-[#38261F]"
                >
                  +
                </button>
              </div>
            </div>
          )}

          <button
            type="button"
            onClick={handleAdd}
            className={`w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 ${
              justAdded
                ? 'bg-[#8EAE19] text-white'
                : 'bg-[#B7D92B] hover:bg-[#9EBE1D] text-[#38261F]'
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-4 h-4 stroke-[3]" />
                <span>Added to Basket!</span>
              </>
            ) : product.category === 'custom' ? (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Design This Custom Cake</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4 stroke-[2.5]" />
                <span>Add {quantity > 1 ? `(${quantity})` : ''} to Order • ${(product.priceStartingFrom * quantity).toFixed(2)}</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
