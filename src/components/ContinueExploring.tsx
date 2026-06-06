'use client';

import React from 'react';
import ArticleCard from './ArticleCard';
import VideoCard from './VideoCard';
import CourseCard from './CourseCard';
import CommunityCard from './CommunityCard';
import MarketplaceCard from './MarketplaceCard';

export interface ContinueExploringItem {
  title: string;
  description?: string;
  href: string;
  type: 'article' | 'video' | 'course' | 'community' | 'marketplace' | 'podcast';
  imageUrl?: string;
  imageAlt?: string;
  categoryOrDiscipline?: string;
  metadata?: string;
  duration?: string;
  price?: string | number;
}

interface ContinueExploringProps {
  title?: string;
  items: ContinueExploringItem[];
}

export default function ContinueExploring({ title = 'Continue Exploring', items }: ContinueExploringProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-unit-xl border-t border-outline-variant/30 mt-unit-2xl">
      <h2 className="font-headline-md text-headline-md text-primary mb-unit-lg">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {items.map((item, idx) => {
          switch (item.type) {
            case 'article':
              return (
                <ArticleCard
                  key={idx}
                  title={item.title}
                  description={item.description}
                  imageUrl={item.imageUrl}
                  imageAlt={item.imageAlt}
                  category={item.categoryOrDiscipline || 'Research'}
                  publishDate={item.metadata}
                  readTime={item.duration}
                  href={item.href}
                />
              );
            case 'video':
            case 'podcast':
              return (
                <VideoCard
                  key={idx}
                  title={item.title}
                  description={item.description}
                  imageUrl={item.imageUrl}
                  imageAlt={item.imageAlt}
                  discipline={item.categoryOrDiscipline || 'Wisdom'}
                  metaLeft={item.metadata}
                  duration={item.duration}
                  href={item.href}
                />
              );
            case 'course':
              return (
                <CourseCard
                  key={idx}
                  title={item.title}
                  description={item.description}
                  imageUrl={item.imageUrl}
                  imageAlt={item.imageAlt}
                  badgeText={item.categoryOrDiscipline || 'Certification'}
                  rating={5.0}
                  duration={item.duration || 'Self-paced'}
                  href={item.href}
                />
              );
            case 'community':
              return (
                <CommunityCard
                  key={idx}
                  title={item.title}
                  description={item.description || ''}
                  status="Active"
                  contributorsCount={6}
                  contributorAvatars={[]}
                  href={item.href}
                />
              );
            case 'marketplace':
              return (
                <MarketplaceCard
                  key={idx}
                  title={item.title}
                  description={item.description}
                  imageUrl={item.imageUrl}
                  imageAlt={item.imageAlt}
                  format={item.categoryOrDiscipline || 'Report'}
                  price={item.price || '$0.00'}
                  href={item.href}
                />
              );
            default:
              return null;
          }
        })}
      </div>
    </section>
  );
}
