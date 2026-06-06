import React from 'react';
import Link from 'next/link';

interface EmptyStateProps {
  type: 'no-results' | 'loading' | 'empty' | 'coming-soon';
  title?: string;
  description?: string;
  actionHref?: string;
  actionText?: string;
}

export default function EmptyState({
  type,
  title,
  description,
  actionHref,
  actionText,
}: EmptyStateProps) {
  const defaultTitles = {
    'no-results': 'No Matches Found',
    'loading': 'Retrieving Archival Data',
    'empty': 'Section is Currently Empty',
    'coming-soon': 'Scholarly Extension Coming Soon',
  };

  const defaultDescriptions = {
    'no-results': 'We could not find any records matching your search queries. Try adjusting your filters or typing different keywords.',
    'loading': 'Please wait while we establish a secure connection to the institutional repository and load the required resources.',
    'empty': 'No data or records are currently active in this widget directory. Check back later for updates.',
    'coming-soon': 'Our academic faculty is currently compiling research and resources for this section. It will be unlocked in a future dispatch.',
  };

  const activeTitle = title || defaultTitles[type];
  const activeDesc = description || defaultDescriptions[type];

  return (
    <div className="flex flex-col items-center justify-center text-center p-unit-2xl bg-surface-container-low border border-outline-variant/50 rounded-lg max-w-xl mx-auto my-unit-xl premium-shadow animate-fade-in-up">
      
      {/* Icon */}
      <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center text-secondary mb-unit-lg">
        {type === 'loading' && (
          <span className="material-symbols-outlined text-[36px] animate-pulse">sync</span>
        )}
        {type === 'no-results' && (
          <span className="material-symbols-outlined text-[36px]">find_in_page</span>
        )}
        {type === 'empty' && (
          <span className="material-symbols-outlined text-[36px]">folder_off</span>
        )}
        {type === 'coming-soon' && (
          <span className="material-symbols-outlined text-[36px]">lock_clock</span>
        )}
      </div>

      {/* Texts */}
      <h3 className="font-headline-sm text-headline-sm text-primary mb-unit-sm">{activeTitle}</h3>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-md mb-unit-lg leading-relaxed">
        {activeDesc}
      </p>

      {/* Optional Simulated CTA Action */}
      {actionHref && actionText ? (
        <Link
          href={actionHref}
          className="bg-primary text-on-primary px-unit-lg py-3 font-label-lg text-label-lg hover:bg-opacity-95 transition-opacity"
        >
          {actionText}
        </Link>
      ) : type === 'coming-soon' ? (
        <Link
          href="/"
          className="border border-outline text-primary px-unit-lg py-3 font-label-lg text-label-lg hover:bg-surface-container-low transition-colors"
        >
          Return to Dispatch
        </Link>
      ) : null}
      
    </div>
  );
}
