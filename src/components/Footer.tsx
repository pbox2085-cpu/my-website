import React, { useState } from 'react';
import { MagicalLogo } from './MagicalLogo';
import { businessConfig } from '../data/bakeryData';
import {
  Sparkles,
  Heart,
  Instagram,
  Facebook,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

interface FooterProps {
  onOpenCustomOrder: () => void;
  onNavigate: (href: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCustomOrder, onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer id="contact" className="bg-[#FFF8EA] text-[#38261F] border-t border-[#38261F]/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#38261F]/10 text-left">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <MagicalLogo size="lg" variant="horizontal" />
            
            <p className="text-sm text-[#634E44] leading-relaxed max-w-sm">
              Handcrafted cakes, whimsical cupcakes, and celebration dessert spreads made with European butter, pure vanilla, and a sprinkle of wonder.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={businessConfig.socialLinks.instagram}
                aria-label="Magical Bites Instagram"
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#E85E76] border border-[#38261F]/10 hover:bg-[#FDF0F3] hover:scale-105 transition-all shadow-2xs"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={businessConfig.socialLinks.facebook}
                aria-label="Magical Bites Facebook"
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#207A9E] border border-[#38261F]/10 hover:bg-[#E8F7FC] hover:scale-105 transition-all shadow-2xs"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#8EAE19]">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-[#634E44]">
              <li>
                <a
                  href="#menu"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('#menu');
                  }}
                  className="hover:text-[#E85E76] transition-colors"
                >
                  Our Menu
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenCustomOrder}
                  className="hover:text-[#E85E76] transition-colors text-left"
                >
                  Custom Cakes
                </button>
              </li>
              <li>
                <a
                  href="#celebrations"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('#celebrations');
                  }}
                  className="hover:text-[#E85E76] transition-colors"
                >
                  Celebrations
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('#about');
                  }}
                  className="hover:text-[#E85E76] transition-colors"
                >
                  About Our Story
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('#faq');
                  }}
                  className="hover:text-[#E85E76] transition-colors"
                >
                  FAQ & Dietary
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Bakery Hours & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#8EAE19]">
              Bakery & Hours
            </h4>
            
            <div className="space-y-2 text-xs sm:text-sm text-[#634E44]">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#8EAE19] shrink-0 mt-0.5" />
                <div>
                  {businessConfig.hours.map((h, i) => (
                    <div key={i} className="flex justify-between gap-2 text-xs py-0.5">
                      <span className="font-medium text-[#38261F]">{h.days}:</span>
                      <span>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-2 pt-2 border-t border-[#38261F]/6">
                <MapPin className="w-4 h-4 text-[#72CBE8] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-semibold text-[#38261F] block">{businessConfig.address}</span>
                  <span>{businessConfig.cityState}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-3.5 h-3.5 text-[#E85E76] shrink-0" />
                <span className="text-xs font-semibold text-[#38261F]">{businessConfig.phone}</span>
              </div>
            </div>
          </div>

          {/* Col 4: Newsletter (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#8EAE19]">
              Get a Little More Magic
            </h4>
            <p className="text-xs text-[#634E44] leading-relaxed">
              Join our sweet circle for secret seasonal cupcake drops, holiday menus, and celebration baking tips.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2 pt-1">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-2.5 rounded-full bg-white border border-[#38261F]/15 text-xs text-[#38261F] placeholder:text-[#9C8578] focus:outline-none focus:ring-2 focus:ring-[#72CBE8] pr-20"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-4 rounded-full bg-[#B7D92B] hover:bg-[#9EBE1D] text-[#38261F] font-bold text-xs shadow-2xs transition-colors flex items-center gap-1"
                >
                  <span>Join</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {subscribed && (
                <div className="flex items-center gap-1.5 text-xs text-[#8EAE19] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Welcome to the sweet family!</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A6154]">
          <p>© 2026 Magical Bites. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Handcrafted with</span>
            <Heart className="w-3.5 h-3.5 fill-[#E85E76] text-[#E85E76]" />
            <span>for sweet moments everywhere</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
