'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Breadcrumbs from './Breadcrumbs';
import Footer from './Footer';

// Dedicated Public Layout
function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-grow flex flex-col">
      <Navbar variant="public" />
      <Breadcrumbs />
      <main className="flex-grow flex flex-col">
        {children}
      </main>
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
