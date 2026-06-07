'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { X, Video, Radio, ShoppingBag, Info, ShieldAlert, BookOpen } from 'lucide-react';

interface SheetLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  description: string;
}

const sheetLinks: SheetLink[] = [
  {
    name: 'Videos',
    href: '/video-archive',
    icon: Video,
    description: 'Lecture video recordings and media archives.',
  },
  {
    name: 'Podcast',
    href: '/podcast',
    icon: Radio,
    description: 'Weekly audio discourse and guest interviews.',
  },
  {
    name: 'Marketplace',
    href: '/marketplace',
    icon: ShoppingBag,
    description: 'Purchase publications, seals, and materials.',
  },
  {
    name: 'Library',
    href: '/library',
    icon: BookOpen,
    description: 'Digital archive of research and resources.',
  },
  {
    name: 'About',
    href: '/about',
    icon: Info,
    description: 'Biography and institutional vision.',
  },
  {
    name: 'Contact',
    href: '/partners',
    icon: ShieldAlert,
    description: 'Inquire for B2B strategic alliances.',
  },
];

export default function MoreMenuBottomSheet() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleToggle = () => {
      setIsOpen((prev) => !prev);
    };
    window.addEventListener('toggle-more-menu', handleToggle);
    return () => {
      window.removeEventListener('toggle-more-menu', handleToggle);
    };
  }, []);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="md:hidden fixed inset-0 z-[100] flex flex-col justify-end animate-fade-in-up">
      {/* Backdrop Backdrop Overlay */}
      <div 
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 bg-primary/40 backdrop-blur-sm transition-opacity duration-200"
      />

      {/* Bottom Sheet Menu Card Container */}
      <div className="relative bg-white dark:bg-neutral-900 rounded-t-2xl shadow-2xl p-unit-lg z-50 max-h-[85vh] overflow-y-auto pb-[calc(safe-area-inset-bottom+80px)] transition-transform duration-300 transform translate-y-0 border-t border-neutral-200 dark:border-neutral-800">
        
        {/* Drag handle decoration */}
        <div className="w-12 h-1 bg-neutral-300 dark:bg-neutral-700 rounded-full mx-auto mb-unit-md pointer-events-none" />

        <div className="flex items-center justify-between mb-unit-lg pb-unit-xs border-b border-neutral-100 dark:border-neutral-800">
          <div>
            <h3 className="font-headline-sm text-headline-sm text-primary font-bold">More Options</h3>
            <p className="text-[10px] uppercase tracking-wider text-neutral-400 mt-0.5">Explore the Institution</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full focus:outline-none transition-colors"
            aria-label="Close menu"
          >
            <X size={20} className="text-neutral-500" />
          </button>
        </div>

        {/* Links Grid List */}
        <div className="space-y-3">
          {sheetLinks.map((link, index) => {
            const IconComp = link.icon;
            return (
              <Link
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-unit-md p-unit-md hover:bg-neutral-50 dark:hover:bg-neutral-800/50 rounded-xl border border-neutral-100 dark:border-neutral-800 transition-all active:bg-neutral-100 text-inherit no-underline"
              >
                <div className="w-10 h-10 bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center rounded-lg text-primary text-[#C5A059] shrink-0">
                  <IconComp size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-label-lg text-label-lg text-primary font-bold">{link.name}</p>
                  <p className="text-body-sm text-[11px] text-neutral-400 leading-normal">{link.description}</p>
                </div>
                <span className="material-symbols-outlined text-neutral-300 text-sm">chevron_right</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
