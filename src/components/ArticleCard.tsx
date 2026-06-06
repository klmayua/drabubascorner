'use client';

import React from 'react';
import CardBase from './CardBase';
import OptimizedImage from './OptimizedImage';

export interface ArticleCardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  category: string;
  publishDate?: string;
  readTime?: string;
  href?: string;
  className?: string;
}

export default function ArticleCard({
  title,
  description,
  imageUrl,
  imageAlt = 'Article cover image',
  category,
  publishDate,
  readTime,
  href,
  className = '',
}: ArticleCardProps) {
  return (
    <CardBase href={href} className={`group cursor-pointer ${className}`}>
      {imageUrl && (
        <div className="relative overflow-hidden aspect-[16/9] bg-surface-container shrink-0">
          <OptimizedImage
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-150"
          />
          {category && (
            <div className="absolute top-4 left-4 bg-primary text-on-primary font-label-lg text-label-lg px-unit-md py-1 uppercase tracking-wider">
              {category}
            </div>
          )}
        </div>
      )}
      <div className="p-unit-lg flex-1 flex flex-col justify-between">
        <div className="space-y-unit-sm mb-4">
          <div className="flex items-center gap-unit-sm text-on-surface-variant font-label-md text-label-md uppercase tracking-wider">
            {publishDate && <span>{publishDate}</span>}
            {publishDate && readTime && <span className="w-1 h-1 bg-outline-variant rounded-full"></span>}
            {readTime && <span>{readTime}</span>}
          </div>
          <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors duration-200">
            {title}
          </h3>
          {description && (
            <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </CardBase>
  );
}
