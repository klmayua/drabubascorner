'use client';

import React from 'react';
import Link from 'next/link';

export interface CardBaseProps extends React.HTMLAttributes<HTMLElement> {
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export default function CardBase({ href, className = '', children, ...props }: CardBaseProps) {
  const baseClasses = 'bg-white border border-outline-variant/30 rounded-xl premium-shadow premium-shadow-hover overflow-hidden flex flex-col w-full h-full text-inherit no-underline';

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${className}`} {...(props as any)}>
        {children}
      </Link>
    );
  }

  return (
    <div className={`${baseClasses} ${className}`} {...props}>
      {children}
    </div>
  );
}
