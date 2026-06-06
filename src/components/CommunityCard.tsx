'use client';

import React from 'react';
import CardBase from './CardBase';

export interface CommunityCardProps {
  title: string;
  description: string;
  status: 'active' | 'archived' | string;
  contributorsCount?: number;
  contributorAvatars?: string[];
  href?: string;
  className?: string;
}

export default function CommunityCard({
  title,
  description,
  status,
  contributorsCount,
  contributorAvatars = [],
  href,
  className = '',
}: CommunityCardProps) {
  const isActive = status.toLowerCase() === 'active';

  return (
    <CardBase href={href} className={`group p-unit-md bg-surface-container-low hover:bg-surface-container-high transition-colors cursor-pointer archival-border flex flex-col justify-between ${className}`}>
      <div>
        <div className="flex justify-between items-start mb-4">
          <span className={`px-2 py-1 text-[10px] uppercase font-bold tracking-widest rounded-sm ${
            isActive ? 'bg-secondary text-on-secondary' : 'bg-outline text-white'
          }`}>
            {status}
          </span>
          {contributorsCount !== undefined && (
            <span className="text-[12px] text-on-surface-variant font-label-md">
              {contributorsCount} Contributors
            </span>
          )}
        </div>
        <h3 className="font-headline-sm text-[20px] text-primary mb-2 group-hover:text-secondary transition-colors duration-200">
          {title}
        </h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 leading-relaxed">
          {description}
        </p>
      </div>
      {contributorAvatars.length > 0 && (
        <div className="flex -space-x-2 mt-auto pt-2">
          {contributorAvatars.map((avatar, idx) => (
            <div
              key={idx}
              className="w-8 h-8 rounded-full border-2 border-surface bg-surface-container-high overflow-hidden"
            >
              {avatar ? (
                <img
                  src={avatar}
                  alt={`Contributor ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-surface-container-highest" />
              )}
            </div>
          ))}
        </div>
      )}
    </CardBase>
  );
}
