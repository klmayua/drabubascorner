'use client';

import React from 'react';
import CardBase from './CardBase';
import OptimizedImage from './OptimizedImage';

export interface MarketplaceCardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  format: string;
  price: string | number;
  href?: string;
  className?: string;
  onAddToCart?: (e: React.MouseEvent) => void;
}

export default function MarketplaceCard({
  title,
  description,
  imageUrl,
  imageAlt = 'Product cover image',
  format,
  price,
  href,
  className = '',
  onAddToCart,
}: MarketplaceCardProps) {
  const handleAddToCart = (e: React.MouseEvent) => {
    if (onAddToCart) {
      e.preventDefault();
      e.stopPropagation();
      onAddToCart(e);
    }
  };

  const formattedPrice = typeof price === 'number' ? `$${price.toFixed(2)}` : price;

  return (
    <CardBase href={href} className={`group flex flex-col h-full ${className}`}>
      {imageUrl && (
        <div className="aspect-[3/4] bg-surface-variant overflow-hidden shrink-0">
          <OptimizedImage
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-150"
          />
        </div>
      )}
      <div className="p-unit-md flex flex-col flex-grow">
        {format && (
          <span className="text-[10px] font-label-md text-on-surface-variant tracking-widest uppercase mb-1">
            {format}
          </span>
        )}
        <h4 className="font-label-lg text-label-lg text-primary mb-2 group-hover:text-secondary transition-colors duration-200">
          {title}
        </h4>
        {description && (
          <p className="text-body-sm text-on-surface-variant mb-4 line-clamp-2 leading-relaxed">
            {description}
          </p>
        )}
        <div className="mt-auto flex justify-between items-center border-t border-outline-variant/10 pt-3">
          <span className="font-bold text-primary">{formattedPrice}</span>
          <button
            onClick={handleAddToCart}
            className="p-2 text-secondary hover:bg-secondary-container rounded-full transition-colors"
            aria-label="Add to cart"
          >
            <span className="material-symbols-outlined">add_shopping_cart</span>
          </button>
        </div>
      </div>
    </CardBase>
  );
}
