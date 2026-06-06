'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Breadcrumbs from './Breadcrumbs';
import Footer from './Footer';
import MobileBottomNav from './MobileBottomNav';
import MoreMenuBottomSheet from './MoreMenuBottomSheet';
import { Filter } from 'lucide-react';

// Dedicated Public Layout
function PublicLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [hasSidebar, setHasSidebar] = React.useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  React.useEffect(() => {
    setIsSidebarOpen(false);
    
    // Check if an aside element exists on the page
    const checkSidebar = () => {
      const asideEl = document.querySelector('aside');
      setHasSidebar(!!asideEl);
    };

    // Short delay to allow DOM render of current children
    const timer = setTimeout(checkSidebar, 200);
    return () => clearTimeout(timer);
  }, [pathname, children]);

  // Sync drawer-open state class onto the raw aside element
  React.useEffect(() => {
    const asideEl = document.querySelector('aside');
    if (asideEl) {
      if (isSidebarOpen) {
        asideEl.classList.add('drawer-open');
      } else {
        asideEl.classList.remove('drawer-open');
      }
    }
  }, [isSidebarOpen]);

  return (
    <div className="flex-grow flex flex-col min-h-screen bg-background">
      <Navbar variant="public" />
      <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <Breadcrumbs />
      </div>
      <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-[calc(var(--spacing-unit-2xl)+72px)] md:pb-unit-2xl">
        {children}
      </main>

      {hasSidebar && (
        <>
          {/* Floating Action Button for mobile sidebar drawer */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden fixed bottom-24 right-4 z-40 bg-[#0B2341] text-white p-3.5 rounded-full shadow-lg border border-[rgba(255,255,255,0.1)] hover:brightness-110 active:scale-95 transition-all focus:outline-none flex items-center justify-center animate-fade-in-up"
            aria-label="Toggle sidebar drawer"
          >
            <Filter size={20} className="text-[#C5A059]" />
          </button>
          
          {/* Backdrop for dismissals */}
          {isSidebarOpen && (
            <div
              onClick={() => setIsSidebarOpen(false)}
              className="md:hidden fixed inset-0 z-40 bg-primary/40 backdrop-blur-xs transition-opacity duration-200"
            />
          )}
        </>
      )}

      {/* Floating Bottom Nav */}
      <MobileBottomNav />

      {/* Sliding More Options Bottom Sheet */}
      <MoreMenuBottomSheet />

      <Footer />
    </div>
  );
}

// Dedicated Dashboard Layout
function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-grow flex flex-col">
      <Navbar variant="dashboard" />
      <main className="flex-grow flex flex-col">
        {children}
      </main>
    </div>
  );
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Route-based layout detection (centralized here only)
  const isDashboard =
    pathname.startsWith('/dashboard') ||
    pathname.startsWith('/admin') ||
    pathname.startsWith('/members') ||
    pathname.startsWith('/profile');

  if (isDashboard) {
    return <DashboardLayout>{children}</DashboardLayout>;
  }

  return <PublicLayout>{children}</PublicLayout>;
}

