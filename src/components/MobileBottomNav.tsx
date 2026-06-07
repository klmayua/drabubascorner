'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, GraduationCap, Users, Menu } from 'lucide-react';

interface BottomNavItem {
  icon: React.ComponentType<{ className?: string; size?: number }>;
  label: string;
  route?: string;
  action?: 'bottom_sheet';
}

const navItems: BottomNavItem[] = [
  {
    icon: Home,
    label: 'Home',
    route: '/',
  },
  {
    icon: BookOpen,
    label: 'Articles',
    route: '/editorial',
  },
  {
    icon: GraduationCap,
    label: 'Courses',
    route: '/catalog',
  },
  {
    icon: Users,
    label: 'Community',
    route: '/community-networking-hub-desktop-refined',
  },
  {
    icon: Menu,
    label: 'More',
    action: 'bottom_sheet',
  },
];

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [activeRoute, setActiveRoute] = useState('/');

  useEffect(() => {
    setActiveRoute(pathname);
  }, [pathname]);

  const handleAction = (item: BottomNavItem) => {
    if (item.action === 'bottom_sheet') {
      window.dispatchEvent(new Event('toggle-more-menu'));
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 h-[72px] bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-t border-neutral-200 dark:border-neutral-800 z-50 px-4 pb-[env(safe-area-inset-bottom)] transition-all duration-150 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] touch-action-manipulation">
      <nav className="flex justify-between items-center h-full max-w-md mx-auto">
        {navItems.map((item, index) => {
          const IconComponent = item.icon;
          const isRouteActive = item.route && (
            item.route === '/' 
              ? activeRoute === '/' 
              : activeRoute.startsWith(item.route)
          );
          const isActive = isRouteActive;

          const content = (
            <div className="flex flex-col items-center justify-center h-full w-full gap-1 transition-transform active:scale-95">
              <IconComponent 
                className={`transition-colors duration-200 ${isActive ? 'text-[#C5A059]' : 'text-neutral-500'}`} 
                size={22} 
              />
              <span className={`text-[10px] font-semibold tracking-wider transition-colors duration-200 ${isActive ? 'text-[#C5A059]' : 'text-neutral-500'}`}>
                {item.label}
              </span>
            </div>
          );

          if (item.route) {
            return (
              <Link 
                key={index} 
                href={item.route}
                className="flex-1 flex items-center justify-center h-full min-h-[48px] focus:outline-none"
              >
                {content}
              </Link>
            );
          }

            return (
              <button
                key={index}
                onClick={() => handleAction(item)}
                className="flex-1 flex items-center justify-center h-full min-h-[48px] focus:outline-none bg-transparent border-none"
              >
                {content}
              </button>
            );
        })}
      </nav>
    </div>
  );
}
