'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { Search, ShoppingBag, CircleUser, Menu, X, BookOpen, Delete } from 'lucide-react';

import { PUBLIC_LINKS, DASHBOARD_LINKS, ACTIVE_STATE_MAPPING } from '@/config/navigation.config';

export default function Navbar({ variant: propVariant }: { variant?: 'public' | 'dashboard' }) {
  const pathname = usePathname();
  const { cartCount, toggleWishlist } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  const variant = propVariant || (
    pathname.startsWith('/dashboard') ||
    pathname.startsWith('/admin') ||
    pathname.startsWith('/members') ||
    pathname.startsWith('/profile') ? 'dashboard' : 'public'
  );
  const navLinks = variant === 'dashboard' ? DASHBOARD_LINKS : PUBLIC_LINKS;

  const getIsActive = (link: { name: string; href: string }) => {
    const normalizedPath = pathname.toLowerCase();
    
    // 1. Direct path check matching active state mapping rules
    const activeName = ACTIVE_STATE_MAPPING[normalizedPath];
    if (activeName) {
      return link.name.toLowerCase() === activeName.toLowerCase();
    }
    
    // 2. Fallback direct match
    return normalizedPath === link.href.toLowerCase();
  };

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
      <style>{`
        /* Navigation Link States (Antigravity Brand Alignment) */
        .desktop-nav-link {
          color: #222222 !important;
          font-weight: 500 !important;
          font-family: var(--font-inter), sans-serif !important;
          background-color: transparent !important;
          transition: color 180ms ease-out, font-weight 180ms ease-out;
        }
        
        .desktop-nav-link:hover,
        .desktop-nav-link.active {
          color: #0B1D3A !important;
          font-weight: 600 !important;
        }
        
        .desktop-nav-link .underline-indicator {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          background-color: #C79A2E;
          border-radius: 9999px;
          width: 0;
          transition: width 180ms ease-out;
        }
        
        .desktop-nav-link.active .underline-indicator,
        .desktop-nav-link:hover .underline-indicator {
          width: 100% !important;
        }
      `}</style>
      <header className="w-full sticky top-0 bg-surface border-b border-neutral-200 z-50 transition-all duration-150">
        <nav className="max-w-[1440px] mx-auto px-margin-desktop flex justify-between items-center h-24 lg:h-24">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-unit-sm shrink-0">
            <img
              alt="Dr. Ayuba's Corner Brand Identity"
              className="h-16 lg:h-20 w-auto object-contain"
              src="/images/Dr_Abuba_Logo_Full-no_bg.png"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-10 whitespace-nowrap">
            {navLinks.map((link) => {
              const isActive = getIsActive(link);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative block py-2 text-[15px] desktop-nav-link ${isActive ? 'active' : ''}`}
                >
                  {link.name}
                  <span className="underline-indicator" />
                </a>
              );
            })}
          </div>

          {/* Actions Column */}
          <div className="flex items-center gap-6 lg:gap-8 whitespace-nowrap">
            
            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hidden md:inline-block p-2 transition-colors duration-200 focus:outline-none"
              aria-label="Search"
              style={{ color: '#1F1F1F' }}
            >
              <Search size={20} strokeWidth={1.75} />
            </button>

            {/* Contact Link */}
            <Link
              href="/partners"
              className="hidden md:inline-block p-2 transition-colors duration-200 focus:outline-none font-label-lg text-label-lg text-primary hover:text-secondary"
              aria-label="Contact"
            >
              Contact
            </Link>

            {/* Mobile CTA */}
            <Link
              href="/newsletter"
              className="lg:hidden bg-primary text-on-primary px-4 py-2 text-xs font-label-lg uppercase tracking-wider rounded-none hover:bg-opacity-90 transition-all"
            >
              Join Now
            </Link>
          </div>
        </nav>
      </header>

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
                <X size={24} />
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
    </>
  );
}
