import React, { useState } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, Sparkles, CheckCircle2, Calendar } from 'lucide-react';
import { CartItem } from '../types';
import { businessConfig } from '../data/bakeryData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onOpenCustomOrder: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onOpenCustomOrder,
}) => {
  const [fulfillmentType, setFulfillmentType] = useState<'pickup' | 'delivery'>('pickup');
  const [pickupDate, setPickupDate] = useState('');
  const [orderNotes, setOrderNotes] = useState('');
  const [isOrdered, setIsOrdered] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (acc, item) => acc + item.product.priceStartingFrom * item.quantity,
    0
  );
  const deliveryFee = fulfillmentType === 'delivery' ? 12 : 0;
  const total = subtotal + deliveryFee;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdered(true);
  };

  const handleFinish = () => {
    setIsOrdered(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#38261F]/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-[#FFFDF5] h-full shadow-2xl z-10 flex flex-col justify-between overflow-y-auto border-l border-[#38261F]/10 text-left">
        
        {/* Header */}
        <div className="p-6 border-b border-[#38261F]/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#E8F7FC] text-[#207A9E] flex items-center justify-center">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-[#38261F]">Your Sweet Order</h3>
              <p className="text-xs text-[#7A6154]">
                {items.length} {items.length === 1 ? 'dessert item' : 'dessert items'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#FDF0F3] text-[#38261F] transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-[#E85E76]" />
          </button>
        </div>

        {/* Content */}
        {isOrdered ? (
          /* Confirmation Screen */
          <div className="p-8 text-center my-auto space-y-6">
            <div className="w-20 h-20 rounded-full bg-[#F4FADC] border-2 border-[#B7D92B] flex items-center justify-center mx-auto text-[#8EAE19] animate-bounce">
              <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8EAE19]">
                Order Reservation Received!
              </span>
              <h4 className="text-2xl font-serif font-bold text-[#38261F]">
                Time to Bake Something Magical!
              </h4>
              <p className="text-xs sm:text-sm text-[#634E44] leading-relaxed">
                Thank you for your order reservation. We have saved your selection for{' '}
                <span className="font-bold text-[#38261F]">
                  {fulfillmentType === 'pickup' ? 'Storefront Pickup' : 'Local Delivery'}
                </span>
                {pickupDate && ` on ${pickupDate}`}. Our team will confirm preparation details shortly.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FFF8EA] border border-[#F6D86B]/40 text-xs text-[#7A6154] text-left space-y-1">
              <p className="font-bold text-[#38261F]">Pickup Location:</p>
              <p>{businessConfig.address}, {businessConfig.cityState}</p>
            </div>

            <button
              type="button"
              onClick={handleFinish}
              className="w-full py-3.5 rounded-full bg-[#B7D92B] hover:bg-[#9EBE1D] text-[#38261F] font-bold text-sm shadow-md transition-all active:scale-95"
            >
              Done & Explore More
            </button>
          </div>
        ) : items.length === 0 ? (
          /* Empty State */
          <div className="p-8 text-center my-auto space-y-5">
            <div className="w-20 h-20 rounded-full bg-[#E8F7FC] flex items-center justify-center mx-auto text-[#72CBE8]">
              <ShoppingBag className="w-10 h-10" />
            </div>
            <div className="space-y-1.5">
              <h4 className="text-xl font-serif font-bold text-[#38261F]">
                Your treat basket is empty
              </h4>
              <p className="text-xs sm:text-sm text-[#7A6154]">
                Explore our signature cakes, cupcakes, and party platters to add some sweetness!
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-full bg-[#B7D92B] text-[#38261F] font-bold text-xs uppercase tracking-wider hover:bg-[#9EBE1D] transition-colors"
            >
              Browse Menu
            </button>
          </div>
        ) : (
          /* Active Item List */
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="p-3.5 rounded-2xl bg-white border border-[#38261F]/8 shadow-2xs flex items-center gap-3.5"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-16 h-16 rounded-xl object-cover shrink-0"
                  referrerPolicy="no-referrer"
                />

                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-serif font-bold text-[#38261F] truncate">
                    {item.product.name}
                  </h4>
                  <p className="text-xs font-semibold text-[#8EAE19]">
                    ${item.product.priceStartingFrom.toFixed(2)}
                  </p>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                      className="w-6 h-6 rounded-md bg-[#FFF8EA] hover:bg-[#FDF0F3] text-[#38261F] flex items-center justify-center transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold text-[#38261F] w-5 text-center">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                      className="w-6 h-6 rounded-md bg-[#FFF8EA] hover:bg-[#F4FADC] text-[#38261F] flex items-center justify-center transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onRemoveItem(item.product.id)}
                  className="p-2 text-[#9C8578] hover:text-[#E85E76] transition-colors"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}

            {/* Custom order banner inside cart */}
            <div className="p-3.5 rounded-2xl bg-[#FDF0F3] border border-[#F28B9D]/30 flex items-center justify-between">
              <div className="text-xs">
                <span className="font-bold text-[#E85E76] block">Need custom writing or colors?</span>
                <span className="text-[#7A6154]">Inquire with our custom team</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenCustomOrder();
                }}
                className="px-3 py-1.5 rounded-full bg-[#E85E76] text-white text-[11px] font-bold"
              >
                Inquire
              </button>
            </div>
          </div>
        )}

        {/* Footer / Summary if items present */}
        {items.length > 0 && !isOrdered && (
          <div className="p-6 bg-white border-t border-[#38261F]/10 space-y-4">
            
            {/* Fulfillment Toggle */}
            <div className="grid grid-cols-2 gap-2 bg-[#FFFDF5] p-1 rounded-xl border border-[#38261F]/8">
              <button
                type="button"
                onClick={() => setFulfillmentType('pickup')}
                className={`py-1.5 text-xs font-bold rounded-lg transition-all ${
                  fulfillmentType === 'pickup'
                    ? 'bg-[#38261F] text-white shadow-2xs'
                    : 'text-[#634E44] hover:text-[#38261F]'
                }`}
              >
                Storefront Pickup
              </button>
              <button
                type="button"
                onClick={() => setFulfillmentType('delivery')}
                className={`py-1.5 text-xs font-bold rounded-lg transition-all ${
                  fulfillmentType === 'delivery'
                    ? 'bg-[#38261F] text-white shadow-2xs'
                    : 'text-[#634E44] hover:text-[#38261F]'
                }`}
              >
                Local Delivery ($12)
              </button>
            </div>

            {/* Date selection */}
            <div>
              <label className="block text-[11px] font-bold text-[#38261F] mb-1">
                Requested Pickup / Delivery Date
              </label>
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#FFFDF5] border border-[#38261F]/15 text-xs text-[#38261F] focus:outline-none focus:ring-2 focus:ring-[#72CBE8]"
              />
            </div>

            {/* Calculations */}
            <div className="space-y-1.5 text-xs text-[#634E44] pt-2 border-t border-[#38261F]/6">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-semibold text-[#38261F]">${subtotal.toFixed(2)}</span>
              </div>
              {fulfillmentType === 'delivery' && (
                <div className="flex justify-between">
                  <span>Courier Delivery:</span>
                  <span className="font-semibold text-[#38261F]">$12.00</span>
                </div>
              )}
              <div className="flex justify-between text-sm font-bold text-[#38261F] pt-1 border-t border-[#38261F]/6">
                <span>Estimated Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              type="button"
              onClick={handleCheckout}
              className="w-full py-3.5 rounded-full bg-[#B7D92B] hover:bg-[#9EBE1D] text-[#38261F] font-bold text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 group"
            >
              <span>Confirm Order Reservation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
