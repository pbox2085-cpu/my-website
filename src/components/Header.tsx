import React, { useState, useEffect } from 'react';
import { MagicalLogo } from './MagicalLogo';
import { ShoppingBag, Search, Menu, X, Sparkles, PhoneCall, ChevronRight } from 'lucide-react';
import { businessConfig } from '../data/bakeryData';

interface HeaderProps {
  onOpenCart: () => void;
  onOpenCustomOrder: () => void;
  onOpenSearch: () => void;
  cartCount: number;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenCart,
  onOpenCustomOrder,
  onOpenSearch,
  cartCount,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Our Menu', href: '#menu', id: 'menu' },
    { label: 'Cakes', href: '#cakes', id: 'cakes' },
    { label: 'Cupcakes', href: '#cupcakes', id: 'cupcakes' },
    { label: 'Celebrations', href: '#celebrations', id: 'celebrations' },
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FFFDF5]/90 backdrop-blur-md shadow-xs border-b border-[#38261F]/6 py-3'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="outline-hidden focus-visible:ring-2 focus-visible:ring-[#72CBE8] rounded-xl"
              aria-label="Magical Bites Bakery Home"
            >
              <MagicalLogo size="md" variant="horizontal" />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 relative group ${
                      isActive
                        ? 'text-[#38261F] font-semibold bg-[#E8F7FC]/80 shadow-2xs'
                        : 'text-[#5C453A] hover:text-[#38261F] hover:bg-[#FFF8EA]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#72CBE8] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Actions & CTAs */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search trigger */}
              <button
                type="button"
                onClick={onOpenSearch}
                className="p-2.5 rounded-full text-[#5C453A] hover:text-[#38261F] hover:bg-[#E8F7FC] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#72CBE8]"
                aria-label="Search bakery menu"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Shopping Bag / Cart */}
              <button
                type="button"
                onClick={onOpenCart}
                className="relative p-2.5 rounded-full text-[#5C453A] hover:text-[#38261F] hover:bg-[#FDF0F3] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F28B9D]"
                aria-label={`Shopping cart with ${cartCount} items`}
              >
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-[#E85E76] text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-xs animate-pulse-soft">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Primary "Order Now" Button */}
              <button
                type="button"
                onClick={onOpenCustomOrder}
                className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#B7D92B] hover:bg-[#9EBE1D] text-[#38261F] font-semibold text-sm shadow-xs hover:shadow-md transition-all duration-200 active:scale-95 group"
              >
                <Sparkles className="w-4 h-4 text-[#38261F] group-hover:rotate-12 transition-transform" />
                <span>Order Now</span>
                <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl text-[#38261F] hover:bg-[#FFF8EA] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#72CBE8]"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#E85E76]" />
                ) : (
                  <Menu className="w-6 h-6 text-[#38261F]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#38261F]/40 backdrop-blur-xs transition-opacity animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative ml-auto w-full max-w-sm bg-[#FFFDF5] h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-[#38261F]/10 z-10 animate-slide-left">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#38261F]/10">
                <MagicalLogo size="md" variant="horizontal" />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-[#FDF0F3] text-[#38261F]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-[#E85E76]" />
                </button>
              </div>

              {/* Navigation Links list */}
              <div className="flex flex-col gap-2 py-6">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-base font-medium transition-colors ${
                      activeSection === link.id
                        ? 'bg-[#E8F7FC] text-[#207A9E] font-semibold'
                        : 'text-[#38261F] hover:bg-[#FFF8EA]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Footer CTAs & Details */}
            <div className="pt-6 border-t border-[#38261F]/10 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCustomOrder();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#B7D92B] hover:bg-[#9EBE1D] text-[#38261F] font-bold text-sm shadow-sm active:scale-98"
              >
                <Sparkles className="w-4 h-4" />
                <span>Start Your Custom Order</span>
              </button>

              <div className="flex items-center justify-between px-2 pt-2 text-xs text-[#7A6154]">
                <span className="flex items-center gap-1.5">
                  <PhoneCall className="w-3.5 h-3.5 text-[#B7D92B]" />
                  {businessConfig.phone}
                </span>
                <span>Tue–Sun Fresh Baked</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
