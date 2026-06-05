'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumbs() {
  const pathname = usePathname();
  if (pathname === '/') return null; // Don't show breadcrumbs on homepage

  const segments = pathname.split('/').filter(Boolean);

  const formatSegment = (str: string) => {
    return str
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <nav className="max-w-[1440px] mx-auto px-margin-desktop pt-6 pb-2 text-xs font-label-md flex items-center gap-2 text-on-surface-variant/70 uppercase tracking-widest shrink-0">
      <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
        <span className="material-symbols-outlined text-[14px]">home</span>
        <span>Home</span>
      </Link>
      
      {segments.map((segment, index) => {
        const url = `/${segments.slice(0, index + 1).join('/')}`;
        const isLast = index === segments.length - 1;
        const displayName = formatSegment(segment);

        return (
          <React.Fragment key={url}>
            <span className="text-on-surface-variant/40">/</span>
            {isLast ? (
              <span className="text-primary font-bold">{displayName}</span>
            ) : (
              <Link href={url} className="hover:text-primary transition-colors">
                {displayName}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
