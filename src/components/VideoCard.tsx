'use client';

import React from 'react';
import CardBase from './CardBase';
import OptimizedImage from './OptimizedImage';

export interface VideoCardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  discipline: string;
  metaLeft?: string;
  duration?: string;
  href?: string;
  className?: string;
}

export default function VideoCard({
  title,
  description,
  imageUrl,
  imageAlt = 'Video thumbnail',
  discipline,
  metaLeft,
  duration,
  href,
  className = '',
}: VideoCardProps) {
  // Map discipline classes if needed, or default to secondary
  const getDisciplineClass = (tag: string) => {
    const cleanTag = tag.toLowerCase();
    if (cleanTag.includes('health')) return 'text-secondary border-secondary';
    if (cleanTag.includes('wealth')) return 'text-primary border-primary';
    return 'text-tertiary-fixed-dim border-tertiary-fixed-dim';
  };

  return (
    <CardBase href={href} className={`group cursor-pointer ${className}`}>
      {imageUrl && (
        <div className="relative overflow-hidden aspect-video bg-surface-container shrink-0">
          <OptimizedImage
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-150"
          />
          <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/45 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-150">
            <span className="material-symbols-outlined text-white text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              play_circle
            </span>
          </div>
        </div>
      )}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {discipline && (
            <span className={`inline-block border px-2.5 py-0.5 text-xs font-label-md uppercase tracking-wider mb-3 ${getDisciplineClass(discipline)}`}>
              {discipline}
            </span>
          )}
          <h3 className="font-headline-sm text-headline-sm text-primary mb-3 leading-snug group-hover:text-secondary transition-colors duration-200">
            {title}
          </h3>
          {description && (
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 line-clamp-2">
              {description}
            </p>
          )}
        </div>
        {(metaLeft || duration) && (
          <div className="flex justify-between items-center text-on-surface-variant font-label-md text-label-md border-t border-outline-variant/10 pt-3 mt-auto">
            {metaLeft && <span>{metaLeft}</span>}
            {duration && <span className="italic">{duration}</span>}
          </div>
        )}
      </div>
    </CardBase>
  );
}
