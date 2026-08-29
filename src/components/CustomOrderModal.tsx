import React, { useState } from 'react';
import { X, Sparkles, Calendar, Heart, CheckCircle2, Send, Clock } from 'lucide-react';
import { CustomOrderFormData } from '../types';
import { MagicalLogo } from './MagicalLogo';
import { businessConfig } from '../data/bakeryData';

interface CustomOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomOrderModal: React.FC<CustomOrderModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<CustomOrderFormData>({
    fullName: '',
    email: '',
    phone: '',
    occasion: 'Birthday Celebration',
    preferredDate: '',
    dessertType: 'Custom Tiered Cake',
    numberOfServings: '12–20 Guests',
    flavor: 'Madagascar Vanilla & Strawberry Compote',
    themeAndColors: '',
    sweetIdeaDetails: '',
    dietaryRestrictions: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#38261F]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative bg-[#FFFDF5] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#38261F]/10 z-10 my-8 text-left max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#FDF0F3] text-[#38261F] transition-colors"
          aria-label="Close custom order modal"
        >
          <X className="w-5 h-5 text-[#E85E76]" />
        </button>

        {submitted ? (
          /* Success Screen */
          <div className="text-center py-8 space-y-6">
            <div className="w-20 h-20 rounded-full bg-[#F4FADC] border-2 border-[#B7D92B] flex items-center justify-center mx-auto text-[#8EAE19] animate-bounce">
              <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
            </div>

            <div className="space-y-2 max-w-md mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8EAE19]">
                Request Received With Delight!
              </span>
              <h3 className="text-3xl font-serif font-extrabold text-[#38261F]">
                Thank You, {formData.fullName.split(' ')[0] || 'Friend'}!
              </h3>
              <p className="text-sm text-[#634E44] leading-relaxed">
                Our head cake designer will review your theme, flavor choices, and preferred date for <span className="font-semibold text-[#38261F]">{formData.occasion}</span>. We will follow up via email with design sketches and a custom quote within 24 hours.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#E8F7FC] border border-[#72CBE8]/40 text-left text-xs text-[#207A9E] space-y-1.5 max-w-md mx-auto">
              <div className="flex items-center gap-1.5 font-bold">
                <Clock className="w-4 h-4" />
                <span>Order Summary:</span>
              </div>
              <p>• <span className="font-semibold">Dessert:</span> {formData.dessertType} ({formData.numberOfServings})</p>
              <p>• <span className="font-semibold">Flavor:</span> {formData.flavor}</p>
              <p>• <span className="font-semibold">Preferred Date:</span> {formData.preferredDate || 'Flexible'}</p>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="px-8 py-3.5 rounded-full bg-[#B7D92B] hover:bg-[#9EBE1D] text-[#38261F] font-bold text-sm shadow-md transition-all active:scale-95"
            >
              Back to Magical Bites
            </button>
          </div>
        ) : (
          /* Inquiry Form */
          <div>
            {/* Header */}
            <div className="pb-6 border-b border-[#38261F]/10 pr-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4FADC] text-[#6E8B0E] text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Custom Cake & Treats Inquiry</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#38261F]">
                Start Your Custom Order
              </h3>
              <p className="text-xs sm:text-sm text-[#7A6154] mt-1">
                Tell us your sweet idea, party colors, and date. We’ll craft a personalized proposal.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 pt-6">
              
              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#38261F] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jessica Miller"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#38261F]/15 text-sm text-[#38261F] focus:outline-none focus:ring-2 focus:ring-[#72CBE8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#38261F] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jessica@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#38261F]/15 text-sm text-[#38261F] focus:outline-none focus:ring-2 focus:ring-[#72CBE8]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#38261F] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#38261F]/15 text-sm text-[#38261F] focus:outline-none focus:ring-2 focus:ring-[#72CBE8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#38261F] mb-1">
                    Preferred Celebration Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#38261F]/15 text-sm text-[#38261F] focus:outline-none focus:ring-2 focus:ring-[#72CBE8]"
                  />
                </div>
              </div>

              {/* Occasion & Type */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#38261F] mb-1">
                    Occasion
                  </label>
                  <select
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#38261F]/15 text-sm text-[#38261F] focus:outline-none focus:ring-2 focus:ring-[#72CBE8]"
                  >
                    <option>Birthday Celebration</option>
                    <option>Children’s Party</option>
                    <option>Baby Shower / Gender Reveal</option>
                    <option>Wedding / Engagement</option>
                    <option>Anniversary</option>
                    <option>Holiday / Special Gathering</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#38261F] mb-1">
                    Dessert Type
                  </label>
                  <select
                    value={formData.dessertType}
                    onChange={(e) => setFormData({ ...formData, dessertType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#38261F]/15 text-sm text-[#38261F] focus:outline-none focus:ring-2 focus:ring-[#72CBE8]"
                  >
                    <option>Custom Tiered Cake</option>
                    <option>Single-Tier Celebration Cake</option>
                    <option>Themed Cupcake Platter (12–24+)</option>
                    <option>Cake & Cupcake Bundle</option>
                    <option>Party Dessert Table Spread</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#38261F] mb-1">
                    Number of Servings
                  </label>
                  <select
                    value={formData.numberOfServings}
                    onChange={(e) => setFormData({ ...formData, numberOfServings: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#38261F]/15 text-sm text-[#38261F] focus:outline-none focus:ring-2 focus:ring-[#72CBE8]"
                  >
                    <option>6–10 Guests</option>
                    <option>12–20 Guests</option>
                    <option>20–35 Guests</option>
                    <option>40–60 Guests</option>
                    <option>60+ Large Event</option>
                  </select>
                </div>
              </div>

              {/* Flavors & Themes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#38261F] mb-1">
                    Flavor Profile
                  </label>
                  <select
                    value={formData.flavor}
                    onChange={(e) => setFormData({ ...formData, flavor: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#38261F]/15 text-sm text-[#38261F] focus:outline-none focus:ring-2 focus:ring-[#72CBE8]"
                  >
                    <option>Madagascar Vanilla & Strawberry Compote</option>
                    <option>Midnight Chocolate Truffle & Fudge</option>
                    <option>Lemon Sunshine Curd & Citrus Chiffon</option>
                    <option>Whimsical Funfetti & Strawberry Cream</option>
                    <option>Salted Caramel Mocha Swirl</option>
                    <option>Surprise Me / Chef Blend</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#38261F] mb-1">
                    Theme / Color Palette
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Sky blue, lime green & gold stars"
                    value={formData.themeAndColors}
                    onChange={(e) => setFormData({ ...formData, themeAndColors: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#38261F]/15 text-sm text-[#38261F] focus:outline-none focus:ring-2 focus:ring-[#72CBE8]"
                  />
                </div>
              </div>

              {/* Large Sweet Idea Textarea */}
              <div>
                <label className="block text-xs font-bold text-[#38261F] mb-1">
                  Tell Us Your Sweet Idea *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Describe your design vision, topper ideas, personal message on cake, or any creative inspirations..."
                  value={formData.sweetIdeaDetails}
                  onChange={(e) => setFormData({ ...formData, sweetIdeaDetails: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#38261F]/15 text-sm text-[#38261F] focus:outline-none focus:ring-2 focus:ring-[#72CBE8] leading-relaxed"
                />
              </div>

              {/* Dietary note */}
              <div>
                <label className="block text-xs font-bold text-[#38261F] mb-1">
                  Dietary / Allergy Notes (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Nut allergy, Gluten-friendly sponge requested"
                  value={formData.dietaryRestrictions}
                  onChange={(e) => setFormData({ ...formData, dietaryRestrictions: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#38261F]/15 text-sm text-[#38261F] focus:outline-none focus:ring-2 focus:ring-[#72CBE8]"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-[11px] text-[#7A6154]">
                  We respond with quotes within 24 hours. No obligation.
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#B7D92B] hover:bg-[#9EBE1D] text-[#38261F] font-bold text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending Request...' : 'Send Custom Request'}</span>
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
