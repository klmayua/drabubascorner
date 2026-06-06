'use client';

import React from 'react';
import Link from 'next/link';

interface UnifiedPageHeroProps {
  sectionLabel: string;
  pageTitle: string;
  supportingDescription: string;
  primaryAction?: {
    text: string;
    href: string;
  };
}

export default function UnifiedPageHero({
  sectionLabel,
  pageTitle,
  supportingDescription,
  primaryAction,
}: UnifiedPageHeroProps) {
  return (
    <div className="w-full border-b border-outline-variant/30 pb-unit-lg mb-unit-xl mt-6">
      <span className="font-label-lg text-label-lg text-secondary uppercase tracking-[0.25em] mb-3 block">
        {sectionLabel}
      </span>
      <h1 className="font-display-xl text-display-xl text-primary leading-tight">
        {pageTitle}
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mt-4 leading-relaxed">
        {supportingDescription}
      </p>
      {primaryAction && (
        <div className="mt-6">
          <Link
            href={primaryAction.href}
            className="inline-block bg-primary text-on-primary px-8 py-3.5 font-label-lg text-label-lg uppercase tracking-wider hover:bg-opacity-95 transition-opacity"
          >
            {primaryAction.text}
          </Link>
        </div>
      )}
    </div>
  );
}
