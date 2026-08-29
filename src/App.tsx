import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { CategorySection } from './components/CategorySection';
import { FeaturedProducts } from './components/FeaturedProducts';
import { CustomCakeSection } from './components/CustomCakeSection';
import { StorySection } from './components/StorySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GallerySection } from './components/GallerySection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';

import { CustomOrderModal } from './components/CustomOrderModal';
import { CartDrawer } from './components/CartDrawer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { QuickSearchModal } from './components/QuickSearchModal';

import { Product, CartItem } from './types';
import { productsData } from './data/bakeryData';

export default function App() {
  // Navigation & Active Section Tracking
  const [activeSection, setActiveSection] = useState('home');

  // Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCustomOrderOpen, setIsCustomOrderOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Cart State with initial sample items for immediate joyful demonstration
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: productsData[1], // Magical Sky Vanilla Cupcakes
      quantity: 1,
      selectedFlavor: 'Classic Vanilla Bean',
    },
  ]);

  // Total cart count
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Scroll section observer
  useEffect(() => {
    const handleScrollObserver = () => {
      const sections = ['home', 'menu', 'cakes', 'cupcakes', 'celebrations', 'about', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollObserver, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollObserver);
  }, []);

  // Cart Handlers
  const handleAddToCart = (product: Product, quantity: number = 1, selectedFlavor?: string) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity, selectedFlavor }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Scroll to section helper
  const scrollToSection = (sectionSelector: string) => {
    const element = document.querySelector(sectionSelector);
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

  const handleSelectCategory = (categoryId: string) => {
    scrollToSection('#menu');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF5] text-[#38261F]">
      
      {/* Sticky Premium Header */}
      <Header
        activeSection={activeSection}
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenCustomOrder={() => setIsCustomOrderOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExploreMenu={() => scrollToSection('#menu')}
          onOrderMagical={() => setIsCustomOrderOpen(true)}
        />

        {/* 2. Value & Trust Strip */}
        <TrustStrip />

        {/* 3. Category Showcase ("Find Your Sweet Spot") */}
        <CategorySection
          onSelectCategory={handleSelectCategory}
          onOpenCustomOrder={() => setIsCustomOrderOpen(true)}
        />

        {/* 4. Featured Menu & Product Cards ("Made to Make You Smile") */}
        <FeaturedProducts
          onSelectProduct={(product) => setSelectedProduct(product)}
          onAddToCart={(product) => handleAddToCart(product, 1)}
          onOpenCustomOrder={() => setIsCustomOrderOpen(true)}
        />

        {/* 5. Custom Cakes & Celebrations ("Have a Sweet Idea? Let's Make It Magical") */}
        <CustomCakeSection
          onOpenCustomOrder={() => setIsCustomOrderOpen(true)}
        />

        {/* 6. Story & Handcrafted Values ("Made With Heart - A Little Magic in Every Bite") */}
        <StorySection />

        {/* 7. Customer Reviews & Testimonials */}
        <TestimonialsSection />

        {/* 8. Gallery Grid */}
        <GallerySection />

        {/* 9. FAQ Accordion */}
        <FaqSection />

        {/* 10. Final Call to Action */}
        <FinalCtaSection
          onExploreMenu={() => scrollToSection('#menu')}
          onOpenCustomOrder={() => setIsCustomOrderOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenCustomOrder={() => setIsCustomOrderOpen(true)}
        onNavigate={scrollToSection}
      />

      {/* Interactive Modals & Drawers */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onOpenCustomOrder={() => {
          setIsCartOpen(false);
          setIsCustomOrderOpen(true);
        }}
      />

      <CustomOrderModal
        isOpen={isCustomOrderOpen}
        onClose={() => setIsCustomOrderOpen(false)}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onOpenCustomOrder={() => {
          setSelectedProduct(null);
          setIsCustomOrderOpen(true);
        }}
      />

      <QuickSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(product) => setSelectedProduct(product)}
      />

    </div>
  );
}

