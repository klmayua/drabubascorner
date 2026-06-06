'use client';

import React from 'react';
import CardBase from './CardBase';
import OptimizedImage from './OptimizedImage';

export interface CourseCardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  badgeText: string;
  rating?: number;
  duration: string;
  href?: string;
  className?: string;
  onEnrollClick?: (e: React.MouseEvent) => void;
}

export default function CourseCard({
  title,
  description,
  imageUrl,
  imageAlt = 'Course cover',
  badgeText,
  rating,
  duration,
  href,
  className = '',
  onEnrollClick,
}: CourseCardProps) {
  const handleEnroll = (e: React.MouseEvent) => {
    if (onEnrollClick) {
      e.preventDefault();
      e.stopPropagation();
      onEnrollClick(e);
    }
  };

  return (
    <CardBase href={href} className={`group cursor-pointer flex flex-col h-full relative ${className}`}>
      {imageUrl && (
        <div className="relative overflow-hidden aspect-[16/9] bg-surface-container shrink-0">
          <OptimizedImage
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-150"
          />
        </div>
      )}
      <div className="p-unit-lg flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-unit-sm">
          {badgeText && (
            <span className="font-label-md text-label-md text-secondary tracking-widest uppercase">
              {badgeText}
            </span>
          )}
          {rating !== undefined && (
            <span className="flex items-center gap-1 font-label-md text-label-md text-on-tertiary-container">
              <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>{' '}
              {rating.toFixed(1)}
            </span>
          )}
        </div>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-unit-md group-hover:text-secondary transition-colors duration-200">
          {title}
        </h3>
        {description && (
          <p className="font-body-md text-body-md text-on-surface-variant mb-unit-lg line-clamp-2">
            {description}
          </p>
        )}
        <div className="mt-auto pt-unit-md border-t border-outline-variant/10 flex justify-between items-center">
          <div className="flex items-center gap-unit-sm text-on-surface-variant">
            <span className="material-symbols-outlined text-primary-container">
              history_edu
            </span>
            <span className="font-label-lg text-label-lg">{duration}</span>
          </div>
          <button
            onClick={handleEnroll}
            className="bg-primary text-on-primary px-unit-lg py-2 font-label-lg text-label-lg hover:bg-primary-container transition-all"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </CardBase>
  );
}
