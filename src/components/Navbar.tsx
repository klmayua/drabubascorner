'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';

interface NavLink {
  name: string;
  href: string;
}

const PUBLIC_LINKS: NavLink[] = [
  { name: 'Articles', href: '/' },
  { name: 'Videos', href: '/video-archive' },
  { name: 'Podcast', href: '/podcast' },
  { name: 'Community', href: '/community-networking-hub-desktop-refined' },
  { name: 'Courses', href: '/catalog' },
  { name: 'Marketplace', href: '/marketplace' },
];

const ACADEMIC_LINKS: NavLink[] = [
  { name: 'Biography', href: '/about' },
  { name: 'Research', href: '/research-search' },
  { name: 'Library', href: '/library' },
  { name: 'Speaking', href: '/speaking-consulting' },
  { name: 'Partnerships', href: '/partners' },
  { name: 'Calculators', href: '/calculator' },
];

const DASHBOARD_LINKS: NavLink[] = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Members Only', href: '/members' },
  { name: 'Admin Console', href: '/admin' },
  { name: 'My Profile', href: '/profile' },
  { name: 'Public Portal', href: '/' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { cartCount, toggleWishlist } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  // Determine nav variant based on pathname
  const getNavVariant = (): 'public' | 'academic' | 'dashboard' => {
    if (
      pathname.startsWith('/dashboard') ||
      pathname.startsWith('/admin') ||
      pathname.startsWith('/members') ||
      pathname.startsWith('/profile')
    ) {
      return 'dashboard';
    }
    if (
      pathname.startsWith('/about') ||
      pathname.startsWith('/research') ||
      pathname.startsWith('/library') ||
      pathname.startsWith('/partners') ||
      pathname.startsWith('/speaking') ||
      pathname.startsWith('/calculator')
    ) {
      return 'academic';
    }
    return 'public';
  };

  const variant = getNavVariant();
  const navLinks =
    variant === 'dashboard'
      ? DASHBOARD_LINKS
      : variant === 'academic'
      ? ACADEMIC_LINKS
      : PUBLIC_LINKS;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    
    // Simple simulated search database
    const mockDb = [
      { title: 'The Epistemology of Financial Resilience', url: '/research-detail' },
      { title: 'Cognitive Optimization: The Neural Basis of Stoicism', url: '/' },
      { title: 'Cellular Optimization Longevity Protocols', url: '/library' },
      { title: 'Executive Stress Management Masterclass', url: '/catalog' },
      { title: 'Sovereign Wealth Management Workshops', url: '/speaking-consulting' },
      { title: 'Stoic Executive Governance Framework', url: '/about' }
    ];

    const filtered = mockDb.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filtered.map(item => `<a href="${item.url}" class="block p-2 hover:bg-surface-container rounded transition-colors">${item.title}</a>`));
  };

  // Close menus on path change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
    setIsCartOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="w-full sticky top-0 bg-surface/85 backdrop-blur-md dark:bg-surface-container-lowest/80 border-b border-outline-variant dark:border-outline z-50 transition-all duration-300">
        <nav className="max-w-[1440px] mx-auto px-margin-desktop flex justify-between items-center h-20 md:h-24">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-unit-sm shrink-0">
            <img
              alt="Dr. Ayuba's Corner Brand Identity"
              className="h-10 md:h-12 w-auto object-contain hover:scale-105 transition-transform"
              src="/images/Dr_Abuba_Logo_Full-no_bg.png"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-unit-lg whitespace-nowrap">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative font-label-lg text-label-lg transition-colors py-2 ${
                    isActive
                      ? 'text-primary font-bold dark:text-primary-fixed'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Actions Column */}
          <div className="flex items-center gap-unit-md whitespace-nowrap text-primary dark:text-primary-fixed-dim">
            
            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 hover:bg-surface-container rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-secondary/40"
              aria-label="Search"
            >
              <span className="material-symbols-outlined block text-[24px]">search</span>
            </button>

            {/* Shopping Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 hover:bg-surface-container rounded-full transition-all relative focus:outline-none focus:ring-2 focus:ring-secondary/40"
              aria-label="Shopping Cart"
            >
              <span className="material-symbols-outlined block text-[24px]">shopping_cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Profile User Icon */}
            <Link
              href="/profile"
              className="p-2 hover:bg-surface-container rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-secondary/40"
              aria-label="Profile Account"
            >
              <span className="material-symbols-outlined block text-[24px]">account_circle</span>
            </Link>

            {/* Mobile Nav Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 lg:hidden hover:bg-surface-container rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-secondary/40"
              aria-label="Toggle Menu"
            >
              <span className="material-symbols-outlined block text-[24px]">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>

          </div>
        </nav>
      </header>

      {/* Mobile Sliding Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden flex">
          {/* Overlay background */}
          <div
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-primary/40 backdrop-blur-sm transition-opacity"
          />
          {/* Content Menu Panel */}
          <div className="relative flex flex-col w-4/5 max-w-sm bg-surface p-unit-xl shadow-2xl z-50 h-full animate-fade-in-up">
            <div className="flex items-center justify-between mb-unit-xl border-b border-outline-variant pb-unit-sm">
              <span className="font-display-md text-headline-sm text-primary font-bold">Portal Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 hover:bg-surface-container rounded-full"
              >
                <span className="material-symbols-outlined text-[24px]">close</span>
              </button>
            </div>
            <div className="flex flex-col gap-unit-md overflow-y-auto pr-2">
              <span className="text-[10px] font-bold tracking-widest text-on-surface-variant opacity-60 uppercase mb-2">Portal Switcher</span>
              <div className="grid grid-cols-3 gap-1 mb-6 text-center text-xs">
                <Link
                  href="/"
                  className={`p-2 border rounded ${variant === 'public' ? 'bg-primary-container text-white border-primary-container' : 'border-outline-variant hover:bg-surface-container'}`}
                >
                  Public
                </Link>
                <Link
                  href="/about"
                  className={`p-2 border rounded ${variant === 'academic' ? 'bg-primary-container text-white border-primary-container' : 'border-outline-variant hover:bg-surface-container'}`}
                >
                  Academic
                </Link>
                <Link
                  href="/dashboard"
                  className={`p-2 border rounded ${variant === 'dashboard' ? 'bg-primary-container text-white border-primary-container' : 'border-outline-variant hover:bg-surface-container'}`}
                >
                  Dashboard
                </Link>
              </div>

              <span className="text-[10px] font-bold tracking-widest text-on-surface-variant opacity-60 uppercase mb-2">Navigation Links</span>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block py-3 px-4 rounded font-label-lg text-label-lg transition-all ${
                      isActive
                        ? 'bg-secondary text-white font-bold'
                        : 'text-on-surface-variant hover:bg-surface-container'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Interactive Search Modal Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-unit-md">
          <div
            onClick={() => setIsSearchOpen(false)}
            className="fixed inset-0 bg-primary/45 backdrop-blur-md transition-opacity"
          />
          <div className="relative w-full max-w-2xl bg-surface rounded shadow-2xl p-unit-xl z-50 animate-fade-in-up glass-panel border border-outline-variant/30">
            <div className="flex items-center justify-between mb-unit-md border-b border-outline-variant pb-3">
              <h3 className="font-headline-sm text-headline-sm text-primary">Platform-wide Search</h3>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-1 hover:bg-surface-container rounded-full"
              >
                <span className="material-symbols-outlined text-[24px]">close</span>
              </button>
            </div>
            
            <form onSubmit={handleSearch} className="flex gap-unit-sm">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, research papers, videos..."
                className="flex-1 bg-surface-container border border-outline-variant px-4 py-3 text-body-md text-primary outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/40"
                autoFocus
              />
              <button
                type="submit"
                className="bg-primary text-on-primary px-unit-lg py-3 hover:bg-opacity-90 font-label-lg text-label-lg uppercase tracking-wider"
              >
                Find
              </button>
            </form>

            <div className="mt-unit-lg max-h-[300px] overflow-y-auto space-y-unit-sm">
              {searchResults.length > 0 ? (
                <div>
                  <h4 className="text-xs font-bold text-on-surface-variant uppercase mb-2 tracking-wider">Simulated Results</h4>
                  <div className="space-y-1">
                    {searchResults.map((result, idx) => (
                      <div key={idx} dangerouslySetInnerHTML={{ __html: result }} />
                    ))}
                  </div>
                </div>
              ) : searchQuery ? (
                <p className="text-on-surface-variant text-center py-unit-lg">No simulated matches found. Try typing &quot;Resilience&quot; or &quot;Stoic&quot;.</p>
              ) : (
                <div className="text-center py-unit-lg text-on-surface-variant opacity-60">
                  <p className="text-sm">Type a search term above (e.g. &quot;Wealth&quot; or &quot;Stress&quot;).</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* E-Commerce Cart Slide-out Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Overlay background */}
          <div
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-primary/40 backdrop-blur-sm transition-opacity"
          />
          {/* Drawer Panel */}
          <div className="relative w-full max-w-md bg-surface p-unit-xl shadow-2xl z-50 h-full flex flex-col animate-fade-in-up">
            <div className="flex items-center justify-between mb-unit-xl border-b border-outline-variant pb-unit-sm">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[24px]">shopping_cart</span>
                <span className="font-headline-sm text-headline-sm text-primary font-bold">Shopping Cart</span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1 hover:bg-surface-container rounded-full"
              >
                <span className="material-symbols-outlined text-[24px]">close</span>
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto space-y-unit-md pr-2">
              {cart.length > 0 ? (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-unit-md p-unit-sm border border-outline-variant/50 rounded bg-surface-container-low">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                    ) : (
                      <div className="w-16 h-16 bg-surface-container-high rounded flex items-center justify-center">
                        <span className="material-symbols-outlined text-on-surface-variant">book</span>
                      </div>
                    )}
                    <div className="flex-1">
                      <h4 className="font-label-lg text-label-lg text-primary line-clamp-1">{item.name}</h4>
                      <p className="text-xs text-on-surface-variant">{item.category}</p>
                      <p className="font-bold text-sm text-secondary mt-1">{item.price}</p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-0.5 border border-outline-variant hover:bg-surface-container rounded"
                        >
                          -
                        </button>
                        <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-0.5 border border-outline-variant hover:bg-surface-container rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-error hover:text-opacity-80 self-start"
                      aria-label="Remove item"
                    >
                      <span className="material-symbols-outlined text-[20px]">delete</span>
                    </button>
                  </div>
                ))
              ) : (
                <div className="h-48 flex flex-col items-center justify-center text-on-surface-variant opacity-60">
                  <span className="material-symbols-outlined text-[48px] mb-2">shopping_cart_off</span>
                  <p>Your shopping cart is currently empty.</p>
                </div>
              )}
            </div>

            {/* Cart Summary & Checkout */}
            <div className="border-t border-outline-variant pt-unit-xl mt-unit-xl space-y-unit-md">
              <div className="flex justify-between items-center text-body-lg font-bold text-primary">
                <span>Total:</span>
                <span className="text-secondary font-headline-sm text-headline-sm">${cartTotal.toLocaleString()}</span>
              </div>
              <p className="text-xs text-on-surface-variant">Simulated prices based on academic resources and limited items.</p>
              
              <div className="grid grid-cols-2 gap-unit-sm">
                <Link
                  href="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className={`w-full bg-primary text-on-primary text-center py-4 font-label-lg text-label-lg uppercase tracking-wider hover:bg-opacity-95 ${cart.length === 0 ? 'pointer-events-none opacity-50' : ''}`}
                >
                  Checkout
                </Link>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full border border-outline px-4 text-center py-4 font-label-lg text-label-lg uppercase tracking-wider hover:bg-surface-container-low"
                >
                  Keep Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
