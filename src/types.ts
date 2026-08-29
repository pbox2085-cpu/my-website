export interface Product {
  id: string;
  name: string;
  category: 'cakes' | 'cupcakes' | 'custom' | 'party' | 'cheesecakes';
  tagline: string;
  description: string;
  priceStartingFrom: number;
  formattedPrice: string;
  image: string;
  badge?: string;
  isPopular?: boolean;
  servings?: string;
  flavors?: string[];
  dietary?: string[];
  ingredients?: string[];
  bgTint?: string;
}

export interface CategoryCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
  colorScheme: 'pink' | 'blue' | 'lime' | 'ivory';
  itemsCount: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  occasion: string;
  rating: number;
  featuredDessert?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: 'square' | 'portrait' | 'landscape';
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedFlavor?: string;
  specialInstructions?: string;
}

export interface CustomOrderFormData {
  fullName: string;
  email: string;
  phone: string;
  occasion: string;
  preferredDate: string;
  dessertType: string;
  numberOfServings: string;
  flavor: string;
  themeAndColors: string;
  sweetIdeaDetails: string;
  dietaryRestrictions: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
